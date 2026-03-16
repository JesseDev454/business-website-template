import { type ReactNode } from "react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: PageHeaderProps) {
  return (
    <Section spacing="compact" className="border-b border-border bg-white/70">
      <Container>
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          actions={actions}
        />
      </Container>
    </Section>
  );
}
