import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function CookiesPage() {
  usePageMeta({
    title: "Cookie policy",
    description: "Information about cookies used on this website.",
    path: "/cookies",
  });

  return (
    <Section title="Cookie policy">
      <p>Information about cookies used on the West Coast Celebrants website.</p>
    </Section>
  );
}
