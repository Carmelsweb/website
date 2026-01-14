import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function ServicesPage() {
  usePageMeta({
    title: "Services",
    description: "Explore ceremony services for weddings, vow renewals, naming ceremonies, and celebrations of life.",
    path: "/services",
  });

  return (
    <Section title="Services">
      <p>Choose from legal weddings, commitment ceremonies, vow renewals, naming ceremonies, and celebrations of life.</p>
    </Section>
  );
}
