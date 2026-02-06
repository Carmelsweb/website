import { useCallback, useEffect, useState } from "react";
import { useTheme } from "./useTheme";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function GalleryGrid({
  images,
}: {
  images: { src: string; thumbSrc?: string; alt: string; w?: number; h?: number }[];
}) {
  const { isDark } = useTheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + images.length) % images.length
    );
  }, [images.length]);
  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, close, showNext, showPrev]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={cx(
              "group block rounded-xl overflow-hidden ring-1 transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-teal)]",
              isDark ? "ring-slate-800 hover:ring-slate-600" : "ring-slate-200 hover:ring-slate-400"
            )}
          >
            <img
              src={img.thumbSrc ?? img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              width={img.w ?? 640}
              height={img.h ?? 480}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div className="relative flex-1 flex items-center justify-center overflow-hidden">
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 rounded-full bg-black/50 text-white px-3 py-2 text-sm font-semibold shadow-lg hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Close
            </button>

            <button
              type="button"
              onClick={showPrev}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white px-3 py-3 shadow-lg hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Previous image"
            >
              {"<"}
            </button>

            <figure className="mx-auto max-w-6xl w-full flex flex-col items-center gap-3 px-4 sm:px-8 py-6 sm:py-10 overflow-auto">
              <img
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                className="max-h-[82vh] w-auto max-w-full rounded-2xl shadow-2xl border border-white/15"
                loading="eager"
                decoding="async"
              />
              <figcaption className="text-sm text-white/80 text-center px-6">
                {images[activeIndex].alt}
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white px-3 py-3 shadow-lg hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Next image"
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}