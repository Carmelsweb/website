import { useEffect } from "react";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  robots?: string;
};

const SITE_NAME = "West Coast Celebrants";
const DEFAULT_OG_IMAGE = "/og-logo.png";
const CANONICAL_BASE_URL = "https://www.westcoastcelebrants.ie";
const isLocalHost =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
const BASE_URL =
  isLocalHost && typeof window !== "undefined" ? window.location.origin : CANONICAL_BASE_URL;

function toCanonicalPath(path: string) {
  const clean = (path.split(/[?#]/, 1)[0] || "/").trim();
  let normalized = clean.startsWith("/") ? clean : `/${clean}`;
  normalized = normalized.replace(/\/{2,}/g, "/");
  if (normalized === "" || normalized === "/") return "/";
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

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

export function usePageMeta({ title, description, path, robots }: PageMeta) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const canonical = `${BASE_URL}${toCanonicalPath(path)}`;
    setLinkTag("canonical", canonical);

    setMetaTag("name", "description", description);
    setMetaTag("name", "robots", robots ?? "index,follow,max-image-preview:large");
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
  }, [title, description, path, robots]);
}
