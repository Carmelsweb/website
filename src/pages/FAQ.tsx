import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function FAQPage() {
  usePageMeta({
    title: "Frequently asked questions",
    description: "Answers to common questions about bookings, ceremonies, and pricing.",
    path: "/faq",
  });

  return (
    <Section title="Frequently asked questions">
      <p>Answers to the questions we hear most often about ceremonies and planning.</p>
    </Section>
  );
}
