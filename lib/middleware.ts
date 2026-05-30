import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const isDashboard = req.nextUrl.pathname.startsWith("/dashboard");

  if (isDashboard) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/login", req.url)
      );
    }

    const user = await verifyToken(token);

    if (!user) {
      return NextResponse.redirect(
        new URL("/login", req.url)
      );
    }

    // Role check example
    if (
      req.nextUrl.pathname.startsWith("/dashboard/users") &&
      user.role !== "admin"
    ) {
      return NextResponse.redirect(
        new URL("/dashboard", req.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};