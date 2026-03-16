import { Link } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function NotFoundPage() {
  return (
    <Section spacing="hero">
      <Container size="narrow">
        <Card className="text-center">
          <CardHeader>
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Page Not Found
            </span>
            <CardTitle>That page is not part of the current clinic site structure.</CardTitle>
            <CardDescription>
              Use the shared navigation to return to one of the main Sprint 2 routes.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button asChild>
              <Link to="/">Return Home</Link>
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
