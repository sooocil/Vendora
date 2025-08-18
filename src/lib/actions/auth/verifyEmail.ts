"use server";

import { db } from "@/lib/auth/db";
import { redirect } from "next/navigation";

export async function verifyEmailAction(token: string) {
  if (!token) redirect("/login");

  const record = await db.registrationEmail.findUnique({
    where: { token },
  });

  if (!record) redirect("/login?error=invalid-token");

  await db.user.update({
    where: { id: record.userId },
    data: { isEmailVerified: true },
  });

  await db.registrationEmail.delete({
    where: { id: record.id },
  });

  redirect("/dashboard/vendor");
}
