import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function HomePage() {
  usePageMeta({
    title: "West Coast Celebrants",
    description: "Bespoke ceremonies across the West of Ireland for weddings, vow renewals, and naming ceremonies.",
    path: "/",
  });

  return (
    <Section title="West Coast Celebrants">
      <p>Bespoke ceremonies across the West of Ireland, crafted with warmth and care.</p>
    </Section>
  );
}
