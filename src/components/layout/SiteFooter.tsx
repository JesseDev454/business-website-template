import { Link } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { clinicDetails, primaryNavigation } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 w-full rounded-t-3xl bg-[#eeeee9]">
      <Container size="wide" className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="text-lg font-bold text-primary">{clinicDetails.name}</div>
            <p className="max-w-xs text-sm leading-6 text-muted-foreground">
              Modern, patient-friendly dental care for families and individuals in a calm,
              welcoming setting.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.22em] text-primary">
              Navigation
            </h3>
            <nav aria-label="Footer navigation" className="flex flex-col gap-3">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.22em] text-primary">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                {clinicDetails.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <a href={clinicDetails.phoneHref} className="block transition-colors hover:text-primary">
                {clinicDetails.phone}
              </a>
              <a href={clinicDetails.emailHref} className="block transition-colors hover:text-primary">
                {clinicDetails.email}
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.22em] text-primary">
              Hours
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {clinicDetails.hours.map((item) => (
                <li key={item.label} className="flex justify-between gap-4">
                  <span>{item.label}</span>
                  <span className={item.value === "Closed" ? "font-semibold text-primary" : ""}>
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border/70 pt-8">
          <div className="flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>© 2024 Willow Brook Dental Care. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                Terms of Service
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
