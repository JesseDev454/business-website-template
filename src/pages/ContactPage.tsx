import {
  CalendarCheck2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";

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

const reassuranceItems = [
  {
    title: "Accepting new patients",
    description: "New patients are always welcome, whether you need a routine visit or have a specific dental concern.",
    icon: ShieldCheck,
  },
  {
    title: "Family-friendly care",
    description: "The clinic is set up for children, teens, and adults, making family scheduling feel simpler and more convenient.",
    icon: Users,
  },
  {
    title: "Convenient scheduling",
    description: "Weekday appointment times are designed to work well for school, work, and regular dental visits.",
    icon: CalendarCheck2,
  },
  {
    title: "Emergency visit support",
    description: "If you are dealing with urgent discomfort or sudden dental pain, the clinic can help you understand the next step quickly.",
    icon: Phone,
  },
];

export function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Reach out with questions, appointment requests, or general dental concerns."
        description="Whether you are ready to book a visit or simply want to ask a question first, Willow Brook Dental Care makes it easy to get in touch in a way that feels clear and comfortable."
        actions={
          <Button asChild variant="secondary">
            <a href={clinicDetails.phoneHref}>Call the Clinic</a>
          </Button>
        }
      />

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Everything you need to call, email, or visit the clinic is listed here in one easy-to-scan place.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="rounded-lg bg-surface p-5">
                    <div className="flex items-start gap-3">
                      <Phone className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="text-[1rem] font-semibold text-foreground">Call Us</p>
                        <a
                          href={clinicDetails.phoneHref}
                          className="mt-2 block text-[1.55rem] font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
                        >
                          {clinicDetails.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-[1rem] font-semibold text-foreground">Email</p>
                      <a
                        href={clinicDetails.emailHref}
                        className="text-[1rem] text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {clinicDetails.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-[1rem] font-semibold text-foreground">Address</p>
                      {clinicDetails.addressLines.map((line) => (
                        <p key={line} className="text-[1rem] leading-7 text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-1 h-5 w-5 text-primary" />
                    <div className="space-y-2">
                      <p className="text-[1rem] font-semibold text-foreground">Office Hours</p>
                      {clinicDetails.hours.map((item) => (
                        <div key={item.label}>
                          <p className="text-[0.98rem] font-semibold text-foreground">
                            {item.label}
                          </p>
                          <p className="text-[0.98rem] text-muted-foreground">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-[4/3] border-b border-border bg-[linear-gradient(160deg,#f8fbfc_0%,#e6eff3_100%)] p-5">
                  <div className="flex h-full flex-col justify-between rounded-xl border border-dashed border-border bg-white/45 p-5">
                    <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                      Visit Our Clinic
                    </span>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-foreground">
                        {clinicDetails.name}
                      </p>
                      <div className="space-y-1">
                        {clinicDetails.addressLines.map((line) => (
                          <p key={line} className="text-[0.98rem] text-muted-foreground">
                            {line}
                          </p>
                        ))}
                      </div>
                      <p className="text-[1rem] leading-7 text-muted-foreground">
                        Located in a welcoming suburban area near local schools, neighborhood shops,
                        and everyday community amenities.
                      </p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="rounded-lg bg-surface p-5">
                    <p className="text-[1rem] leading-7 text-foreground">
                      Patients can expect a convenient neighborhood location that feels easy to
                      find, easy to park near, and comfortable to visit.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="h-full overflow-hidden">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Use the form below to request an appointment, ask a question, or get in touch
                  with the clinic.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-[0.98rem] font-semibold text-foreground">Full Name</span>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="h-12 w-full rounded-sm border border-border bg-white px-4 text-[1rem] text-foreground transition-colors duration-200 placeholder:text-muted-foreground focus:border-primary"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-[0.98rem] font-semibold text-foreground">Email</span>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-sm border border-border bg-white px-4 text-[1rem] text-foreground transition-colors duration-200 placeholder:text-muted-foreground focus:border-primary"
                    />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-[0.98rem] font-semibold text-foreground">Phone Number</span>
                    <input
                      type="tel"
                      placeholder="(555) 555-5555"
                      className="h-12 w-full rounded-sm border border-border bg-white px-4 text-[1rem] text-foreground transition-colors duration-200 placeholder:text-muted-foreground focus:border-primary"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-[0.98rem] font-semibold text-foreground">Reason for Inquiry</span>
                    <select className="h-12 w-full rounded-sm border border-border bg-white px-4 text-[1rem] text-foreground transition-colors duration-200 focus:border-primary">
                      <option>Appointment Request</option>
                      <option>General Question</option>
                      <option>Emergency Visit</option>
                      <option>New Patient Inquiry</option>
                      <option>Family Appointment</option>
                    </select>
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-[0.98rem] font-semibold text-foreground">Message</span>
                  <textarea
                    rows={6}
                    placeholder="Tell us how we can help."
                    className="min-h-36 w-full rounded-sm border border-border bg-white px-4 py-3 text-[1rem] text-foreground transition-colors duration-200 placeholder:text-muted-foreground focus:border-primary"
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-[0.98rem] leading-7 text-muted-foreground">
                    A team member can follow up by phone or email based on the information you
                    provide here.
                  </p>
                  <Button className="w-full">Send Message</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="New Patient Reassurance"
            title="Reaching out should feel simple, clear, and low-pressure."
            description="A few simple reminders can make it easier to call, message, or request a visit with confidence."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reassuranceItems.map((item) => (
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

      <Section spacing="compact">
        <Container size="narrow">
          <Card className="overflow-hidden border-primary/12 bg-[linear-gradient(160deg,#f9fcfd_0%,#e8f2f6_58%,#deece7_100%)] shadow-panel">
            <div className="p-8 sm:p-10">
              <SectionHeader
                eyebrow="Schedule a Visit"
                title="Ready to request an appointment or ask a question?"
                description="Call the clinic, send a message, or reach out to request a visit. Willow Brook Dental Care is here to help you take the next step comfortably."
                actions={
                  <>
                    <Button asChild size="lg">
                      <a href={clinicDetails.phoneHref}>Call the Clinic</a>
                    </Button>
                    <Button asChild size="lg" variant="secondary">
                      <a href={clinicDetails.emailHref}>Send an Email</a>
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
