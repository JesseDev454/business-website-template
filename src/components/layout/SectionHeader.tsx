import { type ReactNode } from "react";

import { SectionTitle } from "@/components/layout/SectionTitle";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  actions,
  align = "left",
  className,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered ? "mx-auto items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          {eyebrow}
        </span>
      ) : null}
      <SectionTitle
        title={title}
        subtitle={description}
        align={align}
        className="gap-4"
      />
      {actions ? (
        <div
          className={cn(
            "flex flex-wrap gap-3 pt-2",
            centered ? "justify-center" : "justify-start",
          )}
        >
          {actions}
        </div>
      ) : null}
    </div>
  );
}
