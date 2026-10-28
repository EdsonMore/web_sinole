# Web oficial SINOLE / FEDUNPE

Astro + Tailwind CSS + Markdown + Decap CMS. Hosting gratis en Vercel.

## Publicar en 3 pasos (sin terminal)

1. **Sube el proyecto a GitHub**
   Crea una cuenta en <https://github.com> → botón **New repository** → nombre `web_sinole` → **Create**.
   En la página del repositorio pulsa **uploading an existing file** y arrastra **el contenido** de esta carpeta
   (todo menos `node_modules`, `dist` y `.vercel`) → **Commit changes**.

2. **Conéctalo a Vercel**
   Entra a <https://vercel.com> con tu cuenta de GitHub → **Add New… → Project** → elige `web_sinole` → **Deploy**.
   Vercel detecta Astro solo. En 1 minuto tendrás tu web en `https://websinole.vercel.app`.

3. **Ajusta tus datos**
   En GitHub abre y edita (ícono del lápiz) estos archivos; cada cambio se publica solo:
   - `src/site.ts` → enlace de Facebook, correo y teléfono (están marcados como PLACEHOLDER).
   - `astro.config.mjs` → `site:` con la URL real que te dio Vercel.

> No hace falta `vercel.json`: el adaptador `@astrojs/vercel` genera la configuración.

## Escribir noticias

**Opción A – directo en GitHub:** carpeta `src/content/noticias/` → **Add file → Create new file** → nombre `mi-noticia.md`:

```md
---
titulo: "Título de la noticia"
fecha: 2026-11-01
imagen: /images/noticias/mi-foto.jpg   # opcional (sube la foto a public/images/noticias/)
resumen: "Una o dos líneas que aparecen en la tarjeta."
categoria: Comunicado
---

Texto de la noticia. **Negritas**, listas, enlaces…
```

**Opción B – panel visual en `/admin` (Decap CMS):** configuración única de ~5 minutos:

1. GitHub → **Settings → Developer settings → OAuth Apps → New OAuth App**
   - Homepage URL: `https://websinole.vercel.app`
   - Authorization callback URL: `https://websinole.vercel.app/api/callback`
   - Crea la app, copia el **Client ID** y genera un **Client Secret**.
2. Vercel → tu proyecto → **Settings → Environment Variables**: agrega
   `GITHUB_CLIENT_ID` y `GITHUB_CLIENT_SECRET` → luego **Deployments → Redeploy**.
3. En GitHub edita `public/admin/config.yml`: `repo: tu-usuario/web_sinole` (la `base_url` ya está configurada).

Listo: entra a `https://websinole.vercel.app/admin`, inicia sesión con GitHub y publica. Cada noticia guardada se publica sola en ~1 minuto.
Solo pueden entrar personas con permiso de escritura en el repositorio.

## Desarrollo local (opcional)

```bash
npm install
npm run dev          # http://localhost:4321
npx decap-server     # (en otra terminal) para usar /admin en local sin GitHub
```

## Estructura

```
src/site.ts                 datos y redes sociales (editar aquí)
src/content/noticias/*.md   noticias
src/pages/                  inicio, noticias, quiénes somos, contacto, admin, api (login CMS)
public/logos/               logos SINOLE y FEDUNPE
public/admin/config.yml     configuración del panel
```
