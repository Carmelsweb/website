import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function CelebrationOfLifePage() {
  usePageMeta({
    title: "Celebration of life",
    description: "A meaningful ceremony to honor and remember a loved one.",
    path: "/celebration-of-life",
  });

  return (
    <Section title="Celebration of life">
      <p>Celebrate a life well lived with stories, music, and the people who mattered most.</p>
    </Section>
  );
}
