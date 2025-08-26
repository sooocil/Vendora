"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getVendorByVendorId } from "@/lib/actions/vendor/GetVendorByVendorId";
import { vendor } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
// import { getVendorId } from "@/lib/actions/vendor/getVendorId";

interface SideBarFooterProps {
  params?: string;
}

export function SideBarFooter({ params }: SideBarFooterProps) {
  const {
    data: vendorData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["vendor", params],
    queryFn: () => getVendorByVendorId(params!),
    enabled: !!params,
    select: (res) => res.data as vendor,
    staleTime: 1000 * 60 * 30,
  });
  const vendorId = params;

  if (isLoading) {
    return (
      <div className="w-full">
        <div className="justify-start w-full p-3 h-auto border-2 rounded-lg bg-gradient-to-r from-slate-100 to-slate-50 animate-pulse">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 ring-2 ring-slate-200 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse">
              <Skeleton className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-300 to-slate-400" />
            </div>
            <div className="flex flex-col text-left space-y-2">
              <Skeleton className="h-4 w-28 rounded-none bg-gradient-to-r from-slate-300 to-slate-200 animate-pulse" />
              <Skeleton className="h-3 w-36 rounded-none bg-gradient-to-r from-slate-200 to-slate-300 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Error loading vendor data</div>;
  }

  return (
    <div className="w-full ">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="justify-start w-full p-3 h-auto border-1 shadow-lg hover:bg-indigo-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10 ring-2 ring-indigo-200">
                <AvatarImage
                  // src="/avatars/01.png"
                  alt={vendorData?.storeName}
                />
                <AvatarFallback className="bg-indigo-100 text-indigo-600 font-semibold">
                  {vendorData?.storeName?.slice(0, 2).toUpperCase() ?? "NA"}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-left">
                <span className="text-sm font-semibold text-gray-900">
                  {isLoading
                    ? "Loading..."
                    : vendorData?.storeName ?? "Unknown"}
                </span>
                <span className="text-xs text-gray-600 font-medium">
                  {isError ? "Error loading" : vendorData?.email ?? ""}
                </span>
              </div>
            </div>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-64 mb-4 shadow-xl border border-zinc-300 bg-white backdrop-blur-sm"
          side="right"
        >
          <DropdownMenuLabel className="px-4 py-3 bg-indigo-50 rounded-t-lg border-b border-gray-100 font-semibold text-gray-900">
            My Account
          </DropdownMenuLabel>
          <div className="p-1">
            <DropdownMenuItem
              onClick={() => {
                window.location.href = `/vendor/${vendorId}/profile`;
              }}
              className=" hover:rounded-none px-3 py-2 cursor-pointer hover:bg-indigo-100 transition-all duration-200 focus:bg-indigo-100"
            >
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                Profile
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:rounded-none px-3 py-2 cursor-pointer hover:bg-indigo-100 transition-all duration-200 focus:bg-indigo-100">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                <Link href="/notifications">Notifications</Link>
              </span>
            </DropdownMenuItem>

            <DropdownMenuItem className="hover:rounded-none px-3 py-2 cursor-pointer hover:bg-indigo-100 transition-all duration-200 focus:bg-indigo-100">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                Setting
              </span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="my-2 bg-gray-200" />
            <DropdownMenuItem className="rounded-md px-3 py-2 cursor-pointer bg-red-500 text-white hover:bg-red-600 transition-all duration-200 focus:bg-red-600 font-medium">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/80"></div>
                Sign out
              </span>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
