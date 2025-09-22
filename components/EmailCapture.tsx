export default function EmailCapture() {
  return (
    <form
      action="https://formsubmit.co/elapi.projects+leads@gmail.com"
      method="POST"
      className="w-full max-w-md mx-auto flex gap-2"
      noValidate
    >
      <label htmlFor="email" className="sr-only">Tu email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Dejá tu email"
        className="flex-1 rounded-xl border border-slate-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
        required
        autoComplete="email"
      />
      <button
        type="submit"
        className="rounded-xl px-5 py-3 bg-primary text-white font-semibold shadow hover:opacity-90"
      >
        Quiero saber más
      </button>

      {/* anti-spam + metadata */}
      <input type="text" name="_honey" className="hidden" aria-hidden="true" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="Nuevo lead — Neurogold" />
      <input type="hidden" name="_next" value="https://elapi29.github.io/neurogold-landing/thanks/" />
    </form>
  );
}
