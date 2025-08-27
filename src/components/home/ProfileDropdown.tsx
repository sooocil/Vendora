"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { Home, LogOut, User } from "lucide-react";
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
  const {
    data: vendor,
    isLoading,
    error,
  } = useQuery<VendorType | null>({
    queryKey: ["vendorProfile"],
    queryFn: async () => {
      const response = await getVendorProfile();
      return response.data || null;
    },
    retry: 2,
    staleTime: 5 * 60 * 1000, 
  });

  const handleSignout = async () => {
    await signOutVendor();
    window.location.reload();
  };

  if (isLoading) {
    return (
      <div className="animate-pulse flex space-x-4">
        <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center space-x-4">
        <Button variant="ghost" asChild>
          <Link href="/login">Sign In</Link>
        </Button>
        <Button
          className="bg-gradient-to-r from-indigo-600 to-purple-600"
          asChild
        >
          <Link href="/register">Get Started</Link>
        </Button>
      </div>
    );
  }

  if (!vendor) {
    return (
      <div className="flex items-center space-x-4">
        <Button variant="ghost" asChild>
          <Link href="/login">Sign In</Link>
        </Button>
        <Button
          className="bg-gradient-to-r from-indigo-600 to-purple-600"
          asChild
        >
          <Link href="/register">Get Started</Link>
        </Button>
      </div>
    );
  }

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <button className="h-10 w-10 rounded-full border transition hover:ring-2 ring-teal-500 focus:outline-none">
          {vendor.profileImage ? (
            <Image
              src={vendor.profileImage}
              alt={vendor.fullName || "User profile"}
              width={40}
              height={40}
              className="h-full w-full object-cover rounded-full"
              priority
            />
          ) : (
            <div className="flex h-full w-full rounded-full items-center justify-center bg-gradient-to-br from-indigo-400 to-indigo-800">
              <User className="h-5 w-5 text-white" />
            </div>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="font-sans w-56 rounded-lg bg-white shadow-lg border border-gray-200 p-2"
      >
        <DropdownMenuLabel className="flex items-center gap-2 rounded-t-md  bg-gradient-to-r from-indigo-100 to-purple-100 px-3 py-2 text-md font-semibold text-gray-900">
          <User className="h-4 w-4 text-indigo-600" />
          {vendor.fullName || "Vendor"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-200" />

        <DropdownMenuItem asChild>
          <Link
            href={`/vendor/${vendor.id}/`}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 font-semibold hover:bg-indigo-50 hover:text-indigo-900 rounded-md transition-colors"
          >
            <Home />
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-200" />
        <DropdownMenuItem asChild>
          <Button
          variant="default"
            onClick={handleSignout}
            className="w-full flex items-center  gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm font-semibold transition-colors"
          >
            <LogOut className="text-white " />
            Signout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
