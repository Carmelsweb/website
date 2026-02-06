import { Link } from "react-router-dom";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/useTheme";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function YourFuneralPage() {
  const { isDark } = useTheme();

  usePageMeta({
    title: "Writing your own funeral",
    description: "A gentle guide to planning your own ceremony so your wishes are honoured.",
    path: "/your-funeral",
  });

  return (
    <>
      <Section title="Your funeral">
        <p>Planning ahead lets your ceremony reflect your voice and values.</p>
      </Section>

      <Section title="Writing your own funeral">
        <p>Pre-planning your own funeral is a new concept in Ireland.</p>
        <p className="mt-4">It is difficult to think about your own passing, but it can also be liberating and healing.</p>
        <p className="mt-4">
          By ensuring your wishes are known to your loved ones, you are ensuring that your last farewell is exactly what you want.
        </p>
        <p className="mt-4">
          This is a real gift to your loved ones during their time of sorrow; you have taken away that concern for them.
        </p>
        <p className="mt-4">
          We can document preferences, music, readings, and enhancement ideas, and discuss payment-in-advance options similar to funeral home pre-purchase plans. We also collaborate with local funeral homes and can provide a simple one-page flyer for families.
        </p>
      </Section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div
          className={cx(
            "rounded-3xl border p-6 sm:p-8",
            isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white"
          )}
        >
          <h2 className="text-2xl font-semibold">Inquire now</h2>
          <p className={cx("mt-2", isDark ? "text-slate-300" : "text-slate-600")}>
            We can help you document your wishes with clarity and care.
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
