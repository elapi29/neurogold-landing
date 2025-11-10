import type { ReactNode } from "react";

export const dynamic = "error";

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
        {/* TopBar viene desde app/layout.tsx */}
        <div className="pt-0">{children}</div>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "de" }];
}
