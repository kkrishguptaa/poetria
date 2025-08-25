import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextRequest } from "next/server";

const { auth } = NextAuth(authConfig);

import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await auth();

  if (session) {
    if (pathname === "/login") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    switch (pathname) {
      case "/":
        return NextResponse.rewrite(new URL("/home", request.url));
      case "/logout":
        return NextResponse.redirect(new URL("/", request.url));
      default:
        break;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
