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
      <Section spacing="compact" reveal={false} className="pb-20 pt-24 md:pt-32">
        <Container size="wide">
          <ContactHero />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-7">
              <ContactFormCard />
              <NewPatientNotice />
            </div>

            <div className="space-y-8 lg:col-span-5">
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
