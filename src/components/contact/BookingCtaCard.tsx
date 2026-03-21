import { clinicDetails } from "@/lib/site";

export function BookingCtaCard() {
  return (
    <div className="rounded-xl bg-primary p-8 text-primary-foreground">
      <h4 className="font-display text-2xl font-bold">Ready to schedule?</h4>
      <p className="mb-6 mt-4 text-primary-foreground/90">
        Use our direct booking route or contact the clinic to find a time that works for you.
      </p>
      <a
        href={clinicDetails.phoneHref}
        className="motion-interactive block w-full rounded-xl bg-white px-6 py-4 text-center font-display font-bold text-primary hover:bg-[#f4f4ef]"
      >
        Request Appointment Now
      </a>
    </div>
  );
}
