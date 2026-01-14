import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function RecommendationsPage() {
  usePageMeta({
    title: "Recommendations",
    description: "Recommendations for venues and trusted suppliers.",
    path: "/recommendations",
  });

  return (
    <Section title="Recommendations">
      <p>Recommendations for venues, music, and trusted suppliers across the west.</p>
    </Section>
  );
}
