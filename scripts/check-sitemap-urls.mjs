import { existsSync, readFileSync } from "node:fs";

const DEFAULT_SITEMAP_PATH = "public/sitemap.xml";
const MAX_REDIRECTS = 10;
const REQUEST_TIMEOUT_MS = 15000;

function parseSitemapLocations(xml) {
  const urls = [];
  for (const match of xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)) {
    const url = match[1].trim();
    if (url) urls.push(url);
  }
  return [...new Set(urls)];
}

function isRedirectStatus(status) {
  return status >= 300 && status < 400;
}

async function requestWithTimeout(url, method) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method,
      redirect: "manual",
      signal: controller.signal,
      headers: { "user-agent": "sitemap-url-checker/1.0" },
    });
    return response;
  } finally {
    clearTimeout(timeout);
  }
}

async function requestUrl(url) {
  let response = await requestWithTimeout(url, "HEAD");

  if (response.status === 405 || response.status === 501) {
    response = await requestWithTimeout(url, "GET");
    response.body?.cancel();
  }

  return response;
}

async function probeUrl(startUrl) {
  let current = startUrl;
  let redirects = 0;
  const seen = new Set([startUrl]);

  while (redirects <= MAX_REDIRECTS) {
    let response;
    try {
      response = await requestUrl(current);
    } catch (error) {
      return {
        url: startUrl,
        status: "ERR",
        redirects,
        finalUrl: current,
        note: error instanceof Error ? error.message : String(error),
      };
    }

    if (!isRedirectStatus(response.status)) {
      return {
        url: startUrl,
        status: String(response.status),
        redirects,
        finalUrl: current,
        note: "",
      };
    }

    const location = response.headers.get("location");
    if (!location) {
      return {
        url: startUrl,
        status: String(response.status),
        redirects,
        finalUrl: current,
        note: "Redirect without Location header",
      };
    }

    const next = new URL(location, current).toString();
    redirects += 1;

    if (seen.has(next)) {
      return {
        url: startUrl,
        status: String(response.status),
        redirects,
        finalUrl: next,
        note: "Redirect loop detected",
      };
    }

    seen.add(next);
    current = next;
  }

  return {
    url: startUrl,
    status: "ERR",
    redirects: MAX_REDIRECTS,
    finalUrl: current,
    note: `Exceeded ${MAX_REDIRECTS} redirects`,
  };
}

function printTable(rows) {
  const headers = {
    url: "URL",
    status: "Status",
    redirects: "Redirects",
    finalUrl: "Final URL",
    note: "Note",
  };

  const widths = {
    url: Math.max(headers.url.length, ...rows.map((row) => row.url.length)),
    status: Math.max(headers.status.length, ...rows.map((row) => row.status.length)),
    redirects: Math.max(headers.redirects.length, ...rows.map((row) => String(row.redirects).length)),
    finalUrl: Math.max(headers.finalUrl.length, ...rows.map((row) => row.finalUrl.length)),
    note: Math.max(headers.note.length, ...rows.map((row) => row.note.length)),
  };

  const formatRow = (row) =>
    [
      String(row.url).padEnd(widths.url),
      String(row.status).padEnd(widths.status),
      String(row.redirects).padEnd(widths.redirects),
      String(row.finalUrl).padEnd(widths.finalUrl),
      String(row.note).padEnd(widths.note),
    ].join("  ");

  console.log(formatRow(headers));
  console.log(
    `${"-".repeat(widths.url)}  ${"-".repeat(widths.status)}  ${"-".repeat(widths.redirects)}  ${"-".repeat(widths.finalUrl)}  ${"-".repeat(widths.note)}`
  );
  rows.forEach((row) => console.log(formatRow(row)));
}

function hasFailures(rows) {
  return rows.some((row) => {
    const status = Number.parseInt(row.status, 10);
    return Number.isNaN(status) || status >= 400;
  });
}

async function main() {
  const sitemapPath = process.argv[2] ?? DEFAULT_SITEMAP_PATH;

  if (!existsSync(sitemapPath)) {
    console.error(`Sitemap file not found: ${sitemapPath}`);
    process.exit(1);
  }

  const sitemapXml = readFileSync(sitemapPath, "utf8");
  const urls = parseSitemapLocations(sitemapXml);

  if (urls.length === 0) {
    console.error(`No <loc> entries found in ${sitemapPath}`);
    process.exit(1);
  }

  const results = [];
  for (const url of urls) {
    results.push(await probeUrl(url));
  }

  printTable(results);

  const badCount = results.filter((row) => {
    const status = Number.parseInt(row.status, 10);
    return Number.isNaN(status) || status >= 400;
  }).length;

  console.log("");
  console.log(`Checked ${results.length} URL(s).`);
  console.log(`${results.length - badCount} OK, ${badCount} problem URL(s).`);

  if (hasFailures(results)) {
    process.exitCode = 1;
  }
}

await main();
