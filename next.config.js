/** @type {import('next').NextConfig} */
const repoName = process.env.NEXT_PUBLIC_BASE_PATH || ""; // e.g., "/neurogold-landing"
module.exports = {
  output: "export", // static export for GitHub Pages
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: repoName || undefined,
  assetPrefix: repoName || undefined,
  reactStrictMode: true,
};
