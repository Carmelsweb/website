import { Link } from "react-router-dom";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/theme";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const recommendations = [
  { title: "Venues", copy: "West coast estates, coastal retreats, and intimate venues.", hint: "Ask for the latest list." },
  { title: "Photographers", copy: "Documentary and editorial styles across Mayo, Galway, and Sligo.", hint: "We match you to your style." },
  { title: "Musicians", copy: "Live musicians, soloists, and ceremony sound solutions.", hint: "We recommend based on your vibe." },
  { title: "Ritual Keepsakes", copy: "Unity candles, handfasting ribbons, and keepsakes.", hint: "Curated options available." },
];

export function RecommendationsPage() {
  const { isDark } = useTheme();

  usePageMeta({
    title: "Recommendations",
    description: "Trusted venues and ceremony partners across the West of Ireland.",
    path: "/recommendations",
  });

  return (
    <>
      <Section title="Recommendations" kicker="Trusted partners">
        <p>
          Looking for local recommendations? We curate trusted venues, photographers, musicians, and ceremony enhancements across the West of Ireland.
        </p>
      </Section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {recommendations.map((item) => (
            <div
              key={item.title}
              className={cx("rounded-2xl border p-6", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className={cx("mt-2", isDark ? "text-slate-300" : "text-slate-600")}>{item.copy}</p>
              <p className={cx("mt-2 text-sm", isDark ? "text-slate-400" : "text-slate-500")}>{item.hint}</p>
            </div>
          ))}
        </div>

        <div className={cx("mt-8 rounded-3xl border p-6 sm:p-8", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
          <h2 className="text-2xl font-semibold">Inquire now</h2>
          <p className={cx("mt-2", isDark ? "text-slate-300" : "text-slate-600")}>
            Tell us your ceremony date and style and we will share tailored recommendations.
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

