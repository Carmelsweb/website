import React from "react";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function PrivacyPage() {
  usePageMeta({
    title: "Privacy policy",
    description: "How West Coast Celebrants collects, uses, and protects your personal data.",
    path: "/privacy",
  });

  return (
    <Section title="Privacy policy" kicker="Your data matters">
      <p>
        West Coast Celebrants respects your privacy and is committed to protecting your personal data. This policy explains what we collect, how we use it, and your rights under GDPR.
      </p>

      <h2 className="text-xl font-semibold mt-10">Data we collect</h2>
      <ul className="list-disc pl-6 mt-3 space-y-2">
        <li>Contact details such as your name, email, phone number, and preferred contact method.</li>
        <li>Ceremony details such as date, venue, ceremony type, and any special requirements.</li>
        <li>Messages you send via the enquiry form or by email.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10">How we use your data</h2>
      <ul className="list-disc pl-6 mt-3 space-y-2">
        <li>To respond to your enquiry and provide celebrant services.</li>
        <li>To confirm availability, plan your ceremony, and fulfil legal requirements.</li>
        <li>To send invoices, confirmations, and essential service communications.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10">Legal basis</h2>
      <p className="mt-3">
        We process your data on the basis of legitimate interests, contractual necessity (to deliver the service), and legal obligations where applicable.
      </p>

      <h2 className="text-xl font-semibold mt-10">Sharing your data</h2>
      <p className="mt-3">
        We do not sell your data. We only share it with trusted service providers when required to deliver our services (for example, payment providers or venue coordination), and only the minimum information needed.
      </p>

      <h2 className="text-xl font-semibold mt-10">Retention</h2>
      <p className="mt-3">
        We keep your data only as long as needed to provide the service and to meet legal or tax obligations. You can request deletion at any time, subject to legal requirements.
      </p>

      <h2 className="text-xl font-semibold mt-10">Your rights</h2>
      <ul className="list-disc pl-6 mt-3 space-y-2">
        <li>Access, correction, or deletion of your personal data.</li>
        <li>Restriction or objection to processing.</li>
        <li>Data portability.</li>
        <li>Withdrawal of consent where applicable.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10">Security</h2>
      <p className="mt-3">
        We take appropriate technical and organisational measures to protect your data. Please note that no transmission over the internet can be guaranteed as 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-10">Contact</h2>
      <p className="mt-3">
        To exercise your rights or ask questions about this policy, email{" "}
        <a className="underline" href="mailto:westcoastcelebrants@gmail.com">westcoastcelebrants@gmail.com</a>.
      </p>
    </Section>
  );
}
