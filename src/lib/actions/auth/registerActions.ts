"use server";

import { string, z } from "zod";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { db } from "@/lib/auth/db";
import { cookies } from "next/headers";

interface RegisterResult {
  success: boolean;
  error?: string;
}

export async function registerVendor(formData: FormData): Promise<RegisterResult> {
  const email = formData.get("email")?.toString() || "";
  const storeName = formData.get("storeName")?.toString() || undefined;
  const password = formData.get("password")?.toString() || "";
  const confirmPassword = formData.get("confirmPassword")?.toString() || "";

  const schema = z.object({
    email: z.string().email(),
    storeName: z.string().optional(),
    password: z.string().min(6),
    confirmPassword: z.string(),
  }).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

  const parsed = schema.safeParse({ email, storeName, password, confirmPassword });
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues.map(i => i.message).join(", ") };
  }

  const existingUser = await db.user.findUnique({ where: { email } });
  if (existingUser) {
    return { success: false, error: "Email already registered" };
  }

  if (storeName) {
    const existingStore = await db.user.findFirst({ where: { storeName } });
    if (existingStore) {
      return { success: false, error: "Store Name is not available" };
    }
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await db.user.create({
    data: {
      email,
      username: email.split("@")[0],
      storeName,
      password: hashedPassword,
      isVerified: false,
    },
  });

  const token = await db.session.create({
    data: {
      token: crypto.randomUUID(),
      userId: user.id,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    },
  });

  (await cookies()).set("session", token.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });

  return { success: true };
}
