export default function (eleventy) {
  eleventy.addPassthroughCopy("src/assets");
  eleventy.addCollection("posts", (collection) =>
    collection.getFilteredByGlob("src/posts/**/*.md")
  );
  eleventy.addFilter("isoDate", (date) => new Date(date).toISOString());
  eleventy.addFilter("shortDate", (date) => new Date(date).toISOString().slice(0, 10));

  return {
    dir: { input: "src", output: "dist" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: false,
  };
}
