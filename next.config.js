/** @type {import('next').NextConfig} */
const repoName = process.env.NEXT_PUBLIC_BASE_PATH || ""; // p.ej. "/neurogold-landing"

module.exports = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: repoName || undefined,
  assetPrefix: repoName || undefined,
  reactStrictMode: true,
};