import {
  ArrowRight,
  CalendarCheck2,
  HeartHandshake,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { TestimonialPlaceholder } from "@/components/ui/testimonial-placeholder";
import { clinicDetails, coreServices, trustHighlights } from "@/lib/site";

const quickFacts: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: HeartHandshake,
    title: "Patient comfort",
    description: "A calm layout foundation for reassuring messages and gentle-care details.",
  },
  {
    icon: ShieldCheck,
    title: "Clear trust signals",
    description: "Space for service highlights, confidence builders, and staff credibility.",
  },
  {
    icon: CalendarCheck2,
    title: "Appointment-first flow",
    description: "Shared calls to action that keep booking and contact paths easy to reach.",
  },
];

export function HomePage() {
  return (
    <>
      <Section spacing="hero">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Neighborhood Dental Care
              </span>
              <h1 className="mt-4 max-w-3xl text-balance text-4xl sm:text-5xl lg:text-[3.6rem]">
                Calm, modern dental care for everyday family visits.
              </h1>
              <p className="mt-6 max-w-2xl">
                Willow Brook Dental Care is set up as a welcoming local clinic for families,
                working adults, and patients who want clear, comfortable care.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Book Appointment
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {trustHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-border bg-white px-4 py-4 shadow-card"
                  >
                    <p className="text-[0.98rem] font-semibold leading-6 text-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  Clinic Snapshot
                </span>
                <CardTitle>Shared trust and contact structure for the homepage shell.</CardTitle>
                <CardDescription>
                  This panel gives the layout a place for practical details while the fuller page
                  content is still to come.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md bg-surface p-4">
                  {clinicDetails.addressLines.map((line) => (
                    <p key={line} className="text-[1rem] leading-7 text-foreground">
                      {line}
                    </p>
                  ))}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {clinicDetails.hours.slice(0, 2).map((item) => (
                    <div key={item.label} className="rounded-md border border-border p-4">
                      <p className="text-[0.95rem] font-semibold text-foreground">{item.label}</p>
                      <p className="mt-1 text-[0.98rem] text-muted-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">Request a Visit</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="Service Preview"
            title="Reusable service blocks are ready for later page builds."
            description="This grid keeps the content intentionally light while establishing spacing, card rhythm, icon treatment, and button placement."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {coreServices.slice(0, 3).map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <IconContainer icon={service.icon} />
                  <CardTitle className="pt-2">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Why This Shell Works"
                title="Shared trust, testimonial, and feature sections now have a consistent structure."
                description="These blocks focus on layout and reusable patterns first so every future page starts from the same calm, professional foundation."
              />
              <div className="grid gap-4 sm:grid-cols-3">
                {quickFacts.map((fact) => (
                  <Card key={fact.title}>
                    <CardHeader>
                      <IconContainer icon={fact.icon} />
                      <CardTitle className="pt-2 text-[1.15rem]">{fact.title}</CardTitle>
                      <CardDescription>{fact.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
            <TestimonialPlaceholder
              quote="The office feels warm and organized, and the team explains everything so clearly."
              patient="Mia R."
              detail="New patient from Naperville"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
