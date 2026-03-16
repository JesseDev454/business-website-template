import {
  ArrowRight,
  Baby,
  CalendarCheck2,
  HeartHandshake,
  MessageSquareHeart,
  ShieldCheck,
  Siren,
  Smile,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
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
import { clinicDetails } from "@/lib/site";

const services: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Routine Exams and Cleanings",
    description:
      "Regular visits that help keep your teeth healthy, comfortable, and easy to care for over time.",
    icon: Stethoscope,
  },
  {
    title: "Fillings and Preventive Care",
    description:
      "Practical treatment and preventive support that protect your smile before small concerns grow into larger ones.",
    icon: ShieldCheck,
  },
  {
    title: "Teeth Whitening",
    description:
      "Simple cosmetic care for patients who want a brighter smile in a way that feels approachable and clearly explained.",
    icon: Sparkles,
  },
  {
    title: "Veneers",
    description:
      "Cosmetic smile improvements for patients who want a more polished look with guidance they can feel confident about.",
    icon: Smile,
  },
  {
    title: "Crowns and Restorative Dentistry",
    description:
      "Support for repairing damaged teeth and restoring function with treatment options explained in calm, patient-friendly language.",
    icon: HeartHandshake,
  },
  {
    title: "Emergency Dental Visits",
    description:
      "Prompt care for sudden pain, discomfort, or damage when you need help quickly and reassurance right away.",
    icon: Siren,
  },
  {
    title: "Pediatric and Family Dentistry",
    description:
      "Friendly care for children, teens, and adults so families can rely on one trusted clinic for everyday visits.",
    icon: Baby,
  },
];

const featuredServices: Array<{
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
}> = [
  {
    eyebrow: "Preventive Care",
    title: "Stay ahead of dental concerns with steady, routine support.",
    description:
      "Preventive care is about helping patients maintain healthy teeth and gums with regular visits, gentle cleanings, and clear recommendations that feel easy to follow.",
    points: [
      "Routine exams and professional cleanings",
      "Preventive guidance tailored to everyday habits",
      "Simple explanations that reduce uncertainty",
    ],
  },
  {
    eyebrow: "Cosmetic Dentistry",
    title: "Feel more confident in your smile without feeling pressured.",
    description:
      "Cosmetic services are presented in a calm, conversational way so patients can explore whitening, veneers, and smile improvements with realistic expectations.",
    points: [
      "Approachable teeth whitening options",
      "Veneer conversations guided with clarity",
      "A focus on comfort and natural-looking results",
    ],
  },
  {
    eyebrow: "Restorative Dentistry",
    title: "Restore comfort, strength, and function with practical treatment planning.",
    description:
      "When teeth need repair, the goal is to help patients understand their options clearly and move forward with care that feels steady and supportive.",
    points: [
      "Crowns and restorative solutions explained simply",
      "Recommendations based on comfort and long-term function",
      "A patient-first pace for treatment decisions",
    ],
  },
  {
    eyebrow: "Emergency Care",
    title: "When something sudden happens, patients can count on calm guidance.",
    description:
      "Emergency visits are handled with urgency, but also with reassurance. Patients should know what to do next and feel supported as soon as they contact the clinic.",
    points: [
      "Fast help for urgent dental concerns",
      "Clear next steps when pain or damage occurs",
      "A welcoming approach even during stressful visits",
    ],
  },
];

const commonVisitReasons = [
  "Tooth pain",
  "Routine cleaning",
  "Chipped tooth",
  "Whitening",
  "Child's first visit",
];

const trustReasons: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: MessageSquareHeart,
    title: "Clear communication",
    description:
      "Patients receive straightforward explanations so they feel informed, not overwhelmed.",
  },
  {
    icon: HeartHandshake,
    title: "Gentle care",
    description:
      "The clinic is designed to feel calm and supportive for routine visits, cosmetic care, and first-time patients.",
  },
  {
    icon: Sparkles,
    title: "Modern equipment",
    description:
      "Up-to-date tools and techniques support a clean, professional, and reassuring treatment experience.",
  },
  {
    icon: CalendarCheck2,
    title: "Personalized recommendations",
    description:
      "Care plans are tailored to patient needs, schedules, and comfort rather than one-size-fits-all treatment.",
  },
];

