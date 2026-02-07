import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "./theme";
import { useTheme } from "./useTheme";

function ThemeHarness() {
  const { theme, isDark, toggleTheme } = useTheme();
  return (
    <div>
      <p>{theme}</p>
      <p>{String(isDark)}</p>
      <button onClick={toggleTheme} type="button">
        toggle
      </button>
    </div>
  );
}

describe("ThemeProvider + useTheme", () => {
  it("hydrates from localStorage and toggles theme", () => {
    localStorage.setItem("wcc-theme", "dark");

    render(
      <ThemeProvider>
        <ThemeHarness />
      </ThemeProvider>
    );

    expect(screen.getByText("dark")).toBeInTheDocument();
    expect(screen.getByText("true")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "toggle" }));

    expect(screen.getByText("light")).toBeInTheDocument();
    expect(screen.getByText("false")).toBeInTheDocument();
    expect(localStorage.getItem("wcc-theme")).toBe("light");
  });
});
