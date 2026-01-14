import { Link } from "react-router-dom";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/theme";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const rituals = [
  {
    title: "Symbolism of Gifts",
    body:
      "Before the funeral the family will decide on some items of importance or that held some special place in the life of the deceased. Examples include a GAA jersey or a photo of the family.",
  },
  {
    title: "Lighting candles",
    body:
      "The minister lights a main candle at the start of the funeral or memorial. Afterwards, taking light from that candle, the minister lights several smaller candles. The main candle represents the life of the deceased, and the remaining candles represent the many lives they touched.",
  },
  {
    title: "Planting a tree or shrub",
    body:
      "Celebrate the life of your loved one by planting a small tree or shrub. Family members and close friends can participate. The chosen tree or shrub will grow and bloom over the years and will be a gentle reminder of the love and times you shared.",
  },
  {
    title: "Ceremony of the Rose",
    body:
      "A vase is set up beside a framed photo on a separate table, and each person is given a rose to place in the vase as they bid farewell. Mourners may also place the roses on the coffin.",
  },
  {
    title: "Bird Release",
    body:
      "Releasing birds can be a very moving experience, as a visual representation that love is stronger than death. This ritual is placed at the end of the ceremony on most occasions.",
  },
];

export function CelebrationOfLifePage() {
  const { isDark } = useTheme();

  usePageMeta({
    title: "Celebration of life",
    description: "Thoughtfully crafted ceremonies that honour a loved one with warmth, dignity, and respect.",
    path: "/celebration-of-life",
  });

  return (
    <>
      <Section title="Celebration of life">
        <p>We believe love transcends the boundaries of life and death, and that grief and joy can coexist.</p>
        <p className="mt-4">
          Our ceremonies are thoughtfully crafted with deep love and affection as a well-deserved tribute, because every life has a story worth celebrating.
        </p>
        <p className="mt-4">
          We endeavour to capture the essence and personality of your loved one and create a space to celebrate the qualities that made them unique. It offers family and friends the opportunity to gather, share stories, and honour a life well lived.
        </p>
        <p className="mt-4">
          Whether in a funeral home or a private home, at a gravesite or in a crematorium, we ensure each ceremony is conducted with warmth, sensitivity, dignity, and respect.
        </p>
        <p className="mt-4">
          Rather than focusing on grief and sorrow, a celebration of life ceremony is crafted respectfully to celebrate the uniqueness of your departed loved one and the impact they have had on our lives.
        </p>

        <h2 className="text-xl font-semibold mt-10">The ceremony</h2>
        <p className="mt-2">
          Celebration of life ceremonies often include symbolic gestures or rituals that help honour our departed and provide a sense of closure. These rituals could include:
        </p>
        <div className="mt-4 space-y-3">
          {rituals.map(({ title, body }) => (
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
            We are here to support you. Share your needs and we will guide you with care.
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

