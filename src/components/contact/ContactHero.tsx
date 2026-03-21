import {
  ArrowRight,
  CalendarCheck2,
  Clock3,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { clinicDetails } from "@/lib/site";

const heroHighlights = [
  {
    title: "Accepting new patients",
    description:
      "Routine visits, family appointments, and first-time consultations are all welcome.",
    icon: ShieldCheck,
  },
  {
    title: "Convenient scheduling",
    description:
      "Weekday hours and simple follow-up help appointments fit more easily into busy routines.",
    icon: CalendarCheck2,
  },
  {
    title: "Clear communication",
    description:
      "Questions about treatment, timing, or next steps are always answered in plain language.",
    icon: Clock3,
  },
];

export function ContactHero() {
  return (
    <Section spacing="hero" reveal={false} className="pb-10 md:pb-14">
      <Container>
        <div className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-white/88 px-6 py-8 shadow-panel sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(222,236,231,0.55),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(47,111,138,0.12),transparent_36%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <div>
              <MotionReveal
                as="span"
                mode="load"
                delay={40}
                className="inline-block text-sm font-semibold uppercase tracking-[0.24em] text-primary"
              >
                Contact Willow Brook Dental Care
              </MotionReveal>

              <MotionReveal
                as="h1"
                mode="load"
                delay={120}
                className="mt-4 max-w-3xl text-balance text-4xl sm:text-5xl lg:text-[3.8rem]"
              >
                Connect with our team and schedule care with confidence.
              </MotionReveal>

              <MotionReveal
                as="p"
                mode="load"
                delay={200}
                className="mt-6 max-w-2xl text-[1.12rem] leading-8"
              >
                Whether you are due for a routine visit, have a question about treatment, or need
                help finding the right appointment time, our team is here to make the next step
                feel simple, clear, and welcoming.
              </MotionReveal>

              <MotionReveal
                mode="load"
                delay={280}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href={clinicDetails.phoneHref}>
                    Call the Clinic
                    <Phone className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                  <a href={clinicDetails.emailHref}>
                    Send an Email
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </MotionReveal>

              <MotionReveal
                mode="load"
                delay={340}
                className="mt-10 grid gap-3 sm:grid-cols-3"
              >
                {heroHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/70 bg-white/72 p-4 shadow-card"
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                    <p className="mt-4 text-[1rem] font-semibold text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </MotionReveal>
            </div>

            <MotionReveal mode="load" delay={180}>
              <Card className="overflow-hidden border-primary/10 bg-[linear-gradient(165deg,#f9fcfd_0%,#edf5f8_58%,#e5f0ec_100%)] shadow-card">
                <CardHeader className="gap-4 p-6 sm:p-7">
                  <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                    Quick Contact
                  </span>
                  <CardTitle className="text-[1.9rem] sm:text-[2.15rem]">
                    We are here to help with appointments, questions, and follow-up care.
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 px-6 pb-6 sm:px-7 sm:pb-7">
                  <div className="rounded-2xl bg-white/82 p-5 shadow-card">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      Call Us
                    </p>
                    <a
                      href={clinicDetails.phoneHref}
                      className="mt-3 block font-display text-3xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
                    >
                      {clinicDetails.phone}
                    </a>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/72 p-5">
                      <Mail className="h-5 w-5 text-primary" />
                      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Email
                      </p>
                      <a
                        href={clinicDetails.emailHref}
                        className="mt-2 block text-[1rem] font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {clinicDetails.email}
                      </a>
                    </div>

                    <div className="rounded-2xl bg-white/72 p-5">
                      <Clock3 className="h-5 w-5 text-primary" />
                      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Hours
                      </p>
                      <p className="mt-2 text-[1rem] font-semibold text-foreground">
                        Monday - Thursday
                      </p>
                      <p className="text-[0.98rem] text-muted-foreground">8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionReveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
