import { Link } from "react-router-dom";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/useTheme";
import unityCandleImg from "../assets/Unity Candle.jpg";
import sandBlendingImg from "../assets/Sand Blending.jpg";
import pinningColoursImg from "../assets/Pinning the colours.jpg";
import givingFlowersImg from "../assets/Giving of flowers.jpg";
import gemStonesImg from "../assets/Gem Stones.jpg";
import ringsOnPillow from "../assets/Rings.jpeg";
import lovingCupPhoto from "../assets/LovingCupver2.jpeg";
import oathingStoneImg from "../assets/OathingStone.jpeg";
import timeCapsuleImg from "../assets/Time Capsule.jpg";
import wishingTreeImg from "../assets/Wishingtree.jpeg";
import plantingTreeImg from "../assets/PlantingTree.jpeg";
import namePlateImg from "../assets/Name Plate.jpg";
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
    body: `The Unity Candle enhancement is a beautiful and incredibly symbolic way of passing love and tradition from the older generation and families to this new couple.

For the first part of the Unity Candle enhancement, two outer candles are lit at the beginning of the ceremony.

At a later stage in the ceremony, usually after the rings have been exchanged, a centre candle (known as the Unity Candle) is lit from the two flames of the individual candles.

The centre flame is a light of unity, representing two people who have come together, giving a spark of themselves to create a new light.`,
    img: unityCandleImg,
    alt: "Unity candle during a ceremony",
  },
  {
    title: "Wishing stones/crystals",
    body: `A gemstone or crystal is given to each person as they enter the ceremony room or space.

Each guest is invited to hold their stone or crystal in their hands during the ceremony, and as it warms, allow their love and warm wishes to permeate the stone or crystal.

At the end of the ceremony, all stones or crystals are placed into a vase or vessel that the couple have chosen to bring home with them.`,
    img: gemStonesImg,
    alt: "Gem stones ready for guest wishes",
  },
  {
    title: "Ring warming",
    body: `The wedding rings are tied together on a ribbon or cord, and during the ceremony are passed around to all the guests.

While holding the rings, each guest is asked to bestow a wish or simply their love, a blessing, or a prayer onto them. This can be a beautifully personal way to include guests.`,
    img: ringsOnPillow,
    alt: "Wedding rings on a satin pillow ready for ring warming",
  },
  {
    title: "Symbolism of gifts",
    body: `Family members or friends could come forward during the ceremony, one at a time, each of them holding in their hands an item of importance to the couple.

This enhancement fits best directly after the first part of the Unity Candle enhancement, after the Ring Warming, or even after a first reading early in the ceremony.`,
    img: namePlateImg,
    alt: "Personal keepsake displayed during a ceremony",
  },
  {
    title: "Smudging/burning sage",
    body: `Smudging is a purification ritual where a small bundle of sage is lit by the celebrant, and the smoke created is waved around the couple from head to toe. The wedding space and wedding rings can also be cleansed.

A deeply spiritual ritual, this sacred smoke will cleanse and release any negative energies, bringing forth clarity and positive emotions for a healthy and loving relationship, allowing your clients both to step forward into married life on a pure and harmonious note.

Sage represents clarity, vision, strength and wisdom, the perfect gifts for the first day of the rest of your clients' lives together.

This enhancement is carried out immediately after the welcome and introduction.`,
    img: handfastingGuide,
    alt: "Celebrant guiding a ceremonial ritual",
  },
  {
    title: "Love story details",
    body: `The couple's love story is the sweetest and most personal part of any wedding ceremony. We look at the life and times of our couple, reminisce about their very first date and most memorable moments shared together, and share the story of the journey that brought us all to that ceremony space on that day.

"How did you first meet?"
"After meeting for the first time, how did you know they were 'The One'?"

To coincide with the "first meeting" question, we ask a follow up about their first real date.

"What memorable moments have you shared?"

The proposal, where it happened, what was said and done, and how they celebrated afterwards.

"What does your partner bring out in you that you're thankful for?".`,
    img: handfastingVows,
    alt: "Couple sharing vows during a ceremony",
  },
  {
    title: "Time capsule & love letters",
    body: `The couple are prompted beforehand to write each other a secret love letter on the journey up to their wedding day. During the ceremony, they'll then place these love letters in a time capsule box, usually along with a bottle of their favourite drink, to be opened on their wedding anniversary.

Placement of this enhancement within the ceremony is entirely up to your personal preference. There is no right or wrong time to do it, so feel free to choose whatever feels best for you.`,
    img: timeCapsuleImg,
    alt: "Time capsule box ready for love letters",
  },
  {
    title: "Handfasting",
    body: `Hand fasting is one of the oldest Celtic wedding rituals.

In Brehon law, when a couple declared their intention to marry, the custom was that their hands were tied together by a Hessian ribbon. At that time, the binding was a visible sign of their intentions to commit their lives to each other. It was visible for all to see, and this gave rise to the expression of "tying the knot".

With each colour comes its own symbolism and set of meanings.

Couples are encouraged to choose whichever colours symbolise the qualities that they see in each other, and which meanings stand out most to them.

Red: represents passion, strength and lust.
Orange: denotes encouragement, attraction, kindness and plenty.
Yellow: illustrates charm, confidence, joy and balance.
Green: exhibits finances, fertility, charity, prosperity and health.
Blue: symbolises tranquillity, patience, devotion and sincerity.
Purple: stands for power, piety, sanctity and sentimentality.
Black: indicates strength, wisdom, vision and success.
White: implies purity, concentration, meditation and peace.
Grey: suggests neutrality, cancelling and balance.
Pink: shows unity, honour, truth, romance and happiness.
Brown: expresses earth, grounding, talent, telepathy and home.
Silver: demonstrates treasure, values, creativity and inspiration.
Gold: signals energy, wealth, intelligence and longevity.`,
    img: handfastingClose,
    alt: "Hands bound with ribbons during handfasting",
  },
  {
    title: "Last Kiss before First Kiss",
    body: `The Last Kiss before First Kiss enhancement can be a very touching and beautiful gift to give to a person or people of significance. It could be from parents, grandparents, children or anybody who has played a pivotal role in the couple's lives leading up to their wedding day. Just before they have their first kiss as a married couple, they can turn to their guests and place a kiss and a hug on that person or persons who they want not only to thank, but to include in a deeply personal way. This incredible moment within the ceremony, and this kiss, could also be a beautiful way of including children in this historic moment in everybody's lives.`,
    img: handfastingMoment,
    alt: "Couple sharing a joyful moment during the ceremony",
  },
  {
    title: "The oathing stone",
    body: `The Oathing Stone enhancement allows couples to make a commitment to each other that is literally "set in stone".

The stone can be found in nature, perhaps from one of your favourite places. Adding an engraving or a design to the stone is also a nice, personalised touch some couples opt for.

This ritual takes place during the exchange of vows. Depending on the size of the stone, they can either hold it together as a couple, or place their hands on it as their minister leads them through the words they have chosen to join their lives together.`,
    img: oathingStoneImg,
    alt: "Oathing stone ready for vows",
  },
  {
    title: "Coloured sand blending",
    body: `This lovely ritual is symbolic of two people and two families coming together as one.

During the Sand Blending enhancement, each participant is given a glass container of different coloured sand. In turn, each participant will pour the different sands into a centre vessel, creating a blend and pattern unique to the moment and the people involved, with each layer and colour weaving and designing a lasting reminder of how the family blends and weaves their lives together from this moment forward.`,
    img: sandBlendingImg,
    alt: "Coloured sand blending ritual display",
  },
  {
    title: "The loving cup",
    body: `This ancient and beautiful ritual has roots as far back as the 15th century in Celtic, Jewish and French traditions.

The cup itself can come in many forms. Known as a "quaich" in Scotland, it is a two-handled cup which can have the couple's names and wedding date etched onto it. More recently, couples have used an engraved wine glass for their ritual.`,
    img: lovingCupPhoto,
    alt: "Ceremonial loving cup",
  },
  {
    title: "Jumping the broom",
    body: `An age-old tradition for weddings, Jumping the Broom can be traced back to several cultures and countries. The broom can be a conventional one or can be specially made with significant or personal material from your couple, or their families.

The broom is placed on the floor and in jumping over it, your couple is symbolically jumping from their single lives into a life of married bliss!`,
    img: handfastingCelebrate,
    alt: "Couple celebrating at the end of the ceremony",
  },
  {
    title: "The rose ceremony",
    body: `During the Rose Ceremony, a couple may wordlessly exchange a gift of a rose to each other. This exchange is not only the first gift they will offer each other as a married couple, but it is also a silent "I love you". These beautiful flowers can be pressed and placed in a frame and will remain with the couple as a lasting reminder of the love and commitment they openly shared before their family and loved ones as they became husband and wife, husband and husband, or wife and wife.

If the couple has children, they can also be included and can each be gifted a small flower which can be tucked in amongst the tokens of love, right where they belong.`,
    img: givingFlowersImg,
    alt: "Giving of flowers during a ceremony",
  },
  {
    title: "The wishing tree",
    body: `A tradition of Dutch origin, the Wishing Tree enhancement is a beautiful way to add an element of interaction with guests during a ceremony.

Instead of a guest book, your clients may place a wishing tree, wish tags, pens and a box or container in the venue for the guests to write a wish for them, the couple. Afterwards, each guest places their wish tag upon the tree.`,
    img: wishingTreeImg,
    alt: "Wishing tree with tags and notes",
  },
  {
    title: "Planting a tree",
    body: `Planting a tree on your wedding day can be hugely symbolic of the relationship taking root. This tree can be planted in a pot at a chosen time during the ceremony.

Soil can be gathered from a special place (perhaps a childhood garden) and mixed. As the tree or shrub is planted, they can water it together, giving life to it as they give life to their marriage.`,
    img: plantingTreeImg,
    alt: "Tree planting ceremony setup",
  },
  {
    title: "Pinning the tartan",
    body: `Pinning the Tartan is a wonderful Scottish tradition - a piece of the clan's tartan (or perhaps a sash) is pinned to the bride by a member of the groom's family, typically the mother. In turn, a member of the bride's family will pin a piece of their clan's tartan on the groom.

This is an old and beautiful way for families to seal the union of both their traditions and ancestry and declare their welcome to their new family member.`,
    img: pinningColoursImg,
    alt: "Pinning the tartan ribbon detail",
  },
];

