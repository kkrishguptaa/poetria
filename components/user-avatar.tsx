import { cn, User } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function UserAvatar({
  user,
  className,
}: {
  user: User;
  className?: string;
}) {
  return (
    <Avatar className={cn("size-4", className)}>
      <AvatarImage
        src={
          user.image ??
          `https://api.dicebear.com/9.x/glass/svg?seed=${encodeURIComponent(
            user.name!
          )!}`
        }
        className={cn("size-4", className)}
      />
      <AvatarFallback className={cn("text-xs", className)}>
        {user
          .name!.split(" ")
          .map((n) => n.slice(0, 1))
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
}
