import { useEffect } from "react";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

const SITE_NAME = "West Coast Celebrants";
const DEFAULT_OG_IMAGE = "/og-logo.png";
const FALLBACK_BASE_URL = "https://www.westcoastcelebrants.ie";
const BASE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ||
  (typeof window !== "undefined" ? window.location.origin : FALLBACK_BASE_URL);

function setMetaTag(attr: "name" | "property", key: string, value: string) {
  const selector = `meta[${attr}="${key}"]`;
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", value);
}

function setLinkTag(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.rel = rel;
    document.head.appendChild(tag);
  }
  tag.href = href;
}

export function usePageMeta({ title, description, path }: PageMeta) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const canonical = `${BASE_URL}${path}`;
    setLinkTag("canonical", canonical);

    setMetaTag("name", "description", description);
    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:url", canonical);
    setMetaTag("property", "og:image", `${BASE_URL}${DEFAULT_OG_IMAGE}`);

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", `${BASE_URL}${DEFAULT_OG_IMAGE}`);
  }, [title, description, path]);
}
