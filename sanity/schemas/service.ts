import { defineType, defineField } from "sanity";

export const serviceSchema = defineType({
  name: "service",
  title: "Producto",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "order",
      title: "Orden",
      type: "number",
      description: "Número para ordenar los productos (menor = primero)",
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Artículos Promocionales", value: "Artículos Promocionales" },
          { title: "Textiles y Uniformes", value: "Textiles y Uniformes" },
          { title: "Regalos Corporativos", value: "Regalos Corporativos" },
          { title: "Material POP", value: "Material POP" },
          { title: "Personalización de Marca", value: "Personalización de Marca" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Descripción corta",
      type: "text",
      rows: 3,
      description: "1-2 oraciones para la tarjeta del producto",
    }),
    defineField({
      name: "longDescription",
      title: "Descripción detallada",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "benefits",
      title: "Beneficios",
      type: "array",
      of: [{ type: "string" }],
      description: "Lista de beneficios o puntos clave (máx. 5)",
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "featured",
      title: "Destacado en homepage",
      type: "boolean",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Orden personalizado",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "image", subtitle: "category" },
  },
});
