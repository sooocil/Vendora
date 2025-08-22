"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { LogOut } from "lucide-react";
import { signOutVendor } from "@/lib/actions/vendor/signoutAction";
import { useRouter } from "next/navigation";

interface SignoutConfirmProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SignoutConfirm({ open, onOpenChange }: SignoutConfirmProps) {
  const router = useRouter();

  const handleSignout = async () => {
    const res = await signOutVendor();
    if (res.success) {
      router.push("/");
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 text-red-600">
            <LogOut size={20} />
            Sign Out
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to sign out? You’ll need to log back in to access your account.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => onOpenChange(false)}>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleSignout}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Sign Out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
