const { PurgeCSS } = require("purgecss");

async function runPurgeCSS() {
  const purgeCSSResult = await new PurgeCSS().purge({
    content: ["./build/index.html", "./build/static/js/*.js"],
    css: ["./build/static/css/*.css"],
    output: ["./build/static/css/"],
    defaultExtractor: (content) => content.match(/[\w\:\-]+/g) || [],
  });
  console.log(purgeCSSResult);
}

runPurgeCSS();
