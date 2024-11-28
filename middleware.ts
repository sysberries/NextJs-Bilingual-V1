import createMiddleware from "next-intl/middleware";
import { routing } from "@/app/i18n/routing";
import { NextRequest, NextResponse } from "next/server";

// Initialize next-intl middleware
const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Redirect `/` to `/en`
  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.redirect(url);
  }

  // Handle other routes with next-intl middleware
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*"], // Include `/` and localized paths
};
