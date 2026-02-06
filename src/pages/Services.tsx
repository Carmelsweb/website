import { Baby, BookOpen, ChevronRight, Feather, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/useTheme";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const services = [
  {
    title: "Legal Weddings",
    icon: Heart,
    to: "/weddings",
    description: "Fully legal ceremonies with guidance on HSE notice and paperwork.",
  },
  {
    title: "Commitment Weddings",
    icon: Sparkles,
    to: "/weddings",
    description: "Celebrate your love and commitment without the legal paperwork.",
  },
  {
    title: "Elopement Weddings",
    icon: Feather,
    to: "/weddings",
    description: "Feels right just for you.",
  },
  {
    title: "Naming Ceremonies",
    icon: Baby,
    to: "/naming",
    description: "Welcome a child with promises, guide parents, and meaningful rituals.",
  },
  {
    title: "Vow Renewals",
    icon: Heart,
    to: "/vow-renewals",
    description: "Reaffirm your vows and story with family and friends gathered.",
  },
  {
    title: "Celebration of Life",
    icon: BookOpen,
    to: "/celebration-of-life",
    description: "Warm, dignified farewells that honour a life and comfort loved ones.",
  },
  {
    title: "Your funeral",
    icon: BookOpen,
    to: "/your-funeral",
    description: "Plan ahead with a thoughtful ceremony that reflects your wishes.",
  },
];

export function ServicesPage() {
  const { isDark } = useTheme();

  usePageMeta({
    title: "Services",
    description: "Legal weddings, commitment ceremonies, elopements, naming ceremonies, vow renewals, celebrations of life, and planning your own funeral.",
    path: "/services",
  });

  return (
    <>
      <Section title="Services">
        <p>Choose from legal weddings, commitment ceremonies, vow renewals, naming ceremonies, celebrations of life, and planning your own funeral.</p>
      </Section>

      <Section title="Services" kicker="What we offer">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon, to, description }) => (
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
                {title}{" "}
                <ChevronRight className="h-4 w-4 opacity-70 translate-x-0 group-hover:translate-x-0.5 transition-transform" />
              </p>
              <p className={cx("mt-1 text-sm", isDark ? "text-slate-300" : "text-slate-600")}>
                {description}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div
          className={cx(
            "rounded-3xl border p-6 sm:p-8",
            isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white"
          )}
        >
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
