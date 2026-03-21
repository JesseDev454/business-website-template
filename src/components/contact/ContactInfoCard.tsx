import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { type ReactNode } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { clinicDetails } from "@/lib/site";

function DetailRow({
  icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: ReactNode;
}) {
  const Icon = icon;

  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white/78 p-5 shadow-card">
      <IconContainer icon={Icon} className="shrink-0 bg-white" />
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </p>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}

export function ContactInfoCard() {
  return (
    <Card className="overflow-hidden border-border/70 bg-[linear-gradient(180deg,#f9fcfd_0%,#eef4f6_100%)] shadow-card">
      <CardHeader className="p-6 sm:p-7">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Contact Details
        </span>
        <CardTitle className="text-[2rem]">Everything you need in one place.</CardTitle>
      </CardHeader>

      <CardContent className="grid gap-4 px-6 pb-6 sm:px-7 sm:pb-7">
        <div className="rounded-2xl bg-white p-5 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Phone
          </p>
          <a
            href={clinicDetails.phoneHref}
            className="mt-3 block font-display text-3xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
          >
            {clinicDetails.phone}
          </a>
        </div>

        <DetailRow icon={Mail} label="Email">
          <a
            href={clinicDetails.emailHref}
            className="text-[1rem] font-semibold text-foreground transition-colors hover:text-primary"
          >
            {clinicDetails.email}
          </a>
        </DetailRow>

        <DetailRow icon={MapPin} label="Address">
          <div className="space-y-1">
            {clinicDetails.addressLines.map((line) => (
              <p key={line} className="text-[1rem] leading-7 text-foreground">
                {line}
              </p>
            ))}
          </div>
        </DetailRow>

        <div className="rounded-2xl bg-white/82 p-5 shadow-card">
          <div className="flex items-start gap-4">
            <IconContainer icon={Clock3} className="shrink-0 bg-white" />
            <div className="w-full">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Office Hours
              </p>
              <div className="mt-4 space-y-3">
                {clinicDetails.hours.map((item, index) => (
                  <div
                    key={item.label}
                    className={index === 0 ? "border-b border-border/70 pb-3" : ""}
                  >
                    <div className="flex items-center justify-between gap-4 text-[0.98rem]">
                      <span className="font-semibold text-foreground">{item.label}</span>
                      <span className="text-right text-muted-foreground">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
