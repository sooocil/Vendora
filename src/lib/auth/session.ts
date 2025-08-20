import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;
if (!JWT_SECRET) throw new Error('JWT_SECRET not defined');

export async function createSession(userId: string) {
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });

  await (await cookies()).set('vendor_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60,
  });

  return { id: token };
}

export async function getSession() {
  const sessionCookie = await (await cookies()).get('vendor_session');
  if (!sessionCookie) return null;

  try {
    const payload = jwt.verify(sessionCookie.value, JWT_SECRET) as { userId: string };
    return payload; 
  } catch {
    return null;
  }
}

export async function destroySession() {
  await (await cookies()).delete('vendor_session');
}
