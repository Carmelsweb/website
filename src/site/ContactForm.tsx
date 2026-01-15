import React, { useState } from "react";
import { Mail } from "lucide-react";
import { useTheme } from "./theme";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const { isDark } = useTheme();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("company")) return;
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
        <option value="" disabled>
          Ceremony type
        </option>
        <option>Legal Wedding</option>
        <option>Commitment Wedding</option>
        <option>Elopement Wedding</option>
        <option>Naming Ceremony</option>
        <option>Vow Renewal</option>
        <option>Celebration of Life</option>
      </select>
      <input name="date" type="date" className={inputBase} aria-label="Preferred date" />
      <textarea
        name="message"
        required
        className={cx(inputBase, "h-28")}
        placeholder="Tell us a little about your ceremony"
        aria-label="Message"
      />
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-white shadow-lg shadow-[var(--brand-teal)]/20 bg-gradient-to-r from-[var(--brand-teal)] to-emerald-600 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          <Mail className="h-4 w-4" aria-hidden="true" /> {status === "sending" ? "Sending..." : "Send enquiry"}
        </button>
        <p className={cx("text-xs break-words", isDark ? "text-slate-300" : "text-slate-600")}>
          Or email us at <a className="underline break-all" href="mailto:westcoastcelebrants@gmail.com">westcoastcelebrants@gmail.com</a>
        </p>
      </div>
      {status === "ok" && <p className="text-sm text-emerald-600">Thanks! We'll get back to you soon.</p>}
      {status === "error" && <p className="text-sm text-rose-600">Sorry, something went wrong. Please email us directly.</p>}
    </form>
  );
}
