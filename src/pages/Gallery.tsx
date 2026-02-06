import { GalleryGrid } from "../site/GalleryGrid";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/useTheme";
// Gallery uses lightweight thumbnails for the grid and higher quality (still optimized) images in the viewer.
import lovingCupPhoto from "../assets/optimized/LovingCupver2.webp";
import lovingCupThumb from "../assets/thumbs/LovingCupver2.webp";

import ringsOnPillow from "../assets/optimized/Rings.webp";
import ringsOnPillowThumb from "../assets/thumbs/Rings.webp";

import galleryOne from "../assets/optimized/SunSetPicture.webp";
import galleryOneThumb from "../assets/thumbs/SunSetPicture.webp";

import galleryTwo from "../assets/optimized/Beach.webp";
import galleryTwoThumb from "../assets/thumbs/Beach.webp";

import galleryThree from "../assets/optimized/Beach1.webp";
import galleryThreeThumb from "../assets/thumbs/Beach1.webp";

import galleryFour from "../assets/optimized/CivilPartmership1.webp";
import galleryFourThumb from "../assets/thumbs/CivilPartmership1.webp";

import galleryFive from "../assets/optimized/IMG-20231021-WA0004.webp";
import galleryFiveThumb from "../assets/thumbs/IMG-20231021-WA0004.webp";

import gallerySix from "../assets/optimized/IMG-20250826-WA0003.webp";
import gallerySixThumb from "../assets/thumbs/IMG-20250826-WA0003.webp";

import gallerySeven from "../assets/optimized/IMG-20251010-WA0003.webp";
import gallerySevenThumb from "../assets/thumbs/IMG-20251010-WA0003.webp";

import galleryEight from "../assets/optimized/Unity Candle.webp";
import galleryEightThumb from "../assets/thumbs/Unity Candle.webp";

import galleryNine from "../assets/optimized/Sand Blending.webp";
import galleryNineThumb from "../assets/thumbs/Sand Blending.webp";

import galleryTen from "../assets/optimized/Hand Fasting.webp";
import galleryTenThumb from "../assets/thumbs/Hand Fasting.webp";

import galleryEleven from "../assets/optimized/Hand fasting close up.webp";
import galleryElevenThumb from "../assets/thumbs/Hand fasting close up.webp";

import galleryTwelve from "../assets/optimized/Pinning the colours.webp";
import galleryTwelveThumb from "../assets/thumbs/Pinning the colours.webp";

import galleryThirteen from "../assets/optimized/Name Plate.webp";
import galleryThirteenThumb from "../assets/thumbs/Name Plate.webp";

import galleryFifteen from "../assets/optimized/PlantingTree.webp";
import galleryFifteenThumb from "../assets/thumbs/PlantingTree.webp";

import wishingTreeImg from "../assets/optimized/Wishingtree.webp";
import wishingTreeThumb from "../assets/thumbs/Wishingtree.webp";

import gallerySixteen from "../assets/optimized/Giving of flowers.webp";
import gallerySixteenThumb from "../assets/thumbs/Giving of flowers.webp";

import gallerySeventeen from "../assets/optimized/Gem Stones.webp";
import gallerySeventeenThumb from "../assets/thumbs/Gem Stones.webp";

import galleryEighteen from "../assets/optimized/ClockPic.webp";
import galleryEighteenThumb from "../assets/thumbs/ClockPic.webp";

import galleryNineteen from "../assets/optimized/SigingBook.webp";
import galleryNineteenThumb from "../assets/thumbs/SigingBook.webp";

import handfastingClose from "../assets/optimized/WhatsApp Image 2026-01-15 at 19.17.20.webp";
import handfastingCloseThumb from "../assets/thumbs/WhatsApp Image 2026-01-15 at 19.17.20.webp";

import handfastingGuide from "../assets/optimized/WhatsApp Image 2026-01-15 at 19.17.20 (1).webp";
import handfastingGuideThumb from "../assets/thumbs/WhatsApp Image 2026-01-15 at 19.17.20 (1).webp";

import handfastingVows from "../assets/optimized/WhatsApp Image 2026-01-15 at 19.17.20 (2).webp";
import handfastingVowsThumb from "../assets/thumbs/WhatsApp Image 2026-01-15 at 19.17.20 (2).webp";

import handfastingRibbons from "../assets/optimized/WhatsApp Image 2026-01-15 at 19.17.20 (3).webp";
import handfastingRibbonsThumb from "../assets/thumbs/WhatsApp Image 2026-01-15 at 19.17.20 (3).webp";

import handfastingBackdrop from "../assets/optimized/WhatsApp Image 2026-01-15 at 19.17.20 (4).webp";
import handfastingBackdropThumb from "../assets/thumbs/WhatsApp Image 2026-01-15 at 19.17.20 (4).webp";

import handfastingMoment from "../assets/optimized/WhatsApp Image 2026-01-15 at 19.17.20 (5).webp";
import handfastingMomentThumb from "../assets/thumbs/WhatsApp Image 2026-01-15 at 19.17.20 (5).webp";

