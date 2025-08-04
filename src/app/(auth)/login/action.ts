import { redirect } from 'next/navigation'
import { z } from 'zod'
import bcrypt from 'bcrypt'
import { db } from '@/lib/auth/db'
import { cookies } from 'next/headers'
import { createSession } from '@/lib/auth/session'

'use server'


const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

export async function login(formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { email, password } = validatedFields.data
  
  try {
    const user = await db.user.findUnique({
      where: { email },
    })

    if (!user || !user.password) {
      return {
        error: {
          email: ['Invalid email or password'],
        },
      }
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return {
        error: {
          email: ['Invalid email or password'],
        },
      }
    }

    const session = await createSession(user.id);

    await createSession(user.id);

    return { success: true }
  } catch (error) {
    console.error('Login error:', error)
    return {
      error: {
        server: ['Something went wrong, please try again later.'],
      },
    }
  }
}