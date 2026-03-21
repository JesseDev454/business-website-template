import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fieldClassName =
  "h-14 w-full rounded-xl border border-transparent bg-surface px-4 text-[1rem] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition-[background-color,border-color,box-shadow] duration-200 placeholder:text-muted-foreground focus:border-primary/20 focus:bg-white";

const textareaClassName =
  "min-h-40 w-full rounded-xl border border-transparent bg-surface px-4 py-3 text-[1rem] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition-[background-color,border-color,box-shadow] duration-200 placeholder:text-muted-foreground focus:border-primary/20 focus:bg-white";

export function ContactFormCard() {
  return (
    <Card className="overflow-hidden border-white/80 bg-white/95 shadow-panel">
      <div className="border-b border-border/70 bg-[linear-gradient(160deg,#fbfdfe_0%,#eef4f6_100%)] px-6 py-6 sm:px-8">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Send a Message
        </span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
          Tell us how we can help.
        </h2>
        <p className="mt-3 max-w-2xl text-[1rem] leading-7 text-muted-foreground">
          Use the form below for appointment requests, general questions, or help getting started
          as a new patient.
        </p>
      </div>

      <CardContent className="px-6 py-6 sm:px-8 sm:py-8">
        <form className="grid gap-6 md:grid-cols-2">
          <label className="flex flex-col gap-2.5">
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Full Name
            </span>
            <input
              type="text"
              autoComplete="name"
              placeholder="Jane Doe"
              className={fieldClassName}
            />
          </label>

          <label className="flex flex-col gap-2.5">
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Email Address
            </span>
            <input
              type="email"
              autoComplete="email"
              placeholder="jane@example.com"
              className={fieldClassName}
            />
          </label>

          <label className="flex flex-col gap-2.5">
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Phone Number
            </span>
            <input
              type="tel"
              autoComplete="tel"
              placeholder="(555) 000-0000"
              className={fieldClassName}
            />
          </label>

          <label className="flex flex-col gap-2.5">
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Reason for Inquiry
            </span>
            <select className={fieldClassName} defaultValue="Appointment Request">
              <option>Appointment Request</option>
              <option>New Patient Question</option>
              <option>General Question</option>
              <option>Emergency Visit</option>
              <option>Family Appointment</option>
            </select>
          </label>

          <label className="flex flex-col gap-2.5 md:col-span-2">
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Message
            </span>
            <textarea
              rows={5}
              placeholder="Let us know what you need help with, and a team member can follow up with you."
              className={textareaClassName}
            />
          </label>

          <div className="md:col-span-2">
            <div className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-surface/55 p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-[0.98rem] leading-7 text-muted-foreground">
                We review messages during office hours and can follow up by phone or email based on
                your preference.
              </p>
              <Button type="submit" size="lg" className="w-full sm:w-auto sm:min-w-52">
                Send Inquiry
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
