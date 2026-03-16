import { type ElementType, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  tone?: "default" | "surface" | "muted";
  spacing?: "compact" | "default" | "hero";
};

const toneClasses = {
  default: "",
  surface: "bg-white",
  muted: "bg-surface",
};

const spacingClasses = {
  compact: "py-12 md:py-16",
  default: "py-16 md:py-24",
  hero: "py-14 md:py-20 lg:py-28",
};

export function Section({
  as: Component = "section",
  className,
  tone = "default",
  spacing = "default",
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(spacingClasses[spacing], toneClasses[tone], className)}
      {...props}
    />
  );
}
