import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/product/create") {
    const isAuthenticatedCookie = request.cookies.get("isAuthenticated");
    const isAuthenticated = isAuthenticatedCookie?.value;

    if (isAuthenticated !== "true") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/product/create"],
};
