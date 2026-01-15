import { Link } from "react-router-dom";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/theme";
import unityCandleImg from "../assets/Unity Candle.jpg";
import sandBlendingImg from "../assets/Sand Blending.jpg";
import pinningColoursImg from "../assets/Pinning the colours.jpg";
import treeImg from "../assets/Tree.jpg";
import givingFlowersImg from "../assets/Giving of flowers.jpg";
import gemStonesImg from "../assets/Gem Stones.jpg";
import ringsOnPillow from "../assets/Rings.jpeg";
import lovingCupPhoto from "../assets/Loving Cup.jpeg";
import handfastingClose from "../assets/WhatsApp Image 2026-01-15 at 19.17.20.jpeg";
import handfastingGuide from "../assets/WhatsApp Image 2026-01-15 at 19.17.20 (1).jpeg";
import handfastingVows from "../assets/WhatsApp Image 2026-01-15 at 19.17.20 (2).jpeg";
import handfastingRibbons from "../assets/WhatsApp Image 2026-01-15 at 19.17.20 (3).jpeg";
import handfastingMoment from "../assets/WhatsApp Image 2026-01-15 at 19.17.20 (5).jpeg";
import handfastingSmile from "../assets/WhatsApp Image 2026-01-15 at 19.17.20 (6).jpeg";
import handfastingCelebrate from "../assets/WhatsApp Image 2026-01-15 at 19.17.20 (7).jpeg";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const enhancements = [
  {
    title: "Unity Candle",
    body:
      "The Unity Candle enhancement is a beautiful and symbolic way of passing love and tradition from the older generation and families to this new couple.\n\nTwo outer candles are lit at the beginning of the ceremony. The couple then take the flames from their family candles to light their unity candle together, symbolising two lives becoming one.",
    img: unityCandleImg,
  },
  {
    title: "Ring Warming",
    body:
      "Guests pass the rings from person to person, holding them for a moment to silently offer a wish or blessing. The rings arrive warmed by the hands and good wishes of your closest people.",
    img: ringsOnPillow,
  },
  {
    title: "Handfasting",
    body:
      "An ancient Celtic tradition where the couple's hands are bound with ribbons to symbolise the binding of their lives. You can choose colours that represent your story, values, or family heritage.",
    img: handfastingClose,
  },
  {
    title: "The Quaich (Loving Cup)",
    body:
      "A shared cup symbolising trust and unity. Often engraved with names and date, the couple takes a sip to signify sharing all that life brings.",
    img: lovingCupPhoto,
  },
  {
    title: "Oathing Stone",
    body:
      "During the exchange of vows, the couple touches an oathing stone, literally setting their commitment in stone. The stone can be sourced from a meaningful place and kept as a lasting reminder.",
    img: gemStonesImg,
  },
  {
    title: "Coloured Sand Blending",
    body:
      "Each participant pours a different coloured sand into a central vessel. The unique blend symbolises two lives and two families coming together as one.",
    img: sandBlendingImg,
  },
  {
    title: "The Loving Cup",
    body:
      "This ancient ritual can use a quaich, an engraved glass, or a special cup chosen by the couple to represent unity and shared life.",
    img: lovingCupPhoto,
  },
  {
    title: "Jumping the Broom",
    body:
      "A symbolic leap into married life. The broom can be traditional or custom made with materials meaningful to the couple or their families.",
  },
  {
    title: "The Rose Ceremony",
    body:
      "The couple exchange roses as a silent 'I love you'. If children are present, they can also be included in this ritual.",
    img: givingFlowersImg,
  },
  {
    title: "Wishing Tree",
    body:
      "Guests write wishes on tags and hang them on a tree, creating a lasting keepsake of the day.",
    img: treeImg,
  },
  {
    title: "Planting a Tree",
    body:
      "Planting a tree during the ceremony symbolises the relationship taking root. Soil from meaningful places can be used, and the couple water the plant together.",
    img: treeImg,
  },
  {
    title: "Pinning the Tartan",
    body:
      "A Scottish tradition where a piece of the family tartan is pinned to the bride and groom by family members, symbolising the joining of two families.",
    img: pinningColoursImg,
  },
];

