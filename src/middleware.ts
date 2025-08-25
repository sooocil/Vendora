import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getVendorId } from "./lib/actions/vendor/getVendorId";

export function middleware(req: NextRequest) {
  // Read cookie
  const vendorSession = req.cookies.get("vendor_session")?.value;
  const vendorId = getVendorId();

  const pathname = req.nextUrl.pathname;

  // protect routes with different logic, in future will be a single array and check from there.
  // Protect all /vendor routes
  if (
    pathname.startsWith("/vendor") ||
    pathname.startsWith("/(dashboard)/vendor")
  ) {
    if (!vendorSession) {
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  //protect /auth routes
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/(auth)/login") ||
    pathname.startsWith("/(auth)/register")
  ) {
    if (vendorSession) {
      const dashboardUrl = new URL(`/vendor/${vendorId}`, req.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  // Allow everything else
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/(dashboard)/vendor/:path*",
    "/vendor/:path*",
    "/(auth)/login/:path*",
    "/(auth)/register/:path*",
  ],
};
