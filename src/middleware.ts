import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Read cookie
  const vendorSession = req.cookies.get("vendor_session")?.value;

  const pathname = req.nextUrl.pathname;

  // Protect all /vendor routes
  if (pathname.startsWith("/vendor") || pathname.startsWith("/(dashboard)/vendor")) {
    if (!vendorSession) {
      // redirect to login
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
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
