import { MotionReveal } from "@/components/motion/MotionReveal";

export function ContactHero() {
  return (
    <header className="mb-16">
      <MotionReveal
        as="h1"
        mode="load"
        delay={80}
        className="font-display text-5xl font-extrabold tracking-tight text-primary md:text-6xl"
      >
        Connect With Our Team
      </MotionReveal>
      <MotionReveal
        as="p"
        mode="load"
        delay={160}
        className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
      >
        Whether you are a returning patient or reaching out for the first time, our team is here
        to help with appointment requests, questions, and next-step guidance in a calm, welcoming
        way.
      </MotionReveal>
    </header>
  );
}
