import { cn } from "@/lib/utils";
import { PoetriaLogo } from "./poetria-logo";
import Link from "next/link";
import { LoginButton, LoginButtonProps } from "./login-button";

export function LoginForm({
  className,
  redirectTo,
  ...props
}: React.ComponentProps<"div"> & {
  redirectTo?: string;
}) {
  const methods: LoginButtonProps[] = [
    {
      icon: "FaGoogle",
      provider: "google",
      name: "Google",
    },
    {
      icon: "FaGithub",
      provider: "github",
      name: "GitHub",
    },
    {
      icon: "FaDiscord",
      provider: "discord",
      name: "Discord",
    },
  ];

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex items-center justify-center rounded-md">
                <PoetriaLogo className="size-8" />
              </div>
              <span className="sr-only">Poetria.</span>
            </Link>
            <h1 className="text-xl font-bold">Welcome to Poetria.</h1>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center">
            {methods.map((method) => (
              <LoginButton
                key={method.provider}
                redirectTo={redirectTo}
                {...method}
              />
            ))}
          </div>
        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our{" "}
        <Link href="/terms">Terms of Service</Link> and{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </div>
    </div>
  );
}

/**
 * TODO: Privacy Policy and Terms of Service pages
 */
