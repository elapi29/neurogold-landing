# Neurogold Landing (Next.js static, Tailwind, SEO)

Sitio estático para **GitHub Pages** con CTA de email via **Formspree**.

## Requisitos
- Node 18+
- Endpoint de Formspree (o similar) para el CTA

## Desarrollo
```bash
npm i
export NEXT_PUBLIC_FORMSPREE_ENDPOINT="https://formspree.io/f/TU_ID"  # cambia TU_ID
# si publicás en user.github.io/REPO:
export NEXT_PUBLIC_BASE_PATH="/REPO"
npm run dev
```

## Build estático
```bash
npm run build
# genera out/
```

## Deploy a GitHub Pages (con Actions)
1. Crea el repo en GitHub.
2. Subí todo el proyecto (no solo out/).
3. En **Settings → Pages**, seleccioná **GitHub Actions**.
4. Hacé push a main — el workflow construye y publica en `gh-pages`.

> Si usás Pages de **proyecto** (user.github.io/REPO), definí `NEXT_PUBLIC_BASE_PATH="/REPO"` en el Job (ya está en el workflow).  
> Si usás Pages de **usuario** (user.github.io), dejalo vacío.

## Mejores prácticas incluidas
- `output: "export"` para export estático
- Tailwind y diseño accesible
- SEO: `metadata`, Open Graph/Twitter, `robots.txt`, `sitemap.xml`
- JSON-LD de Organization
- Form con validación y honeypot
