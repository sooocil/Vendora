"use server";

import z from "zod";
import { db } from "@/lib/auth/db";

export async function getVendorByVendorId(vendorId: string): Promise<{
  data: any | null;
  error: string | null;
}> {
  try {
    // Validate input
    if (!vendorId) {
      return { data: null, error: "Vendor ID is required" };
    }

    const vendorSchema = z.object({
      id: z.string(),
      fullName: z.string().nullable(),
      username: z.string(),
      email: z.string(),
      panNo: z.string().nullable(),
      storeName: z.string().nullable(),
      citizenshipNo: z.string().nullable(),
      location: z.string().nullable(),
      isVerified: z.boolean(),
      isPaid: z.boolean(),
      trialStart: z.date().nullable(),
      trialEnd: z.date().nullable(),
      subscriptionId: z.string().nullable(),
      subscriptionPlan: z.enum(["BASE", "PLUS", "PRO"]).nullable(),
      password: z.string(),
      createdAt: z.date(),
      updatedAt: z.date(),
    });

    const vendor = await db.user.findUnique({
      where: { id: vendorId },
      select: {
        id: true,
        fullName: true,
        username: true,
        email: true,
        panNo: true,
        storeName: true,
        citizenshipNo: true,
        location: true,
        isVerified: true,
        isPaid: true,
        trialStart: true,
        trialEnd: true,
        subscriptionId: true,
        subscriptionPlan: true,
        password: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!vendor) {
      return { data: null, error: "Vendor not found" };
    }

    const parsedVendor = vendorSchema.safeParse(vendor);
    if (!parsedVendor.success) {
      console.error("Schema validation error:", parsedVendor.error);
      return { data: null, error: "Invalid vendor data format" };
    }

    return { data: parsedVendor.data, error: null };
  } catch (error) {
    console.error("Error fetching vendor:", error);
    return { data: null, error: "Failed to fetch vendor" };
  }
}