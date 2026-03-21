import {
  Baby,
  ShieldCheck,
  Siren,
  Smile,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const clinicDetails = {
  name: "Willow Brook Dental Care",
  tagline: "Modern Dental Care with a Personal Touch",
  phone: "(555) 234-5678",
  phoneHref: "tel:+15552345678",
  email: "hello@willowbrookdental.com",
  emailHref: "mailto:hello@willowbrookdental.com",
  mapsHref: "https://maps.google.com/?q=123+Willow+Brook+Way+Suite+100+Springfield+IL+62704",
  addressLines: ["123 Willow Brook Way, Suite 100", "Springfield, IL 62704"],
  appointmentHref: "/contact",
  hours: [
    { label: "Monday - Thursday", value: "8:00 AM - 5:00 PM" },
    { label: "Friday", value: "8:00 AM - 2:00 PM" },
    { label: "Saturday", value: "Closed" },
    { label: "Sunday", value: "Closed" },
  ],
};

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const coreServices: ServiceItem[] = [
  {
    title: "Exams & Cleanings",
    description: "Routine preventive visits that keep families comfortable and informed.",
    icon: Stethoscope,
  },
  {
    title: "Preventive Dentistry",
    description: "Practical care plans and guidance that protect long-term oral health.",
    icon: ShieldCheck,
  },
  {
    title: "Teeth Whitening",
    description: "Simple cosmetic options for patients who want a brighter, more confident smile.",
    icon: Sparkles,
  },
  {
    title: "Veneers & Smile Design",
    description: "Cosmetic enhancements presented clearly and without pressure.",
    icon: Smile,
  },
  {
    title: "Family Dental Care",
    description: "Warm, approachable care for children, teens, and adults in one trusted clinic.",
    icon: Baby,
  },
  {
    title: "Emergency Visits",
    description: "Quick support when urgent dental issues need calm, reliable attention.",
    icon: Siren,
  },
];

export const galleryPlaceholders = [
  "Reception area",
  "Treatment room",
  "Consultation space",
  "Family-friendly lobby",
  "Team portrait",
  "Before and after examples",
];

export const trustHighlights = [
  "Accepting new patients",
  "Gentle care for anxious visitors",
  "Convenient weekday scheduling",
];
