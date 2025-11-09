import "../globals.css";
import TopBar from "../../components/TopBar";
import type { Locale } from "../../lib/i18n";

export const dynamic = "error"; // export estático

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={locale}>
      <body className="min-h-dvh">
        <TopBar locale={locale} />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "de" }];
}
