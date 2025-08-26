"use client";

import Link from "next/link";
import { useSidebar } from "./ui/sidebar";
import { UserAvatar } from "./user-avatar";
import { PoetriaLogo } from "./poetria-logo";
import { User } from "@/lib/db";

export function AppHeader({ user }: { user: User }) {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="w-full border-b md:hidden">
      <div className="w-full relative container mx-auto flex items-center px-4 sm:px-6 py-4">
        <button onClick={() => toggleSidebar()} className="cursor-pointer">
          <UserAvatar user={user} className="size-5" />
        </button>
        <Link
          href="/"
          className="flex items-center space-x-2 absolute left-1/2 top-1/2 -translate-1/2"
        >
          <div className="m-0">
            <PoetriaLogo className="size-5" />
          </div>
          <span className="sr-only">Poetria.</span>
        </Link>
      </div>
    </header>
  );
}
