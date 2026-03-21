import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { clinicDetails, primaryNavigation } from "@/lib/site";
import { cn } from "@/lib/utils";

function getNavLinkClass(isActive: boolean) {
  return cn(
    "relative border-b-2 pb-1 font-display text-[1rem] font-bold tracking-tight transition-colors duration-200",
    isActive
      ? "border-primary text-primary"
      : "border-transparent text-muted-foreground hover:text-primary",
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
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 shadow-sm backdrop-blur-md">
      <Container size="wide">
        <div className="flex min-h-20 items-center gap-4 py-2">
          <Link to="/" className="min-w-0 flex-1 md:flex-none">
            <div className="font-display text-lg font-extrabold tracking-tight text-primary sm:text-xl">
              {clinicDetails.name}
            </div>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 md:flex"
          >
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

          <div className="hidden items-center md:flex">
            <Button asChild size="sm" className="px-6">
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
          <Container size="wide" className="flex flex-col gap-5 py-5">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
              {primaryNavigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) =>
                    cn(
                      "rounded-xl px-3 py-2 text-base font-semibold transition-colors duration-200",
                      isActive
                        ? "bg-surface text-primary"
                        : "text-muted-foreground hover:bg-surface hover:text-primary",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
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
