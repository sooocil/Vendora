import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

export async function createSession(userId: string): Promise<{ id: string }> {
  const token = jwt.sign({ userId }, JWT_SECRET as string, {
    expiresIn: '7d',
  });

  await (await cookies()).set('session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });

  return { id: token };
}

export async function getSession(): Promise<{ userId: string } | null> {
  const sessionCookie = await (await cookies()).get('session');

  if (!sessionCookie) {
    return null;
  }

  try {
    const payload = jwt.verify(sessionCookie.value, JWT_SECRET as string) as { userId: string };
    return payload;
  } catch {
    return null;
  }
}

export async function destroySession(): Promise<void> {
  await (await cookies()).delete('session');
}