import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../site/useTheme";
import { usePrefersReducedMotion } from "../site/usePrefersReducedMotion";
import { usePageMeta } from "../site/usePageMeta";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function HomePage() {
  const { isDark } = useTheme();
  const prefersReduced = usePrefersReducedMotion();

  usePageMeta({
    title: "Ceremonies crafted with heart",
    description:
      "West Coast Celebrants, led by Carmel Fitzgerald, creates heartfelt weddings, vow renewals, naming ceremonies, and celebrations of life across the West of Ireland.",
    path: "/",
  });

  return (
    <>
      <section id="home" className="relative overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          {isDark ? (
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-navy)] via-slate-900 to-slate-950" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100" />
          )}
          <div
            className={cx("absolute inset-0 mix-blend-overlay", isDark ? "opacity-[0.08]" : "opacity-[0.06]")}
            style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "3px 3px" }}
          />
          <svg
            className={cx("absolute -bottom-20 left-1/2 -translate-x-1/2 w-[140%]", isDark ? "text-slate-50/5" : "text-slate-900/5")}
            viewBox="0 0 1440 320"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M0,96L60,96C120,96,240,96,360,85.3C480,75,600,53,720,80C840,107,960,181,1080,186.7C1200,192,1320,128,1380,96L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          </svg>
        </div>

        <div className={cx("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32", isDark ? "text-white" : "text-slate-900")}>
          <motion.h1
            initial={prefersReduced ? false : { opacity: 0, y: 10 }}
            animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Ceremonies crafted with heart
            <span className={cx("block mt-2 text-[clamp(1.25rem,2vw,1.75rem)] font-semibold", isDark ? "text-slate-200" : "text-slate-700")}>
              unique, authentic, unforgettable.
            </span>
          </motion.h1>
          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 10 }}
            animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cx("mt-6 text-lg max-w-prose", isDark ? "text-slate-200/90" : "text-slate-700/90")}
          >
            West Coast Celebrants, set up by <strong>Carmel Fitzgerald</strong>, offers a complete celebrant service for your most meaningful moments across the West of Ireland. Welcoming people of all faiths, mixed faiths, semi faith, and people with no faith.
          </motion.p>
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 10 }}
            animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              to="/contact"
              className={cx(
                "inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-white shadow-lg shadow-[var(--brand-teal)]/25 bg-gradient-to-r from-[var(--brand-teal)] to-emerald-600 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-emerald-400",
                isDark ? "focus:ring-offset-slate-950" : "focus:ring-offset-white"
              )}
            >
              <Calendar className="h-5 w-5" aria-hidden="true" /> Inquire now
            </Link>
            <Link
              to="/services"
              className={cx(
                "inline-flex items-center gap-2 px-5 py-3 rounded-2xl border font-semibold focus:outline-none focus:ring-2",
                isDark ? "border-white/60 hover:bg-white/10 focus:ring-white/50" : "border-slate-900/20 hover:bg-slate-900/5 focus:ring-slate-900/30"
              )}
            >
              Explore services <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
          <div className={cx("mt-6 text-sm", isDark ? "text-slate-300" : "text-slate-600")}>
            HSE-registered Wedding Solemniser, endorsed by{" "}
            <a className="underline" href="https://www.futurfaith.com" target="_blank" rel="noreferrer">
              FuturFaith Ministry
            </a>
            .
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Weddings", copy: "Legal, commitment, and elopement ceremonies.", to: "/weddings" },
            { title: "Vow renewals", copy: "Celebrate the love you share today.", to: "/vow-renewals" },
            { title: "Naming ceremonies", copy: "Welcome new life with meaning.", to: "/naming" },
            { title: "Celebration of life", copy: "Honour a loved one with warmth.", to: "/celebration-of-life" },
            { title: "How it works", copy: "A clear, supportive planning journey.", to: "/how-it-works" },
            { title: "Contact", copy: "Check availability and enquire now.", to: "/contact" },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className={cx(
                "rounded-2xl border p-5 transition",
                isDark ? "border-slate-800 bg-slate-950 hover:bg-slate-900" : "border-slate-200 bg-white hover:bg-slate-50"
              )}
            >
              <p className="font-semibold">{item.title}</p>
              <p className={cx("mt-2 text-sm", isDark ? "text-slate-300" : "text-slate-600")}>{item.copy}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
