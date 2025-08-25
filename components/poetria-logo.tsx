import { cn } from "@/lib/utils";
import { PenTool } from "lucide-react";

export function PoetriaLogo({
  className,
  ...props
}: React.HTMLAttributes<HTMLOrSVGElement> & { size?: number }) {
  return <PenTool className={cn("size-6", className)} {...props} />;
}
