'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'
import bcrypt from 'bcrypt'
import { db } from '@/lib/auth/db'


const registerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export async function register(formData: FormData) {
  const validatedFields = registerSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, password } = validatedFields.data
  
  try {
    const existingUser = await db.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return {
        error: {
          email: ['User with this email already exists'],
        },
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    return { success: true }
  } catch (error) {
    console.error('Registration error:', error)
    return {
      error: {
        server: ['Something went wrong, please try again later.'],
      },
    }
  }
}
