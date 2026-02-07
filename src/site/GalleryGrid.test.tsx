import { fireEvent, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GalleryGrid } from "./GalleryGrid";
import { renderWithProviders } from "../test/test-utils";

describe("GalleryGrid", () => {
  it("opens the viewer and supports keyboard navigation", () => {
    renderWithProviders(
      <GalleryGrid
        images={[
          { src: "/image-1.jpg", alt: "Image one" },
          { src: "/image-2.jpg", alt: "Image two" },
        ]}
      />
    );

    fireEvent.click(screen.getByAltText("Image one"));

    expect(screen.getByRole("dialog", { name: "Image viewer" })).toBeInTheDocument();
    expect(screen.getAllByAltText("Image one")).toHaveLength(2);

    fireEvent.keyDown(window, { key: "ArrowRight" });
    const dialog = screen.getByRole("dialog", { name: "Image viewer" });
    expect(within(dialog).getByAltText("Image two")).toBeInTheDocument();

    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("dialog", { name: "Image viewer" })).not.toBeInTheDocument();
  });
});
