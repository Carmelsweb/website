import { GalleryGrid } from "../site/GalleryGrid";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/theme";
import lovingCupPhoto from "../assets/Loving Cup.jpeg";
import ringsOnPillow from "../assets/Rings.jpeg";
import galleryOne from "../assets/SunSetPicture.jpg";
import galleryTwo from "../assets/Beach.jpg";
import galleryThree from "../assets/Beach1.jpg";
import galleryFour from "../assets/CivilPartmership1.jpg";
import galleryFive from "../assets/IMG-20231021-WA0004.jpg";
import gallerySix from "../assets/IMG-20250826-WA0003.jpg";
import gallerySeven from "../assets/IMG-20251010-WA0003.jpg";
import galleryEight from "../assets/Unity Candle.jpg";
import galleryNine from "../assets/Sand Blending.jpg";
import galleryTen from "../assets/Hand Fasting.jpg";
import galleryEleven from "../assets/Hand fasting close up.jpg";
import galleryTwelve from "../assets/Pinning the colours.jpg";
import galleryThirteen from "../assets/Name Plate.jpg";
import galleryFifteen from "../assets/Tree.jpg";
import gallerySixteen from "../assets/Giving of flowers.jpg";
import gallerySeventeen from "../assets/Gem Stones.jpg";
import galleryEighteen from "../assets/ClockPic.jpg";
import galleryNineteen from "../assets/SigingBook.jpg";
import handfastingClose from "../assets/WhatsApp Image 2026-01-15 at 19.17.20.jpeg";
import handfastingGuide from "../assets/WhatsApp Image 2026-01-15 at 19.17.20 (1).jpeg";
import handfastingVows from "../assets/WhatsApp Image 2026-01-15 at 19.17.20 (2).jpeg";
import handfastingRibbons from "../assets/WhatsApp Image 2026-01-15 at 19.17.20 (3).jpeg";
import handfastingBackdrop from "../assets/WhatsApp Image 2026-01-15 at 19.17.20 (4).jpeg";
import handfastingMoment from "../assets/WhatsApp Image 2026-01-15 at 19.17.20 (5).jpeg";
import handfastingSmile from "../assets/WhatsApp Image 2026-01-15 at 19.17.20 (6).jpeg";
import handfastingCelebrate from "../assets/WhatsApp Image 2026-01-15 at 19.17.20 (7).jpeg";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const galleryImages = [
  { src: handfastingClose, alt: "Handfasting ribbons being tied around the couple's joined hands" },
  { src: handfastingGuide, alt: "Celebrant guides the couple through a colourful handfasting ritual" },
  { src: handfastingVows, alt: "Bride and groom holding hands as vows are read with ribbons" },
  { src: handfastingRibbons, alt: "Long orange, green, yellow, and black ribbons drape during handfasting" },
  { src: handfastingBackdrop, alt: "Outdoor ceremony scene with celebrant reading beside the bride" },
  { src: handfastingMoment, alt: "Couple sharing a laugh as the celebrant secures handfasting ribbons" },
  { src: handfastingSmile, alt: "Groom smiling while holding hands wrapped in colourful ribbons" },
  { src: handfastingCelebrate, alt: "Couple raise their hands wrapped in ribbons to celebrate the moment" },
  { src: ringsOnPillow, alt: "Wedding rings resting on a satin pillow with greenery" },
  { src: lovingCupPhoto, alt: "Ceremonial loving cup with a daffodil on a blue wooden table" },
  { src: galleryOne, alt: "Sunset ceremony sky over the coast" },
  { src: galleryTwo, alt: "Beach ceremony walkway" },
  { src: galleryThree, alt: "Beach ceremony view to the water" },
  { src: galleryFour, alt: "Civil partnership signing moment" },
  { src: galleryFive, alt: "Guests gathered during a ceremony" },
  { src: gallerySix, alt: "Outdoor ceremony setting in the west" },
  { src: gallerySeven, alt: "Celebration moment after vows" },
  { src: galleryEight, alt: "Unity candle glowing during ceremony" },
  { src: galleryNine, alt: "Sand blending ritual setup" },
  { src: galleryTen, alt: "Handfasting ribbons tied together" },
  { src: galleryEleven, alt: "Close-up of handfasting ribbons" },
  { src: galleryTwelve, alt: "Pinning the colours tradition" },
  { src: galleryThirteen, alt: "Personalised name plate for ceremony" },
  { src: galleryFifteen, alt: "Tree planting enhancement" },
  { src: gallerySixteen, alt: "Giving of flowers enhancement" },
  { src: gallerySeventeen, alt: "Gem stones keepsake display" },
  { src: galleryEighteen, alt: "Clock-themed keepsake detail" },
  { src: galleryNineteen, alt: "Signing book ready for guests" },
];

export function GalleryPage() {
  const { isDark } = useTheme();

  usePageMeta({
    title: "Gallery",
    description: "A glimpse of West Coast Celebrants ceremonies across Mayo, Galway, and Sligo.",
    path: "/gallery",
  });

  return (
    <Section title="Gallery" kicker="A glimpse of our ceremonies">
      <p className={cx("mb-6", isDark ? "text-slate-300" : "text-slate-600")}>
        A few moments we love. Tap any photo to open the viewer and use the arrows (or your keyboard) to browse.
      </p>
      <GalleryGrid images={galleryImages} />
    </Section>
  );
}
