import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? "jdls3x4j",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION ?? "2024-01-01",
  useCdn: true,
});

// ── Servicios ────────────────────────────────────────────────────────────────
export const servicesQuery = `*[_type == "service"] | order(order asc) {
  title,
  "slug": slug.current,
  category,
  description,
  longDescription,
  benefits,
  "image": image.asset->url,
  featured,
  bacEligible
}`;

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  category,
  description,
  longDescription,
  benefits,
  "image": image.asset->url,
  featured,
  bacEligible
}`;

// ── Blog posts ──────────────────────────────────────────────────────────────
export const blogPostsQuery = `*[_type == "post" && project == "ideas360"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  readTime,
  "mainImageUrl": mainImage.asset->url,
  "mainImageAlt": mainImage.alt
}`;

export const blogPostBySlugQuery = `*[_type == "post" && project == "ideas360" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  readTime,
  "mainImageUrl": mainImage.asset->url,
  "mainImageAlt": mainImage.alt,
  body
}`;

// ── Types ────────────────────────────────────────────────────────────────────
export type SanityPost = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  readTime?: string | number;
  mainImageUrl?: string;
  mainImageAlt?: string;
  body?: SanityBlock[];
};

export type SanityBlock = {
  _type: string;
  _key: string;
  style?: string;
  children?: { _type: string; _key: string; text: string; marks: string[] }[];
  markDefs?: { _key: string; _type: string; href?: string }[];
};
