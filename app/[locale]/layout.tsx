import TopBar from "@/components/TopBar";
export const dynamic = "error"; // asegura export estático

export default function RootLayout({
  children, params: { locale },
}: { children: React.ReactNode; params: { locale: "es"|"en"|"de" } }) {
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
