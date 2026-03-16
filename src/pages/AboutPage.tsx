import {
  HeartHandshake,
  MessageSquareHeart,
  ShieldCheck,
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

const values: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: HeartHandshake,
    title: "Gentle care",
    description:
      "Every visit is designed to feel calm, patient, and reassuring for children, adults, and nervous first-time patients.",
  },
  {
    icon: MessageSquareHeart,
    title: "Clear communication",
    description:
      "The team explains options in plain language so patients feel informed and comfortable before treatment begins.",
  },
  {
    icon: Stethoscope,
    title: "Comfort-focused visits",
    description:
      "Appointments are paced thoughtfully to reduce stress and help visitors feel supported throughout their care.",
  },
  {
    icon: Sparkles,
    title: "Modern techniques",
    description:
      "The clinic blends up-to-date dental care with a warm, neighborhood-practice atmosphere.",
  },
];

const teamMembers = [
  {
    name: "Dr. Elena Hart",
    role: "Lead Dentist",
    bio: "Dr. Hart leads the practice with a calm, family-focused approach built on preventive care, cosmetic guidance, and practical treatment planning.",
  },
  {
    name: "Sophie Nguyen",
    role: "Dental Hygienist",
    bio: "Sophie helps patients feel relaxed during routine visits and believes gentle care starts with listening closely and explaining each step.",
  },
  {
    name: "Marcus Reed",
    role: "Patient Care Coordinator",
    bio: "Marcus keeps scheduling, check-in, and follow-up support simple so every visit feels organized and welcoming from the start.",
  },
];

