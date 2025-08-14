"use server";

import { db } from "@/lib/auth/db";

export async function checkStoreNameAvailability(storeName: string): Promise<{ available: boolean }> {
  if (!storeName) return { available: false };

  const existingStore = await db.user.findFirst({
    where: {
      storeName,
    },
  });

  return { available: !existingStore };
}

