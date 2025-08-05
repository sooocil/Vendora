'use server';

import { z } from 'zod';
import bcrypt from 'bcrypt';
import { db } from '@/lib/auth/db';
import { createSession } from '@/lib/auth/session';
import { cookies } from 'next/headers'; 
import { redirect } from 'next/navigation';

const schema = z.object({
  email: z.string().email('Invalid email address'),
  storeName: z.string().min(1, 'Store name is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export async function register(formData: FormData) {
  const rawData = {
    email: formData.get('email')?.toString().trim() || '',
    storeName: formData.get('storeName')?.toString().trim() || '',
    password: formData.get('password')?.toString().trim() || '',
  };

  const parsed = schema.safeParse(rawData);

  if (!parsed.success) {
    return {
      error: parsed.error.flatten().fieldErrors,
      status: 400,
    };
  }

  const { email, storeName, password } = parsed.data;

  try {
    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        error: { email: ['Email already in use'] },
        status: 400,
      };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await db.user.create({
      data: {
        email,
        storeName,
        password: hashedPassword,
      },
    });

    // Create session
    const session = await createSession(user.id);

    // Set session cookie
    (await cookies()).set('session', session.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    });

    redirect('/dashboard');
  } catch (err) {
    console.error('Registration error:', err);
    return {
      error: { server: ['Something went wrong, please try again later'] },
      status: 500,
    };
  }
}