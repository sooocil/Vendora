import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

interface VerificationBannerProps {
  isVerified: boolean;
}

export function VerificationBanner({ isVerified }: VerificationBannerProps) {
  if (isVerified) return null;

  return (
    <Alert variant="destructive" className="m-4 shadow-lg">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Not Verified</AlertTitle>
      <AlertDescription>
        You are not verified yet for making your store.{" "}
        <Link href="/profile/complete" className="underline">
          Complete profile
        </Link>{" "}
        to get verified.
      </AlertDescription>
    </Alert>
  );
}