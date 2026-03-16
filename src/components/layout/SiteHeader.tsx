import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { clinicDetails, primaryNavigation } from "@/lib/site";
import { cn } from "@/lib/utils";

function getNavLinkClass(isActive: boolean) {
  return cn(
    "relative text-[1rem] font-semibold transition-colors duration-200 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:rounded-full after:bg-primary after:transition-all after:duration-200",
    isActive
      ? "text-foreground after:w-full"
      : "text-muted-foreground after:w-0 hover:text-foreground hover:after:w-full",
  );
}

export function SiteHeader() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/88 backdrop-blur-md">
      <Container>
        <div className="flex min-h-20 items-center gap-4 py-2">
          <Link to="/" className="min-w-0 flex-1 md:flex-none">
            <div className="font-display text-[1.08rem] font-semibold text-foreground sm:text-xl">
              {clinicDetails.name}
            </div>
            <div className="text-sm text-muted-foreground">{clinicDetails.tagline}</div>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
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

      <div
        className={cn(
          "grid overflow-hidden border-t bg-white/98 shadow-card transition-[grid-template-rows,opacity,transform,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden",
          isOpen
            ? "grid-rows-[1fr] translate-y-0 border-border opacity-100"
            : "pointer-events-none grid-rows-[0fr] -translate-y-2 border-transparent opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <Container className="flex flex-col gap-5 py-5">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
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
                className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors duration-200 hover:bg-surface hover:text-foreground"
              >
                Call {clinicDetails.phone}
              </a>
              <Button asChild className="w-full">
                <Link to={clinicDetails.appointmentHref}>Book Appointment</Link>
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
