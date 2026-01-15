import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/theme";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function FAQPage() {
  const { isDark } = useTheme();

  usePageMeta({
    title: "FAQ",
    description: "Common questions about ceremonies with West Coast Celebrants.",
    path: "/faq",
  });

  return (
    <Section title="FAQ" kicker="Good to know">
      <details className={cx("mb-3 rounded-xl border p-4", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
        <summary className="font-semibold cursor-pointer">How far in advance should we book?</summary>
        <p className="mt-2">As soon as you have a venue or date in mind. Popular dates book quickly, so get in touch and we will check availability.</p>
      </details>
      <details className={cx("mb-3 rounded-xl border p-4", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
        <summary className="font-semibold cursor-pointer">Is there a legal notice period in Ireland?</summary>
        <p className="mt-2">
          Yes. Couples must give <strong>at least 3 months civil notice</strong> to the HSE before a legal wedding. We will guide you through the paperwork, ID requirements, and appointment booking, including for destination couples travelling to Ireland.
        </p>
      </details>
      <details className={cx("mb-3 rounded-xl border p-4", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
        <summary className="font-semibold cursor-pointer">How quickly do you respond?</summary>
        <p className="mt-2">We reply within 24 hours. For urgent Celebration of Life enquiries, please call +353 87 130 2029.</p>
      </details>
      <details className={cx("mb-3 rounded-xl border p-4", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
        <summary className="font-semibold cursor-pointer">Do you travel?</summary>
        <p className="mt-2">Yes. Westport based, officiating across the West of Ireland (Mayo, Galway, Sligo, Roscommon and beyond by arrangement).</p>
      </details>
      <details className={cx("mb-3 rounded-xl border p-4", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
        <summary className="font-semibold cursor-pointer">Do you work with LGBTQ+ couples?</summary>
        <p className="mt-2">Absolutely. All couples are welcome — LGBTQ+, intercultural, interfaith, and secular ceremonies.</p>
      </details>
      <details className={cx("rounded-xl border p-4", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
        <summary className="font-semibold cursor-pointer">How fast can a Celebration of Life be arranged?</summary>
        <p className="mt-2">We prioritise these enquiries and draft quickly. Please call for urgent dates; memorial services can also be planned weeks or months after a passing.</p>
      </details>
    </Section>
  );
}
