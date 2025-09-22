import Link from "next/link";

export const metadata = {
  title: "¡Gracias!",
  description: "Gracias por registrarte en Neurogold Training."
};

export default function Thanks() {
  return (
    <main className="container-lg py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">¡Gracias por registrarte!</h1>
      <p className="mt-3 text-slate-600 max-w-2xl">
        Te estaremos escribiendo con novedades y acceso prioritario al piloto. Si no ves el correo, revisá tu carpeta de Spam/Promociones.
      </p>
      <Link href="/" className="mt-8 inline-block rounded-xl bg-primary text-white px-5 py-3 font-semibold shadow hover:opacity-90">
        Volver al inicio
      </Link>
    </main>
  )
}
