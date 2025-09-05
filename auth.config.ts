import { NextAuthConfig } from "next-auth";
import Discord from "next-auth/providers/discord";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { env } from "./lib/env";

export default {
  providers: [Google, GitHub, Discord],
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
  logger: {
    debug: env.DEVELOPMENT ? console.debug : () => {},
    error: console.error,
    warn: console.warn,
  },
} satisfies NextAuthConfig;
