import type { Metadata } from "next";
import "./globals.css";
import TopBar from "../components/TopBar";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://elapi29.github.io/neurogold-landing"),
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
  twitter: {
    card: "summary_large_image",
    title: "Neurogold Training",
    description: "Alto rendimiento con neurociencia aplicada.",
    images: ["/og.png"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Neurogold Training",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://elapi29.github.io/neurogold-landing/",
    "logo": "/og.png",
    "description": "Rendimiento sustentable con neurociencia aplicada."
  };

  return (
    <html lang="es">
      <body className="min-h-dvh">
        <TopBar locale="es" />
        <div className="pt-16">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          {children}
        </div>
      </body>
    </html>
  );
}