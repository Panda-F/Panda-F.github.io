export default function (eleventy) {
  const dateFormat = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeZone: "UTC",
  });

  eleventy.addPassthroughCopy("src/assets");
  eleventy.addCollection("posts", (collection) =>
    collection.getFilteredByGlob("src/posts/**/*.md")
  );
  eleventy.addFilter("isoDate", (date) => new Date(date).toISOString());
  eleventy.addFilter("displayDate", (date) => dateFormat.format(new Date(date)));

  return {
    dir: { input: "src", output: "dist" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: false,
  };
}
