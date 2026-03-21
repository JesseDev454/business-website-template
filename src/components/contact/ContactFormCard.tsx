import { Send } from "lucide-react";

const fieldClassName =
  "w-full rounded-xl border-0 bg-[#e8e8e3] px-4 py-3 text-[1rem] text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:bg-white focus:ring-2 focus:ring-primary/20";

export function ContactFormCard() {
  return (
    <div className="rounded-xl bg-white p-8 shadow-[0_10px_30px_rgba(23,50,68,0.06)] md:p-10">
      <h2 className="font-display text-2xl font-bold text-foreground">Send a Message</h2>

      <form className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-muted-foreground">Full Name</label>
          <input type="text" placeholder="Jane Doe" autoComplete="name" className={fieldClassName} />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-muted-foreground">Email Address</label>
          <input
            type="email"
            placeholder="jane@example.com"
            autoComplete="email"
            className={fieldClassName}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-muted-foreground">Phone Number</label>
          <input
            type="tel"
            placeholder="(555) 000-0000"
            autoComplete="tel"
            className={fieldClassName}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-muted-foreground">Reason for Inquiry</label>
          <select defaultValue="General Inquiry" className={fieldClassName}>
            <option>General Inquiry</option>
            <option>New Patient Registration</option>
            <option>Billing Question</option>
            <option>Cosmetic Consultation</option>
          </select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-semibold text-muted-foreground">Message</label>
          <textarea
            rows={4}
            placeholder="How can we help you today?"
            className={`${fieldClassName} min-h-32 resize-none`}
          />
        </div>

        <div className="pt-4 md:col-span-2">
          <button
            type="submit"
            className="motion-interactive flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-display font-bold text-primary-foreground hover:opacity-90"
          >
            Send Inquiry
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
