import { Link } from "react-router-dom";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/useTheme";
import symbolismOfGiftsImg from "../assets/optimized/Symbolism of gifts.webp";
import candleImg from "../assets/optimized/Lighting candle.webp";
import treeImg from "../assets/optimized/Planting tree.webp";
import flowersImg from "../assets/optimized/Ceremony of the rose.webp";
import birdReleaseImg from "../assets/optimized/bird Relase.webp";
import celebrationOfLifePhotoImg from "../assets/optimized/Your funeral.webp";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const rituals = [
  {
    title: "Symbolism of Gifts",
    body:
      "Before the funeral the family will decide on some items of importance or that held some special place in the life of the deceased. An example of some items that can be brought forward could be a GAA jersey or a photo of the family that cared so deeply about them.",
    img: symbolismOfGiftsImg,
    alt: "Symbolic keepsakes arranged for a ceremony",
  },
  {
    title: "Lighting candles",
    body:
      "For the Candlelight Vigil, the minister will light a main candle at the start of the funeral or memorial. Afterwards, taking light from that same large candle, the minister will light several smaller, thinner candles. The main candle in this instance represents the light or life of the deceased, and the remaining candles act as a small representation of the many lives this person has touched in their lifetime.",
    img: candleImg,
    alt: "Candlelight during a ceremony",
  },
  {
    title: "Planting a tree or shrub",
    body:
      "Celebrate the life of your dearly departed loved one by planting a small tree or shrub. Family members and close friends can participate. The chosen tree or shrub will grow and bloom over the years and will be a gentle reminder of the love and times you once shared.",
    img: treeImg,
    alt: "Tree planting ritual setup",
  },
  {
    title: "Ceremony of the Rose",
    body:
      "A vase is set up beside a framed photo on a separate table, and each person is given a rose to place in the vase as they bid farewell to their loved one, in silent remembering or in prayer. The mourners may also place the roses on the coffin itself.",
    img: flowersImg,
    alt: "Rose arrangement ready for ceremony",
  },
  {
    title: "Bird Release",
    body: `Birds symbolise transition in many ways.

Releasing birds during a funeral ceremony can be a very moving experience, as a visual representation that love is stronger than death.

This ritual is placed at the end of the ceremony on most occasions and can really help to uplift those in attendance.`,
    img: birdReleaseImg,
    alt: "Bird release at the close of a ceremony",
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
          Our ceremonies are thoughtfully crafted with deep love and affection, as a well-deserved tribute in the celebration of your loved one's life, because every life has a story worth celebrating.
        </p>
        <p className="mt-4">
          We endeavour to capture the essence and personality of your loved one and create a space to celebrate the qualities that have made your loved one unique. It offers family and friends the opportunity to gather, to share stories, reflecting joyous moments and honour the life that was well lived.
        </p>
        <p className="mt-4">
          Whether in a funeral home or a private home, at a gravesite or in a crematorium, we ensure each ceremony is conducted with warmth, sensitivity, dignity, and respect for your loved one.
        </p>
        <p className="mt-4">
          Rather than focusing on grief and sorrow, a celebration of life ceremony is crafted respectfully to celebrate the uniqueness of your departed loved one and the impact they have had on our lives.
        </p>
        <p className="mt-4">
          Traditional funerals may focus more on mourning; a celebration of life ceremony allows us to give thanks for the time spent with the departed loved one.
        </p>
        <figure
          className={cx(
            "mt-6 overflow-hidden rounded-2xl border",
            isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white"
          )}
        >
          <img
            src={celebrationOfLifePhotoImg}
            alt="Celebrant speaking during a celebration of life ceremony"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </figure>
        <p className="mt-4">
          We prioritise Celebration of Life enquiries so families receive support quickly. Please call +353 87 130 2029 for urgent requests.
        </p>

        <h2 className="text-xl font-semibold mt-10">The ceremony</h2>
        <p className="mt-2">
          Celebration of life ceremonies often include symbolic gestures or rituals that help honour our departed and provide a sense of closure. These rituals could include:
        </p>
        <div className="mt-4 space-y-3">
          {rituals.map(({ title, body, img, alt }) => (
            <details key={title} className={cx("rounded-xl border p-4", isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}>
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
