/** @type {import("next").NextConfig} */
const nextConfig = {
  // Static HTML export to `deployment/` for Firebase Hosting (no Node server)
  output: "export",
  distDir: "deployment",
  // Emit `/techris/index.html` so routes resolve on any static host without rewrites
  trailingSlash: true,
  // Default image loader needs a server; serve images as-is
  images: {
    unoptimized: true,
  },
  // `cacheComponents` / `partialPrefetching` removed: they enable PPR, which export mode rejects
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