const reassuranceItems = [
  "Accepting new patients",
  "Family-friendly care",
  "Gentle approach",
  "Convenient scheduling",
];

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Willow Brook Dental Care"
        title="A welcoming neighborhood clinic built around comfort, trust, and dependable dental care."
        description="Learn more about the practice, the people behind it, and the calm, patient-focused approach that guides every visit."
        actions={
          <Button asChild variant="secondary">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        }
      />

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Clinic Introduction"
                title="Dental care that feels clear, calm, and approachable from the first visit."
                description="Willow Brook Dental Care is a modern family and cosmetic dental clinic serving a suburban community that values dependable care, friendly communication, and a comfortable patient experience."
              />
              <p className="max-w-2xl">
                The practice is designed for everyday dental needs, from routine cleanings and
                preventive visits to smile improvements and restorative care. Every part of the
                clinic experience is meant to feel welcoming, organized, and easy to trust.
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="aspect-[4/3] border-b border-border bg-[linear-gradient(160deg,#f8fcfd_0%,#e7f1f5_60%,#deece7_100%)] p-5">
                <div className="flex h-full flex-col justify-between rounded-lg border border-dashed border-border bg-white/45 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                    Clinic Photo Placeholder
                  </p>
                  <div>
                    <p className="text-lg font-semibold text-foreground">
                      Reserved for a warm exterior or reception image
                    </p>
                    <p className="mt-2 text-[1rem] leading-7 text-muted-foreground">
                      This space supports a realistic practice photo without changing the overall
                      layout structure later.
                    </p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="rounded-lg bg-surface p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    Patient Philosophy
                  </p>
                  <p className="mt-3 text-[1rem] leading-7 text-foreground">
                    The clinic believes patients should feel listened to, respected, and clearly
                    informed before any treatment begins.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Clinic Story</CardTitle>
                <CardDescription>
                  A local practice shaped by community connection and reliable care.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Willow Brook Dental Care began with a simple idea: create a neighborhood clinic
                  where patients could receive modern dental care without feeling rushed,
                  overwhelmed, or intimidated.
                </p>
                <p>
                  Over time, the practice has become a trusted option for families, working
                  adults, and longtime residents who want a dentist they can rely on for routine
                  visits, cosmetic improvements, and honest treatment guidance.
                </p>
                <p>
                  The clinic remains committed to serving the local community with the kind of care
                  that feels personal, steady, and genuinely welcoming.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <SectionHeader
                eyebrow="Community Focus"
                title="A practice built for real neighborhood patients and everyday dental needs."
                description="Willow Brook Dental Care is designed to feel like a trusted local practice where patients can return for steady care year after year."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Card interactive>
                  <CardHeader>
                    <CardTitle className="text-[1.15rem]">Family-centered care</CardTitle>
                    <CardDescription>
                      Designed for households who want one trusted clinic for preventive and
                      ongoing dental visits.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card interactive>
                  <CardHeader>
                    <CardTitle className="text-[1.15rem]">Reliable guidance</CardTitle>
                    <CardDescription>
                      A calm approach to treatment planning helps patients feel confident in the
                      decisions they make.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-panel">
              <div className="aspect-[4/5] rounded-xl border border-dashed border-border bg-[linear-gradient(180deg,#edf5f8_0%,#dfecee_100%)] p-5">
                <div className="flex h-full flex-col justify-between rounded-xl bg-white/50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                    Dentist Photo Placeholder
                  </p>
                  <div>
                    <p className="text-lg font-semibold text-foreground">
                      Lead dentist portrait placement
                    </p>
                    <p className="mt-2 text-[1rem] leading-7 text-muted-foreground">
                      Reserved for a friendly, professional photo that reinforces trust and
                      familiarity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <SectionHeader
                eyebrow="Meet the Dentist"
                title="Dr. Elena Hart"
                description="Lead Dentist"
              />
              <p className="max-w-2xl">
                Dr. Hart brings years of experience in family and cosmetic dentistry to Willow
                Brook Dental Care. She is known for a calm chairside manner, clear explanations,
                and a thoughtful approach that helps patients feel comfortable asking questions and
                understanding their options.
              </p>
              <p className="max-w-2xl">
                Her goal is to combine modern dental techniques with the warmth of a true
                neighborhood practice, so patients feel both well cared for and genuinely welcome
                every time they visit.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card interactive>
                  <CardHeader>
                    <CardTitle className="text-[1.12rem]">Calm chairside approach</CardTitle>
                    <CardDescription>
                      Patients are encouraged to ask questions and move through care at a pace that
                      feels comfortable.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card interactive>
                  <CardHeader>
                    <CardTitle className="text-[1.12rem]">Family and cosmetic experience</CardTitle>
                    <CardDescription>
                      Routine visits, restorative care, and smile improvements are all guided with
                      the same clear, patient-focused mindset.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <div>
                <Button asChild variant="secondary">
                  <Link to="/contact">Schedule a Visit</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="Team Section"
            title="The people behind the practice help every visit feel organized and supportive."
            description="Meeting the team ahead of time helps patients feel more familiar with the clinic before their first visit."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card key={member.name} interactive>
                <div className="aspect-[4/3] border-b border-border bg-[linear-gradient(160deg,#f8fbfc_0%,#e6eff3_100%)] p-4">
                  <div className="motion-interactive flex h-full items-end rounded-lg border border-dashed border-border bg-white/45 p-4 group-hover:scale-[1.015]">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      Team Photo {index + 1}
                    </p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="font-semibold text-primary">
                    {member.role}
                  </CardDescription>
                  <CardDescription>{member.bio}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Clinic Values"
            title="The clinic experience is shaped by comfort, communication, and steady care."
            description="These values guide how the team communicates, treats patients, and helps each visit feel more comfortable."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} interactive>
                <CardHeader>
                  <IconContainer icon={value.icon} />
                  <CardTitle className="pt-3 text-[1.18rem]">{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Office Environment"
                title="Patients can expect a visit that feels calm, welcoming, and easy to navigate."
                description="From the front desk to the treatment room, the goal is to help patients feel settled, respected, and comfortable."
              />
              <div className="mt-6 space-y-4">
                <p className="max-w-2xl">
                  Visits begin with a friendly check-in process, clear guidance, and a reception
                  area that feels bright, organized, and welcoming. Patients should feel settled
                  quickly rather than overwhelmed.
                </p>
                <p className="max-w-2xl">
                  Treatment rooms are designed to feel clean and professional without becoming
                  cold or intimidating. Whether someone is here for a routine cleaning, a cosmetic
                  consultation, or restorative care, the experience should feel steady, respectful,
                  and reassuring from start to finish.
                </p>
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="aspect-[4/3] border-b border-border bg-[linear-gradient(160deg,#f7fbfc_0%,#e4eef2_100%)] p-5">
                <div className="flex h-full flex-col justify-end rounded-lg border border-dashed border-border bg-white/45 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    Office Interior Placeholder
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="rounded-lg bg-surface p-5">
                  <p className="text-[1rem] leading-7 text-foreground">
                    A clean, welcoming environment helps reinforce the clinic's promise of
                    comfortable and reliable dental care.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-3 rounded-xl border border-border bg-white p-4 shadow-card sm:grid-cols-2 lg:grid-cols-4">
            {reassuranceItems.map((item) => (
              <div key={item} className="rounded-md px-3 py-2">
                <p className="text-[0.96rem] font-semibold text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container size="narrow">
          <Card className="overflow-hidden border-primary/12 bg-[linear-gradient(160deg,#f9fcfd_0%,#e8f2f6_58%,#deece7_100%)] shadow-panel">
            <div className="p-8 sm:p-10">
              <SectionHeader
                eyebrow="Closing Reassurance"
                title="If you are looking for a dental clinic that feels calm, clear, and dependable, Willow Brook Dental Care is ready to help."
                description="Whether you are booking a routine visit, bringing in your family, or exploring treatment options, the team is here to make the next step feel simple and comfortable."
                actions={
                  <>
                    <Button asChild size="lg">
                      <Link to="/contact">Book Appointment</Link>
                    </Button>
                    <Button asChild size="lg" variant="secondary">
                      <Link to="/services">View Services</Link>
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
