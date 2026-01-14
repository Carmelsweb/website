import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/theme";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const namingEnhancements = [
  {
    title: "Rose Petal & Swaddling Blanket",
    body:
      "Two-part enhancement involving rose petals, a swaddling blanket, and water. Guests place rose petals in water with silent wishes at the beginning. Towards the end, parents sprinkle rose water on baby's hands and feet, accompanied by silent wishes.",
  },
  {
    title: "Dedication Candle",
    body:
      "Symbolises passing love and wisdom from one generation to another. Family members light a family candle, and parents use it to light the child's candle. Option to relight a special candle annually for the naming anniversary.",
  },
  {
    title: "Memory Book",
    body:
      "Guests write wishes and messages in a book for the baby. Some couples integrate Polaroid photos along with written blessings. A lasting memento for the child to read in the future.",
  },
  {
    title: "Sand Blending",
    body:
      "Participants use coloured sand to symbolise a loving union between family members. Each colour represents different characteristics and aspirations. Placed towards the end of the ceremony for its symbolic significance.",
  },
  {
    title: "Hand & Footprint Ceremony",
    body:
      "Capture the baby's tiny hands and feet prints during the ceremony. Prints can be added to a memory book or displayed in various ways. Siblings can be involved, making it a touching family moment.",
  },
  {
    title: "Memory Box",
    body:
      "A special box filled with reminders of early childhood. Can include scan photos, first items, lock of hair, and more. A cherished keepsake reflecting on the child's growth.",
  },
  {
    title: "Planting a Tree/Shrub",
    body:
      "Celebrate a new life by planting a small tree or shrub. Family members, especially older children or grandparents, can participate. The chosen plant can grow alongside the child over the years.",
  },
  {
    title: "Bread & Salt Welcome",
    body:
      "A traditional Balkan ritual symbolising hospitality. Best placed at the start of the ceremony as part of the opening welcome. Parents or guide parents offer baskets of bread and salt to each guest.",
  },
  {
    title: "Grandma's Cake",
    body:
      "Incorporate a loved one's recipe for a naming cake. Discuss the significance of passing down love through family traditions. Best placed after closing words and before the celebratory moment.",
  },
];

export function NamingPage() {
  const { isDark } = useTheme();

  usePageMeta({
    title: "Naming ceremonies",
    description: "Welcome new life with a naming ceremony filled with meaning and ritual.",
    path: "/naming",
  });

  return (
    <>
      <Section title="Naming ceremonies">
        <p>Naming ceremony enhancements may include any of the following:</p>
        <div className="mt-4 space-y-3">
          {namingEnhancements.map(({ title, body }) => (
            <details key={title} className={cx("rounded-xl border p-4", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
              <summary className="font-semibold cursor-pointer">{title}</summary>
              <p className="mt-2 whitespace-pre-line">{body}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className={cx("rounded-3xl border p-6 sm:p-8", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
          <h2 className="text-2xl font-semibold">Inquire now</h2>
          <p className={cx("mt-2", isDark ? "text-slate-300" : "text-slate-600")}>
            Let us know your preferred date and the style of naming ceremony you envision.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-white shadow-lg shadow-[var(--brand-teal)]/20 bg-gradient-to-r from-[var(--brand-teal)] to-emerald-600"
          >
            Inquire now
          </Link>
        </div>
      </section>
    </>
  );
}
