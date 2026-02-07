import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useJsonLd } from "./useJsonLd";

function JsonLdHarness({ json, id }: { json: string; id: string }) {
  useJsonLd(json, id);
  return null;
}

describe("useJsonLd", () => {
  it("adds, updates, and removes JSON-LD script tags", () => {
    const initialJson = JSON.stringify({ "@type": "Person", name: "Carmel Fitzgerald" });
    const updatedJson = JSON.stringify({ "@type": "Person", name: "West Coast Celebrants" });

    const { rerender, unmount } = render(
      <JsonLdHarness json={initialJson} id="home" />
    );

    const script = document.head.querySelector(
      "script#jsonld-home"
    ) as HTMLScriptElement | null;

    expect(script).not.toBeNull();
    expect(script).toHaveAttribute("type", "application/ld+json");
    expect(script?.textContent).toBe(initialJson);

    rerender(<JsonLdHarness json={updatedJson} id="home" />);
    const updated = document.head.querySelector(
      "script#jsonld-home"
    ) as HTMLScriptElement | null;
    expect(updated?.textContent).toBe(updatedJson);

    unmount();
    expect(document.head.querySelector("script#jsonld-home")).toBeNull();
  });
});
