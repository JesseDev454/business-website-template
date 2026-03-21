import { ArrowRight, Heart, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { pageImages } from "@/lib/page-images";

const values = [
  {
    icon: Sparkles,
    title: "Patient Comfort",
    description:
      "Small details, gentle communication, and a calm pace help visits feel easier from the moment patients arrive.",
    tone: "bg-[#9fcced]",
  },
  {
    icon: ShieldCheck,
    title: "Modern Care",
    description:
      "Digital tools and up-to-date clinical techniques support clear treatment planning and dependable care.",
    tone: "bg-[#cde6f4]",
  },
  {
    icon: Heart,
    title: "Personal Connection",
    description:
      "Patients are treated like neighbors, not numbers, with real conversation and steady long-term relationships.",
    tone: "bg-[#f7e382]",
  },
];

const teamMembers = [
  {
    name: "Dr. Elena Vance",
    role: "Lead Dentist & Founder",
    bio: "Dr. Vance leads the practice with a warm, modern approach to family and restorative dental care.",
    image: pageImages.about.team[0],
    alt: "Professional portrait of Dr. Elena Vance smiling warmly",
  },
  {
    name: "Dr. Marcus Thorne",
    role: "Restorative Dentist",
    bio: "Dr. Thorne focuses on practical treatment planning and patient confidence during more involved care.",
    image: pageImages.about.team[1],
    alt: "Portrait of Dr. Marcus Thorne in a modern clinic",
  },
  {
    name: "Sarah Chen",
    role: "Lead Dental Hygienist",
    bio: "Sarah helps patients feel relaxed, informed, and supported throughout preventive visits and ongoing care.",
    image: pageImages.about.team[2],
    alt: "Professional portrait of head hygienist Sarah Chen",
  },
];

export function AboutPage() {
  return (
    <>
      <Section spacing="hero" reveal={false} className="overflow-hidden px-4 pt-24 md:px-6 lg:px-8">
        <Container size="wide">
          <div className="grid items-center gap-12 md:grid-cols-12">
            <div className="z-10 md:col-span-7">
              <span className="mb-6 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-secondary-foreground">
                Established 2008
              </span>
              <h1 className="mb-8 text-5xl font-extrabold leading-tight text-primary md:text-7xl">
                The Neighborhood Practice for <span className="text-[#6c5e06]">Modern Smiles.</span>
              </h1>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Willow Brook Dental Care was built to feel calm, personal, and dependable. We
                combine modern treatment with the warmth of a trusted local practice.
              </p>
            </div>

            <div className="relative md:col-span-5">
              <div className="aspect-[4/5] rotate-2 overflow-hidden rounded-[2rem] bg-[#e3e3de] shadow-panel">
                <img
                  src={pageImages.about.heroMain}
                  alt="Modern serene dental office interior with warm lighting"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-10 hidden aspect-square w-56 -rotate-6 overflow-hidden rounded-[1.75rem] border-8 border-background shadow-card md:block">
                <img
                  src={pageImages.about.heroSecondary}
                  alt="A smiling dentist talking kindly to a patient"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted" className="bg-[#f4f4ef] px-4 md:px-6 lg:px-8">
        <Container size="wide" className="grid items-center gap-20 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-12 shadow-card">
              <div className="absolute right-0 top-0 p-8 opacity-10">
                <span className="font-display text-8xl">01</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold text-primary">How We Started</h2>
              <p className="mb-6 text-base leading-7 text-muted-foreground">
                Willow Brook Dental Care began with a simple goal: create a practice where local
                families could receive modern dental treatment in a setting that feels reassuring
                and personal.
              </p>
              <p className="text-base leading-7 text-muted-foreground">
                Over the years, the clinic has grown alongside the community, earning trust through
                clear communication, steady care, and a patient experience that feels genuinely
                welcoming.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h3 className="mb-4 text-xl font-bold text-[#4c7a97]">Practice Values</h3>
            <div className="space-y-10">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-6">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${item.tone}`}
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="px-4 md:px-6 lg:px-8">
        <Container size="wide">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-primary">Our Philosophy</h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground">
              Willow Brook blends modern clinical standards with the feel of a trusted neighborhood
              office, making high-quality care feel more approachable.
            </p>
          </div>

          <div className="grid auto-rows-[250px] gap-6 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-[2rem] bg-primary p-12 text-white md:col-span-2 md:row-span-2">
              <div className="absolute inset-0 opacity-20">
                <img
                  src={pageImages.about.philosophy}
                  alt="Abstract soft focus of high-tech dental equipment"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative z-10 mt-auto flex h-full flex-col justify-end">
                <h3 className="mb-4 text-3xl font-bold text-white">The Future of Care</h3>
                <p className="max-w-md text-base leading-7 text-white/85">
                  Our team invests in modern technology and clear treatment planning so patients
                  can move forward with confidence and comfort.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-[2rem] bg-[#e8e8e3] p-8 text-center">
              <span className="mb-2 font-display text-4xl font-black text-primary">98%</span>
              <p className="text-sm font-semibold text-muted-foreground">Patient Comfort Rating</p>
            </div>

            <div className="flex flex-col justify-center rounded-[2rem] bg-secondary p-8 text-center">
              <span className="mb-2 font-display text-4xl font-black text-secondary-foreground">
                15+
              </span>
              <p className="text-sm font-semibold text-secondary-foreground">Years in Community</p>
            </div>

            <div className="rounded-[2rem] bg-white p-10 shadow-card">
              <div className="mb-4 flex gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-[#6c5e06] text-[#6c5e06]" />
                ))}
              </div>
              <p className="mb-4 text-sm italic leading-6 text-muted-foreground">
                "This is the first office that has ever made dental visits feel calm and easy."
              </p>
              <span className="font-bold text-primary">Sarah J., Naperville Resident</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-background px-4 md:px-6 lg:px-8">
        <Container size="wide">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="mb-6 text-4xl font-extrabold text-primary">
                Expert Hands, Kind Hearts
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                Meet the people who help make Willow Brook feel thoughtful, organized, and
                genuinely welcoming from the first hello.
              </p>
            </div>
            <Button asChild variant="link" className="px-0">
              <Link to="/contact">
                Schedule a Visit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} className="group">
                <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-[2rem] bg-[#e3e3de]">
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  {member.role}
                </p>
                <p className="text-sm leading-6 text-muted-foreground">{member.bio}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
