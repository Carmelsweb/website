import React from "react";
import { GalleryGrid } from "../site/GalleryGrid";
import { Section } from "../site/Section";
import { usePageMeta } from "../site/usePageMeta";
import { useTheme } from "../site/theme";
import galleryOne from "../assets/20230222_173531.jpg";
import galleryTwo from "../assets/IMG-20231017-WA0003.jpg";
import galleryThree from "../assets/IMG-20231017-WA0011.jpg";
import galleryFour from "../assets/IMG-20231021-WA0004.jpg";
import galleryFive from "../assets/IMG-20250826-WA0003.jpg";
import gallerySix from "../assets/IMG-20251010-WA0003.jpg";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const galleryImages = [
  { src: galleryOne, alt: "Wedding ceremony on the west coast" },
  { src: galleryTwo, alt: "Couple celebrating their ceremony" },
  { src: galleryThree, alt: "Ceremony details and moments" },
  { src: galleryFour, alt: "Guests gathered during a ceremony" },
  { src: galleryFive, alt: "Outdoor ceremony setting" },
  { src: gallerySix, alt: "Celebration moment after vows" },
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
        A few moments we love. Tap any photo to view it full size.
      </p>
      <GalleryGrid images={galleryImages} />
    </Section>
  );
}