const reassuranceItems = [
  {
    question: "Are new patients welcome?",
    answer:
      "Yes. Willow Brook Dental Care welcomes new patients and works to make the first visit feel clear, calm, and comfortable.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes. The clinic offers pediatric and family dentistry, making it easier for children, teens, and adults to be seen in one trusted office.",
  },
  {
    question: "Can I come in for urgent pain?",
    answer:
      "Yes. Emergency dental visits are available for urgent discomfort, sudden pain, or unexpected dental problems that need prompt attention.",
  },
  {
    question: "Will you explain treatment clearly?",
    answer:
      "Yes. The team takes time to explain recommendations in patient-friendly language so visitors know what to expect and why it matters.",
  },
];

export function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Dental care that covers preventive, cosmetic, restorative, emergency, and family visits."
        description="Willow Brook Dental Care offers patient-friendly treatment options designed to feel clear, calm, and easy to understand, whether you need routine care or help with a specific concern."
        actions={
          <Button asChild variant="secondary">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        }
      />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Services Grid"
            title="A clear overview of the care available at Willow Brook Dental Care."
            description="Patients can scan this section quickly to find the type of care that fits their needs, from routine visits to urgent concerns."
          />
          <div className="mt-8 grid gap-3 rounded-xl border border-border bg-white p-4 shadow-card sm:grid-cols-2 lg:grid-cols-5">
            {commonVisitReasons.map((item) => (
              <div key={item} className="rounded-md bg-surface px-3 py-3 text-center">
                <p className="text-[0.98rem] font-semibold text-foreground">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
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
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="Featured Services"
            title="A little more detail for the care patients ask about most often."
            description="These larger sections offer a bit more context for common services while keeping the language clear, reassuring, and easy to follow."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {featuredServices.map((service) => (
              <Card
                key={service.title}
                className="h-full overflow-hidden border-primary/10 bg-[linear-gradient(160deg,#f9fcfd_0%,#edf5f8_60%,#ffffff_100%)] shadow-panel"
              >
                <div className="border-b border-border/80 bg-white/70 px-6 py-5">
                  <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                    {service.eyebrow}
                  </span>
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <ArrowRight className="mt-1 h-4 w-4 text-primary" />
                        <p className="text-[1rem] leading-7 text-foreground">{point}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Why Patients Choose Willow Brook"
            title="Treatment recommendations are grounded in comfort, clarity, and steady care."
            description="Patients are more likely to reach out when they understand how the clinic approaches treatment, not just what it offers."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trustReasons.map((item) => (
              <Card
                key={item.title}
                className="transition-transform duration-200 hover:-translate-y-0.5"
              >
                <CardHeader>
                  <IconContainer icon={item.icon} />
                  <CardTitle className="pt-3 text-[1.18rem]">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="Helpful Reassurance"
            title="A few quick answers can make reaching out feel easier."
            description="This section reduces uncertainty for patients who may still be deciding whether to call, book, or ask a question."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {reassuranceItems.map((item) => (
              <Card key={item.question}>
                <CardHeader>
                  <CardTitle className="text-[1.18rem]">{item.question}</CardTitle>
                  <CardDescription>{item.answer}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container size="narrow">
          <Card className="overflow-hidden border-primary/12 bg-[linear-gradient(160deg,#f9fcfd_0%,#e8f2f6_58%,#deece7_100%)] shadow-panel">
            <div className="p-8 sm:p-10">
              <SectionHeader
                eyebrow="Schedule a Visit"
                title="Ready to talk through your dental care options?"
                description="Whether you are due for a routine visit, exploring cosmetic treatment, or dealing with a more urgent concern, Willow Brook Dental Care is ready to help you take the next step."
                actions={
                  <>
                    <Button asChild size="lg">
                      <Link to="/contact">Book Appointment</Link>
                    </Button>
                    <Button asChild size="lg" variant="secondary">
                      <a href={clinicDetails.phoneHref}>Call the Clinic</a>
                    </Button>
                  </>
                }
                align="center"
              />
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
