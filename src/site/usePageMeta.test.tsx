import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { usePageMeta } from "./usePageMeta";

function MetaHarness(props: {
  title: string;
  description: string;
  path: string;
  robots?: string;
}) {
  usePageMeta(props);
  return null;
}

function getMetaByName(name: string) {
  return document.head.querySelector(`meta[name="${name}"]`);
}

function getMetaByProperty(property: string) {
  return document.head.querySelector(`meta[property="${property}"]`);
}

describe("usePageMeta", () => {
  it("writes title, canonical, and social metadata with canonical trailing slash", () => {
    render(
      <MetaHarness
        title="About Carmel"
        description="About page description"
        path="/about"
      />
    );

    expect(document.title).toBe("About Carmel | West Coast Celebrants");

    const canonical = document.head.querySelector('link[rel="canonical"]');
    expect(canonical).toHaveAttribute("href", `${window.location.origin}/about/`);

    expect(getMetaByName("description")).toHaveAttribute(
      "content",
      "About page description"
    );
    expect(getMetaByName("robots")).toHaveAttribute(
      "content",
      "index,follow,max-image-preview:large"
    );
    expect(getMetaByProperty("og:url")).toHaveAttribute(
      "content",
      `${window.location.origin}/about/`
    );
    expect(getMetaByName("twitter:card")).toHaveAttribute(
      "content",
      "summary_large_image"
    );
  });

  it("supports custom robots directives", () => {
    render(
      <MetaHarness
        title="Page not found"
        description="Missing"
        path="/404"
        robots="noindex,follow"
      />
    );

    expect(getMetaByName("robots")).toHaveAttribute("content", "noindex,follow");
  });
});
