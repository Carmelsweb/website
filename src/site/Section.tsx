import { useTheme } from "./theme";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Section({
  id,
  title,
  kicker,
  children,
}: {
  id?: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  const { isDark } = useTheme();
  return (
    <section
      id={id}
      className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 outline-none"
      tabIndex={-1}
    >
      {kicker && (
        <p className={cx("mb-3 text-xs uppercase tracking-widest", isDark ? "text-slate-400" : "text-slate-500")}>
          {kicker}
        </p>
      )}
      <h1
        className={cx(
          "text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent",
          isDark
            ? "bg-gradient-to-r from-white via-slate-200 to-white"
            : "bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900"
        )}
      >
        {title}
      </h1>
      <div className={cx("prose max-w-none", isDark ? "prose-invert" : "prose-slate")}>{children}</div>
    </section>
  );
}

