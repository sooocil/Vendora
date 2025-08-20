"use server";

import { getSession } from "@/lib/auth/session";
import { getVendorByVendorId } from "@/lib/actions/vendor/GetVendorByVendorId";
import { vendor as VendorType } from "@/types/types";

export async function getVendorProfile(): Promise<VendorType | null> {
  const session = await getSession();
  if (!session || !session.userId) {
    return null;
  }
  
  const result = await getVendorByVendorId(session.userId);
  return result.data;
}