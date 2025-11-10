/** @type {import('next').NextConfig} */
const repo = process.env.NEXT_PUBLIC_BASE_PATH || ""; // p.ej. "/neurogold-landing"

module.exports = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: repo || undefined,
  assetPrefix: repo || undefined,
  reactStrictMode: true,
  env: {
    // espejo para clientes (<img>, next/image, links absolutos)
    NEXT_PUBLIC_BASE_PATH: repo || "",
  },
};