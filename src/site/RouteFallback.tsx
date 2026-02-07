import { useTheme } from "./useTheme";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

// Lightweight fallback shown while route chunks load.
export function RouteFallback() {
  const { isDark } = useTheme();

  return (
    <div
      className={cx(
        "w-full min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-10 py-12",
        isDark ? "text-slate-200" : "text-slate-700"
      )}
      aria-busy="true"
      aria-live="polite"
    >
      <div
        className={cx(
          "rounded-2xl border px-8 py-7 text-center backdrop-blur",
          isDark
            ? "border-slate-800/80 bg-slate-900/50 shadow-[0_20px_60px_rgba(8,11,18,0.35)]"
            : "border-slate-200/90 bg-white/80 shadow-[0_18px_48px_rgba(15,23,42,0.12)]"
        )}
      >
        <div className="flex items-center justify-center gap-3">
          <div
            className={cx(
              "h-12 w-12 rounded-full border-4 animate-spin",
              isDark ? "border-slate-700/70 border-t-slate-200" : "border-slate-200/80 border-t-slate-600"
            )}
            aria-hidden="true"
          />
          <p className="font-semibold">Loading...</p>
        </div>
        <p className={cx("mt-3 text-sm", isDark ? "text-slate-300" : "text-slate-600")}>
          Grabbing the next page.
        </p>
      </div>
    </div>
  );
}
