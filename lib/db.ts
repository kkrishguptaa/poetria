import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "@/lib/env";
import * as schema from "@/schema";

export const db = drizzle({
  schema,
  connection: env.DATABASE_URL,
  logger: env.DEVELOPMENT,
});

export type User = NonNullable<
  Awaited<ReturnType<typeof db.query.users.findFirst>>
>;
