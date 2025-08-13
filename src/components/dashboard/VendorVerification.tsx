'use client';

import { useQuery } from '@tanstack/react-query';
import { VerificationBanner } from '@/components/dashboard/VerificationBanner';
import { getVendorByVendorId } from '@/lib/actions/vendor/GetVendorByVendorId';

interface VendorVerificationProps {
  vendorId: string;
}

export function VendorVerification({ vendorId }: VendorVerificationProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['vendor', vendorId],
    queryFn: () => getVendorByVendorId(vendorId),
  });

  if (isLoading) {
    return <div className="m-4">Loading verification status...</div>;
  }

  if (error) {
    console.error("Vendor fetch error:", error);
    return (
      <div className="m-4 text-red-500">Error: Failed to fetch vendor data</div>
    );
  }

  const isVerified = data?.data?.isVerified ?? false;

  return <VerificationBanner isVerified={isVerified} />;
}