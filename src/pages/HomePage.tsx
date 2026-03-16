import {
  ArrowRight,
  Baby,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
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
import { clinicDetails, coreServices } from "@/lib/site";

const whyChooseUs: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: HeartHandshake,
    title: "Gentle, patient-first care",
    description:
      "Every visit is designed to feel calm, clear, and comfortable for adults, children, and nervous first-time patients.",
  },
  {
    icon: Stethoscope,
    title: "Experienced clinical guidance",
    description:
      "Patients receive thoughtful explanations, practical recommendations, and care plans that feel easy to understand.",
  },
  {
    icon: ShieldCheck,
    title: "Modern, clean treatment spaces",
    description:
      "The clinic environment feels bright, organized, and professional without becoming cold or overly clinical.",
  },
  {
    icon: Baby,
    title: "Family-friendly appointments",
    description:
      "The practice is built for busy households who want preventive, cosmetic, and routine care in one trusted place.",
  },
];

const trustBarItems = [
  "Accepting New Patients",
  "Family Friendly",
  "Modern Equipment",
  "Emergency Visits",
];

const servicePreview = [
  {
    title: "Routine Cleanings",
    description:
      "Preventive visits that keep your smile healthy and help catch concerns early.",
    icon: Stethoscope,
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Whitening, veneers, and smile improvements explained clearly and without pressure.",
    icon: Sparkles,
  },
  {
    title: "Restorative Care",
    description:
      "Practical treatment options for repairing teeth and restoring comfort with confidence.",
    icon: ShieldCheck,
  },
  {
    title: "Emergency Visits",
    description:
      "Prompt support when you need quick care for pain, damage, or unexpected dental issues.",
    icon: CalendarCheck2,
  },
];

const testimonials = [
  {
    quote:
      "The staff made me feel comfortable from the moment I walked in. The cleaning was gentle and the dentist explained everything clearly.",
    patient: "Lauren M.",
    detail: "Parent and long-term patient",
  },
  {
    quote:
      "Scheduling was easy, the office felt spotless, and the whole visit felt calm from the front desk to checkout.",
    patient: "Daniel R.",
    detail: "New patient from Naperville",
  },
  {
    quote:
      "I appreciated how clearly they walked me through my treatment options without ever making me feel rushed or overwhelmed.",
    patient: "Priya S.",
    detail: "Cosmetic dentistry patient",
  },
];

const galleryPreview = [
  "Clinic",
  "Reception",
  "Treatment Room",
  "Staff",
  "Patient Care",
  "Equipment",
];

