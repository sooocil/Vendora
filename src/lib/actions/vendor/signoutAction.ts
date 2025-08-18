"use server"

import { cookies } from "next/headers"

export async function signOutVendor() {

  (await cookies()).delete("vendor_session");

  return { success: true };
}