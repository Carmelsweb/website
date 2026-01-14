import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function TermsPage() {
  usePageMeta({
    title: "Terms of service",
    description: "Terms and conditions for services provided by West Coast Celebrants.",
    path: "/terms",
  });

  return (
    <Section title="Terms of service">
      <p>Review the terms and conditions for booking and services.</p>
    </Section>
  );
}
