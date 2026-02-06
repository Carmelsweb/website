import { Link } from "react-router-dom";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/useTheme";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function VowRenewalsPage() {
  const { isDark } = useTheme();

  usePageMeta({
    title: "Wedding vow renewals",
    description: "Celebrate your journey and renew your vows with a ceremony crafted around your story.",
    path: "/vow-renewals",
  });

  return (
    <>
      <Section title="Wedding vow renewals">
        <p>Celebrate how your love deepens over time.</p>
        <p className="mt-4">
          At West Coast Celebrants, we believe every love story is precious, and that true love only grows deeper and stronger over time.
        </p>
        <p className="mt-4">
          A vow renewal honours the past, celebrates the present, and embraces the future together, hand in hand.
        </p>
        <p className="mt-4">
          It is a perfect moment to involve children, grandchildren, family and friends. Whether intimate or grand, we will craft a heartfelt ceremony that reflects the love, laughter and life you have shared.
        </p>
        <p className="mt-4">
          See the wedding enhancements options that can be crafted into your vow renewal ceremony.
        </p>
      </Section>

      <section className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-10 pb-16">
        <div className={cx("rounded-3xl border p-6 sm:p-8", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
          <h2 className="text-2xl font-semibold">Inquire now</h2>
          <p className={cx("mt-2", isDark ? "text-slate-300" : "text-slate-600")}>
            Let us know your date and venue so we can plan a vow renewal that feels like you.
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

