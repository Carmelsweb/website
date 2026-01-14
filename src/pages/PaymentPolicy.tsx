import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function PaymentPolicyPage() {
  usePageMeta({
    title: "Payment policy",
    description: "Deposit, balance, and payment schedule details.",
    path: "/payment-policy",
  });

  return (
    <Section title="Payment policy">
      <p>Details on deposits, balances, and payment timing for bookings.</p>
    </Section>
  );
}
