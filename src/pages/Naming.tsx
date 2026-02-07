import { Link } from "react-router-dom";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/useTheme";
import namingFlowers from "../assets/optimized/Rose petal.webp";
import namingCandle from "../assets/optimized/Dedication candle.webp";
import namingBook from "../assets/optimized/SigingBook.webp";
import namingSand from "../assets/optimized/Sand Blending.webp";
import handAndFootPrintImg from "../assets/optimized/Hand and foot print.webp";
import memoryBoxImg from "../assets/optimized/Memory box.webp";
import namingTree from "../assets/optimized/Planting a tree.webp";
import breadAndSaltImg from "../assets/optimized/Bread and salt.webp";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const namingEnhancements = [
  {
    title: "Rose Petal & Swaddling Blanket",
    body:
      "Two-part enhancement involving rose petals, a swaddling blanket, and water. Guests place rose petals in water with silent wishes at the beginning. Towards the end, parents sprinkle rose water on baby's hands and feet, accompanied by silent wishes.",
    img: namingFlowers,
    alt: "Rose petals placed in water for a naming ceremony",
  },
  {
    title: "Dedication Candle",
    body:
      "Symbolises passing love and wisdom from one generation to another. Family members light a family candle, and parents use it to light the child's candle. Option to relight a special candle annually for the naming anniversary.",
    img: namingCandle,
    alt: "Dedication candle glowing during ceremony",
  },
  {
    title: "Memory Book",
    body: `Guests write wishes and messages in a book for the baby.

Some couples integrate Polaroid photos along with written blessings. A lasting memento for the child to read in the future.`,
    img: namingBook,
    alt: "Signing book ready for guests' messages",
  },
  {
    title: "Sand Blending",
    body:
      "Participants use coloured sand to symbolise a loving union between family members. Each colour represents different characteristics and aspirations. Placed towards the end of the ceremony for its symbolic significance.",
    img: namingSand,
    alt: "Coloured sand blending ritual setup",
  },
  {
    title: "Hand & Footprint Ceremony",
    body:
      "Capture the baby's tiny hands and feet prints during the ceremony. Prints can be added to a memory book or displayed in various ways. Siblings can be involved, making it a touching family moment.",
    img: handAndFootPrintImg,
    alt: "Baby hand and footprint keepsake moment",
  },
  {
    title: "Memory Box",
    body: `A special box filled with heirlooms.

Can include scan photos, first items, lock of hair, and more.

A cherished keepsake reflecting on the child's growth.`,
    img: memoryBoxImg,
    alt: "Memory box keepsake prepared for a naming ceremony",
  },
  {
    title: "Planting a Tree/Shrub",
    body:
      "Celebrate a new life by planting a small tree or shrub. Family members, especially older children or grandparents, can participate. The chosen plant can grow alongside the child over the years.",
    img: namingTree,
    alt: "Tree planting enhancement",
  },
  {
    title: "Bread & Salt Welcome",
    body:
      "A traditional Balkan ritual symbolising hospitality. Best placed at the start of the ceremony as part of the opening welcome. Parents or guide parents offer baskets of bread and salt to each guest.",
    img: breadAndSaltImg,
    alt: "Bread and salt welcome ritual display",
  }
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
        <p>A naming ceremony welcomes a child with words, promises, and joyful celebration.</p>
      </Section>

      <Section title="Ceremony enhancements">
        <p>Naming ceremony enhancements may include any of the following:</p>
        <div className="mt-4 space-y-3">
          {namingEnhancements.map(({ title, body, img, alt }) => (
            <details
              key={title}
              className={cx(
                "rounded-xl border p-4",
                isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white"
              )}
            >
              <summary className="font-semibold cursor-pointer">{title}</summary>
              <p className="mt-2 whitespace-pre-line">{body}</p>
              {img && (
                <div
                  className={cx(
                    "mt-3 overflow-hidden rounded-xl border border-black/5 dark:border-white/10",
                    isDark ? "bg-slate-900/60" : "bg-slate-50"
                  )}
                >
                  <img src={img} alt={alt ?? title} className="mx-auto w-full h-auto max-h-[30rem] object-contain" loading="lazy" />
                </div>
              )}
            </details>
          ))}
        </div>
      </Section>

      <section className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-10 pb-16">
        <div
          className={cx(
            "rounded-3xl border p-6 sm:p-8",
            isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white"
          )}
        >
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
