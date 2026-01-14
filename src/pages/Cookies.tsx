import React from "react";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function CookiesPage() {
  usePageMeta({
    title: "Cookie policy",
    description: "Information about cookies and local storage used on this site.",
    path: "/cookies",
  });

  return (
    <Section title="Cookie policy" kicker="Compliance">
      <p>
        This site uses essential functionality to operate correctly. At present, we do not use advertising or analytics cookies.
      </p>

      <h2 className="text-xl font-semibold mt-10">Local storage</h2>
      <p className="mt-3">
        We store your theme preference (light or dark) in your browser using local storage so the site remembers your choice.
      </p>

      <h2 className="text-xl font-semibold mt-10">Third-party services</h2>
      <p className="mt-3">
        If we add third-party services in the future (such as analytics or embedded media), we will update this policy and request consent where required.
      </p>

      <h2 className="text-xl font-semibold mt-10">Managing cookies</h2>
      <p className="mt-3">
        You can manage cookies in your browser settings. Disabling cookies may affect site functionality.
      </p>
    </Section>
  );
}
