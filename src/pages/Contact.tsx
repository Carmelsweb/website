import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "../site/ContactForm";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/useTheme";

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
      <p className={cx("mt-2 text-sm", isDark ? "text-slate-300" : "text-slate-600")}>
        We reply within 24 hours. For urgent Celebration of Life enquiries, please call.
      </p>
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
          <div className={cx("mt-6 text-sm space-y-2 break-words", isDark ? "text-slate-300" : "text-slate-600")}>
            <p className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" /> <a href="tel:+353871302029" className="underline underline-offset-2 break-all">+353 87 130 2029</a>
            </p>
            <p className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden="true" /> <a className="underline underline-offset-2 break-all" href="mailto:westcoastcelebrants@gmail.com">westcoastcelebrants@gmail.com</a>
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span>Follow:</span>
              <a
                className="underline underline-offset-2"
                href="https://www.facebook.com/profile.php?id=61584558844105"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <span>Â·</span>
              <a
                className="underline underline-offset-2"
                href="https://www.facebook.com/share/r/18Fmc3ioNA/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook reel
              </a>
              <span>Â·</span>
              <a
                className="underline underline-offset-2"
                href="https://www.instagram.com/westcoastcelebrants.carmel?utm_source=qr&igsh=OXJqb25idmw1eHpy"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
