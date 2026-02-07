import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
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

function toCanonicalPath(path) {
  const normalized = normalizePath(path);
  return normalized === "/" ? "/" : `${normalized}/`;
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

function withCanonicalTags(html, canonicalPath) {
  const canonicalUrl = `${SITE_ORIGIN}${toCanonicalPath(canonicalPath)}`;
  let output = html;

  if (output.includes('rel="canonical"')) {
    output = output.replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );
  } else {
    output = output.replace("</head>", `    <link rel="canonical" href="${canonicalUrl}" />\n  </head>`);
  }

  if (output.includes('property="og:url"')) {
    output = output.replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );
  } else {
    output = output.replace(
      '<meta property="og:type" content="website" />',
      '<meta property="og:type" content="website" />\n    <meta property="og:url" content="' + canonicalUrl + '" />'
    );
  }

  return output;
}

function writeRouteIndex(path, canonicalPath, template) {
  const normalized = normalizePath(path);
  if (normalized === "/") return;

  const routeDir = join(DIST_DIR, normalized.slice(1));
  mkdirSync(routeDir, { recursive: true });
  const routeHtml = withCanonicalTags(template, canonicalPath);
  writeFileSync(join(routeDir, "index.html"), routeHtml, "utf8");
}

if (!existsSync(INDEX_HTML)) {
  throw new Error(`Missing ${INDEX_HTML}. Run the Vite build first.`);
}

if (!existsSync(SITEMAP_PATH)) {
  throw new Error(`Missing ${SITEMAP_PATH}.`);
}

const sitemap = readFileSync(SITEMAP_PATH, "utf8");
const baseHtmlTemplate = readFileSync(INDEX_HTML, "utf8");
const routes = new Map();

for (const match of sitemap.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)) {
  const loc = match[1].trim();
  if (!loc.startsWith(SITE_ORIGIN)) continue;

  const rawPath = loc.slice(SITE_ORIGIN.length) || "/";
  const route = normalizePath(rawPath);
  if (route === "/") continue;

  routes.set(route, route);
  routes.set(toTitleCasePath(route), route);
  routes.set(toUpperCasePath(route), route);
}

// Ensure the root route also has explicit canonical + og:url in generated HTML.
writeFileSync(INDEX_HTML, withCanonicalTags(baseHtmlTemplate, "/"), "utf8");

for (const [route, canonicalRoute] of routes) {
  writeRouteIndex(route, canonicalRoute, baseHtmlTemplate);
}

console.log(`Created static route index files for ${routes.size} paths.`);
