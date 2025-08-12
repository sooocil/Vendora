"use server";

import { z } from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/auth/db";
import { createSession } from "@/lib/auth/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginVendor(formData: FormData): Promise<void> {
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  const schema = z.object({
    email: z.email(),
    password: z.string().min(6),
  });

  const parsed = schema.safeParse({ email, password });
  if (!parsed.success) {
    throw new Error(parsed.error.issues.map(i => i.message).join(", "));
  }

  const user = await db.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const passwordMatches = await bcrypt.compare(password, user.password);
  if (!passwordMatches) {
    throw new Error("Invalid email or password");
  }

  const token = await createSession(user.id);
  if (!token) {
    throw new Error("Failed to create session");
  }

  (await cookies()).set("session", token.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  redirect(`/vendor/${user.id}`);
}
