"use client";
import React from "react";
import { usePathname } from "next/navigation";
import DashboardLayout from "@/components/vendor/dashboardLayout";

export default function VendorDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      <DashboardLayout />
      <div className="flex-1 overflow-auto">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
