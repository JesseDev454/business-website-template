import { Link } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { galleryPlaceholders } from "@/lib/site";

export function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A simple image-grid foundation for clinic spaces, team photos, and reception views."
        description="This route is intentionally lightweight and focused on layout, image ratios, and caption structure so the full gallery can be added later."
        actions={
          <Button asChild variant="secondary">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        }
      />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryPlaceholders.map((item) => (
              <Card key={item}>
                <CardHeader>
                  <div className="aspect-[4/3] rounded-lg border border-dashed border-border bg-surface" />
                  <CardTitle className="pt-2">{item}</CardTitle>
                  <CardDescription>
                    Placeholder space for clean, realistic clinic photography.
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
