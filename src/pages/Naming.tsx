import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function NamingPage() {
  usePageMeta({
    title: "Naming ceremonies",
    description: "Welcome a child with a ceremony that celebrates family, friends, and new beginnings.",
    path: "/naming",
  });

  return (
    <Section title="Naming ceremonies">
      <p>A naming ceremony welcomes a child with words, promises, and joyful celebration.</p>
    </Section>
  );
}
