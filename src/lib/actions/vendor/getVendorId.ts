"use server"

import { cookies } from "next/headers"
import { getSessionById } from "@/lib/auth/session"

export async function getVendorId(): Promise<string | null> {
  const cookieStore = cookies()
  const sessionId = (await cookieStore).get("session")?.value

  if (!sessionId) return null

  const session = await getSessionById(sessionId)
  if (!session) return null

  return session.userId;
}
