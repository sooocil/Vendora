"use server";

import { db } from "@/lib/auth/db";
import { sendVerificationEmail } from "./EmailVerification";
import { randomUUID } from "crypto";

export async function createAndSendVerification(userId: string, email: string) {
  const existing = await db.registrationEmail.findFirst({
    where: { userId, email },
    orderBy: { createdAt: "desc" },
  });

  if (existing) {
    await db.registrationEmail.delete({ where: { id: existing.id } });
  }

  const token = randomUUID();

  await db.registrationEmail.create({
    data: {
      userId,
      email,
      token,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60), // 1 hour
    },
  });

  await sendVerificationEmail(email, token);

  return token;
}
