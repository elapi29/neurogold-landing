import type { ReactNode } from "react";
import TopBar from "../../components/TopBar";

export const dynamic = "error";

// SEO: URL base absoluta para OG/Twitter
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://elapi29.github.io/neurogold-landing"),
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: "es" | "en" | "de" };
}) {
  return (
    <html lang={locale}>
      <body className="min-h-dvh bg-white">
        <TopBar locale={locale} />
        {/* padding-top para no tapar contenido con el topbar fijo */}
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "de" }];
}

