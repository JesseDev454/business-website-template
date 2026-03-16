import { Link } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { clinicDetails, primaryNavigation } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[#123041] text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div>
              <h2 className="font-display text-2xl text-white">{clinicDetails.name}</h2>
              <p className="mt-2 max-w-sm text-[1rem] leading-7 text-white/72">
                Calm, modern family and cosmetic dental care designed to feel clear,
                welcoming, and dependable.
              </p>
            </div>
            <a
              href={clinicDetails.phoneHref}
              className="inline-flex text-sm font-semibold text-white transition-opacity hover:opacity-80"
            >
              {clinicDetails.phone}
            </a>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Visit
            </h3>
            <div className="space-y-2 text-[1rem] text-white/78">
              {clinicDetails.addressLines.map((line) => (
                <p key={line} className="text-[1rem] leading-7 text-white/78">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Office Hours
            </h3>
            <ul className="space-y-2 text-[1rem] text-white/78">
              {clinicDetails.hours.map((item) => (
                <li key={item.label}>
                  <span className="block font-semibold text-white">{item.label}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-[1rem] text-white/78 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
}
