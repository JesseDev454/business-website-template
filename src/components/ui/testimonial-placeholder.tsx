import { Quote, Star } from "lucide-react";
import { type HTMLAttributes } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TestimonialPlaceholderProps = {
  quote: string;
  patient: string;
  detail: string;
  title?: string;
  description?: string;
} & HTMLAttributes<HTMLDivElement>;

export function TestimonialPlaceholder({
  quote,
  patient,
  detail,
  title,
  description,
  className,
  ...props
}: TestimonialPlaceholderProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader className="gap-4 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-1 text-[#c39b57]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <Quote className="h-5 w-5 text-primary" />
        </div>
        {title ? <CardTitle>{title}</CardTitle> : null}
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-[1.05rem] leading-7 text-foreground">"{quote}"</p>
        <div>
          <p className="text-[1rem] font-semibold text-foreground">{patient}</p>
          <p className="text-[0.98rem] text-muted-foreground">{detail}</p>
        </div>
      </CardContent>
    </Card>
  );
}
