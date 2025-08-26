import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import {
  accounts,
  authenticators,
  sessions,
  users,
  verificationTokens,
} from "@/schema";
import authConfig from "@/auth.config";
import { db } from "@/lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
    authenticatorsTable: authenticators,
  }),
  session: {
    strategy: "jwt",
  },
  ...authConfig,
});
