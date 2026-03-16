import { cn } from "@/lib/utils";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export function SectionTitle({
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
  subtitleClassName,
}: SectionTitleProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <h2
        className={cn(
          "max-w-3xl text-balance text-3xl sm:text-4xl lg:text-[2.6rem]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "max-w-2xl text-pretty text-[1.0625rem] leading-7 text-muted-foreground",
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
