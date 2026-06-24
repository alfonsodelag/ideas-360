// Agrega mainImage con _sanityAsset al NDJSON de blog posts
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const base = resolve(".");

const imageMap = {
  "ideas360-post-como-elegir-promocionales": {
    file: `${base}/public/images/blog/blog-1.jpg`,
    alt: "Bolígrafo y libreta sobre mesa — cómo elegir artículos promocionales para una campaña",
  },
  "ideas360-post-regalos-corporativos": {
    file: `${base}/public/images/blog/blog-2.jpg`,
    alt: "Caja de regalo corporativo — regalos que sí usan tus clientes",
  },
  "ideas360-post-material-pop": {
    file: `${base}/public/images/blog/blog-3.jpg`,
    alt: "Stand en feria comercial — material POP para eventos y puntos de venta",
  },
};

const input = readFileSync("sanity-import/blog-posts.ndjson", "utf8");
const lines = input.trim().split("\n");

const output = lines.map((line) => {
  const doc = JSON.parse(line);
  const img = imageMap[doc._id];
  if (img) {
    // Convertir path de Windows a file:// URI
    const fileUri = "file:///" + img.file.replace(/\\/g, "/");
    doc.mainImage = {
      _type: "image",
      _sanityAsset: `image@${fileUri}`,
      alt: img.alt,
    };
  }
  return JSON.stringify(doc);
});

writeFileSync("sanity-import/blog-posts-with-images.ndjson", output.join("\n") + "\n");
console.log("Archivo generado: sanity-import/blog-posts-with-images.ndjson");
