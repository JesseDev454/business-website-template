import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "motion-interactive inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-display text-sm font-bold tracking-tight focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-card motion-safe:hover:-translate-y-0.5 hover:opacity-90 hover:shadow-panel",
        secondary:
          "bg-[#e3e3de] text-primary shadow-none motion-safe:hover:-translate-y-0.5 hover:bg-[#e8e8e3]",
        outline:
          "border-2 border-primary/20 bg-transparent text-primary shadow-none hover:bg-white/60 hover:text-primary",
        ghost: "text-foreground hover:bg-surface hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline hover:decoration-primary/70",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-10 px-4 py-2",
        lg: "h-14 px-8 py-3 text-[1rem]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}
