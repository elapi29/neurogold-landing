import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://neurogold.example"),
  title: {
    default: "Neurogold Training — BCI & Neurofeedback",
    template: "%s | Neurogold Training"
  },
  description: "BCI Neurogold Training: neurofeedback, motor imagery y coaching para alto rendimiento.",
  keywords: ["BCI","neurofeedback","motor imagery","EEG","rTMS","deporte","neurotecnología"],
  openGraph: {
    title: "Neurogold Training — BCI & Neurofeedback",
    description: "Alto rendimiento con neurociencia aplicada.",
    url: "/",
    siteName: "Neurogold Training",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "es_AR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurogold Training — BCI & Neurofeedback",
    description: "Alto rendimiento con neurociencia aplicada.",
    images: ["/og.png"]
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Neurogold Training",
    "url": "https://neurogold.example",
    "logo": "/og.png",
    "sameAs": ["https://github.com/YOUR_USERNAME"],
    "description": "BCI Neurogold Training: neurofeedback, motor imagery y coaching para alto rendimiento."
  };
  return (
    <html lang="es">
      <body>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