export function HomePage() {
  return (
    <>
      <Section spacing="hero">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Family & Cosmetic Dentistry
              </span>
              <h1 className="mt-4 max-w-3xl text-balance text-4xl sm:text-5xl lg:text-[3.7rem]">
                Gentle, Modern Dental Care for the Whole Family
              </h1>
              <p className="mt-6 max-w-2xl">
                Willow Brook Dental Care provides preventive, cosmetic, and restorative dentistry
                in a calm, welcoming environment designed to help patients feel comfortable from
                the moment they arrive.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link to="/contact">
                    Book Appointment
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="border-b border-border bg-[linear-gradient(160deg,#f8fcfd_0%,#e9f3f7_58%,#deece7_100%)] p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                      Clinic Preview
                    </p>
                    <h2 className="mt-3 text-2xl sm:text-[2rem]">
                      Bright, welcoming spaces that feel calm from check-in to treatment.
                    </h2>
                  </div>
                  <div className="hidden rounded-md bg-white/75 px-3 py-2 text-sm font-semibold text-foreground shadow-card sm:block">
                    Accepting new patients
                  </div>
                </div>
                <div className="mt-8 aspect-[4/3] rounded-xl border border-white/70 bg-white/55 p-5 shadow-panel">
                  <div className="flex h-full flex-col justify-between rounded-lg border border-dashed border-primary/20 bg-white/45 p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-primary">Clinic image area</span>
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-foreground">
                        Bright clinic photography or a welcoming patient portrait.
                      </p>
                      <p className="text-[1rem] leading-7 text-muted-foreground">
                        This space is meant for imagery that feels warm, clean, and reassuring.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
                <div className="rounded-md bg-surface p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      {clinicDetails.addressLines.map((line) => (
                        <p key={line} className="text-[1rem] leading-7 text-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="rounded-md bg-surface p-4">
                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-[1rem] font-semibold text-foreground">
                        Monday - Thursday
                      </p>
                      <p className="text-[0.98rem] text-muted-foreground">8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section spacing="compact" className="pt-0">
        <Container>
          <div className="grid gap-3 rounded-xl border border-border bg-white p-4 shadow-card sm:grid-cols-2 lg:grid-cols-4">
            {trustBarItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-md px-3 py-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <p className="text-[1rem] font-semibold leading-6 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="Services Preview"
            title="Core dental services presented with clarity and calm."
            description="From routine cleanings to emergency visits, patients can quickly understand the care available and where to start."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {servicePreview.map((service) => (
              <Card
                key={service.title}
                className="transition-transform duration-200 hover:-translate-y-0.5"
              >
                <CardHeader>
                  <IconContainer icon={service.icon} />
                  <CardTitle className="pt-3">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="link" className="px-0 text-[1rem]">
              <Link to="/services">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Why Choose Us"
            title="A neighborhood clinic experience built around trust, comfort, and clear communication."
            description="Patients should feel confident that Willow Brook Dental Care offers thoughtful treatment, a welcoming environment, and dependable support for the whole family."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.map((item) => (
              <Card
                key={item.title}
                className="transition-transform duration-200 hover:-translate-y-0.5"
              >
                <CardHeader>
                  <IconContainer icon={item.icon} />
                  <CardTitle className="pt-3 text-[1.22rem]">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="rounded-xl border border-border bg-white p-5 shadow-card">
              <div className="aspect-[4/5] rounded-lg border border-dashed border-border bg-[linear-gradient(180deg,#eef5f8_0%,#dfecee_100%)] p-5">
                <div className="flex h-full flex-col justify-between rounded-lg bg-white/50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Dentist Photo Placeholder
                  </p>
                  <div>
                    <p className="text-lg font-semibold text-foreground">Lead dentist portrait</p>
                    <p className="mt-2 text-[1rem] leading-7 text-muted-foreground">
                      Reserved for a warm, professional team image that reinforces trust on the
                      homepage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Meet the Dentist"
                title="Dr. Elena Hart"
                description="Lead Dentist"
              />
              <p className="mt-6 max-w-2xl">
                Dr. Hart combines years of family and cosmetic dentistry experience with a calm,
                reassuring chairside approach. She believes every patient should feel listened to,
                informed, and comfortable before any treatment begins.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[1.15rem]">Gentle communication</CardTitle>
                    <CardDescription>
                      Every treatment conversation is designed to feel reassuring and easy to
                      follow.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[1.15rem]">Modern family care</CardTitle>
                    <CardDescription>
                      From cleanings to smile improvements, the team supports both routine and
                      confidence-building visits.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <div className="mt-6">
                <Button asChild variant="secondary">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Patient Testimonials"
            title="Reassuring feedback that helps new patients feel more confident."
            description="Thoughtful patient feedback helps first-time visitors picture a visit that feels calm, respectful, and clearly guided."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialPlaceholder
                key={item.patient}
                quote={item.quote}
                patient={item.patient}
                detail={item.detail}
                className="transition-transform duration-200 hover:-translate-y-0.5"
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="Gallery Preview"
            title="A quick look at the clinic environment and patient experience."
            description="A short gallery preview gives patients an early sense of the bright, welcoming spaces they can expect when they arrive."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {galleryPreview.map((item, index) => (
              <Card
                key={item}
                className="overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="aspect-[4/3] border-b border-border bg-[linear-gradient(160deg,#f7fbfc_0%,#e5eff3_100%)] p-4">
                  <div className="flex h-full flex-col justify-between rounded-lg border border-dashed border-border bg-white/40 p-4">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      Preview {index + 1}
                    </span>
                    <p className="text-[1rem] font-semibold text-foreground">Gallery image</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-[1.15rem]">{item}</CardTitle>
                  <CardDescription>
                    Reserved for clean, realistic clinic photography that supports patient trust.
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="link" className="px-0 text-[1rem]">
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="narrow">
          <Card className="overflow-hidden border-primary/12 bg-[linear-gradient(160deg,#f9fcfd_0%,#e8f2f6_58%,#deece7_100%)] shadow-panel">
            <div className="p-8 sm:p-10">
              <SectionHeader
                eyebrow="Schedule a Visit"
                title="Ready for a healthier smile?"
                description="Schedule your appointment with Willow Brook Dental Care today. Whether you need a routine cleaning, cosmetic consultation, or help with a dental concern, our team is here to help."
                actions={
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link to="/contact">
                      Book Appointment
                      <CalendarCheck2 className="h-4 w-4" />
                    </Link>
                  </Button>
                }
                align="center"
              />
              <div className="mt-6 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary/20 bg-white/75"
                >
                  <a href={clinicDetails.phoneHref}>
                    <Phone className="h-4 w-4" />
                    {clinicDetails.phone}
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