const enhancementPhotos = [
  { src: handfastingGuide, alt: "Handfasting with celebrant guiding colourful ribbons" },
  { src: handfastingMoment, alt: "Couple share a laugh as ribbons are tied" },
  { src: handfastingSmile, alt: "Groom smiling while hands are wrapped with ribbons" },
  { src: handfastingCelebrate, alt: "Couple lift their ribbon-wrapped hands to celebrate" },
  { src: handfastingRibbons, alt: "Handfasting ribbons draping to the ground" },
  { src: ringsOnPillow, alt: "Wedding rings on a satin pillow ready for ring warming" },
  { src: lovingCupPhoto, alt: "Ceremonial loving cup with a daffodil" },
  { src: unityCandleImg, alt: "Unity candle during a ceremony" },
  { src: sandBlendingImg, alt: "Coloured sand blending ritual display" },
  { src: treeImg, alt: "Tree planting ceremony setup" },
  { src: pinningColoursImg, alt: "Pinning the tartan ribbon detail" },
  { src: givingFlowersImg, alt: "Giving of flowers enhancement" },
];

export function WeddingsPage() {
  const { isDark } = useTheme();

  usePageMeta({
    title: "Weddings",
    description: "Legal, commitment, and elopement weddings crafted with heart across the West of Ireland.",
    path: "/weddings",
  });

  return (
    <>
      <Section title="Weddings">
        <p>Your wedding ceremony is personal and heartfelt, tailored to your story and your people.</p>
      </Section>

      <Section title="Weddings">
        <p>Your wedding, no matter the type, is a celebration of your unique love.</p>
        <p className="mt-4">
          We craft personalised ceremonies, legally binding if appropriate, that reflect your beliefs, values and traditions.
        </p>
        <p className="mt-4">
          From hotel ballrooms to sunset beaches on the beautiful west coast, the top of Croagh Patrick or a medieval abbey, we create a space where love is celebrated freely.
        </p>

        <div className="not-prose mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <figure
            className={cx(
              "rounded-3xl border overflow-hidden",
              isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white"
            )}
          >
            <img
              src={handfastingVows}
              alt="Outdoor handfasting during a wedding ceremony"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <figcaption className={cx("px-4 py-3 text-sm", isDark ? "text-slate-300" : "text-slate-600")}>
              Handfasting ceremony outdoors
            </figcaption>
          </figure>
          <div className={cx("space-y-3 text-base leading-7", isDark ? "text-slate-300" : "text-slate-700")}>
            <h2 className="text-xl font-semibold">Make it personal</h2>
            <p>
              Enhancements like sand blending, handfasting, and unity candles create visual moments that reflect your story and involve your guests.
            </p>
            <p>We help you choose rituals that feel natural, meaningful, and true to your relationship.</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-10">Types of weddings</h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            <strong>Legal Weddings</strong>
          </li>
          <li>
            <strong>Commitment Weddings</strong> (not legally binding)
          </li>
          <li>
            <strong>Elopement Weddings</strong> (legal or commitment; typically intimate)
          </li>
        </ul>

        <div className="mt-6 space-y-4">
          <p>
            The difference between these events is that commitment weddings are not legally binding. If it is not practical for a couple to have a legal wedding, a commitment wedding is a perfect way to publicly declare your commitment and celebrate your unique love.
          </p>
          <p>Elopement weddings can be legal or commitment, usually more intimate with fewer people in attendance.</p>
          <p>Your style flows through so every word, ritual and moment feels uniquely yours.</p>
        </div>

        <h2 className="text-xl font-semibold mt-10">Wedding enhancements</h2>
        <p className="mt-2">Wedding enhancements may include any of the following:</p>
        <div className="mt-4 space-y-3">
          {enhancements.map(({ title, body, img }) => (
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
                <div className="mt-3 overflow-hidden rounded-xl border border-black/5 dark:border-white/10">
                  <img src={img} alt={title} className="w-full h-64 object-cover" loading="lazy" />
                </div>
              )}
            </details>
          ))}
        </div>

        <h3 className="text-lg font-semibold mt-10">Enhancement inspiration</h3>
        <p className={cx("mt-2 text-sm", isDark ? "text-slate-300" : "text-slate-600")}>
          A few recent ceremony details to spark ideas.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enhancementPhotos.map((photo) => (
            <figure
              key={photo.src}
              className={cx(
                "overflow-hidden rounded-2xl border",
                isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white"
              )}
            >
              <img src={photo.src} alt={photo.alt} className="w-full h-64 object-cover" loading="lazy" />
              <figcaption className={cx("px-4 py-3 text-sm", isDark ? "text-slate-300" : "text-slate-600")}>
                {photo.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div
          className={cx(
            "rounded-3xl border p-6 sm:p-8",
            isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white"
          )}
        >
          <h2 className="text-2xl font-semibold">Inquire now</h2>
          <p className={cx("mt-2", isDark ? "text-slate-300" : "text-slate-600")}>
            Share your date, venue, and ceremony type so we can confirm availability.
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
