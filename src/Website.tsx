import React, { useState, useEffect, type CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Phone, Mail, Calendar, ChevronRight,
  Heart, Feather, BookOpen, Sparkles, Trees, Sun, Moon
} from "lucide-react";

// Palette
const palette = { navy: "#1c2233", teal: "#5c8a87", gold: "#d4a62a" };

// Smooth-scroll + focus target for a11y
function goTo(id: string) {
  const targetId = id.replace(/^#/, "");
  const el = document.getElementById(targetId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.setAttribute("tabindex", "-1");
    (el as HTMLElement).focus({ preventScroll: true });
  } else {
    window.location.hash = id;
  }
}

function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setPrefersReduced(mql.matches);
    onChange();
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, []);
  return prefersReduced;
}

function useTheme() {
  const [theme, setTheme] = useState<'light'|'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('wcc-theme');
    return saved === 'dark' ? 'dark' : 'light';
  });
  useEffect(() => { localStorage.setItem('wcc-theme', theme); }, [theme]);
  return { theme, setTheme };
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const NavLink = ({
  href, children, isDark, onClick
}: { href: string; children: React.ReactNode; isDark: boolean; onClick?: () => void }) => (
  <a
    href={href}
    onClick={(e) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        goTo(href);
        onClick?.();
      }
    }}
    className={cx(
      "text-sm font-medium transition-colors",
      isDark ? "text-slate-200 hover:text-white" : "text-slate-700 hover:text-slate-900"
    )}
  >
    {children}
  </a>
);

function Section({
  id, title, kicker, children, isDark
}: { id: string; title: string; kicker?: string; children: React.ReactNode; isDark: boolean }) {
  return (
    <section id={id} className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 outline-none" tabIndex={-1}>
      {kicker && (
        <p className={cx("mb-3 text-xs uppercase tracking-widest", isDark ? "text-slate-400" : "text-slate-500")}>
          {kicker}
        </p>
      )}
      <h2
        className={cx(
          "text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent",
          isDark
            ? "bg-gradient-to-r from-white via-slate-200 to-white"
            : "bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900"
        )}
      >
        {title}
      </h2>
      <div className={cx("prose max-w-none", isDark ? "prose-invert" : "prose-slate")}>{children}</div>
    </section>
  );
}

