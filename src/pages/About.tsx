import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function AboutPage() {
  usePageMeta({
    title: "About",
    description: "Learn about Carmel Fitzgerald and the West Coast Celebrants approach to ceremonies.",
    path: "/about",
  });

  return (
    <Section title="About">
      <p>Meet Carmel Fitzgerald and discover the care and preparation behind each ceremony.</p>
    </Section>
  );
}
