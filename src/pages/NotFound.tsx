import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function NotFoundPage() {
  usePageMeta({
    title: "Page not found",
    description: "The page you requested could not be found.",
    path: "/404",
  });

  return (
    <Section title="Page not found">
      <p>Sorry, we cannot find that page. Use the navigation to return home.</p>
    </Section>
  );
}
