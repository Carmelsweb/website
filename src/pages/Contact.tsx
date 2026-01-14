import { ContactForm } from "../site/ContactForm";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";

export function ContactPage() {
  usePageMeta({
    title: "Contact",
    description: "Get in touch to check availability and start planning your ceremony.",
    path: "/contact",
  });

  return (
    <>
      <Section title="Contact">
        <p>Share your date and venue details and we will respond with availability.</p>
      </Section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ContactForm />
      </section>
    </>
  );
}
