import { Link } from "react-router-dom";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/useTheme";
import carmelPortrait from "../assets/Web Site/Carmel Approved Photos/IMG-20250907-WA0006.jpg";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function AboutPage() {
  const { isDark } = useTheme();

  usePageMeta({
    title: "About Carmel",
    description: "Meet Carmel Fitzgerald, HSE-registered Wedding Solemniser and celebrant serving the West of Ireland.",
    path: "/about",
  });

  return (
    <>
      <Section title="About Carmel" kicker="Meet your celebrant">
        <div className="not-prose grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className={cx("space-y-4 text-base leading-7", isDark ? "text-slate-300" : "text-slate-700")}>
            <p>
              Carmel is a professionally trained, <strong>HSE-registered Wedding Solemniser</strong>, endorsed by FuturFaith Ministry. Her registration can be found on the HSE register under FuturFaith Ministry (religious category). As a FuturFaith-endorsed Minister, Carmel respects and welcomes people of all faiths, mixed faiths, semi-faith, and no faith.
            </p>
            <p>
              Based in <strong>Westport, Co. Mayo</strong>, West Coast Celebrants are fully committed to making your special occasion unique and unforgettable by offering bespoke, personalised ceremonies that feel authentic and stylish to mark life's most meaningful moments.
            </p>
          </div>
          <figure className={cx("rounded-3xl border overflow-hidden", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
            <img
              src={carmelPortrait}
              alt="Carmel Fitzgerald, West Coast Celebrants celebrant"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <figcaption className={cx("px-4 py-3 text-sm", isDark ? "text-slate-300" : "text-slate-600")}>
              Carmel Fitzgerald, West Coast Celebrants
            </figcaption>
          </figure>
        </div>
      </Section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className={cx("rounded-3xl border p-6 sm:p-8", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
          <h2 className="text-2xl font-semibold">Inquire now</h2>
          <p className={cx("mt-2", isDark ? "text-slate-300" : "text-slate-600")}>
            Tell us about your ceremony and we will guide you from first ideas to the final vows.
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
