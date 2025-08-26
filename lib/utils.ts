import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { db } from "./db";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type User = NonNullable<
  Awaited<ReturnType<typeof db.query.users.findFirst>>
>;
