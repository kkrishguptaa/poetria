import { AppShell } from "@/components/app-shell";
import { auth } from "@/lib/auth";
import { Session } from "next-auth";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { users } from "@/schema";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = (await auth()) as Session;

  const user = await db.query.users.findFirst({
    where: eq(users.email, session.user!.email!),
  });

  return <AppShell session={{ user }}>{children}</AppShell>;
}
