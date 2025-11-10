"use client";

import Image from "next/image";

export default function NDAAWordmark() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 flex flex-col items-center gap-4">
      {/* Marca: usamos la imagen exacta que tienes en public/partners */}
      <div className="relative h-12 w-[260px] sm:h-14 sm:w-[300px]">
        <Image
          src="/partners/NDAAWordmark.png"
          alt="ND·AA — Neurociencias Deportivas Argentinas"
          fill
          sizes="(max-width: 640px) 260px, 300px"
          className="object-contain"
          priority
        />
      </div>

      {/* Wordmark institucional */}
      <div className="text-center text-sm font-semibold uppercase tracking-[.25em] text-slate-600">
        Neurociencias Deportivas Argentinas
      </div>
    </div>
  );
}