import { BookingCtaCard } from "@/components/contact/BookingCtaCard";
import { ContactFormCard } from "@/components/contact/ContactFormCard";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";
import { MapCard } from "@/components/contact/MapCard";
import { NewPatientNotice } from "@/components/contact/NewPatientNotice";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function ContactPage() {
  return (
    <>
      <ContactHero />

      <Section spacing="compact" className="pt-0">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] xl:gap-10">
            <div className="space-y-6">
              <ContactFormCard />
              <NewPatientNotice />
            </div>

            <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <ContactInfoCard />
              <MapCard />
              <BookingCtaCard />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
