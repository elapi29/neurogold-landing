"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""; // "" o "/neurogold-landing"

export default function TopBar({ locale = "es" }: { locale?: "es" | "en" | "de" }) {
  const pathname = usePathname() || "/";
  const current = pathname.match(/^\/(es|en|de)\b/)?.[1] as "es" | "en" | "de" || locale;
  const rest = pathname.replace(/^\/(es|en|de)/, "") || "/";

  const locales: Array<"es" | "en" | "de"> = ["es", "en", "de"];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-3 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-md shadow-sm shadow-black/20">
          <div className="flex items-center justify-between px-4 py-2">
            {/* Marca: ND·AA (solo este logo en el TopBar) */}
            <Link href={`/${current}`} className="flex items-center gap-3" aria-label="ND·AA — Neurogold Training">
              <Image
                src={`${prefix}/partners/NDAAWordmark.png`}
                alt="ND·AA"
                width={120}
                height={28}
                priority
                className="h-7 w-auto"
              />
              <span className="hidden sm:block text-slate-100/90 font-medium tracking-tight">
                Neurogold Training
              </span>
            </Link>

            {/* Selector de idioma: ES / EN / DE */}
            <nav className="flex items-center gap-2">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={`/${loc}${rest === "/" ? "" : rest}`}
                  className={`px-2 py-1 text-sm font-medium rounded-md transition ${
                    loc === current
                      ? "bg-white/10 text-white"
                      : "text-slate-200/80 hover:text-white hover:bg-white/10"
                  }`}
                  aria-current={loc === current ? "page" : undefined}
                >
                  {loc.toUpperCase()}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}