import handfastingSmile from "../assets/optimized/WhatsApp Image 2026-01-15 at 19.17.20 (6).webp";
import handfastingSmileThumb from "../assets/thumbs/WhatsApp Image 2026-01-15 at 19.17.20 (6).webp";

import handfastingCelebrate from "../assets/optimized/WhatsApp Image 2026-01-15 at 19.17.20 (7).webp";
import handfastingCelebrateThumb from "../assets/thumbs/WhatsApp Image 2026-01-15 at 19.17.20 (7).webp";


import babyNamingCeremony from "../assets/optimized/Baby naming ceremony.webp";
import babyNamingCeremonyThumb from "../assets/thumbs/Baby naming ceremony.webp";

import baby from "../assets/optimized/Baby.webp";
import babyThumb from "../assets/thumbs/Baby.webp";

import breadAndSalt from "../assets/optimized/Bread and salt.webp";
import breadAndSaltThumb from "../assets/thumbs/Bread and salt.webp";

import ceremonyOfTheRose from "../assets/optimized/Ceremony of the rose.webp";
import ceremonyOfTheRoseThumb from "../assets/thumbs/Ceremony of the rose.webp";

import dedicationCandle from "../assets/optimized/Dedication candle.webp";
import dedicationCandleThumb from "../assets/thumbs/Dedication candle.webp";

import handAndFootPrint from "../assets/optimized/Hand and foot print.webp";
import handAndFootPrintThumb from "../assets/thumbs/Hand and foot print.webp";

import jumpingTheBroomV2 from "../assets/optimized/Jumping The Broom v2.webp";
import jumpingTheBroomV2Thumb from "../assets/thumbs/Jumping The Broom v2.webp";

import jumpingTheBroom from "../assets/optimized/Jumping The Broom.webp";
import jumpingTheBroomThumb from "../assets/thumbs/Jumping The Broom.webp";

import lastKissBeforeTheFirstKiss from "../assets/optimized/Last Kiss Before The First Kiss.webp";
import lastKissBeforeTheFirstKissThumb from "../assets/thumbs/Last Kiss Before The First Kiss.webp";

import lightingCandle from "../assets/optimized/Lighting candle.webp";
import lightingCandleThumb from "../assets/thumbs/Lighting candle.webp";

import memoryBox from "../assets/optimized/Memory box.webp";
import memoryBoxThumb from "../assets/thumbs/Memory box.webp";

import plantingATree from "../assets/optimized/Planting a tree.webp";
import plantingATreeThumb from "../assets/thumbs/Planting a tree.webp";

import plantingTree from "../assets/optimized/Planting tree.webp";
import plantingTreeThumb from "../assets/thumbs/Planting tree.webp";

import ringWarming from "../assets/optimized/Ring Warming.webp";
import ringWarmingThumb from "../assets/thumbs/Ring Warming.webp";

import rosePetal from "../assets/optimized/Rose petal.webp";
import rosePetalThumb from "../assets/thumbs/Rose petal.webp";

import smudgingOfSage from "../assets/optimized/Smudging of sage.webp";
import smudgingOfSageThumb from "../assets/thumbs/Smudging of sage.webp";

import symbolismOfGifts from "../assets/optimized/Symbolism of gifts.webp";
import symbolismOfGiftsThumb from "../assets/thumbs/Symbolism of gifts.webp";

import theLovingCup from "../assets/optimized/The Loving Cup.webp";
import theLovingCupThumb from "../assets/thumbs/The Loving Cup.webp";

import theRoseCeremony from "../assets/optimized/The Rose Ceremony.webp";
import theRoseCeremonyThumb from "../assets/thumbs/The Rose Ceremony.webp";

import yourFuneral from "../assets/optimized/Your funeral.webp";
import yourFuneralThumb from "../assets/thumbs/Your funeral.webp";

