import { FileText } from "lucide-react";

export function NewPatientNotice() {
  return (
    <div className="flex items-start gap-6 rounded-xl border-l-8 border-primary bg-[#cde6f4] p-8">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-sm">
        <FileText className="h-5 w-5" />
      </div>

      <div>
        <h3 className="font-display text-xl font-bold text-foreground">New Patient Information</h3>
        <p className="mt-2 leading-relaxed text-foreground/78">
          Welcome! Please arrive 15 minutes early for your first appointment to complete any
          intake details. Do not forget to bring your insurance card and a valid photo ID.
        </p>
      </div>
    </div>
  );
}
