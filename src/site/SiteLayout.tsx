import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ChevronDown, Menu, X } from "lucide-react";
import { useTheme } from "./useTheme";
import paintedBackground from "../assets/bbf6a4b0-0ef3-409f-8025-2ad9df65a8d3.png";

const palette = { navy: "#1c2233", teal: "#5c8a87", gold: "#d4a62a" };

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const primaryLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "How it works", to: "/how-it-works" },
  { label: "Recommendations", to: "/recommendations" },
  { label: "FAQ", to: "/faq" },
];

const serviceLinks = [
  { label: "All services", to: "/services" },
  { label: "Weddings", to: "/weddings" },
  { label: "Vow renewals", to: "/vow-renewals" },
  { label: "Naming", to: "/naming" },
  { label: "Celebration of life", to: "/celebration-of-life" },
  { label: "Your funeral", to: "/your-funeral" },
];

const legalLinks = [
  { label: "Privacy policy", to: "/privacy" },
  { label: "Terms of service", to: "/terms" },
  { label: "Payment policy", to: "/payment-policy" },
  { label: "Cookie policy", to: "/cookies" },
];

export function SiteLayout() {
  const { isDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const backgroundStyle = useMemo(
    () =>
      ({
        "--brand-navy": palette.navy,
        "--brand-teal": palette.teal,
        "--brand-gold": palette.gold,
        backgroundImage: [
          isDark
            ? "linear-gradient(180deg, rgba(7, 10, 18, 0.74), rgba(7, 10, 18, 0.88))"
            : "linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(238, 245, 249, 0.82))",
          "radial-gradient(circle at 18% 12%, rgba(212, 166, 42, 0.2), transparent 46%)",
          "radial-gradient(circle at 82% 18%, rgba(92, 138, 135, 0.18), transparent 48%)",
          "radial-gradient(circle at 52% 76%, rgba(71, 111, 155, 0.16), transparent 56%)",
          "conic-gradient(from 200deg at 50% 12%, rgba(92, 138, 135, 0.16), rgba(212, 166, 42, 0.2), rgba(71, 111, 155, 0.16), transparent)",
          `url(${paintedBackground})`,
        ].join(", "),
        backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat",
        backgroundSize: "100% 100%, 560px, 620px, 720px, 1400px, cover",
        backgroundPosition: "center top, 12% 8%, 88% 10%, 50% 80%, 50% 10%, center",
        backgroundAttachment: "fixed, fixed, fixed, fixed, fixed, fixed",
        backgroundBlendMode: "normal, screen, screen, screen, screen, normal",
      } as React.CSSProperties),
    [isDark]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Carmel Fitzgerald",
      jobTitle: "Wedding Celebrant & Solemniser",
      worksFor: { "@type": "Organization", name: "West Coast Celebrants" },
      email: "mailto:westcoastcelebrants@gmail.com",
      areaServed: ["County Mayo", "County Galway", "County Sligo", "West of Ireland"],
    });
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  const navBase = useMemo(
    () => (isDark ? "text-slate-200 hover:text-white" : "text-slate-700 hover:text-slate-900"),
    [isDark]
  );

  return (
    <div
      className={cx("min-h-screen", isDark ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900")}
      style={backgroundStyle}
    >
      <div className="h-1 w-full bg-gradient-to-r from-[var(--brand-teal)] via-[var(--brand-gold)] to-[var(--brand-teal)]" />

      <header
        className={cx(
          "sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-white/65 bg-white/90",
          isDark && "supports-[backdrop-filter]:bg-slate-950/65 bg-slate-950/90 border-slate-800/70",
          !isDark && "border-slate-200/70"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 xl:px-10 h-16">
          <Link to="/" className="flex items-center gap-3 group" aria-label="West Coast Celebrants home">
            <img
              src="/logo.png"
              alt="West Coast Celebrants logo"
              className="h-9 w-9 rounded-full object-cover ring-1 ring-black/10"
            />
            <span className={cx("font-extrabold tracking-wide", isDark ? "text-white" : "text-slate-900")}>
              West Coast Celebrants
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-6">
            <div className="relative group">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  cx(
                    "text-base font-medium transition-colors inline-flex items-center gap-1",
                    navBase,
                    isActive && "text-[var(--brand-teal)]"
                  )
                }
                aria-haspopup="true"
              >
                Services <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </NavLink>
              <div
                className={cx(
                  "absolute left-0 top-full pt-2 w-56 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
                )}
              >
                <div
                  className={cx(
                    "rounded-2xl border p-2 shadow-lg",
                    isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white"
                  )}
                >
                  {serviceLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        cx(
                          "block rounded-xl px-3 py-2 text-base transition-colors",
                          isDark ? "hover:bg-slate-900" : "hover:bg-slate-50",
                          isActive && "text-[var(--brand-teal)]"
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {primaryLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cx("text-base font-medium transition-colors", navBase, isActive && "text-[var(--brand-teal)]")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className={cx(
                "inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-base font-semibold",
                isDark ? "border-slate-700 hover:bg-slate-900" : "border-slate-300 hover:bg-slate-50"
              )}
            >
              <Calendar className="h-4 w-4" aria-hidden="true" /> Inquire now
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
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
              className={cx("lg:hidden border-t", isDark ? "border-slate-800 bg-slate-950/95" : "border-slate-200 bg-white/95")}
            >
              <div className="px-4 py-4 max-w-7xl mx-auto space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {primaryLinks.map((link) => (
                    <NavLink key={link.to} to={link.to} className={cx("text-base font-medium", navBase)}>
                      {link.label}
                    </NavLink>
                  ))}
                </div>
                <div>
                  <p className={cx("text-sm uppercase tracking-widest", isDark ? "text-slate-400" : "text-slate-500")}>
                    Services
                  </p>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceLinks.map((link) => (
                      <NavLink key={link.to} to={link.to} className={cx("text-base font-medium", navBase)}>
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <div>
                  <p className={cx("text-sm uppercase tracking-widest", isDark ? "text-slate-400" : "text-slate-500")}>
                    Legal
                  </p>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {legalLinks.map((link) => (
                      <NavLink key={link.to} to={link.to} className={cx("text-base font-medium", navBase)}>
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-4 py-3 rounded-2xl font-semibold text-white shadow-lg shadow-[var(--brand-teal)]/20 bg-gradient-to-r from-[var(--brand-teal)] to-emerald-600"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" /> Inquire now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer
        className={cx(
          "border-t mt-16",
          isDark
            ? "border-slate-800 bg-gradient-to-b from-slate-950 to-slate-950"
            : "border-slate-200 bg-gradient-to-b from-[#e9f4ff] via-white to-[#f4f8ff]"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-10 grid sm:grid-cols-2 gap-6 items-center">
          <div>
            <p className="font-semibold">West Coast Celebrants</p>
            <p className={cx("text-base", isDark ? "text-slate-300" : "text-slate-600")}>
              Westport, Co. Mayo - Officiating across the West of Ireland
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-base">
              {legalLinks.map((link) => (
                <Link key={link.to} to={link.to} className={cx("underline underline-offset-2", navBase)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="justify-self-start sm:justify-self-end text-base">
            <ThemeToggle />
          </div>
        </div>
      </footer>
    </div>
  );
}

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={cx(
        "inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-base font-semibold",
        isDark ? "border-slate-700 hover:bg-slate-900" : "border-slate-300 hover:bg-slate-50"
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? "Light mode" : "Dark mode"}
    </button>
  );
}