import birdRelase from "../assets/optimized/bird Relase.webp";
import birdRelaseThumb from "../assets/thumbs/bird Relase.webp";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const galleryImages = [
  { src: handfastingClose, thumbSrc: handfastingCloseThumb, alt: "Handfasting ribbons being tied around the couple's joined hands" },
  { src: handfastingGuide, thumbSrc: handfastingGuideThumb, alt: "Celebrant guides the couple through a colourful handfasting ritual" },
  { src: handfastingVows, thumbSrc: handfastingVowsThumb, alt: "Bride and groom holding hands as vows are read with ribbons" },
  { src: handfastingRibbons, thumbSrc: handfastingRibbonsThumb, alt: "Long orange, green, yellow, and black ribbons drape during handfasting" },
  { src: handfastingBackdrop, thumbSrc: handfastingBackdropThumb, alt: "Outdoor ceremony scene with celebrant reading beside the bride" },
  { src: handfastingMoment, thumbSrc: handfastingMomentThumb, alt: "Couple sharing a laugh as the celebrant secures handfasting ribbons" },
  { src: handfastingSmile, thumbSrc: handfastingSmileThumb, alt: "Groom smiling while holding hands wrapped in colourful ribbons" },
  { src: handfastingCelebrate, thumbSrc: handfastingCelebrateThumb, alt: "Couple raise their hands wrapped in ribbons to celebrate the moment" },
  { src: ringsOnPillow, thumbSrc: ringsOnPillowThumb, alt: "Wedding rings resting on a satin pillow with greenery" },
  { src: lovingCupPhoto, thumbSrc: lovingCupThumb, alt: "Ceremonial loving cup" },
  { src: galleryOne, thumbSrc: galleryOneThumb, alt: "Sunset ceremony sky over the coast" },
  { src: galleryTwo, thumbSrc: galleryTwoThumb, alt: "Beach ceremony walkway" },
  { src: galleryThree, thumbSrc: galleryThreeThumb, alt: "Beach ceremony view to the water" },
  { src: galleryFour, thumbSrc: galleryFourThumb, alt: "Civil partnership signing moment" },
  { src: galleryFive, thumbSrc: galleryFiveThumb, alt: "Guests gathered during a ceremony" },
  { src: gallerySix, thumbSrc: gallerySixThumb, alt: "Outdoor ceremony setting in the west" },
  { src: gallerySeven, thumbSrc: gallerySevenThumb, alt: "Celebration moment after vows" },
  { src: galleryEight, thumbSrc: galleryEightThumb, alt: "Unity candle glowing during ceremony" },
  { src: galleryNine, thumbSrc: galleryNineThumb, alt: "Sand blending ritual setup" },
  { src: galleryTen, thumbSrc: galleryTenThumb, alt: "Handfasting ribbons tied together" },
  { src: galleryEleven, thumbSrc: galleryElevenThumb, alt: "Close-up of handfasting ribbons" },
  { src: galleryTwelve, thumbSrc: galleryTwelveThumb, alt: "Pinning the colours tradition" },
  { src: galleryThirteen, thumbSrc: galleryThirteenThumb, alt: "Personalised name plate for ceremony" },
  { src: wishingTreeImg, thumbSrc: wishingTreeThumb, alt: "Wishing tree with tags and notes" },
  { src: galleryFifteen, thumbSrc: galleryFifteenThumb, alt: "Tree planting enhancement" },
  { src: gallerySixteen, thumbSrc: gallerySixteenThumb, alt: "Giving of flowers enhancement" },
  { src: gallerySeventeen, thumbSrc: gallerySeventeenThumb, alt: "Gem stones keepsake display" },
  { src: galleryEighteen, thumbSrc: galleryEighteenThumb, alt: "Clock-themed keepsake detail" },
  { src: galleryNineteen, thumbSrc: galleryNineteenThumb, alt: "Signing book ready for guests" },

  { src: babyNamingCeremony, thumbSrc: babyNamingCeremonyThumb, alt: "Baby naming ceremony moment" },
  { src: baby, thumbSrc: babyThumb, alt: "Baby portrait" },
  { src: breadAndSalt, thumbSrc: breadAndSaltThumb, alt: "Bread and salt welcome ritual" },
  { src: ceremonyOfTheRose, thumbSrc: ceremonyOfTheRoseThumb, alt: "Rose ceremony with guests" },
  { src: dedicationCandle, thumbSrc: dedicationCandleThumb, alt: "Dedication candle lighting" },
  { src: handAndFootPrint, thumbSrc: handAndFootPrintThumb, alt: "Hand and footprint ceremony" },
  { src: jumpingTheBroomV2, thumbSrc: jumpingTheBroomV2Thumb, alt: "Jumping the broom ceremony" },
  { src: jumpingTheBroom, thumbSrc: jumpingTheBroomThumb, alt: "Jumping the broom celebration" },
  { src: lastKissBeforeTheFirstKiss, thumbSrc: lastKissBeforeTheFirstKissThumb, alt: "Last kiss before first kiss moment" },
  { src: lightingCandle, thumbSrc: lightingCandleThumb, alt: "Lighting candles during ceremony" },
  { src: memoryBox, thumbSrc: memoryBoxThumb, alt: "Memory box keepsake" },
  { src: plantingATree, thumbSrc: plantingATreeThumb, alt: "Planting a tree ritual" },
  { src: plantingTree, thumbSrc: plantingTreeThumb, alt: "Tree planting ceremony" },
  { src: ringWarming, thumbSrc: ringWarmingThumb, alt: "Ring warming ritual" },
  { src: rosePetal, thumbSrc: rosePetalThumb, alt: "Rose petal ritual" },
  { src: smudgingOfSage, thumbSrc: smudgingOfSageThumb, alt: "Smudging with sage ritual" },
  { src: symbolismOfGifts, thumbSrc: symbolismOfGiftsThumb, alt: "Symbolism of gifts ceremony detail" },
  { src: theLovingCup, thumbSrc: theLovingCupThumb, alt: "The loving cup ritual" },
  { src: theRoseCeremony, thumbSrc: theRoseCeremonyThumb, alt: "The rose ceremony moment" },
  { src: yourFuneral, thumbSrc: yourFuneralThumb, alt: "Writing your own funeral ceremony" },
  { src: birdRelase, thumbSrc: birdRelaseThumb, alt: "Bird release ceremony" },
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
