"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { vendor as VendorType } from "@/types/types";
import { getVendorProfile } from "@/lib/actions/vendor/getVendorProfile";
import { signOutVendor } from "@/lib/actions/vendor/signoutAction";

export default function HomeNavProfileDropdown() {
  const [vendor, setVendor] = useState<VendorType | null>(null);
  const [loading, setLoading] = useState(true);
  const [vendorId, setVendorId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVendorData() {
      try {
        const vendorData = await getVendorProfile();
        setVendor(vendorData.data || null);
        setVendorId(vendorData.data?.id || null);
      } catch (error) {
        console.error("Failed to fetch vendor session:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchVendorData();
  }, []);

  function handleSignout() {
    signOutVendor();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  if (loading) {
    return (
      <>
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 py-1">
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </>
    );
  }

  if (!vendor) {
    return (
      <div className="flex items-center space-x-4">
        <Button variant="ghost" asChild>
          <Link href="/login">Sign In</Link>
        </Button>
        <Button
          asChild
          className="bg-gradient-to-r from-indigo-600 to-purple-600"
        >
          <Link href="/register">Get Started</Link>
        </Button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="w-10 h-10 rounded-full overflow-hidden border hover:ring-2 ring-teal-500 transition">
          {vendor.profileImage ? (
            <Image
              src={vendor.profileImage}
              alt={vendor.fullName || "User profile"}
              width={40}
              height={40}
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-800 flex items-center justify-center shadow-2xl">
              <User className="w-5 h-5 text-white" />
            </div>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>{vendor.fullName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/vendor/${vendorId}/`}>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Button
            onClick={handleSignout}
            type="submit"
            className="bg-red-500 w-full text-left"
          >
            Signout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
