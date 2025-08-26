import { cn, User } from "@/lib/utils";
import { type NavigationItem } from "./app-shell";
import { UserAvatar } from "./user-avatar";
import Link from "next/link";

export function AppNavigation({
  user,
  items,
}: {
  user: User;
  items: NavigationItem[];
}) {
  return (
    <nav
      className={cn(
        "fixed bottom-0 z-40 flex h-16 w-full items-center border-t bg-background px-4",
        "md:hidden"
      )}
    >
      <ul className="flex w-full h-full justify-evenly gap-8">
        {items.map((item) => (
          <li
            key={item.href}
            className="w-full flex items-center justify-center"
          >
            <Link href={item.href}>
              <item.icon className="size-5" />
            </Link>
          </li>
        ))}
        <li className="w-full flex items-center justify-center">
          <Link href={`/@${user.username}`}>
            <UserAvatar user={user} className="size-5" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
