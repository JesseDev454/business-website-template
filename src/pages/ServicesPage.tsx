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
import { IconContainer } from "@/components/ui/icon-container";
import { coreServices } from "@/lib/site";

export function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="A clean, scannable service layout for routine visits, cosmetic care, and urgent needs."
        description="This page keeps the content concise while validating the service-card pattern, icon styling, spacing system, and strong appointment call to action."
        actions={
          <Button asChild variant="secondary">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        }
      />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {coreServices.map((service) => (
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
    </>
  );
}
