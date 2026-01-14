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
        <p className="mt-2">Yes. Couples must give civil notice to the HSE in advance of a legal wedding. We will guide you through this process step by step.</p>
      </details>
      <details className={cx("rounded-xl border p-4", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
        <summary className="font-semibold cursor-pointer">Do you travel?</summary>
        <p className="mt-2">Yes. Westport based, officiating across the West of Ireland (Mayo, Galway, Sligo and beyond by arrangement).</p>
      </details>
    </Section>
  );
}
