import { type ElementType, type HTMLAttributes } from "react";

import { MotionReveal } from "@/components/motion/MotionReveal";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  tone?: "default" | "surface" | "muted";
  spacing?: "compact" | "default" | "hero";
  reveal?: boolean;
  revealDelay?: number;
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
  reveal = true,
  revealDelay = 0,
  ...props
}: SectionProps) {
  const classes = cn(spacingClasses[spacing], toneClasses[tone], className);

  if (!reveal) {
    return <Component className={classes} {...props} />;
  }

  return (
    <MotionReveal
      as={Component}
      delay={revealDelay}
      className={classes}
      {...props}
    />
  );
}
