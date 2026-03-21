import { CheckCircle2, FileText } from "lucide-react";

import { Card } from "@/components/ui/card";

const reminders = [
  "Please arrive about 15 minutes early for your first visit.",
  "Bring your photo ID and insurance card if you plan to use coverage.",
  "Let us know ahead of time if you are experiencing discomfort or dental anxiety.",
];

export function NewPatientNotice() {
  return (
    <Card className="overflow-hidden border-primary/12 bg-[linear-gradient(160deg,#eef6fb_0%,#e8f0f4_54%,#deece7_100%)] shadow-card">
      <div className="flex flex-col gap-6 p-6 sm:flex-row sm:p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-card">
          <FileText className="h-6 w-6" />
        </div>

        <div className="flex-1">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            New Patient Information
          </span>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            A few simple details can make the first visit feel smoother.
          </h3>
          <p className="mt-3 max-w-2xl text-[1rem] leading-7 text-muted-foreground">
            If you are visiting Willow Brook Dental Care for the first time, these reminders help
            the appointment start calmly and on time.
          </p>

          <div className="mt-6 grid gap-3">
            {reminders.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/70 px-4 py-4 shadow-card"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                <p className="text-[0.98rem] leading-7 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
