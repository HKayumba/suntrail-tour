const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "..", "public", "index.fr.html");
let source = fs.readFileSync(sourcePath, "utf8");

const regionRoutes = {
  namibie: "namibie",
  botswana: "botswana",
  mozambique: "mozambique",
  rwanda: "rwanda",
  zambia: "zambie",
  zimbabwe: "zimbabwe",
};

for (const [region, slug] of Object.entries(regionRoutes)) {
  const regionPattern = new RegExp(
    `(<div class="destlist(?: active)?" data-region="${region}">)([\\s\\S]*?)(?=<div class="destlist|<a href="destination.html" class="view-all-btn")`,
    "g",
  );

  source = source.replace(regionPattern, (_match, start, body) => {
    return (
      start +
      body.replaceAll(
        'href="destination-details.html"',
        `href="/destination/${slug}"`,
      )
    );
  });
}

source = source
  .replace(/href="destinations?\.html"/g, 'href="/destination"')
  .replace(/href="destination-details\.html"/g, 'href="/destination"')
  .replace(/href="index\.fr\.html"/g, 'href="/"');

fs.writeFileSync(sourcePath, source, "utf8");

console.log("Updated destination links in public/index.fr.html");
