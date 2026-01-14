import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "../site/ContactForm";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/theme";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function ContactPage() {
  const { isDark } = useTheme();

  usePageMeta({
    title: "Check availability",
    description: "Contact West Coast Celebrants to check availability and begin your ceremony planning.",
    path: "/contact",
  });

  return (
    <Section title="Check availability" kicker="Get in touch">
      <p>Based in Westport, Co. Mayo, officiating across the West of Ireland.</p>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <div className={cx("rounded-3xl border p-6 shadow-sm", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
          <h2 className="font-semibold text-lg">Quick enquiry</h2>
          <ContactForm />
        </div>
        <div className={cx("rounded-3xl border p-6 shadow-sm", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
          <h2 className="font-semibold text-lg">Legal process (Ireland)</h2>
          <p className="mt-2">
            When you book a legal wedding ceremony with West Coast Celebrants, we guide you step by step, from giving legal notice to signing the marriage registration form, ensuring all requirements in Ireland are met.
          </p>
          <Link
            to="/how-it-works"
            className={cx("mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl border font-medium", isDark ? "border-slate-700 hover:bg-slate-900" : "border-slate-300 hover:bg-slate-50")}
          >
            Read how it works
          </Link>
          <div className={cx("mt-6 text-sm space-y-2", isDark ? "text-slate-300" : "text-slate-600")}>
            <p className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" /> <a href="tel:+3530000000" className="underline underline-offset-2">Phone on request</a>
            </p>
            <p className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden="true" /> <a className="underline underline-offset-2" href="mailto:westcoastcelebrants@gmail.com">westcoastcelebrants@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

