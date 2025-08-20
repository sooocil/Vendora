"use server";

import { db } from "@/lib/auth/db";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import { randomUUID } from "crypto";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function generateVerificationToken(userId: string) {
  return randomUUID();
}


export async function sendVerificationEmail(email: string, token: string) {
  try {
    const verificationLink = `http://localhost:3000/?token=${token}`;


    await resend.emails.send({
      from: "Vendora <example@resend.dev>",
      to: email,
      subject: "Verify your Vendora account",
      html: `
        <div style="font-family:sans-serif;line-height:1.5">
          <h2>Welcome to Vendora 👋 ${email.split("@")[0]}</h2>
          <p>Please verify your email by clicking the button below:</p>
          <a href="${verificationLink}" style="background:#00AD9B;color:white;padding:10px 16px;border-radius:6px;text-decoration:none;display:inline-block;">
            Verify Email
          </a>
          
        </div>
      `,
    });
  } catch (err) {
    console.error("Failed to send verification email:", err);
    throw new Error("Unable to send verification email.");
  }
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const token = url.searchParams.get("token");

    if (!token) return redirect("/login");

    const record = await db.registrationEmail.findUnique({
      where: { token },
    });

    if (!record) return redirect("/login?error=invalid-token");

    await db.user.update({
      where: { id: record.userId },
      data: { isVerified: true },
    });

    await db.registrationEmail.delete({
      where: { id: record.id },
    });

    return redirect("/dashboard/vendor");
  } catch (err) {
    console.error("Email verification error:", err);
    return redirect("/login?error=verification-failed");
  }
}
