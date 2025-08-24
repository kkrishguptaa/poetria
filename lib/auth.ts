import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import {
  accounts,
  authenticators,
  db,
  sessions,
  users,
  verificationTokens,
} from "@/lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
    authenticatorsTable: authenticators,
  }),
});
