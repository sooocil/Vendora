"use server";

import { z } from "zod";
import { db } from "@/lib/auth/db";
import { createSession } from "@/lib/auth/session";
import { cookies } from "next/headers";

const schema = z.object({
  email: z.string().email(),
  storeName: z.string().min(1, "Store name is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export async function register(formData: FormData) {
  await db.$connect();

  const rawData = {
    email: formData.get("email")?.toString().trim() || "",
    storeName: formData.get("storeName")?.toString().trim() || "",
    password: formData.get("password")?.toString().trim() || "",
  };

  const parsed = schema.safeParse(rawData);

  if (!parsed.success) {
    return {
      error: parsed.error.issues.map(issue => issue.message).join(", "),
      status: 400,
      data: null,
    };
  }

  const { email, storeName, password } = parsed.data;

  try {
    const user = await db.user.create({
      data: { email, storeName, password },
    });

    const token = await createSession(user.id);
    if (!token) {
      return {
        error: "Failed to create session",
        status: 500,
        data: null,
      };
    }

    const cookieStore = cookies();
    cookieStore.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60,
    });

    return {
      error: null,
      status: 200,
      data: user,
    };

  } catch (err) {
    console.error("Registration error:", err);
    return {
      error: "Internal server error",
      status: 500,
      data: null,
    };
  }
}
