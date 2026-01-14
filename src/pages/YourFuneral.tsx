import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function YourFuneralPage() {
  usePageMeta({
    title: "Your funeral",
    description: "Plan a funeral ceremony that reflects your wishes and story.",
    path: "/your-funeral",
  });

  return (
    <Section title="Your funeral">
      <p>Planning ahead lets your ceremony reflect your voice and values.</p>
    </Section>
  );
}
