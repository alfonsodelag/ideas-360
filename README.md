# Ideas 360

Website de **Ideas 360, S.A.** — empresa panameña dedicada a artículos promocionales, regalos corporativos, textiles personalizados, uniformes, material POP y soluciones de personalización de marca.

**Tagline:** Tu logo en todo

## Stack

- Astro
- Tailwind CSS
- TypeScript
- Contenido en archivos locales (`src/content/`)
- Web3Forms para formularios de cotización
- Vercel para deploy
- Sanity (opcional) para blog

## Instalar

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build y preview

```bash
npm run build
npm run preview
```

## Editar información del negocio

Actualiza `src/config/site.ts` para cambiar:

- Nombre comercial
- Teléfonos
- WhatsApp (pendiente de confirmar)
- Email
- Dirección
- Redes sociales
- SEO (title, description, keywords)

## Editar contenido

- **Productos:** `src/content/services.ts` — categorías y artículos
- **Preguntas frecuentes:** `src/content/faqs.ts`
- **Blog estático:** `src/content/blog.ts` (solo cuando no hay Sanity)

## Paleta de colores

```css
--primary: #ED1C24   /* Rojo marca — CTAs, acentos, eyebrows */
--secondary: #5C5C5C /* Gris secundario — texto de apoyo */
--dark: #232323      /* Oscuro — textos, fondos oscuros */
--light-gray: #F5F5F5
--soft-gray: #EEEEEE
```

Configurados en `tailwind.config.mjs` como variables semánticas:
- `rose` → `#ED1C24` (rojo principal)
- `ink` → `#232323` (oscuro)
- `cocoa` → `#5C5C5C` (gris secundario)
- `cream` → `#F5F5F5` (fondo claro)
- `shell` → `#EEEEEE` (fondo suave)

## Formulario de cotización (Web3Forms)

1. Crea una cuenta o formulario en Web3Forms.
2. Copia el access key.
3. Crea `.env` local:

```env
PUBLIC_WEB3FORMS_ACCESS_KEY=tu_access_key
```

En Vercel: agrega la variable en Project Settings > Environment Variables.

El formulario captura: nombre, empresa, correo, teléfono, producto de interés, cantidad aproximada, fecha requerida y mensaje.

## Deploy en Vercel

1. Sube el proyecto a GitHub.
2. Importa el repositorio en Vercel.
3. Framework preset: **Astro**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Configura `PUBLIC_WEB3FORMS_ACCESS_KEY`.
7. Conecta el dominio `ideas360.com.pa`.

## Información de contacto

```
Empresa: Ideas 360, S.A.
Teléfonos: 224-3140 / 221-3070
Correo: ventas@ideas360.com.pa
Dirección: Avenida Santa Elena, Calle 96B Este, Parque Lefevre, Ciudad de Panamá
Instagram: @ideas360pty
WhatsApp: [PENDIENTE]
```

## Pendientes

- [ ] Reemplazar imagen hero (`/images/hero-bg.jpg`) con imagen de productos promocionales
- [ ] Reemplazar imágenes de servicios (`/images/services/`) con fotos de productos reales
- [ ] Reemplazar imágenes de blog (`/images/blog/`) con imágenes relevantes
- [ ] Confirmar número de WhatsApp y actualizar `src/config/site.ts`
- [ ] Confirmar horario de atención si aplica
- [ ] Agregar mapa de ubicación en la sección Location
- [ ] Conectar Sanity si se desea gestionar el blog desde CMS
- [ ] Verificar key de Web3Forms en producción

## Sanity (blog)

El blog funciona con Sanity si está configurado. Si no hay conexión, muestra los artículos estáticos de `src/content/blog.ts`. No requiere Sanity para funcionar.

Categorías sugeridas para el blog en Sanity:
`promocionales`, `regalos-corporativos`, `material-pop`, `uniformes`, `branding`, `eventos`
