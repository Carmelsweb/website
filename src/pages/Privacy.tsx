import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function PrivacyPage() {
  usePageMeta({
    title: "Privacy policy",
    description: "How West Coast Celebrants handles personal data and privacy.",
    path: "/privacy",
  });

  return (
    <Section title="Privacy policy">
      <p>Read how we collect, use, and protect your information.</p>
    </Section>
  );
}
