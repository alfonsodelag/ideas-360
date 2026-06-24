// Script: sube imágenes del blog a Sanity y actualiza los documentos
// Ejecutar: npx sanity exec scripts/upload-blog-images.mjs --with-user-token

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve } from "path";

const client = createClient({
  projectId: "jdls3x4j",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
});

const posts = [
  {
    id: "ideas360-post-como-elegir-promocionales",
    imageFile: "public/images/blog/blog-1.jpg",
    alt: "Bolígrafo y libreta sobre mesa — cómo elegir artículos promocionales para una campaña",
  },
  {
    id: "ideas360-post-regalos-corporativos",
    imageFile: "public/images/blog/blog-2.jpg",
    alt: "Caja de regalo corporativo — regalos que sí usan tus clientes",
  },
  {
    id: "ideas360-post-material-pop",
    imageFile: "public/images/blog/blog-3.jpg",
    alt: "Stand en feria comercial — material POP para eventos y puntos de venta",
  },
];

async function run() {
  for (const post of posts) {
    console.log(`\nSubiendo imagen para: ${post.id}`);

    const imagePath = resolve(post.imageFile);
    const imageBuffer = readFileSync(imagePath);

    const asset = await client.assets.upload("image", imageBuffer, {
      filename: post.imageFile.split("/").pop(),
      contentType: "image/jpeg",
    });

    console.log(`  Asset subido: ${asset._id}`);

    await client
      .patch(post.id)
      .set({
        mainImage: {
          _type: "image",
          asset: { _type: "reference", _ref: asset._id },
          alt: post.alt,
        },
      })
      .commit();

    console.log(`  Post actualizado con imagen.`);
  }

  console.log("\n✓ Listo. Las 3 imágenes están en Sanity.");
}

run().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
