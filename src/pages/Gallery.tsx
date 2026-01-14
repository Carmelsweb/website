import { GalleryGrid } from "../site/GalleryGrid";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/theme";
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

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const galleryImages = [
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
