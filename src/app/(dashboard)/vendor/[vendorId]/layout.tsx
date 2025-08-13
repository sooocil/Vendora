import type React from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Toaster } from "sonner";
import { VerificationBanner } from "@/components/dashboard/VerificationBanner";
import { getVendorByVendorId } from "@/lib/actions/vendor/GetVendorByVendorId";

interface DashboardPageProps {
  params: Promise<{ vendorId: string }>;
  children: React.ReactNode;
}



export default async function DashboardLayout({
  children,
  params,
}: DashboardPageProps) {
  const { vendorId } = await params;
  const userRole = "VENDOR" as "VENDOR" | "ADMIN";

  let isVerified = true;
  try {
    const { data, error } = await getVendorByVendorId(vendorId);
    if (error) {
      console.error("Vendor fetch error:", error);
    } else if (data) {
      isVerified = data.isVerified;
      console.log("Vendor verification status:", isVerified);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }

  console.log("Vendor Id From Dashboard :", vendorId);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar userRole={userRole} vendorId={vendorId} />
      <VerificationBanner isVerified={isVerified} />
      <main className="flex-1 overflow-auto">{children}</main>
      <Toaster position="top-right" />
    </div>
  );
}
