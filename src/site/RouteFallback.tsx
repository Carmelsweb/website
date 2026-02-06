import { useTheme } from "./useTheme";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

// Lightweight fallback shown while route chunks load.
export function RouteFallback() {
  const { isDark } = useTheme();

  return (
    <div className={cx("w-full", isDark ? "text-slate-200" : "text-slate-700")}>
      <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div
          className={cx(
            "rounded-2xl border p-6",
            isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white"
          )}
        >
          <div className="flex items-center gap-3">
            <div className="h-4 w-4 rounded-full animate-pulse bg-[var(--brand-teal)]" aria-hidden="true" />
            <p className="font-semibold">Loading...</p>
          </div>
          <p className={cx("mt-2 text-sm", isDark ? "text-slate-300" : "text-slate-600")}>
            Grabbing the next page.
          </p>
        </div>
      </div>
    </div>
  );
}

