import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { clinicDetails, primaryNavigation } from "@/lib/site";
import { cn } from "@/lib/utils";

function getNavLinkClass(isActive: boolean) {
  return cn(
    "text-[1rem] font-semibold transition-colors duration-200",
    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
  );
}

export function SiteHeader() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/88 backdrop-blur-md">
      <Container>
        <div className="flex min-h-20 items-center gap-4">
          <Link to="/" className="min-w-0 flex-1 md:flex-none">
            <div className="font-display text-[1.15rem] font-semibold text-foreground sm:text-xl">
              {clinicDetails.name}
            </div>
            <div className="text-sm text-muted-foreground">{clinicDetails.tagline}</div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {primaryNavigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href={clinicDetails.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              {clinicDetails.phone}
            </a>
            <Button asChild size="sm">
              <Link to={clinicDetails.appointmentHref}>Book Appointment</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </Container>

      {isOpen ? (
        <div className="border-t border-border bg-white md:hidden">
          <Container className="flex flex-col gap-5 py-5">
            <nav className="flex flex-col gap-2">
              {primaryNavigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-3 py-2 text-base font-semibold transition-colors duration-200",
                      isActive
                        ? "bg-surface text-foreground"
                        : "text-muted-foreground hover:bg-surface hover:text-foreground",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <a
                href={clinicDetails.phoneHref}
                className="text-sm font-semibold text-muted-foreground"
              >
                Call {clinicDetails.phone}
              </a>
              <Button asChild className="w-full">
                <Link to={clinicDetails.appointmentHref}>Book Appointment</Link>
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
