import { MapPin } from "lucide-react";

import { pageImages } from "@/lib/page-images";
import { clinicDetails } from "@/lib/site";

export function MapCard() {
  return (
    <div className="group relative h-72 overflow-hidden rounded-xl shadow-sm">
      <img
        src={pageImages.contact.map}
        alt="Modern suburban street map with clinic location"
        className="h-full w-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-8 ring-primary/20">
          <MapPin className="h-7 w-7" />
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 rounded-lg bg-white/90 p-3 backdrop-blur-md">
        <span className="text-sm font-bold text-foreground">{clinicDetails.name}</span>
        <a
          href={clinicDetails.mapsHref}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-bold text-primary transition-colors hover:text-foreground"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
}
