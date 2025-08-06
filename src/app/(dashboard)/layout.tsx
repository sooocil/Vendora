import type React from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Toaster } from "sonner"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const userRole = "VENDOR" as "VENDOR" | "ADMIN" 
  const vendorId = "vendor-1" 
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar userRole={userRole} vendorId={vendorId} />
      <main className="flex-1 overflow-auto">{children}</main>
      <Toaster position="top-right" />
    </div>
  )
}
