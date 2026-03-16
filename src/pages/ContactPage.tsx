import { Clock3, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { clinicDetails } from "@/lib/site";

export function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="A practical contact foundation for calls, clinic details, and appointment inquiries."
        description="This page stays intentionally simple for Sprint 2 while giving the project a clear place for contact details and future inquiry elements."
        actions={
          <Button asChild variant="secondary">
            <a href={clinicDetails.phoneHref}>Call the Clinic</a>
          </Button>
        }
      />

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Visit or Call</CardTitle>
                  <CardDescription>
                    Clear location and phone details help the contact page feel useful immediately.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a
                      href={clinicDetails.phoneHref}
                      className="text-[1rem] font-semibold text-foreground"
                    >
                      {clinicDetails.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                  <CardDescription>
                    A simple card structure for schedule details and future patient guidance.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {clinicDetails.hours.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <Clock3 className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="text-[1rem] font-semibold text-foreground">{item.label}</p>
                        <p className="text-[0.98rem] text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Card className="h-full">
              <CardHeader>
                <CardTitle>Appointment Inquiry Placeholder</CardTitle>
                <CardDescription>
                  This reserved area gives the project a clean place for a future contact form,
                  confirmation messaging, or map embed without adding full functionality yet.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex h-full flex-col justify-between gap-6">
                <div className="rounded-lg border border-dashed border-border bg-surface p-6">
                  <p className="text-[1rem] leading-7 text-muted-foreground">
                    Form fields and richer contact content will be introduced in a later sprint.
                  </p>
                </div>
                <Button asChild className="w-full sm:w-auto">
                  <a href={clinicDetails.phoneHref}>Call to Request a Visit</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
