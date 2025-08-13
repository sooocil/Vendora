"use client"

import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { VerificationBanner } from "./VerificationBanner";
import { useQuery } from "@tanstack/react-query";
import { getVendorByVendorId } from "@/lib/actions/vendor/GetVendorByVendorId";

interface VendorVerificationProps {
  vendorId: string;
}

export function VendorVerification({ vendorId }: VendorVerificationProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['vendor', vendorId],
    queryFn: () => getVendorByVendorId(vendorId),
  });

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!isLoading && data) {
      setShowBanner(true);
    }
  }, [isLoading, data]);

  if (error) {
    console.error("Vendor fetch error:", error);
    return (
      <div className="m-4 text-red-500">Error: Failed to fetch vendor data</div>
    );
  }

  const isVerified = data?.data?.isVerified ?? false;

  return (
    <div className="m-4">
      {isLoading ? (
        <Skeleton className="h-16 w-full rounded-md" />
      ) : (
        <div
          className={`transition-all duration-500 ease-in-out transform ${
            showBanner ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <VerificationBanner vendorId={vendorId} isVerified={isVerified} />
        </div>
      )}
    </div>
  );
}
