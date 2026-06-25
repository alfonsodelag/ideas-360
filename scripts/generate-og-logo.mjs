/**
 * Genera og-logo.jpg (1200×630) con el logo de Ideas 360 centrado.
 * Requiere: npm install sharp --save-dev
 * Uso: node scripts/generate-og-logo.mjs
 */

import sharp from "sharp";
import { writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "../public/images/og-logo.jpg");

// SVG 1200×630 con el logo y branding de Ideas 360
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <!-- Fondo blanco -->
  <rect width="1200" height="630" fill="#ffffff"/>

  <!-- Panel gris derecho (refleja el hero del sitio) -->
  <rect x="600" y="0" width="600" height="630" fill="#f5f5f5"/>

  <!-- Círculos decorativos tenues arriba a la derecha (eco del logo) -->
  <circle cx="1110" cy="90" r="110" fill="#ED1C24" opacity="0.06"/>
  <circle cx="1175" cy="195" r="70"  fill="#ED1C24" opacity="0.05"/>
  <circle cx="1040" cy="190" r="50"  fill="#ED1C24" opacity="0.04"/>

  <!-- Círculos decorativos tenues abajo a la izquierda -->
  <circle cx="80"  cy="560" r="90" fill="#ED1C24" opacity="0.05"/>
  <circle cx="180" cy="610" r="55" fill="#ED1C24" opacity="0.04"/>

  <!-- Borde rojo superior -->
  <rect x="0" y="0" width="1200" height="7" fill="#ED1C24"/>

  <!-- ── Logo centrado ──────────────────────────────────── -->
  <!-- Original viewBox 590×160 → escala 1.6 → 944×256, centrado en (128, 155) -->
  <g transform="translate(128, 155) scale(1.6)">
    <!-- Cluster de círculos rojos -->
    <circle cx="62"  cy="110" r="42" fill="#ED1C24"/>
    <circle cx="68"  cy="38"  r="30" fill="#ED1C24"/>
    <circle cx="120" cy="28"  r="26" fill="#ED1C24"/>
    <circle cx="162" cy="52"  r="16" fill="#ED1C24"/>
    <circle cx="148" cy="110" r="14" fill="#ED1C24"/>
    <circle cx="112" cy="132" r="10" fill="#ED1C24"/>

    <!-- "ideas" en gris -->
    <text
      x="192" y="98"
      font-family="Arial, Helvetica, sans-serif"
      font-size="62"
      font-weight="400"
      fill="#5C5C5C"
      letter-spacing="-1"
    >ideas</text>

    <!-- "360°" en rojo negrita -->
    <text
      x="192" y="98"
      font-family="Arial, Helvetica, sans-serif"
      font-size="62"
      font-weight="700"
      fill="#ED1C24"
      letter-spacing="-1"
      dx="225"
    >360&#176;</text>
  </g>

  <!-- Línea separadora sutil -->
  <line x1="200" y1="450" x2="1000" y2="450" stroke="#eeeeee" stroke-width="1.5"/>

  <!-- Tagline principal -->
  <text
    x="600" y="500"
    font-family="Arial, Helvetica, sans-serif"
    font-size="32"
    font-weight="600"
    fill="#232323"
    text-anchor="middle"
    letter-spacing="0.5"
  >Tu logo en todo</text>

  <!-- Subtítulo -->
  <text
    x="600" y="545"
    font-family="Arial, Helvetica, sans-serif"
    font-size="16"
    font-weight="400"
    fill="#999999"
    text-anchor="middle"
    letter-spacing="2"
  >ARTÍCULOS PROMOCIONALES · REGALOS CORPORATIVOS · MATERIAL POP</text>

  <!-- URL en rojo -->
  <text
    x="600" y="594"
    font-family="Arial, Helvetica, sans-serif"
    font-size="15"
    font-weight="400"
    fill="#ED1C24"
    text-anchor="middle"
    letter-spacing="1"
  >ideas360.com.pa · Panamá</text>

  <!-- Borde rojo inferior -->
  <rect x="0" y="623" width="1200" height="7" fill="#ED1C24"/>
</svg>`;

// Guardar SVG temporal
const svgBuffer = Buffer.from(svg);

await sharp(svgBuffer)
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile(outPath);

console.log(`✓ OG image generada: ${outPath}`);
