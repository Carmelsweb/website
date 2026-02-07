import { act, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

function MotionHarness() {
  const prefersReduced = usePrefersReducedMotion();
  return <p>{prefersReduced ? "reduced" : "full"}</p>;
}

describe("usePrefersReducedMotion", () => {
  it("tracks media query changes", () => {
    let onChange: ((event: MediaQueryListEvent) => void) | undefined;
    const mql = {
      matches: true,
      media: "(prefers-reduced-motion: reduce)",
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn((event: string, cb: (e: MediaQueryListEvent) => void) => {
        if (event === "change") onChange = cb;
      }),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    };

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn(() => mql),
    });

    render(<MotionHarness />);
    expect(screen.getByText("reduced")).toBeInTheDocument();

    act(() => {
      mql.matches = false;
      onChange?.({ matches: false } as MediaQueryListEvent);
    });

    expect(screen.getByText("full")).toBeInTheDocument();
  });
});
