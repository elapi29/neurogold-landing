/** @type {import('next').NextConfig} */
const raw = process.env.NEXT_PUBLIC_BASE_PATH || ""; // ej: "/neurogold-landing" o ""
const base = raw ? "/" + raw.replace(/^\/+/, "").replace(/\/+$/, "") : "";

module.exports = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: base || undefined,
  assetPrefix: base ? `${base}/` : undefined, // importante la barra final
  reactStrictMode: true,
};