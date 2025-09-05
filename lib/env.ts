import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-core/presets-zod";
import { z } from "zod";

export const env = createEnv({
  server: {
    DEVELOPMENT: z.coerce.boolean().default(false),

    DATABASE_URL: z.url(),

    AUTH_SECRET: z.string().min(32),

    AUTH_GOOGLE_ID: z.string(),
    AUTH_GOOGLE_SECRET: z.string(),

    AUTH_GITHUB_ID: z.string(),
    AUTH_GITHUB_SECRET: z.string(),

    AUTH_DISCORD_ID: z.string(),
    AUTH_DISCORD_SECRET: z.string(),
  },
  client: {},
  experimental__runtimeEnv: {
    DEVELOPMENT:
      process.env.NODE_ENV !== "production" &&
      process.env.VERCEL_ENV !== "production",
    ...process.env,
  },
  extends: [vercel()],
});
