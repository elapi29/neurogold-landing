// app/[locale]/layout.tsx
import type { ReactNode } from "react";
import TopBar from "../../components/TopBar";

export const dynamic = "error";

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
        {/* padding-top para no quedar debajo del topbar fijo */}
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "de" }];
}
