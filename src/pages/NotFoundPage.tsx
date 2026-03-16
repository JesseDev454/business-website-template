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
        <Card className="overflow-hidden border-primary/12 bg-[linear-gradient(160deg,#f9fcfd_0%,#e8f2f6_58%,#deece7_100%)] text-center shadow-panel">
          <CardHeader>
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              404 Page Not Found
            </span>
            <CardTitle>That page could not be found.</CardTitle>
            <CardDescription>
              The page you were looking for may have moved or may not exist. You can return to the
              homepage or head back to the main clinic pages below.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild className="w-full sm:w-auto">
              <Link to="/">Return Home</Link>
            </Button>
            <Button asChild variant="secondary" className="w-full sm:w-auto">
              <Link to="/contact">Contact the Clinic</Link>
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
