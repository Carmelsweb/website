import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function WeddingsPage() {
  usePageMeta({
    title: "Weddings",
    description: "Ceremonies for legal weddings, commitment weddings, and elopements.",
    path: "/weddings",
  });

  return (
    <Section title="Weddings">
      <p>Your wedding ceremony is personal and heartfelt, tailored to your story and your people.</p>
    </Section>
  );
}
