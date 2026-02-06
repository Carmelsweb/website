import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIST_DIR = "dist";
const INDEX_HTML = join(DIST_DIR, "index.html");
const SITEMAP_PATH = "public/sitemap.xml";
const SITE_ORIGIN = "https://www.westcoastcelebrants.ie";

function normalizePath(path) {
  const clean = (path.split(/[?#]/, 1)[0] || "/").trim();
  let normalized = clean.startsWith("/") ? clean : `/${clean}`;
  normalized = normalized.replace(/\/+$/, "");
  return normalized === "" ? "/" : normalized;
}

function toTitleCasePath(path) {
  const segments = path
    .replace(/^\/+/, "")
    .split("/")
    .filter(Boolean)
    .map((segment) =>
      segment
        .split("-")
        .map((part) => (part ? `${part[0].toUpperCase()}${part.slice(1)}` : part))
        .join("-")
    );
  return segments.length ? `/${segments.join("/")}` : "/";
}

function toUpperCasePath(path) {
  const segments = path
    .replace(/^\/+/, "")
    .split("/")
    .filter(Boolean)
    .map((segment) => segment.toUpperCase());
  return segments.length ? `/${segments.join("/")}` : "/";
}

function writeRouteIndex(path) {
  const normalized = normalizePath(path);
  if (normalized === "/") return;

  const routeDir = join(DIST_DIR, normalized.slice(1));
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(INDEX_HTML, join(routeDir, "index.html"));
}

if (!existsSync(INDEX_HTML)) {
  throw new Error(`Missing ${INDEX_HTML}. Run the Vite build first.`);
}

if (!existsSync(SITEMAP_PATH)) {
  throw new Error(`Missing ${SITEMAP_PATH}.`);
}

const sitemap = readFileSync(SITEMAP_PATH, "utf8");
const routes = new Set();

for (const match of sitemap.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)) {
  const loc = match[1].trim();
  if (!loc.startsWith(SITE_ORIGIN)) continue;

  const rawPath = loc.slice(SITE_ORIGIN.length) || "/";
  const route = normalizePath(rawPath);
  if (route === "/") continue;

  routes.add(route);
  routes.add(toTitleCasePath(route));
  routes.add(toUpperCasePath(route));
}

for (const route of routes) {
  writeRouteIndex(route);
}

console.log(`Created static route index files for ${routes.size} paths.`);
