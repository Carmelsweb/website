import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function TermsPage() {
  usePageMeta({
    title: "Terms of service",
    description: "Service terms, pricing, payment, and booking conditions for West Coast Celebrants.",
    path: "/terms",
  });

  return (
    <Section title="Terms of service" kicker="Service agreement">
      <p>
        These terms outline the service agreement between you (the client) and West Coast Celebrants. By booking, you agree to the terms below. Please read carefully.
      </p>

      <h2 className="text-xl font-semibold mt-10">Services</h2>
      <p className="mt-3">
        We provide celebrant services including consultations, ceremony planning, and officiating on the agreed date and time.
      </p>

      <h2 className="text-xl font-semibold mt-10">Pricing</h2>
      <p className="mt-3">
        Pricing is provided in writing once we confirm your ceremony type, date, and location. Quotes are typically valid for 30 days unless otherwise stated.
      </p>

      <h2 className="text-xl font-semibold mt-10">Booking and payment</h2>
      <ul className="list-disc pl-6 mt-3 space-y-2">
        <li>A booking fee is required to secure your date.</li>
        <li>The balance is due no later than four weeks before the ceremony unless agreed otherwise.</li>
        <li>Payment may be collected by bank transfer or via a third-party payment provider as agreed in your invoice.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10">Third-party services</h2>
      <p className="mt-3">
        If you choose to use third-party services (such as payment providers, venues, or vendors), their own terms and privacy policies apply. We are not responsible for the actions or services of third parties.
      </p>

      <h2 className="text-xl font-semibold mt-10">Changes and revisions</h2>
      <p className="mt-3">
        Ceremony content includes up to three revisions. Additional revisions or extra meetings may incur a fee, which will be confirmed before any work is undertaken.
      </p>

      <h2 className="text-xl font-semibold mt-10">Cancellations</h2>
      <p className="mt-3">
        If you cancel, the booking fee is non-refundable. If we need to cancel due to unforeseen circumstances, we will refund payments made and help you find an alternative celebrant where possible.
      </p>

      <h2 className="text-xl font-semibold mt-10">Liability</h2>
      <p className="mt-3">
        We are not liable for delays or non-performance due to events outside our reasonable control (for example, extreme weather, illness, or venue closures).
      </p>
    </Section>
  );
}
