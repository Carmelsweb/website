import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function HowItWorksPage() {
  usePageMeta({
    title: "How it works",
    description: "A simple guide to planning your ceremony with West Coast Celebrants.",
    path: "/how-it-works",
  });

  return (
    <Section title="How it works">
      <p>From first contact to the big day, we guide you through each step.</p>
    </Section>
  );
}
