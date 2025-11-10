// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://elapi29.github.io/neurogold-landing";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Neurogold Training — BCI & Neurofeedback",
    template: "%s | Neurogold Training",
  },
  description: "Rendimiento sustentable con neurociencia aplicada.",
  openGraph: {
    title: "Neurogold Training",
    description: "Alto rendimiento con neurociencia aplicada.",
    url: "/",
    siteName: "Neurogold Training",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "es_AR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Neurogold Training", description: "Alto rendimiento con neurociencia aplicada.", images: ["/og.png"] },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh">
        {/* Ojo: el TopBar se renderiza en app/[locale]/layout.tsx */}
        <div className="pt-0">{children}</div>
      </body>
    </html>
  );
}