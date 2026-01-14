import React from "react";
import { BookOpen, ChevronRight, Feather, Heart, Sparkles, Trees } from "lucide-react";
import { Link } from "react-router-dom";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/theme";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const services = [
  { title: "Legal Weddings", icon: Heart, to: "/weddings" },
  { title: "Commitment Weddings", icon: Sparkles, to: "/weddings" },
  { title: "Elopement Weddings", icon: Feather, to: "/weddings" },
  { title: "Naming Ceremonies", icon: Trees, to: "/naming" },
  { title: "Vow Renewals", icon: Heart, to: "/vow-renewals" },
  { title: "Celebration of Life", icon: BookOpen, to: "/celebration-of-life" },
];

export function ServicesPage() {
  const { isDark } = useTheme();

  usePageMeta({
    title: "Services",
    description: "Legal weddings, commitment ceremonies, elopements, naming ceremonies, vow renewals, and celebrations of life.",
    path: "/services",
  });

  return (
    <>
      <Section title="Services" kicker="What we offer">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon, to }) => (
            <Link
              key={title}
              to={to}
              className={cx(
                "text-left group rounded-2xl border p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--brand-teal)]",
                isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white"
              )}
              aria-label={`View ${title}`}
            >
              <Icon className="h-6 w-6 text-[var(--brand-teal)]" aria-hidden="true" />
              <p className="mt-4 font-semibold inline-flex items-center gap-2">
                {title} <ChevronRight className="h-4 w-4 opacity-70 translate-x-0 group-hover:translate-x-0.5 transition-transform" />
              </p>
              <p className={cx("mt-1 text-sm", isDark ? "text-slate-300" : "text-slate-600")}>
                Personalised, story-led ceremonies with thoughtful enhancements.
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className={cx("rounded-3xl border p-6 sm:p-8", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
          <h2 className="text-2xl font-semibold">Ready to inquire?</h2>
          <p className={cx("mt-2", isDark ? "text-slate-300" : "text-slate-600")}>
            Share your date, venue, and ceremony style. We will confirm availability and guide you through next steps.
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
