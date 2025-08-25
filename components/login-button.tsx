import { signIn } from "@/lib/auth";
import { Button } from "./ui/button";
import * as Icons from "react-icons/fa";
import { type ProviderId } from "next-auth/providers";

export interface LoginButtonProps {
  icon: keyof typeof Icons;
  provider: ProviderId;
  name: string;
}

export function LoginButton({ icon, provider, name }: LoginButtonProps) {
  const Icon = Icons[icon];
  return (
    <Button
      variant="outline"
      type="submit"
      className="w-full space-x-4 cursor-pointer"
      formAction={async () => {
        "use server";

        await signIn(provider, {});
      }}
    >
      <Icon />
      <span>Continue with {name}</span>
    </Button>
  );
}
