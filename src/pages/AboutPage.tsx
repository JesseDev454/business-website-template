import { Link } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const aboutBlocks = [
  {
    title: "Practice Story",
    description:
      "A calm section for the clinic introduction, neighborhood roots, and overall patient philosophy.",
  },
  {
    title: "Patient Approach",
    description:
      "Space for explaining comfort, communication, and what visitors can expect during a visit.",
  },
  {
    title: "Team Preview",
    description:
      "A reusable card pattern for dentist and staff introductions without building the full About page yet.",
  },
];

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Clinic"
        title="A shared page structure for the clinic story, team, and patient values."
        description="This route stays intentionally light while establishing the consistent header, content rhythm, and card layout the About page will build on later."
        actions={
          <Button asChild variant="secondary">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        }
      />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Section Layout"
            title="Simple, flexible content blocks for credibility and reassurance."
            description="The About page shell is designed to hold practice story content, team introductions, and trust-building details without forcing a complex layout."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {aboutBlocks.map((block) => (
              <Card key={block.title}>
                <CardHeader>
                  <CardTitle>{block.title}</CardTitle>
                  <CardDescription>{block.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
