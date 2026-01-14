import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function PaymentPolicyPage() {
  usePageMeta({
    title: "Payment policy",
    description: "Booking fees, payment schedules, and invoicing details for West Coast Celebrants.",
    path: "/payment-policy",
  });

  return (
    <Section title="Payment policy" kicker="Transparent payments">
      <p>
        This policy explains how payments are handled for West Coast Celebrants services. If anything in your invoice differs, the invoice terms apply.
      </p>

      <h2 className="text-xl font-semibold mt-10">Booking fee</h2>
      <p className="mt-3">
        A non-refundable booking fee is required to reserve your ceremony date. The booking is not confirmed until the fee is received.
      </p>

      <h2 className="text-xl font-semibold mt-10">Balance payments</h2>
      <p className="mt-3">
        The remaining balance is due no later than four weeks before the ceremony date unless agreed otherwise in writing.
      </p>

      <h2 className="text-xl font-semibold mt-10">Payment methods</h2>
      <p className="mt-3">
        Payments may be made by bank transfer or via third-party payment providers as listed on your invoice. Please ensure you reference the invoice number when paying.
      </p>

      <h2 className="text-xl font-semibold mt-10">Late payments</h2>
      <p className="mt-3">
        If payment is not received by the due date, we may pause work on the ceremony until the balance is settled.
      </p>

      <h2 className="text-xl font-semibold mt-10">Refunds</h2>
      <p className="mt-3">
        Booking fees are non-refundable. Additional payments may be refunded only where required by law or as agreed in writing.
      </p>
    </Section>
  );
}