const enhancementPhotos = [
  { src: handfastingGuide, alt: "Handfasting with celebrant guiding colourful ribbons" },
  { src: handfastingMoment, alt: "Couple share a laugh as ribbons are tied" },
  { src: handfastingSmile, alt: "Groom smiling while hands are wrapped with ribbons" },
  { src: handfastingCelebrate, alt: "Couple lift their ribbon-wrapped hands to celebrate" },
  { src: handfastingRibbons, alt: "Handfasting ribbons draping to the ground" },
  { src: ringsOnPillow, alt: "Wedding rings on a satin pillow ready for ring warming" },
  { src: lovingCupPhoto, alt: "Ceremonial loving cup" },
  { src: unityCandleImg, alt: "Unity candle during a ceremony" },
  { src: sandBlendingImg, alt: "Coloured sand blending ritual display" },
  { src: wishingTreeImg, alt: "Wishing tree with tags and notes" },
  { src: plantingTreeImg, alt: "Tree planting ceremony setup" },
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
            Commitment Weddings: Celebrate your love and commitment without the legal paperwork.
          </p>
          <p>
            Elopement Weddings: Feels right just for you.
          </p>
          <p>
            The difference between these events is that commitment weddings are not legally binding. If it is not practical for a couple to have a legal wedding, a commitment wedding is a perfect way to publicly declare your commitment and celebrate your unique love.
          </p>
          <p>Elopement weddings can be legal or commitment, usually more intimate with fewer people in attendance.</p>
          <p>Your style flows through so every word, ritual and moment feels uniquely yours.</p>
        </div>

        <h2 className="text-xl font-semibold mt-10">Wedding enhancements</h2>
        <p className="mt-2">Wedding enhancements may include any of the following:</p>
        <div className="mt-4 space-y-3">
          {enhancements.map(({ title, body, img, alt }) => (
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
                  <img src={img} alt={alt ?? title} className="w-full h-64 object-cover" loading="lazy" />
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