function ContactForm({ isDark }: { isDark: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("company")) return; // honeypot
    setStatus("sending");
    try {
      const name = encodeURIComponent(String(data.get("name") ?? ""));
      const contact = encodeURIComponent(String(data.get("contact") ?? ""));
      const type = encodeURIComponent(String(data.get("type") ?? ""));
      const date = encodeURIComponent(String(data.get("date") ?? ""));
      const message = encodeURIComponent(String(data.get("message") ?? ""));
      window.location.href =
        `mailto:westcoastcelebrants@gmail.com?subject=Enquiry from ${name}` +
        `&body=Contact: ${contact}%0AType: ${type}%0ADate: ${date}%0A%0A${message}`;
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  const inputBase = cx(
    "w-full rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-teal)] border",
    isDark ? "border-slate-700 bg-slate-950" : "border-slate-300 bg-white"
  );
  return (
    <form className="mt-4 grid gap-4" onSubmit={onSubmit} noValidate>
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
      <input name="name" required className={inputBase} placeholder="Your name" aria-label="Your name" />
      <input name="contact" required className={inputBase} placeholder="Email or phone" aria-label="Email or phone" />
      <select name="type" required className={inputBase} defaultValue="" aria-label="Ceremony type">
        <option value="" disabled>Ceremony type</option>
        <option>Legal Wedding</option>
        <option>Commitment Wedding</option>
        <option>Elopement Wedding</option>
        <option>Naming Ceremony</option>
        <option>Vow Renewal</option>
        <option>Celebration of Life</option>
      </select>
      <input name="date" type="date" className={inputBase} aria-label="Preferred date" />
      <textarea name="message" required className={cx(inputBase, "h-28")} placeholder="Tell us a little about your ceremony" aria-label="Message" />
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-white shadow-lg shadow-[var(--brand-teal)]/20 bg-gradient-to-r from-[var(--brand-teal)] to-emerald-600 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          <Mail className="h-4 w-4" aria-hidden="true" /> {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        <p className={cx("text-xs", isDark ? "text-slate-300" : "text-slate-600")}>
          Or email us at <a className="underline" href="mailto:westcoastcelebrants@gmail.com">westcoastcelebrants@gmail.com</a>
        </p>
      </div>
      {status === "ok" && <p className="text-sm text-emerald-600">Thanks! We’ll get back to you soon.</p>}
      {status === "error" && <p className="text-sm text-rose-600">Sorry, something went wrong. Please email us directly.</p>}
    </form>
  );
}

function Gallery({
  isDark, images
}: { isDark: boolean; images: { src: string; alt: string; w?: number; h?: number }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {images.map((img, i) => (
        <a
          key={i}
          href={img.src}
          target="_blank"
          rel="noreferrer"
          className={cx("block rounded-xl overflow-hidden ring-1", isDark ? "ring-slate-800 hover:ring-slate-600" : "ring-slate-200 hover:ring-slate-400")}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            width={img.w ?? 640}
            height={img.h ?? 480}
            className="w-full h-full object-cover aspect-[4/3]"
          />
        </a>
      ))}
    </div>
  );
}

export default function WestCoastCelebrantsModern() {
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReduced = usePrefersReducedMotion();
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  // Card -> section anchors
  const serviceToId: Record<string, string> = {
    "Legal Weddings": "weddings",
    "Commitment Weddings": "weddings",
    "Elopement Weddings": "weddings",
    "Naming Ceremonies": "naming",
    "Vow Renewals": "vow-renewals",
    "Celebration of Life": "celebration-of-life",
  };

  // Replace with your real files (recommended: /public/gallery/*)
  const galleryImages = [
    { src: "/gallery/01.jpg", alt: "Cliffside elopement on the west coast" },
    { src: "/gallery/02.jpg", alt: "Candle lighting during ceremony" },
    { src: "/gallery/03.jpg", alt: "Celtic handfasting ribbons" },
    { src: "/gallery/04.jpg", alt: "Vow renewal by the lake" },
  ];

  useEffect(() => {
    document.documentElement.style.scrollBehavior = prefersReduced ? "auto" : "smooth";
    return () => { document.documentElement.style.scrollBehavior = "auto"; };
  }, [prefersReduced]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Carmel Fitzgerald",
      jobTitle: "Wedding Celebrant & Solemniser",
      worksFor: { "@type": "Organization", name: "West Coast Celebrants" },
      email: "mailto:westcoastcelebrants@gmail.com",
      areaServed: ["County Mayo", "County Galway", "County Sligo", "West of Ireland"],
    });
    document.head.appendChild(s);
    return () => { s.remove(); };
  }, []);

  return (
    <div
      className={cx("min-h-screen", isDark ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900")}
      style={{ "--brand-navy": palette.navy, "--brand-teal": palette.teal, "--brand-gold": palette.gold } as CSSProperties}
    >
      {/* Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[var(--brand-teal)] via-[var(--brand-gold)] to-[var(--brand-teal)]" />

      {/* Header */}
      <header
        className={cx(
          "sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-white/65 bg-white/90",
          isDark && "supports-[backdrop-filter]:bg-slate-950/65 bg-slate-950/90 border-slate-800/70",
          !isDark && "border-slate-200/70"
        )}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <a href="#home" onClick={(e) => { e.preventDefault(); goTo("#home"); }} className="flex items-center gap-3 group">
            <div className="relative flex items-center gap-2" aria-hidden="true">
              <span className="h-6 w-12 rounded-full bg-[var(--brand-teal)]/90 ring-1 ring-[var(--brand-teal)]/50 shadow-sm" />
              <span className="absolute -right-2 -top-1 h-2 w-2 rounded-full bg-[var(--brand-gold)] animate-pulse" />
            </div>
            <span className={cx("font-extrabold tracking-wide", isDark ? "text-white" : "text-slate-900")}>
              West Coast Celebrants
            </span>
          </a>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
            <NavLink href="#about" isDark={isDark}>About</NavLink>
            <NavLink href="#services" isDark={isDark}>Services</NavLink>
            <NavLink href="#gallery" isDark={isDark}>Gallery</NavLink>
            <NavLink href="#how-it-works" isDark={isDark}>How it works</NavLink>
            <NavLink href="#weddings" isDark={isDark}>Weddings</NavLink>
            <NavLink href="#vow-renewals" isDark={isDark}>Vow renewals</NavLink>
            <NavLink href="#naming" isDark={isDark}>Naming</NavLink>
            <NavLink href="#celebration-of-life" isDark={isDark}>Celebration of life</NavLink>
            <NavLink href="#privacy" isDark={isDark}>Privacy</NavLink>
            <NavLink href="#contact" isDark={isDark}>Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={cx(
                "inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold",
                isDark ? "border-slate-700 hover:bg-slate-900" : "border-slate-300 hover:bg-slate-50"
              )}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
              {isDark ? "Light" : "Dark"}
            </button>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); goTo("#contact"); }}
              className={cx(
                "inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold",
                isDark ? "border-slate-700 hover:bg-slate-900" : "border-slate-300 hover:bg-slate-50"
              )}
            >
              <Calendar className="h-4 w-4" aria-hidden="true" /> Check availability
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={cx("p-2 rounded-lg border", isDark ? "border-slate-700" : "border-slate-300")}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={cx("p-2 rounded-lg border", isDark ? "border-slate-700" : "border-slate-300")}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={cx("md:hidden border-t", isDark ? "border-slate-800 bg-slate-950/95" : "border-slate-200 bg-white/95")}
            >
              <div className="px-4 py-4 grid grid-cols-2 gap-3 max-w-6xl mx-auto">
                {[
                  ["About", "#about"],
                  ["Services", "#services"],
                  ["Gallery", "#gallery"],
                  ["How it works", "#how-it-works"],
                  ["Weddings", "#weddings"],
                  ["Vow renewals", "#vow-renewals"],
                  ["Naming", "#naming"],
                  ["Celebration of life", "#celebration-of-life"],
                  ["Privacy", "#privacy"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <NavLink key={href} href={href} isDark={isDark} onClick={() => setMenuOpen(false)}>
                    {label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="main">
        {/* HERO */}
        <section id="home" className="relative overflow-hidden" aria-label="Hero">
          {/* Background */}
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            {isDark ? (
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-navy)] via-slate-900 to-slate-950" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100" />
            )}
            {/* Grain */}
            <div
              className={cx("absolute inset-0 mix-blend-overlay", isDark ? "opacity-[0.08]" : "opacity-[0.06]")}
              style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "3px 3px" }}
            />
            {/* Wave */}
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
              West Coast Celebrants, set up by <strong>Carmel Fitzgerald</strong>, offers a complete celebrant service for your most meaningful moments across the West of Ireland. <strong>Welcoming people of all faiths, mixed faiths, semi faith, and people with no faith.</strong>
            </motion.p>
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 10 }}
              animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); goTo("#contact"); }}
                className={cx(
                  "inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-white shadow-lg shadow-[var(--brand-teal)]/25 bg-gradient-to-r from-[var(--brand-teal)] to-emerald-600 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-emerald-400",
                  isDark ? "focus:ring-offset-slate-950" : "focus:ring-offset-white"
                )}
              >
                <Calendar className="h-5 w-5" aria-hidden="true" /> Check availability
              </a>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); goTo("#services"); }}
                className={cx(
                  "inline-flex items-center gap-2 px-5 py-3 rounded-2xl border font-semibold focus:outline-none focus:ring-2",
                  isDark ? "border-white/60 hover:bg-white/10 focus:ring-white/50" : "border-slate-900/20 hover:bg-slate-900/5 focus:ring-slate-900/30"
                )}
              >
                Explore services <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.div>
            <div className={cx("mt-6 text-sm", isDark ? "text-slate-300" : "text-slate-600")}>
              HSE-registered Wedding Solemniser, endorsed by FuturFaith Ministry.
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" title="About Carmel" kicker="Meet your celebrant" isDark={isDark}>
          <p>
            Carmel is a professionally trained, <strong>HSE-registered Wedding Solemniser</strong>, endorsed by FuturFaith Ministry.
            Carmel’s registration can be found on the HSE register under FuturFaith Ministry (religious category).
            As a FuturFaith-endorsed Minister, Carmel respects and welcomes people of all faiths, mixed faiths, semi-faith, and no faith.
          </p>
          <p className="mt-4">
            Based in <strong>Westport, Co. Mayo</strong>, West Coast Celebrants are fully committed to making your special occasion unique and unforgettable by offering bespoke, personalized ceremonies that feel authentic and stylish to mark life's most meaningful moments.
          </p>
        </Section>

        {/* SERVICES */}
        <Section id="services" title="Services" kicker="What we offer" isDark={isDark}>
          {/* Cards (click to jump) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Legal Weddings", icon: Heart },
              { title: "Commitment Weddings", icon: Sparkles },
              { title: "Elopement Weddings", icon: Feather },
              { title: "Naming Ceremonies", icon: Trees },
              { title: "Vow Renewals", icon: Heart },
              { title: "Celebration of Life", icon: BookOpen },
            ].map(({ title, icon: Icon }) => (
              <button
                key={title}
                type="button"
                onClick={() => goTo(`#${serviceToId[title] ?? "services"}`)}
                className={cx(
                  "text-left group rounded-2xl border p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--brand-teal)]",
                  isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white"
                )}
                aria-label={`Go to ${title} details`}
              >
                <Icon className="h-6 w-6 text-[var(--brand-teal)]" aria-hidden="true" />
                <p className="mt-4 font-semibold inline-flex items-center gap-2">
                  {title} <ChevronRight className="h-4 w-4 opacity-70 translate-x-0 group-hover:translate-x-0.5 transition-transform" />
                </p>
                <p className={cx("mt-1 text-sm", isDark ? "text-slate-300" : "text-slate-600")}>
                  Personalised, story-led ceremonies with thoughtful enhancements.
                </p>
              </button>
            ))}
          </div>

          {/* Divider list (one per line) */}
          <div className={cx("mt-8 rounded-2xl border", isDark ? "border-slate-800" : "border-slate-200")}>
            <ul className={cx("divide-y", isDark ? "divide-slate-800" : "divide-slate-200")}>
              {[
                "Legal Weddings",
                "Commitment Weddings",
                "Elopement Weddings",
                "Naming Ceremonies",
                "Vow Renewals",
                "Celebration of Life Ceremonies",
              ].map((label) => {
                const key = label.replace(" Ceremonies", "");
                return (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={() => goTo(`#${serviceToId[key] ?? "services"}`)}
                      className={cx("w-full text-left px-4 sm:px-6 py-4 hover:bg-slate-50", isDark && "hover:bg-slate-900")}
                    >
                      <span className="font-medium">{label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </Section>

        {/* GALLERY */}
        <Section id="gallery" title="Gallery" kicker="A glimpse of our ceremonies" isDark={isDark}>
          <p className={cx("mb-6", isDark ? "text-slate-300" : "text-slate-600")}>
            A few moments we love. Tap any photo to view it full size.
          </p>
          <Gallery isDark={isDark} images={galleryImages} />
        </Section>

        {/* HOW IT WORKS */}
        <Section id="how-it-works" title="How it works" kicker="The journey" isDark={isDark}>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Say hello:</strong> After your initial enquiry, we will arrange a call, or better yet, meet in person to get acquainted.
            </li>
            <li>
              <strong>Legal guidance:</strong> When you book a legal wedding ceremony with West Coast Celebrants, you will be guided through the process, step by step.
              From giving legal notice, to signing your marriage registration form, we ensure the legal marriage requirements in Ireland and Northern Ireland are adhered to.
            </li>
            <li>
              <strong>Book your date:</strong> If you’d like to proceed, we will send a Google Form to capture details for crafting your unique ceremony.
              A booking fee is due at this point.
            </li>
            <li>
              <strong>Co-create:</strong> We will share readings, poems and enhancement ideas. We work closely with you to express your values, culture and traditions.
              Up to <strong>3 revisions</strong> and <strong>one rehearsal</strong> <em>(if requested)</em> are included. Fees are due in full <strong>4 weeks</strong> before the ceremony.
            </li>
          </ol>
        </Section>

        {/* WEDDINGS */}
        <Section id="weddings" title="Weddings" isDark={isDark}>
          <p>Your wedding, no matter the type, is a celebration of your unique love.</p>
          <p className="mt-4">
            We craft personalised ceremonies, legally binding if appropriate, that reflect your beliefs, values and traditions.
          </p>
          <p className="mt-4">
            From hotel ballrooms to sunset beaches on the beautiful west coast, the top of Croagh Patrick or a medieval abbey,
            we will create a space where love is celebrated freely.
          </p>

          <h3 className="text-xl font-semibold mt-10">Types of weddings</h3>
          <ul className="list-disc pl-6 space-y-4 mt-4">
            <li><strong>Legal Weddings</strong></li>
            <li><strong>Commitment Weddings</strong> (not legally binding)</li>
            <li><strong>Elopement Weddings</strong> (legal or commitment; typically intimate)</li>
          </ul>

          <div className="mt-6 space-y-4">
            <p><em>The difference between these events is that Commitment Weddings are not legally binding.</em></p>
            <p>
              Perhaps, if for various reasons, it is not practical for a couple to have a Legal wedding, then a Commitment wedding is the perfect way to publicly declare your commitment to each other and celebrate your unique love.
            </p>
            <p>
              Elopement Weddings can be Legal or Commitment, usually more intimate with fewer people in attendance.
            </p>
            <p>
              Your style will flow through so that every word, ritual and moments feel uniquely yours. This is your day, we will do it your way.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-10">Wedding Enhancements</h3>
          <p className="mt-2">Wedding Enhancements may include any of the following:</p>
          <div className="mt-4 space-y-3">
            {[
              {
                title: "Unity Candle",
                body: `The Unity Candle enhancement is a beautiful and incredibly symbolic way of passing love and tradition from the older generation and families to this new couple.

For the first part of the Unity Candle enhancement, two outer candles are lit at the beginning of the ceremony.

At a later stage in the ceremony, usually after the rings have been exchanged, a centre candle (known as the Unity Candle) is lit from the two flames of the individual candles.

The centre flame is a light of unity, representing two people who have come together, giving a spark of themselves to create a new light.`,
              },
              {
                title: "Wishing stones/crystals",
                body: `A gemstone or crystal is given to each person as they enter the ceremony room or space.

Each guest is invited to hold their stone or crystal in their hands during the ceremony, and ask them, as it warms in their hand, to allow their love and warm wishes to permeate into the stone or crystal.

At the end of the ceremony, all stones or crystals are placed into a vase or vessel that the couple have chosen to bring home with them.`,
              },
              {
                title: "Ring warming",
                body: `The wedding rings are tied together on a ribbon or cord, and during the ceremony are passed around to all the guests.

While holding the rings, each guest is asked to bestow a wish - or simply their love, a blessing or a prayer - onto them. This can be a beautifully personal way to include guests.`,
              },
              {
                title: "Symbolism of gifts",
                body: `Family members or friends could come forward during the ceremony, one at a time, each of them holding in their hands an item of importance to the couple.

This enhancement fits best directly after the first part of the Unity Candle enhancement, or after the Ring Warming, or even after a first reading early in the ceremony.`,
              },
              {
                title: "Smudging/burning sage",
                body: `Smudging is a purification ritual where a small bundle of sage is lit by the celebrant, and the smoke created is waved/wafted around the couple from head to toe. The wedding space and wedding rings can also be cleansed.

A deeply spiritual ritual, this sacred smoke will cleanse and release any negative energies, bringing forth clarity and positive emotions for a healthy and loving relationship, allowing your clients both to step forward into married life on a pure and harmonious note.

Sage represents clarity, vision, strength and wisdom, the perfect gifts for the first day of the rest of your clients' lives together.

This enhancement is carried out immediately after the welcome and introduction.`,
              },
              {
                title: "Love story details",
                body: `The couple’s love story is the sweetest and most personal part of any wedding ceremony. We look at the life and times of our couple, reminisce about their very first date and most memorable moments shared together, and share the story of the journey that brought us all to that ceremony space on that day.

“How did you first meet?”.

“After meeting for the first time, how did you know they were 'The One'?”.

To coincide with the ‘first meeting’ question, we ask a follow up about their first real date

“What memorable moments have you shared?”

The proposal, where it happened, what was said and done, and how they celebrated afterwards.

“What does your partner bring out in you that you’re thankful for?”.`,
              },
              {
                title: "Time capsule & love letters",
                body: `The couple are prompted beforehand to write each other a secret love letter on the journey up to their wedding day. During the ceremony, they’ll then place these love letters in a time capsule box, usually along with a bottle of their favourite drink, to be opened on their wedding anniversary.

Placement of this enhancement within the ceremony is entirely up to your personal preference. There’s no right or wrong time to do it, so feel free to choose whatever feels best for you.`,
              },
              {
                title: "Handfasting",
                body: `Hand fasting is one of the oldest Celtic wedding rituals.

In Brehon law, when a couple declared their intention to marry, the custom was that their hands were tied together by a Hessian ribbon. At that time, the binding was a visible sign of their intentions to commit their lives to each other. It was visible for all to see, and this gave rise to the expression of ‘tying the knot’.

With each colour comes its own symbolism and set of meanings.

Couples are encouraged to choose whichever colours symbolise the qualities that they see in each other, and which meanings stand out most to them.

Red: represents passion, strength and lust.

Orange: denotes encouragement, attraction, kindness and plenty.

Yellow: illustrates charm, confidence, joy and balance.

Green: exhibits finances, fertility, charity, prosperity and health.

Blue: symbolises tranquillity, patience, devotion and sincerity.

Purple: stands for power, piety, sanctity and sentimentality.

Black: indicates strength, wisdom, vision and success.

White: implies purity, concentration, meditation and peace.

Grey: suggests neutrality, cancelling and balance.

Pink: shows unity, honour, truth, romance and happiness.

Brown: expresses earth, grounding, talent, telepathy and home.

Silver: demonstrates treasure, values, creativity and inspiration.

Gold: signals energy, wealth, intelligence and longevity.`,
              },
              {
                title: "Last Kiss before First Kiss",
                body: `The Last Kiss before First Kiss enhancement can be a very touching and beautiful gift to give to a person or people of significance. It could be from parents, grandparents, children or anybody who has played a pivotal role in the couple’s lives leading up to their wedding day. Just before they have their first kiss as a married couple, they can turn to their guests and place a kiss and a hug on that person or persons who they want not only to thank, but to include in a deeply personal way. This incredible moment within the ceremony, and this kiss, could also be a beautiful way of including children in this historic moment in everybody's lives.`,
              },
              {
                title: "The oathing stone",
                body: `The Oathing Stone enhancement allows couples to make a commitment to each other that is literally ‘set in stone’.

The stone can be found in nature, perhaps from one of your favourite places. Adding an engraving or a design to the stone is also a nice, personalised touch some couples opt for.

This ritual takes place during the exchange of vows. Depending on the size of the stone, they can either hold it together as a couple, or place their hands on it as their Minister, leads them through the words they have chosen to join their lives together.`,
              },
              {
                title: "Coloured sand blending",
                body: `This lovely ritual is symbolic of two people and two families coming together as one.

During the Sand Blending enhancement, each participant is given a glass container of different coloured sand. In turn, each participant will pour the different sands into a centre vessel, creating a blend and pattern unique to the moment and the people involved, with each layer and colour weaving and designing a lasting reminder of how the family blends and weaves their lives together from this moment forward.`,
              },
              {
                title: "The loving cup",
                body: `This ancient and beautiful ritual has roots as far back as the 15th century in Celtic, Jewish and French traditions.

The Cup itself can come in many forms. Known as a 'quaich' in Scotland, it is a two-handled cup which can have the couple’s names and wedding date etched onto it. More recently, couples have used an engraved wine glass for their ritual.`,
              },
              {
                title: "Jumping the broom",
                body: `An age-old tradition for weddings, Jumping the Broom can be traced back to several cultures and countries. The broom can be a conventional one or can be specially made with significant or personal material from your couple, or their families.

The broom is placed on the floor and in jumping over it, your couple is symbolically jumping from their single lives into a life of married bliss!`,
              },
              {
                title: "The rose ceremony",
                body: `During the Rose Ceremony, a couple may wordlessly exchange a gift of a rose to each other. This exchange is not only the first gift they will offer each other as a married couple, but it is also a silent ‘I love you’. These beautiful flowers can be pressed and placed in a frame and will remain with the couple as a lasting reminder of the love and commitment they openly shared before their family and loved ones as they became husband and wife, husband and husband, or wife and wife.

If the couple has children, they can also be included and can each be gifted a small flower which can be tucked in amongst the tokens of love, right where they belong.`,
              },
              {
                title: "The wishing tree",
                body: `A tradition of Dutch origin, the Wishing Tree enhancement is a beautiful way to add an element of interaction with guests during a ceremony.

Instead of a guest book, your clients may place a wishing tree, wish tags, pens and a box or container in the venue for the guests to write a wish for them, the couple. Afterwards, each guest places their wish tag upon the tree.`,
              },
              {
                title: "Planting a tree",
                body: `Planting a tree on your wedding day can be hugely symbolic of the relationship taking root. This tree can be planted in a pot at a chosen time during the ceremony.

Soil can be gathered from a special place (perhaps a childhood garden) and mixed. As the tree or shrub is planted by your clients, when planted, they can water it together, giving life to it as they give life to their marriage.`,
              },
              {
                title: "Pinning the tartan",
                body: `Pinning The Tartan is a wonderful Scottish tradition - a piece of the clan's tartan (or perhaps a sash) is pinned to the bride by a member of the groom’s family, typically the mother. In turn, a member of the bride’s family will pin a piece of their clan's tartan on the groom.

This is an old and beautiful way for families to seal the union of both their traditions and ancestry and declare their welcome to their new family member.`,
              },
            ].map(({ title, body }) => (
              <details key={title} className={cx("rounded-xl border p-4", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
                <summary className="font-semibold cursor-pointer">{title}</summary>
                <p className="mt-2 whitespace-pre-line">{body}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* VOW RENEWALS */}
        <Section id="vow-renewals" title="Wedding vow renewals" isDark={isDark}>
          <p>Celebrate how your love deepens over time.</p>
          <p className="mt-4">
            At West Coast Celebrants, we believe every love story is precious, and that true love only grows deeper and stronger over time.
          </p>
          <p className="mt-4">
            A vow renewal honours the past, celebrates the present, and embraces the future together, hand in hand.
          </p>
          <p className="mt-4">
            It’s a perfect moment to involve children, grandchildren, family and friends. Whether intimate or grand, we’ll craft a heartfelt ceremony that reflects the love, laughter and life you’ve shared.
          </p>
          <p className="mt-4">
            See the wedding enhancements options that can be crafted into your vow renewal ceremony.
          </p>
        </Section>

        {/* NAMING */}
        <Section id="naming" title="Naming ceremonies" isDark={isDark}>
          <p>Naming ceremonies enhancements may include any of the following:</p>
          <div className="mt-4 space-y-3">
            {[
              {
                title: "Rose Petal & Swaddling Blanket",
                body: `Two-part enhancement involving rose petals, a swaddling blanket, and water. Guests place rose petals in water with silent wishes at the beginning. Towards the end, parents sprinkle rose water on baby's hands and feet, accompanied by silent wishes.`,
              },
              {
                title: "Dedication Candle",
                body: `Symbolises passing love and wisdom from one generation to another. Family members light a family candle, and parents use it to light child's candle. Option to relight a special candle annually for the naming anniversary.`,
              },
              {
                title: "Memory Book",
                body: `Guests write wishes and messages in a book for the baby.

Some couples integrate Polaroid photos along with written blessings. A lasting memento for the child to read in the future.`,
              },
              {
                title: "Sand Blending",
                body: `Participants use coloured sand to symbolise a loving union between family members. Each colour represents different characteristics and aspirations. Placed towards the end of the ceremony for its symbolic significance.`,
              },
              {
                title: "Hand & Footprint Ceremony",
                body: `Capture the baby's tiny hands and feet prints during the ceremony. Prints can be added to a Memory Book or displayed in various ways. Siblings can be involved, making it a touching family moment.`,
              },
              {
                title: "Memory Box",
                body: `A special box filled with reminders of early childhood.

Can include scan photos, first items, lock of hair, and more.

A cherished keepsake reflecting on the child's growth.`,
              },
              {
                title: "Planting a Tree/Shrub",
                body: `Celebrate a new life by planting a small tree or shrub. Family members, especially older children or grandparents, can participate. The chosen plant can grow alongside the child over the years.`,
              },
              {
                title: "Bread & Salt Welcome",
                body: `A traditional Balkan ritual symbolising hospitality. Best placed at the start of the ceremony as part of the opening welcome. Parents or guide parents offer baskets of bread and salt to each guest.`,
              },
              {
                title: "Grandma’s Cake",
                body: `Incorporate a loved one's recipe for a naming cake. Discuss the significance of passing down love through family traditions. Best placed after closing words and before the celebratory moment.`,
              },
            ].map(({ title, body }) => (
              <details key={title} className={cx("rounded-xl border p-4", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
                <summary className="font-semibold cursor-pointer">{title}</summary>
                <p className="mt-2 whitespace-pre-line">{body}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* CELEBRATION OF LIFE */}
        <Section id="celebration-of-life" title="Celebration of life" isDark={isDark}>
          <p>We believe love transcends the boundaries of life and death, and that grief and joy can coexist.</p>
          <p className="mt-4">
            Our ceremonies are thoughtfully crafted with deep love and affection, as a well-deserved tribute in the celebration of your loved one’s life, because <strong>every life</strong> has a story worth celebrating.
          </p>
          <p className="mt-4">
            We endeavour to capture the essence and personality of your loved one and create a space to celebrate the qualities that have made your loved one unique. It offers family and friends the opportunity to gather, to share stories, reflecting joyous moments and honour the life that was well lived.
          </p>
          <p className="mt-4">
            Whether in a Funeral Home or a private home, at a grave site or in a crematorium, we ensure each ceremony is conducted with warmth, sensitivity, dignity, and respect for your loved one.
          </p>
          <p className="mt-4">
            Rather than focusing on grief and sorrow, a celebration of life ceremony is crafted respectfully, to celebrate the uniqueness of your departed loved one and the impact they have had on our lives.
          </p>
          <p className="mt-4">
            Traditional funerals may focus more on mourning; a celebration of life ceremony allows us to give thanks for the time spent with the departed loved one.
          </p>

          <h3 className="text-xl font-semibold mt-10">The ceremony</h3>
          <p className="mt-2">
            Celebration of life ceremonies often include symbolic gestures or rituals that help honour our departed and provide a sense of closure. These rituals could include:
          </p>
          <div className="mt-4 space-y-3">
            {[
              {
                title: "Symbolism of Gifts",
                body: `Before the funeral the family will decide on some items of importance or that held some special place in the life of the deceased. An example of some items that can be brought forward could be, say, a GAA jersey or a photo of the family that cared so deeply about them.`,
              },
              {
                title: "Lighting candles",
                body: `For the Candlelight Vigil, the Minister will light a main candle at the start of the funeral or memorial. Afterwards, taking light from that same large candle, the minister will light several smaller, thinner candles. The main candle in this instance represents the light or life of the deceased, and the remaining candles act as a small representation of the many lives this person has touched in their lifetime.`,
              },
              {
                title: "Planting a tree or shrub",
                body: `Celebrate the life of your dearly departed loved one by planting a small tree or shrub. Family members and close friends can participate. The chosen tree or shrub will grow and bloom over the years and will be a gentle reminder of the love and times you once shared.`,
              },
              {
                title: "Ceremony of The Rose",
                body: `A vase is set up beside a framed photo on a separate table, and each person is given a rose to place in the vase as they bid farewell to their loved one, in silent remembering or in prayer. The mourners may also place the roses on the coffin itself.`,
              },
              {
                title: "Bird Release",
                body: `Birds symbolise transition in many ways.

Releasing birds during a funeral ceremony can be a very moving experience, as a visual representation that love is stronger than death.

This ritual is placed at the end of the ceremony on most occasions and can really help to uplift those in attendance.`,
              },
            ].map(({ title, body }) => (
              <details key={title} className={cx("rounded-xl border p-4", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
                <summary className="font-semibold cursor-pointer">{title}</summary>
                <p className="mt-2 whitespace-pre-line">{body}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* YOUR FUNERAL */}
        <Section id="your-funeral" title="Writing your own funeral" isDark={isDark}>
          <p>Pre planning your own funeral is a new concept in Ireland.</p>
          <p className="mt-4">It is difficult to think about your own demise, but it can also be liberating and healing.</p>
          <p className="mt-4">By ensuring your wishes are known to your loved ones, you're ensuring that your last farewell is exactly what you want.</p>
          <p className="mt-4">This is a real gift to your loved ones during their time of sorrow; you have taken away that concern for them.</p>
        </Section>

        {/* FAQ */}
        <Section id="faq" title="FAQ" kicker="Good to know" isDark={isDark}>
          <details className={cx("mb-3 rounded-xl border p-4", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
            <summary className="font-semibold cursor-pointer">How far in advance should we book?</summary>
            <p className="mt-2">As soon as you have a venue/date in mind. Popular dates book quickly — get in touch and we’ll check availability.</p>
          </details>
          <details className={cx("mb-3 rounded-xl border p-4", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
            <summary className="font-semibold cursor-pointer">Is there a legal notice period in Ireland?</summary>
            <p className="mt-2">Yes — couples must give civil notice to the HSE in advance of a legal wedding. We will guide you through this process step-by-step.</p>
          </details>
          <details className={cx("rounded-xl border p-4", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
            <summary className="font-semibold cursor-pointer">Do you travel?</summary>
            <p className="mt-2">Yes — Westport based, officiating across the West of Ireland (Mayo, Galway, Sligo and beyond by arrangement).</p>
          </details>
        </Section>

        {/* PRIVACY */}
        <Section id="privacy" title="Privacy" isDark={isDark}>
          <p>
            We only use the details you submit to respond to your enquiry and to provide celebrancy services. We don’t sell or share your data. Request deletion any time at{" "}
            <a className="underline" href="mailto:westcoastcelebrants@gmail.com">westcoastcelebrants@gmail.com</a>.
          </p>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Check availability" kicker="Get in touch" isDark={isDark}>
          <p>Based in Westport, Co. Mayo, officiating across the West of Ireland.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className={cx("rounded-3xl border p-6 shadow-sm", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
              <h3 className="font-semibold text-lg">Quick enquiry</h3>
              <ContactForm isDark={isDark} />
            </div>
            <div className={cx("rounded-3xl border p-6 shadow-sm", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
              <h3 className="font-semibold text-lg">Legal process (Ireland)</h3>
              <p className="mt-2">
                When you book a legal wedding ceremony with West Coast Celebrants, we guide you step by step, from giving legal notice to signing the marriage registration form, ensuring all requirements in Ireland are met.
              </p>
              <a
                href="#how-it-works"
                onClick={(e) => { e.preventDefault(); goTo("#how-it-works"); }}
                className={cx("mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl border font-medium", isDark ? "border-slate-700 hover:bg-slate-900" : "border-slate-300 hover:bg-slate-50")}
              >
                Read how it works <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <div className={cx("mt-6 text-sm space-y-2", isDark ? "text-slate-300" : "text-slate-600")}>
                <p className="inline-flex items-center gap-2"><Phone className="h-4 w-4" aria-hidden="true" /> <a href="tel:+3530000000" className="underline underline-offset-2">Phone on request</a></p>
                <p className="inline-flex items-center gap-2"><Mail className="h-4 w-4" aria-hidden="true" /> <a className="underline underline-offset-2" href="mailto:westcoastcelebrants@gmail.com">westcoastcelebrants@gmail.com</a></p>
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className={cx("border-t mt-16", isDark ? "border-slate-800 bg-gradient-to-b from-slate-950 to-slate-950" : "border-slate-200 bg-gradient-to-b from-white to-slate-50")}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 gap-6 items-center">
          <div>
            <p className="font-semibold">West Coast Celebrants</p>
            <p className={cx("text-sm", isDark ? "text-slate-300" : "text-slate-600")}>Westport, Co. Mayo · Officiating across the West of Ireland</p>
          </div>
          <div className="justify-self-end text-sm">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={cx("inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold", isDark ? "border-slate-700 hover:bg-slate-900" : "border-slate-300 hover:bg-slate-50")}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
              {isDark ? "Light mode" : "Dark mode"}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
