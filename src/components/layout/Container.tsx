import { type ElementType, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  size?: "narrow" | "default" | "wide";
};

const sizeClasses = {
  narrow: "max-w-4xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function Container({
  as: Component = "div",
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 md:px-6 xl:px-8",
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
