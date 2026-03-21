import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { pageImages } from "@/lib/page-images";

const galleryCards = [
  {
    title: "Reception Area",
    description:
      "A warm, organized front desk and waiting area that helps visitors settle in quickly.",
    image: pageImages.gallery.reception,
    alt: "Modern high-end dental reception area with soft lighting and comfortable seating",
    className: "md:col-span-8 md:row-span-2",
    overlay: true,
  },
  {
    title: "Precision Tech",
    description: "Modern equipment that supports clear treatment and efficient visits.",
    image: pageImages.gallery.tech,
    alt: "Advanced dental digital imaging equipment and clean clinical surfaces",
    className: "md:col-span-4",
  },
  {
    title: "Patient Suites",
    description: "Treatment rooms designed to feel bright, clean, and reassuring.",
    image: pageImages.gallery.treatment,
    alt: "Relaxing dental treatment room with ergonomic chair and large window view",
    className: "md:col-span-4",
  },
  {
    title: "Our Caring Team",
    description: "Friendly staff presence that makes the clinic feel familiar and welcoming.",
    image: pageImages.gallery.team,
    alt: "Two friendly dental professionals smiling and working together in a bright office",
    className: "md:col-span-6",
  },
  {
    title: "Clinic Exterior",
    description: "A polished suburban practice that feels approachable from the street.",
    image: pageImages.gallery.exterior,
    alt: "Elegant clinic exterior in a peaceful suburban setting with green landscaping",
    className: "md:col-span-6",
  },
];

const hygienePoints = [
  "HEPA Air Filtration",
  "Digital Sterilization Tracking",
  "Touchless Technology",
  "Modern Safety Protocols",
];

export function GalleryPage() {
  return (
    <>
      <Section spacing="compact" reveal={false} className="px-4 pb-20 pt-28 md:px-6 lg:px-8">
        <Container size="wide">
          <header className="mb-16">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.22em] text-[#6c5e06]">
              Visual Journey
            </span>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight text-foreground md:text-6xl">
              Experience the <span className="text-primary">Clinic</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Explore the spaces, team presence, and clean treatment environment that help Willow
              Brook feel calm, modern, and reassuring for patients of all ages.
            </p>
          </header>

          <div className="grid auto-rows-[250px] gap-6 md:grid-cols-12 md:auto-rows-[300px]">
            {galleryCards.map((card) => (
              <div
                key={card.title}
                className={`group relative overflow-hidden rounded-xl bg-white shadow-card ${card.className}`}
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {card.overlay ? (
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h2 className="text-2xl font-bold text-white">{card.title}</h2>
                    <p className="mt-2 max-w-md text-base leading-7 text-white/80">
                      {card.description}
                    </p>
                  </div>
                ) : null}

                <div className="absolute bottom-6 left-6 rounded-lg bg-white/90 px-4 py-2 backdrop-blur-md">
                  <span className="text-sm font-bold text-primary">{card.title}</span>
                </div>
              </div>
            ))}
          </div>

          <section className="relative mt-32">
            <div className="flex flex-col items-center gap-12 overflow-hidden rounded-[2rem] bg-[#eeeee9] p-12 md:flex-row md:p-20">
              <div className="z-10 flex-1">
                <h2 className="mb-6 text-4xl font-bold leading-tight text-foreground">
                  Clean, Comfortable, and Ready for Every Visit
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                  Behind the welcoming look of the clinic is a strong focus on cleanliness,
                  sterilization, and organized treatment spaces that help patients feel confident in
                  every appointment.
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  {hygienePoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <ShieldCheck className="mt-1 h-5 w-5 text-primary" />
                      <span className="font-bold text-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-[400px] w-full flex-1 rotate-2 overflow-hidden rounded-2xl shadow-panel">
                <img
                  src={pageImages.gallery.hygiene}
                  alt="Macro shot of clinical sterilization tools and equipment in a blue light environment"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </section>

          <section className="relative mt-32 overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center text-white">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#4c7a97] opacity-50" />
            <div className="relative z-10">
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight">
                Ready to experience the difference?
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg text-[#c7e7ff]">
                Visit Willow Brook in person and see why local families trust us for clean,
                comfortable, patient-friendly dental care.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/92">
                  <Link to="/contact">Book Your Visit</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#c7e7ff] text-white hover:bg-white/10 hover:text-white"
                >
                  <Link to="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </section>
        </Container>
      </Section>
    </>
  );
}
