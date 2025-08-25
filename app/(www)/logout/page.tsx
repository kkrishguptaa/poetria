import { LogoutForm } from "@/components/logout-form";

export default function LogoutPage() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LogoutForm />
      </div>
    </div>
  );
}
