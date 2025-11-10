/** @type {import('next').NextConfig} */
const raw = process.env.NEXT_PUBLIC_BASE_PATH || ""; // ej: "/neurogold-landing" o ""
// normaliza: sin barra final, con barra inicial si trae valor
const base = raw
  ? "/" + raw.replace(/^\/+/, "").replace(/\/+$/, "")
  : "";

module.exports = {
  output: "export",           // static export para GitHub Pages
  trailingSlash: true,        // /ruta/ => index.html (Pages friendly)
  images: { unoptimized: true }, // evitar loader remoto en Pages
  basePath: base || undefined,
  assetPrefix: base ? `${base}/` : undefined, // <— barra final aquí
  reactStrictMode: true,
};