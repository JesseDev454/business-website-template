import { ArrowRight, CalendarCheck2, HeartHandshake, Sparkles } from "lucide-react";
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

const galleryCategories = [
  "Clinic Interior",
  "Reception Area",
  "Treatment Rooms",
  "Team and Staff",
  "Patient Care",
  "Smile Results",
];

const galleryImages = [
  {
    title: "Front Desk Welcome",
    category: "Reception Area",
    description: "A clean, friendly first impression for patients as they arrive.",
  },
  {
    title: "Bright Treatment Room",
    category: "Treatment Rooms",
    description: "Organized spaces that feel calm, modern, and easy to trust.",
  },
  {
    title: "Comfortable Waiting Area",
    category: "Clinic Interior",
    description: "A welcoming environment with soft finishes and clear sightlines.",
  },
  {
    title: "Lead Dentist Portrait",
    category: "Team and Staff",
    description: "Professional team imagery that helps visitors feel more familiar with the practice.",
  },
  {
    title: "Patient Care Moment",
    category: "Patient Care",
    description: "A reassuring look at how visits feel calm and supported.",
  },
  {
    title: "Dental Equipment View",
    category: "Treatment Rooms",
    description: "Modern tools presented in a clean, professional setting.",
  },
  {
    title: "Family-Friendly Check-In",
    category: "Reception Area",
    description: "A practical, welcoming space that feels easy for parents and children alike.",
  },
  {
    title: "Smile Result Preview",
    category: "Smile Results",
    description: "A thoughtful place for before-and-after examples when used appropriately.",
  },
  {
    title: "Consultation Space",
    category: "Clinic Interior",
    description: "A calm setting for treatment conversations and patient questions.",
  },
];

const featuredGalleryRow = [
  {
    title: "A welcoming first impression of the clinic",
    description:
      "Reserved for a wider image that highlights the reception area, entry, or overall clinic atmosphere patients notice first.",
    label: "Front Desk",
  },
  {
    title: "A closer look at the patient-friendly environment",
    description:
      "A second featured image can emphasize treatment comfort, family-friendly details, or the warm feel of the space.",
    label: "Family Waiting Area",
  },
];

const reassurancePoints = [
  "Calm, modern spaces designed to reduce stress",
  "A clean and organized environment for patients of all ages",
  "Friendly staff presence that helps the clinic feel familiar",
];

export function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Take a look at the clinic environment and the welcoming atmosphere patients can expect."
        description="The Willow Brook Dental Care gallery gives visitors a clearer sense of the practice, from the reception area to treatment spaces and the calm, patient-friendly environment throughout the clinic."
        actions={
          <Button asChild variant="secondary">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        }
      />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Visual Overview"
            title="A clean, structured gallery that helps visitors feel more familiar with the practice."
            description="The gallery is designed to help patients picture the clinic, the team, and the kind of welcoming environment they will walk into."
          />
          <div className="mt-8 grid gap-3 rounded-xl border border-border bg-white p-4 shadow-card sm:grid-cols-2 lg:grid-cols-3">
            {galleryCategories.map((category) => (
              <div key={category} className="rounded-md bg-surface px-3 py-3 text-center">
                <p className="text-[0.98rem] font-semibold text-foreground">{category}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="compact" className="pt-0">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredGalleryRow.map((item, index) => (
              <Card
                key={item.title}
                interactive
                className="overflow-hidden border-primary/10 bg-[linear-gradient(160deg,#f9fcfd_0%,#edf5f8_60%,#ffffff_100%)] shadow-panel"
              >
                <div className="aspect-[16/9] border-b border-border bg-[linear-gradient(160deg,#f8fbfc_0%,#e6eff3_100%)] p-5">
                  <div className="motion-interactive flex h-full flex-col justify-between rounded-xl border border-dashed border-border bg-white/45 p-5 shadow-card group-hover:scale-[1.015]">
                    <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                      Featured {index + 1}
                    </span>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-foreground">Featured clinic image</p>
                      <p className="text-sm font-semibold text-muted-foreground">{item.label}</p>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
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
            eyebrow="Image Grid"
            title="A balanced layout for clinic spaces, team presence, and patient-friendly details."
            description="Each gallery tile represents the kind of photography that helps patients feel more comfortable and familiar with the clinic before they visit."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryImages.map((image) => (
              <Card key={image.title} interactive className="overflow-hidden">
                <div className="aspect-[4/3] border-b border-border bg-[linear-gradient(160deg,#f8fbfc_0%,#e6eff3_100%)] p-4">
                  <div className="motion-interactive flex h-full flex-col justify-between rounded-lg border border-dashed border-border bg-white/45 p-4 group-hover:scale-[1.02]">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      {image.category}
                    </span>
                    <div className="space-y-2">
                      <p className="text-[1rem] font-semibold text-foreground">Gallery image</p>
                      <p className="text-sm font-semibold text-muted-foreground">{image.title}</p>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-[1.18rem]">{image.title}</CardTitle>
                  <CardDescription>{image.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Trust and Reassurance"
                title="Willow Brook Dental Care is designed to feel calm, modern, and comfortable for patients of all ages."
                description="The clinic environment supports more than cleanliness. It helps patients feel reassured, oriented, and comfortable whether they are arriving for a routine visit, a family appointment, or a more urgent concern."
              />
              <div className="mt-6 space-y-3">
                {reassurancePoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-lg border border-border bg-white px-4 py-4 shadow-card"
                  >
                    <p className="text-[1rem] font-semibold text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="aspect-[4/3] border-b border-border bg-[linear-gradient(160deg,#f7fbfc_0%,#e4eef2_100%)] p-5">
                <div className="flex h-full flex-col justify-between rounded-xl border border-dashed border-border bg-white/45 p-5">
                  <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                    Clinic Atmosphere
                  </span>
                  <div className="flex items-center gap-3">
                    <HeartHandshake className="h-5 w-5 text-primary" />
                    <p className="text-[1rem] font-semibold text-foreground">
                      Reserved for a welcoming space or patient-care image
                    </p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="rounded-lg bg-surface p-5">
                  <p className="text-[1rem] leading-7 text-foreground">
                    The gallery helps visitors picture a visit that feels clean, well-organized,
                    and gently reassuring from the moment they arrive.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container size="narrow">
          <Card className="overflow-hidden border-primary/12 bg-[linear-gradient(160deg,#f9fcfd_0%,#e8f2f6_58%,#deece7_100%)] shadow-panel">
            <div className="p-8 sm:p-10">
              <SectionHeader
                eyebrow="Schedule a Visit"
                title="Ready to see Willow Brook Dental Care in person?"
                description="If the clinic feels like the kind of calm, welcoming dental office you have been looking for, the next step is simple. Book an appointment or contact the team today."
                actions={
                  <>
                    <Button asChild size="lg">
                      <Link to="/contact">
                        Book Appointment
                        <CalendarCheck2 className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="secondary">
                      <Link to="/contact">
                        Contact the Clinic
                        <ArrowRight className="h-4 w-4" />
                      </Link>
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
