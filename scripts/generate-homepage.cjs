const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const sourcePath = path.join(root, "public", "index.fr.html");
const outputPath = path.join(root, "lib", "homepage-html.ts");

const source = fs.readFileSync(sourcePath, "utf8");
const bodyMatch = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

if (!bodyMatch) {
  throw new Error("Could not find <body> in index.fr.html");
}

let body = bodyMatch[1].trim();

body = body
  .replace(/\b(src|href|data-bg-src)=["']assets\//g, '$1="/assets/')
  .replace(/url\(["']?assets\//g, 'url("/assets/');

body = body.replace(
  /\s*<script\s+src="https:\/\/elfsightcdn\.com\/platform\.js"\s+async><\/script>/i,
  "",
);

body = body.replace(
  /<script>\s*document\.write\(new Date\(\)\.getFullYear\(\)\)\s*<\/script>/i,
  "__SUNTRAIL_CURRENT_YEAR__",
);

body = body.replace(
  /\s*<!-- jquery js -->[\s\S]*?<script defer src="\/assets\/js\/main\.js"><\/script>\s*$/i,
  "",
);

const preloaderStartMarker = "<!-- ====== PRELOADER START ====== -->";
const preloaderEndMarker = "<!-- ====== PRELOADER END ====== -->";
const preloaderStart = body.indexOf(preloaderStartMarker);
const preloaderEnd = body.indexOf(preloaderEndMarker);

if (preloaderStart !== -1 && preloaderEnd !== -1) {
  body = [
    body.slice(0, preloaderStart),
    body.slice(preloaderEnd + preloaderEndMarker.length),
  ].join("");
}

const headerStartMarker = "<!-- ====== HEADER START ====== -->";
const headerEndMarker = "<!-- ====== HEADER END ====== -->";
const footerStartMarker = "<!-- rts footer area start -->";
const footerEndMarker = "<!-- rts footer area end -->";

const headerStart = body.indexOf(headerStartMarker);
const headerEnd = body.indexOf(headerEndMarker);
const footerStart = body.indexOf(footerStartMarker);
const footerEnd = body.indexOf(footerEndMarker);

if (headerStart === -1 || headerEnd === -1 || footerStart === -1 || footerEnd === -1) {
  throw new Error("Could not find header/footer markers in index.fr.html");
}

let headerHtml = body
  .slice(headerStart, headerEnd + headerEndMarker.length)
  .trim();

headerHtml = headerHtml
  .replace(
    /<li data-region="([^"]+)"([^>]*)><a href="[^"]+">([^<]+)<\/a><\/li>/g,
    '<li data-region="$1"$2>$3</li>',
  )
  .replace(/href="destination\/mozambique"/g, 'href="/destination/mozambique"');

const beforeHeader = body.slice(0, headerStart).trim();
const afterHeaderBeforeFooter = body
  .slice(headerEnd + headerEndMarker.length, footerStart)
  .trim();

const footerHtml = body
  .slice(footerStart, footerEnd + footerEndMarker.length)
  .trim();

const pageChromeHtml = body
  .slice(footerEnd + footerEndMarker.length)
  .trim();

const homepageHtml = [beforeHeader, afterHeaderBeforeFooter]
  .filter(Boolean)
  .join("\n\n");

fs.writeFileSync(
  outputPath,
  [
    `export const headerHtml = ${JSON.stringify(headerHtml)};`,
    `export const homepageHtml = ${JSON.stringify(homepageHtml)};`,
    `export const footerHtml = ${JSON.stringify(footerHtml)};`,
    `export const pageChromeHtml = ${JSON.stringify(pageChromeHtml)};`,
    "",
  ].join("\n"),
  "utf8",
);

console.log(`Generated ${path.relative(root, outputPath)} from public/index.fr.html`);
