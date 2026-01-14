import React from "react";
import { useTheme } from "./theme";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function GalleryGrid({
  images,
}: {
  images: { src: string; alt: string; w?: number; h?: number }[];
}) {
  const { isDark } = useTheme();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {images.map((img, i) => (
        <a
          key={i}
          href={img.src}
          target="_blank"
          rel="noreferrer"
          className={cx(
            "block rounded-xl overflow-hidden ring-1",
            isDark ? "ring-slate-800 hover:ring-slate-600" : "ring-slate-200 hover:ring-slate-400"
          )}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            width={img.w ?? 640}
            height={img.h ?? 480}
            className="w-full h-full object-cover aspect-[4/3]"
          />
        </a>
      ))}
    </div>
  );
}
