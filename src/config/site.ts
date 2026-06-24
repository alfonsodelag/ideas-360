export const siteConfig = {
  businessName: "Ideas 360, S.A.",
  tagline: "Tu logo en todo",
  description:
    "Artículos promocionales, regalos corporativos, textiles y material POP personalizados para empresas, eventos e instituciones en Panamá.",
  url: "https://ideas360.com.pa",
  phone: "224-3140 / 221-3070",
  whatsapp: "",
  email: "ventas@ideas360.com.pa",
  address: "Avenida Santa Elena, Calle 96B Este, Parque Lefevre, Ciudad de Panamá",
  social: {
    instagram: "https://instagram.com/ideas360pty",
    facebook: "",
    tiktok: "",
    linkedin: ""
  },
  seo: {
    title: "Ideas 360 Panamá | Artículos Promocionales, Regalos Corporativos y Material POP",
    description:
      "Artículos promocionales, regalos corporativos, textiles y material POP personalizados en Panamá. Lleva tu logo a productos útiles, visibles y memorables con Ideas 360.",
    keywords: [
      "artículos promocionales Panamá",
      "promocionales personalizados Panamá",
      "regalos corporativos Panamá",
      "material POP Panamá",
      "uniformes personalizados Panamá",
      "bordados Panamá",
      "sublimación Panamá",
      "estampados Panamá",
      "productos promocionales para empresas",
      "merchandising corporativo Panamá",
      "Ideas 360 Panamá",
      "Tu logo en todo"
    ]
  },
  colors: {
    primary: "#ED1C24",
    secondary: "#5C5C5C",
    dark: "#232323",
    light: "#F5F5F5"
  }
} as const;

export const whatsappUrl = siteConfig.whatsapp
  ? `https://wa.me/${siteConfig.whatsapp}`
  : "#contacto";
