import { signOut } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function LogoutForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-xl font-bold">
            Are you sure you want to logout?
          </h1>
          <Button
            variant="destructive"
            type="submit"
            className="w-full space-x-4 cursor-pointer"
            formAction={async () => {
              "use server";

              await signOut({ redirectTo: "/" });
            }}
          >
            <span>Sign out</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

/**
 * TODO: Privacy Policy and Terms of Service pages
 */
