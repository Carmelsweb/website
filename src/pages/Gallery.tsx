import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function GalleryPage() {
  usePageMeta({
    title: "Gallery",
    description: "A selection of ceremony moments and celebrations.",
    path: "/gallery",
  });

  return (
    <Section title="Gallery">
      <p>A glimpse into ceremonies crafted with love, family, and community.</p>
    </Section>
  );
}
