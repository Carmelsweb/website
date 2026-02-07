import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { SiteLayout } from "./SiteLayout";
import { ThemeProvider } from "./theme";

function LayoutHarness() {
  return (
    <ThemeProvider>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<div>Home content</div>} />
            <Route path="/about" element={<div>About content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );
}

describe("SiteLayout", () => {
  it("toggles the mobile menu and body scroll lock", async () => {
    render(<LayoutHarness />);

    const menuButton = screen.getByRole("button", { name: "Toggle menu" });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    await waitFor(() => {
      expect(document.body.style.overflow).toBe("hidden");
    });

    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    await waitFor(() => {
      expect(document.body.style.overflow).toBe("");
    });
  });
});
