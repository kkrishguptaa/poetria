import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextRequest } from "next/server";

const { auth } = NextAuth(authConfig);

import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await auth();

  if (pathname === "/login" && session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname === "/" && !session) {
    return NextResponse.rewrite(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
