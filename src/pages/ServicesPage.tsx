import {
  Ear,
  HeartHandshake,
  ShieldCheck,
  Siren,
  SmilePlus,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { clinicDetails } from "@/lib/site";
import { pageImages } from "@/lib/page-images";

const serviceCards = [
  {
    title: "Routine Exams & Cleanings",
    description:
      "Preventive visits that help keep your smile healthy and allow the team to catch concerns early.",
    icon: ShieldCheck,
    className: "md:col-span-2 bg-[#f4f4ef]",
    action: "View Procedure Details",
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional whitening options that brighten your smile while keeping results natural and comfortable.",
    icon: Sparkles,
    className: "bg-[#e3e3de]",
    action: "Brighten My Smile",
  },
  {
    title: "Veneers & Cosmetics",
    description:
      "Cosmetic improvements designed to refine your smile with a polished, patient-friendly approach.",
    icon: SmilePlus,
    className: "bg-[#eeeee9]",
    action: "Explore Cosmetics",
  },
  {
    title: "Restorative: Crowns & Fillings",
    description:
      "Strong, tooth-colored restorative care that helps rebuild comfort, function, and confidence.",
    icon: Wrench,
    className: "relative overflow-hidden md:col-span-2 bg-[#e8e8e3]",
    action: "Schedule Repair",
    primary: true,
  },
  {
    title: "Family Dental Care",
    description:
      "Practical, welcoming care for children, teens, adults, and busy family schedules.",
    icon: Users,
    className: "bg-[#f4f4ef]",
    action: "Learn More",
  },
];

const comfortPoints = [
  {
    icon: HeartHandshake,
    title: "Gentle Techniques",
    description:
      "We explain each step clearly and move at a pace that helps patients feel informed and relaxed.",
  },
  {
    icon: Ear,
    title: "Comfort Amenities",
    description:
      "Small details and a calm atmosphere make routine care feel easier for nervous or first-time patients.",
  },
  {
    icon: ShieldCheck,
    title: "Personalized Support",
    description:
      "Recommendations are tailored to your needs, goals, and comfort instead of following a one-size-fits-all script.",
  },
];

export function ServicesPage() {
  return (
    <>
      <Section spacing="compact" reveal={false} className="px-4 pb-20 pt-28 md:px-6 lg:px-8">
        <Container size="wide">
          <div className="mb-24 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 block text-sm font-bold uppercase tracking-[0.22em] text-[#6c5e06]">
                Our Expertise
              </span>
              <h1 className="mb-6 text-5xl font-extrabold leading-tight text-primary md:text-6xl">
                Personalized Care for Your Radiant Smile
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Willow Brook offers preventive, cosmetic, restorative, emergency, and family
                dental care in language that feels approachable, calm, and easy to understand.
              </p>
            </div>

            <div className="relative h-[400px] overflow-hidden rounded-[2rem] shadow-panel">
              <img
                src={pageImages.services.hero}
                alt="Modern dental office with soft lighting"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </div>

          <div className="mb-32 grid gap-6 md:grid-cols-3">
            {serviceCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className={`rounded-[2rem] p-10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-panel ${card.className}`}
                >
                  <div className="max-w-lg">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2
                      className={`mb-4 font-display font-bold text-primary ${
                        card.primary || card.className.includes("md:col-span-2")
                          ? "text-3xl"
                          : "text-2xl"
                      }`}
                    >
                      {card.title}
                    </h2>
                    <p className="mb-8 text-base leading-7 text-muted-foreground">
                      {card.description}
                    </p>

                    {card.primary ? (
                      <Button asChild>
                        <Link to="/contact">{card.action}</Link>
                      </Button>
                    ) : (
                      <button
                        type="button"
                        className="font-bold text-primary transition-all hover:opacity-75"
                      >
                        {card.action}
                      </button>
                    )}
                  </div>

                  {card.primary ? (
                    <div className="pointer-events-none absolute bottom-0 right-0 opacity-10">
                      <Sparkles className="h-40 w-40 text-primary" />
                    </div>
                  ) : null}
                </div>
              );
            })}

            <div className="rounded-[2rem] border border-[#ba1a1a]/10 bg-[#ffdad6]/35 p-10 md:col-span-2">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ffdad6] text-[#93000a]">
                  <Siren className="h-9 w-9" />
                </div>
                <div>
                  <h2 className="mb-2 text-2xl font-bold text-[#93000a]">Emergency Visits</h2>
                  <p className="mb-4 text-base leading-7 text-muted-foreground">
                    Sudden tooth pain or damage? We make room for urgent concerns and help
                    patients understand what to do next without adding more stress.
                  </p>
                  <p className="text-lg font-bold text-primary">
                    Call {clinicDetails.phone} for immediate assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-32 flex flex-col items-center gap-16 lg:flex-row">
            <div className="relative lg:w-1/2">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-secondary opacity-30 blur-3xl" />
              <div className="relative z-10 rotate-1 overflow-hidden rounded-[2rem] shadow-panel">
                <img
                  src={pageImages.services.comfort}
                  alt="Gentle dentist talking to a relaxed patient in a soft-lit room"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="mb-8 text-4xl font-extrabold leading-tight text-primary">
                Fear-Free Dentistry: Your Comfort Matters
              </h2>
              <div className="space-y-8">
                {comfortPoints.map((point) => {
                  const Icon = point.icon;

                  return (
                    <div key={point.title} className="flex gap-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e3e3de]">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-bold text-primary">{point.title}</h3>
                        <p className="text-base leading-7 text-muted-foreground">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[3rem] bg-primary p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <div className="relative z-10">
              <h2 className="mb-8 text-4xl font-extrabold text-white md:text-5xl">
                Ready to rediscover your smile?
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-xl text-white/90">
                Join the Willow Brook family and experience patient-friendly care tailored to your
                comfort and your everyday needs.
              </p>
              <div className="flex flex-col justify-center gap-6 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/92">
                  <Link to="/contact">Book Your First Visit</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  <a href={clinicDetails.phoneHref}>Call Our Office</a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
