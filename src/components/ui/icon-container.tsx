import { type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type IconContainerProps = {
  icon: LucideIcon;
  className?: string;
};

export function IconContainer({ icon: Icon, className }: IconContainerProps) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-md border border-border bg-white text-primary shadow-card",
        className,
      )}
    >
      <Icon className="h-5 w-5" />
    </div>
  );
}
