import { ArrowRight, MapPin } from "lucide-react";

import { Card } from "@/components/ui/card";
import { clinicDetails } from "@/lib/site";

export function MapCard() {
  return (
    <Card interactive className="overflow-hidden border-border/70 bg-white/95 shadow-card">
      <div className="relative aspect-[5/4] overflow-hidden bg-[linear-gradient(165deg,#f3f8fb_0%,#e7eff4_52%,#dfece7_100%)]">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(47,111,138,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(47,111,138,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute inset-y-0 left-[20%] w-px rotate-12 bg-white/60" />
        <div className="absolute inset-y-0 right-[28%] w-px -rotate-12 bg-white/60" />
        <div className="absolute left-[12%] top-[34%] h-px w-[68%] -rotate-6 bg-white/65" />
        <div className="absolute left-[8%] top-[62%] h-px w-[72%] rotate-[8deg] bg-white/65" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="motion-interactive flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-panel ring-8 ring-white/45 motion-safe:group-hover:scale-[1.04]">
            <MapPin className="h-8 w-8" />
          </div>
        </div>

        <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/88 p-4 shadow-card backdrop-blur-sm">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Visit Our Clinic
              </p>
              <p className="mt-2 text-[1rem] font-semibold text-foreground">
                {clinicDetails.name}
              </p>
              <p className="text-[0.96rem] leading-6 text-muted-foreground">
                {clinicDetails.addressLines.join(", ")}
              </p>
            </div>
            <a
              href={clinicDetails.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-foreground"
            >
              Directions
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}
