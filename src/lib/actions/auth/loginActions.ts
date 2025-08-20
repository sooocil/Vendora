"use server";

import { z } from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/auth/db";
import { createSession } from "@/lib/auth/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createAndSendVerification } from "./LoginEmailVerification";

interface LoginResult {
  success: boolean;
  error?: string;
}

export async function login(formData: FormData): Promise<LoginResult> {
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const parsed = schema.safeParse({ email, password });
  if (!parsed.success) {
    return { success: false, error: "Enter valid email and password" };
  }

  const user = await db.user.findUnique({ where: { email } });
  if (!user) return { success: false, error: "Invalid email or password" };

  if (!user.isEmailVerified) {
    await createAndSendVerification(user.id, user.email);
    return {
      success: false,
      error: "Email not verified, please verify your email address",
    };
  }

  const passwordMatches = await bcrypt.compare(password, user.password);
  if (!passwordMatches) {
    return { success: false, error: "Invalid email or password" };
  }

  const token = await createSession(user.id);
  if (!token) return { success: false, error: "Failed to create session" };

  (await cookies()).set("vendor_session", token.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60,
  });

  redirect(`/vendor/${user.id}`);
}
