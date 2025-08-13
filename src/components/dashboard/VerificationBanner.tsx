"use client"

import { AlertCircle, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState, use } from "react"

interface VerificationBannerProps {
  vendorId: string
  isVerified: boolean
  vendorName?: string
}

export function VerificationBanner({ vendorId, isVerified, vendorName }: VerificationBannerProps) {
  const [isDismissed, setIsDismissed] = useState(false)

  if (isVerified || isDismissed) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className=" mb-8 relative"
    >
      <div className="bg-gradient-to-r from-indigo-50 to-red-100 border border-indigo-200 rounded-lg p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-indigo-600 mt-0.5" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 align-middle">
              <h3 className="text-lg font-semibold text-indigo-800">Account Verification Required</h3>
              <div className="px-2 py-0.5 bg-indigo-100 text-red-700 text-sm font-medium rounded-full">Pending</div>
            </div>

            <p className="text-md text-indigo-700 leading-relaxed">
              Complete your profile verification to unlock all store features and start selling your products.
            </p>

            <div className="flex items-center gap-3 mt-3">
              <Link href="/dashboard/vendor/profile/complete">
                <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
                  Complete Verification
                </Button>
              </Link>

              <Link href={`/vendor/${vendorId}/help/verification`} className="text-xs text-indigo-600 hover:text-indigo-800 underline">
                Learn more
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsDismissed(true)}
            className="flex-shrink-0 p-1 text-indigo-400 hover:text-indigo-600 transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
