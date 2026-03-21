import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import { clinicDetails } from "@/lib/site";

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-lg bg-white p-3 shadow-sm">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}

export function ContactInfoCard() {
  return (
    <div className="space-y-8 rounded-xl bg-[#f4f4ef] p-8">
      <InfoRow icon={Phone} label="Phone">
        <a
          href={clinicDetails.phoneHref}
          className="font-display text-2xl font-extrabold text-primary transition-colors hover:text-foreground"
        >
          {clinicDetails.phone}
        </a>
      </InfoRow>

      <InfoRow icon={Mail} label="Email">
        <a
          href={clinicDetails.emailHref}
          className="text-lg font-medium leading-tight text-foreground transition-colors hover:text-primary"
        >
          {clinicDetails.email}
        </a>
      </InfoRow>

      <InfoRow icon={MapPin} label="Address">
        <div className="text-lg font-medium leading-tight text-foreground">
          {clinicDetails.addressLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </InfoRow>

      <InfoRow icon={Clock3} label="Office Hours">
        <div className="mt-2 space-y-2">
          {clinicDetails.hours.map((item) => (
            <div key={item.label} className="flex justify-between gap-4 text-sm">
              <span className={item.value === "Closed" ? "text-[#ba1a1a]" : "text-foreground"}>
                {item.label}
              </span>
              <span
                className={`font-bold ${
                  item.value === "Closed" ? "text-[#ba1a1a]" : "text-foreground"
                }`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </InfoRow>
    </div>
  );
}
