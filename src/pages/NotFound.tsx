import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function NotFoundPage() {
  usePageMeta({
    title: "Page not found",
    description: "The page you are looking for could not be found.",
    path: "/404",
  });

  return (
    <Section title="Page not found" kicker="404">
      <p>Sorry, we could not find that page.</p>
      <Link to="/" className="mt-4 inline-flex items-center underline">
        Return to home
      </Link>
    </Section>
  );
}
