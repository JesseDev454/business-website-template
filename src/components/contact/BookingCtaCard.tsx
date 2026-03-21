import { ArrowRight, CalendarCheck2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { clinicDetails } from "@/lib/site";

export function BookingCtaCard() {
  return (
    <Card className="overflow-hidden border-primary/10 bg-[linear-gradient(165deg,#2f6f8a_0%,#2b6279_100%)] text-primary-foreground shadow-panel">
      <div className="p-6 sm:p-8">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
          Ready to Schedule?
        </span>
        <h3 className="mt-3 text-[2rem] font-semibold tracking-tight text-white">
          Request your appointment when you are ready.
        </h3>
        <p className="mt-4 text-[1rem] leading-7 text-white/82">
          Call the office directly or use the contact form to request a visit. We are happy to
          help with routine care, family scheduling, and first-time appointments.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="w-full bg-white text-primary hover:bg-white/94"
          >
            <a href={clinicDetails.phoneHref}>
              Call the Clinic
              <CalendarCheck2 className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-white/22 bg-white/10 text-white hover:border-white/30 hover:bg-white/16"
          >
            <a href={clinicDetails.emailHref}>
              Email Our Team
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
