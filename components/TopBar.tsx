// components/TopBar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';

type Locale = 'es' | 'en' | 'de';
const LOCALES: Locale[] = ['es', 'en', 'de'];

/** Igual que en asafebox: resolvemos paths absolutos con basePath */
function withBase(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export default function TopBar({ locale = 'es' }: { locale?: Locale }) {
  const home = useMemo(() => `/${locale}/`, [locale]);

  // Logos (en /public/partners). ND·AA en “claro” con invert para fondos oscuros.
  const ndaaSrc = withBase('/partners/NDAAWordmark.png');
  const gtecSrc = withBase('/partners/gtec.svg');
  const neurocareSrc = withBase('/partners/neurocare.webp');

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-3 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-sm shadow-black/20">
          <div className="flex h-14 items-center justify-between px-3">
            {/* Izquierda: brand + aliados chicos */}
            <Link href={home} prefetch={false} className="flex items-center gap-3">
              <Image
                src={ndaaSrc}
                alt="ND·AA"
                width={120}
                height={28}
                priority
                className="h-7 w-auto brightness-0 invert" /* logo claro */
              />
              <span className="hidden sm:block text-slate-50/90 font-medium tracking-tight">
                Neurogold Training
              </span>
            </Link>

            {/* Aliados (opcionales) visibles en md+ */}
            <div className="hidden md:flex items-center gap-4 opacity-90">
              <Image
                src={gtecSrc}
                alt="g.tec"
                width={76}
                height={24}
                className="h-6 w-auto"
                priority
              />
              <Image
                src={neurocareSrc}
                alt="neurocare"
                width={90}
                height={26}
                className="h-6 w-auto"
                priority
              />
            </div>

            {/* Derecha: sólo idiomas */}
            <nav className="flex items-center gap-1">
              {LOCALES.map((code) => {
                const active = code === locale;
                return (
                  <Link
                    key={code}
                    href={`/${code}/`}
                    prefetch={false}
                    className={[
                      'rounded-md px-2 py-1 text-sm font-medium',
                      active
                        ? 'bg-white text-slate-900'
                        : 'text-slate-100/80 hover:bg-white/10'
                    ].join(' ')}
                    aria-current={active ? 'page' : undefined}
                  >
                    {code.toUpperCase()}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}