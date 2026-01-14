import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/theme";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function HowItWorksPage() {
  const { isDark } = useTheme();

  usePageMeta({
    title: "How it works",
    description: "A clear, supportive journey from first enquiry to ceremony day.",
    path: "/how-it-works",
  });

  return (
    <>
      <Section title="How it works" kicker="The journey">
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Say hello:</strong> After your initial enquiry, we will arrange a call, or better yet, meet in person to get acquainted.
          </li>
          <li>
            <strong>Legal guidance:</strong> When you book a legal wedding ceremony with West Coast Celebrants, you will be guided through the process step by step. From giving legal notice to signing your marriage registration form, we ensure the legal marriage requirements in Ireland and Northern Ireland are adhered to.
          </li>
          <li>
            <strong>Book your date:</strong> If you would like to proceed, we will send a form to capture the details for crafting your unique ceremony. A booking fee is due at this point.
          </li>
          <li>
            <strong>Co-create:</strong> We share readings, poems, and enhancement ideas. We work closely with you to express your values, culture, and traditions. Up to <strong>three revisions</strong> and <strong>one rehearsal</strong> (if requested) are included. Fees are due in full <strong>four weeks</strong> before the ceremony.
          </li>
        </ol>
      </Section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className={cx("rounded-3xl border p-6 sm:p-8", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
          <h2 className="text-2xl font-semibold">Start your enquiry</h2>
          <p className={cx("mt-2", isDark ? "text-slate-300" : "text-slate-600")}>
            Share your date, venue, and ceremony type so we can confirm availability.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-white shadow-lg shadow-[var(--brand-teal)]/20 bg-gradient-to-r from-[var(--brand-teal)] to-emerald-600"
          >
            Inquire now
          </Link>
        </div>
      </section>
    </>
  );
}
