import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  SmilePlus,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { clinicDetails } from "@/lib/site";
import { pageImages } from "@/lib/page-images";

const trustCards = [
  {
    icon: ShieldCheck,
    title: "Gentle Approach",
    description:
      "Calm, patient-first care designed to help adults, children, and nervous first-time visitors feel at ease.",
    tone: "bg-[#cde6f4]",
  },
  {
    icon: Sparkles,
    title: "Modern Tech",
    description:
      "Digital tools and up-to-date equipment support precise treatment while keeping visits clear and comfortable.",
    tone: "bg-[#c7e7ff]",
  },
  {
    icon: Users,
    title: "Local Community",
    description:
      "A trusted neighborhood practice built around family care, personal relationships, and dependable follow-through.",
    tone: "bg-[#f7e382]",
  },
];

const services = [
  {
    icon: ShieldCheck,
    title: "Preventative Care",
    description: "Routine exams, cleanings, and support that help protect long-term oral health.",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Professional whitening options for a brighter smile that still feels natural.",
  },
  {
    icon: SmilePlus,
    title: "Porcelain Veneers",
    description: "Cosmetic improvements designed to enhance confidence with a polished, balanced look.",
  },
  {
    icon: Users,
    title: "Pediatric Care",
    description: "Friendly dental visits that help children build healthy habits and positive early experiences.",
  },
];

export function HomePage() {
  return (
    <>
      <Section spacing="hero" reveal={false} className="relative min-h-[870px] overflow-hidden px-4 pt-28 md:px-6 lg:px-8">
        <Container size="wide" className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <MotionReveal
              as="div"
              mode="load"
              delay={40}
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground"
            >
              <CheckCircle2 className="h-4 w-4" />
              Gentle Care for the Whole Family
            </MotionReveal>

            <MotionReveal
              as="h1"
              mode="load"
              delay={120}
              className="max-w-3xl text-5xl leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              Modern Dental <span className="text-primary">Care</span> with a Personal Touch
            </MotionReveal>

            <MotionReveal
              as="p"
              mode="load"
              delay={200}
              className="max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              Willow Brook Dental Care combines modern dentistry with a calm, family-focused
              experience so every visit feels clear, welcoming, and easy to trust.
            </MotionReveal>

            <MotionReveal
              mode="load"
              delay={280}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button asChild size="lg">
                <Link to="/contact">Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/services">View Our Services</Link>
              </Button>
            </MotionReveal>
          </div>

          <MotionReveal mode="load" delay={180} className="relative">
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_rgba(26,28,25,0.14)] lg:aspect-square">
              <img
                src={pageImages.home.hero}
                alt="Modern clean dental clinic lobby with warm lighting"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 -z-10 h-64 w-64 rounded-full bg-[#9fcced] opacity-30 blur-3xl" />
            <div className="absolute -right-8 -top-8 -z-10 h-64 w-64 rounded-full bg-[#dac769] opacity-20 blur-3xl" />
          </MotionReveal>
        </Container>
      </Section>

      <Section tone="muted" className="bg-[#f4f4ef]">
        <Container size="wide">
          <div className="grid gap-8 md:grid-cols-3">
            {trustCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="flex flex-col gap-6 rounded-[2rem] bg-white p-10 shadow-card"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.tone}`}
                  >
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{card.title}</h3>
                  <p className="text-base leading-7 text-muted-foreground">{card.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="px-4 md:px-6 lg:px-8">
        <Container size="wide">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="mb-6 text-4xl font-extrabold text-foreground">
                Comprehensive Care for Every Smile
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                From preventive visits to cosmetic improvements, Willow Brook offers practical,
                patient-friendly care designed to feel clear and reassuring.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-primary transition-all hover:gap-3"
            >
              Explore all services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  to="/services"
                  className="group rounded-[2rem] bg-[#f4f4ef] p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-panel"
                >
                  <Icon className="mb-12 h-10 w-10 text-primary transition-colors duration-300 group-hover:text-white" />
                  <h3 className="mb-2 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-base leading-7 text-muted-foreground transition-colors duration-300 group-hover:text-white/85">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-background px-4 md:px-6 lg:px-8">
        <Container size="wide" className="grid items-center gap-20 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-6 -top-8 text-[7rem] leading-none text-[#9fcced]/50">
              “
            </div>
            <h2 className="relative z-10 text-4xl font-extrabold leading-tight text-foreground lg:text-5xl">
              What Our Patients Say About Their Experience
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              Local families choose Willow Brook for the calm atmosphere, clear explanations, and
              warm patient care they can rely on.
            </p>
            <div className="mt-12 flex gap-4">
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:bg-surface"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:bg-surface"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-12 shadow-card">
            <div className="mb-6 flex gap-1 text-[#6c5e06]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Sparkles key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="mb-10 text-2xl font-medium italic leading-relaxed text-foreground">
              "I used to dread going to the dentist, but Willow Brook changed everything. The
              office feels calm, the staff is thoughtful, and every part of the visit feels gently
              explained."
            </p>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-full">
                <img
                  src={pageImages.home.testimonial}
                  alt="Happy patient portrait smiling"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-display font-bold text-foreground">Elena Rodriguez</p>
                <p className="text-sm text-muted-foreground">Patient since 2021</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="overflow-hidden bg-[#f4f4ef] px-4 md:px-6 lg:px-8">
        <Container size="wide" className="mb-16">
          <h2 className="text-center text-4xl font-extrabold text-foreground">
            Inside Our Clinic
          </h2>
        </Container>

        <div className="flex gap-6 overflow-x-auto px-4 pb-8 md:px-6 lg:px-8">
          {pageImages.home.gallery.map((image, index) => (
            <div
              key={image.src}
              className={`shrink-0 overflow-hidden rounded-[2rem] ${
                index === 1 ? "min-w-[300px]" : index === 2 ? "min-w-[500px]" : "min-w-[400px]"
              } h-[500px]`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section className="px-4 md:px-6 lg:px-8">
        <Container size="narrow">
          <div className="relative overflow-hidden rounded-[3rem] bg-primary p-12 text-center md:p-20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#4c7a97] opacity-60" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl font-extrabold text-white md:text-5xl">
                Ready to rediscover your smile?
              </h2>
              <p className="mx-auto max-w-2xl text-xl leading-relaxed text-white/80">
                Join the Willow Brook patient family and experience modern dental care that feels
                clear, comfortable, and personal from the very first visit.
              </p>
              <div className="flex flex-col justify-center gap-6 pt-4 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/92">
                  <Link to="/contact">Book Appointment</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  <a href={clinicDetails.phoneHref}>Call {clinicDetails.phone}</a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
