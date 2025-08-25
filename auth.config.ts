import { NextAuthConfig } from "next-auth";
import Discord from "next-auth/providers/discord";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

export default {
  providers: [Google, GitHub, Discord],
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
} satisfies NextAuthConfig;
