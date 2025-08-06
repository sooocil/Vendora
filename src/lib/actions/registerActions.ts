"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { db } from "@/lib/auth/db";
import { createSession } from "@/lib/auth/session";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";

type ActionState = {
  error: string | null;
  status: number;
};

export async function register( formData: FormData) {
  const email = formData.get("email")?.toString().trim() || "";
  const storeName = formData.get("storeName")?.toString().trim() || "";
  const password = formData.get("password")?.toString().trim() || "";
  const confirmPassword = formData.get("confirmPassword")?.toString().trim() || "";
  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match",
      status: 400,
    };
  }


  const schema = z.object({
    email: z.string().email(),
    storeName: z.string().min(1),
    password: z.string().min(6),
  });

  const parsed = schema.safeParse({ email, storeName, password });
  if (!parsed.success) {
    return {
      error: parsed.error.issues.map((issue) => issue.message).join(", "),
      status: 400,
    };
  }

  const hashedPassword = await bcrypt.hash(parsed.data.password, 10);

  const user = await db.user.create({
    data: {
      email: parsed.data.email,
      storeName: parsed.data.storeName,
      password: hashedPassword,
    },
  });

  const token = await createSession(user.id);

  (await cookies()).set("session", JSON.stringify(token), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });

  // redirect("/dashboard/");
}
