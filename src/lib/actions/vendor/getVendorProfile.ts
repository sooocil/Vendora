"use server";

import { getSession } from "@/lib/auth/session";
import { getVendorByVendorId } from "@/lib/actions/vendor/GetVendorByVendorId";
import { vendor as VendorType } from "@/types/types";

interface VendorProfileResult {
  success: boolean;
  data?: VendorType;
  error?: string;
}

export async function getVendorProfile(): Promise<VendorProfileResult> {
  const session = await getSession();
  if (!session || !session.userId) {
    return {
      success: false,
      error: "Unauthorized"
    };
  }
  
  const result = await getVendorByVendorId(session.userId);
  if (!result.data) {
    return {
      success: false,
      error: "Vendor not found"
    };
  }

  return {
    success: true,
    data: result.data
  };
}