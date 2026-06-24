export type ProductCategory =
  | "Artículos Promocionales"
  | "Textiles y Uniformes"
  | "Regalos Corporativos"
  | "Material POP"
  | "Personalización de Marca";

export type Service = {
  title: string;
  slug: string;
  category: ProductCategory;
  description: string;
  longDescription: string[];
  benefits: string[];
  image: string;
  featured?: boolean;
  bacEligible?: boolean;
};

export const services: Service[] = [
  // ── ARTÍCULOS PROMOCIONALES ──────────────────────────────────────────────────
  {
    title: "Bolígrafos y Libretas",
    slug: "boligrafos-y-libretas",
    category: "Artículos Promocionales",
    description:
      "Clásicos del mundo promocional: útiles, visibles y de alto impacto. Tu logo en el escritorio de cada cliente, colaborador o asistente a un evento.",
    longDescription: [
      "Los bolígrafos y libretas personalizadas son dos de los artículos promocionales con mayor retención de marca. Son productos que se usan a diario, que pasan de mano en mano y que mantienen tu logo presente en cada reunión, clase, oficina o evento.",
      "Disponibles en múltiples materiales, tamaños y estilos. Desde opciones económicas para campañas masivas hasta versiones premium para regalos corporativos. La personalización puede incluir serigrafía, grabado láser o impresión digital según el material.",
      "Son ideales para ferias, conferencias, kits de bienvenida, entregas de campaña o cualquier ocasión en que tu empresa necesite dejar una presencia tangible y útil."
    ],
    benefits: [
      "Alta visibilidad de marca en uso cotidiano",
      "Opciones para distintos presupuestos y volúmenes",
      "Disponibles en múltiples materiales y estilos",
      "Personalizables con logo, nombre o mensaje",
      "Ideales para eventos masivos y campañas"
    ],
    image: "/images/services/sd-1.jpg",
    featured: true
  },
  {
    title: "Botellas, Tazas y Termos",
    slug: "botellas-tazas-termos",
    category: "Artículos Promocionales",
    description:
      "Productos de uso diario con alta vida útil y máxima exposición de marca. Tu logo acompañando a clientes y colaboradores en cada momento.",
    longDescription: [
      "Las botellas, tazas y termos personalizados son artículos con excelente retorno de visibilidad. Son productos que el receptor usa diariamente, los lleva a la oficina, al gimnasio, a reuniones o eventos, y que mantienen tu marca activa mucho tiempo después de la entrega.",
      "Disponibles en plástico, acero inoxidable, aluminio, cerámica y materiales eco-friendly. Con opciones para distintas capacidades y contextos de uso: desde tazas para oficina hasta termos para exteriores o botellas deportivas.",
      "Son una de las opciones favoritas para regalos corporativos, kits de onboarding, activaciones de marca y campañas de fidelización, por su equilibrio entre costo, calidad percibida y vida útil."
    ],
    benefits: [
      "Alta retención: el usuario los conserva por meses o años",
      "Presencia de marca en contextos variados y cotidianos",
      "Amplia variedad de materiales y estilos",
      "Opción ecológica disponible (sin plástico de un solo uso)",
      "Personalizables mediante sublimación, serigrafía o grabado"
    ],
    image: "/images/services/sd-2.jpg",
    featured: true
  },
  {
    title: "Mochilas, Bolsas y Accesorios",
    slug: "mochilas-bolsas-accesorios",
    category: "Artículos Promocionales",
    description:
      "Tu logo en movimiento. Mochilas, bolsas, llaveros y accesorios que convierten a quien los usa en un punto de visibilidad ambulante para tu marca.",
    longDescription: [
      "Mochilas, bolsas reutilizables, maletines, llaveros y otros accesorios son artículos que generan visibilidad en movimiento. Cada vez que alguien usa una bolsa o mochila con tu logo, lo expone ante nuevas personas en calles, transporte, oficinas y eventos.",
      "Las bolsas reutilizables personalizadas son especialmente eficientes: responden al movimiento hacia la sostenibilidad, se usan con frecuencia y tienen una excelente relación entre costo e impacto de marca.",
      "Los llaveros, pins, pulseras y otros accesorios complementan estrategias de bajo presupuesto o activaciones masivas donde se busca alto volumen y máximo alcance."
    ],
    benefits: [
      "Visibilidad de marca en espacios públicos y laborales",
      "Bolsas reutilizables: sostenibilidad + frecuencia de uso",
      "Alta variedad de materiales y formatos",
      "Opciones para todos los presupuestos",
      "Excelente para eventos, ferias y campañas de alcance masivo"
    ],
    image: "/images/services/sd-3.jpg",
    featured: true
  },
  {
    title: "Artículos Tecnológicos",
    slug: "articulos-tecnologicos",
    category: "Artículos Promocionales",
    description:
      "Cargadores, cables, audífonos, memorias USB y más. Promocionales tecnológicos con alta percepción de valor y larga vida útil.",
    longDescription: [
      "Los artículos tecnológicos personalizados tienen una percepción de valor muy alta entre quienes los reciben. Cargadores portátiles, cables, adaptadores, audífonos, memorias USB y accesorios para dispositivos son productos que se usan con regularidad y que posicionan bien a la marca que los entrega.",
      "Son ideales para regalos corporativos diferenciados, kits premium, premios en campañas de incentivos o regalos a clientes y colaboradores destacados.",
      "Su precio puede ser mayor al de otros promocionales, pero el retorno en términos de recordación e imagen de marca suele justificar la inversión para audiencias clave."
    ],
    benefits: [
      "Alta percepción de valor para el receptor",
      "Vida útil prolongada = presencia de marca duradera",
      "Posicionan la marca como innovadora y considerada",
      "Perfectos para regalos corporativos diferenciados",
      "Variedad de opciones según presupuesto y audiencia"
    ],
    image: "/images/services/services-details.jpg"
  },

  // ── TEXTILES Y UNIFORMES ─────────────────────────────────────────────────────
  {
    title: "Camisas y Polos Corporativos",
    slug: "camisas-polos-corporativos",
    category: "Textiles y Uniformes",
    description:
      "Prendas corporativas personalizadas para proyectar identidad, orden y profesionalismo en tu equipo, eventos e instituciones.",
    longDescription: [
      "Las camisas y polos corporativos son una de las formas más efectivas de llevar la identidad visual de una empresa a espacios físicos. Uniformar al equipo comercial, a los colaboradores en un evento o a los participantes de una activación genera orden, reconocimiento y cohesión de marca.",
      "Disponibles en distintos cortes, telas y acabados. La personalización puede realizarse mediante bordado, serigrafía, sublimación o transfer, según el diseño, la cantidad y el presupuesto disponible.",
      "Son soluciones recurrentes para empresas que necesitan presencia visual en puntos de contacto con clientes: tiendas, stands, eventos, ferias, uniformes institucionales y campañas de comunicación interna."
    ],
    benefits: [
      "Proyectan identidad visual y profesionalismo",
      "Unifican al equipo en puntos de contacto con clientes",
      "Diversas opciones de personalización por tipo de tela",
      "Disponibles para pedidos de mediano y alto volumen",
      "Ideales para eventos, stands, ventas y uso institucional"
    ],
    image: "/images/services/sd-1.jpg",
    featured: true
  },
  {
    title: "Gorras y Prendas Promocionales",
    slug: "gorras-prendas-promocionales",
    category: "Textiles y Uniformes",
    description:
      "Gorras, chaquetas y prendas para activaciones, ferias y campañas. Tu marca en la cabeza de quienes más necesitas alcanzar.",
    longDescription: [
      "Las gorras personalizadas son uno de los artículos más populares en activaciones de marca, ferias, lanzamientos y campañas masivas. Tienen alta visibilidad, son usables en contextos variados y generan una conexión visual inmediata con la marca que las entrega.",
      "Además de gorras, las chaquetas, sacos corporativos, chalecos y otras prendas exteriores son excelentes para reforzar la identidad institucional en equipos de trabajo, eventos o campañas de comunicación.",
      "Ideas 360 puede orientarte sobre el estilo, material y técnica de personalización más adecuados según el uso previsto, el presupuesto y la cantidad requerida."
    ],
    benefits: [
      "Gorras: alta visibilidad y popularidad en activaciones",
      "Prendas exteriores para equipos y eventos corporativos",
      "Variedad de estilos, telas y técnicas de personalización",
      "Opción para volúmenes desde pequeños hasta masivos",
      "Refuerzan la identidad visual en espacios públicos"
    ],
    image: "/images/services/sd-2.jpg"
  },

  // ── REGALOS CORPORATIVOS ─────────────────────────────────────────────────────
  {
    title: "Kits de Bienvenida y Onboarding",
    slug: "kits-bienvenida-onboarding",
    category: "Regalos Corporativos",
    description:
      "Sets personalizados para recibir nuevos colaboradores, clientes o aliados con productos útiles que reflejan la identidad y los valores de tu empresa.",
    longDescription: [
      "Un kit de bienvenida bien diseñado genera una primera impresión poderosa. Combinando productos útiles con personalización de marca, comunica que la empresa se preocupa por los detalles y por las personas que se suman a su comunidad.",
      "Los kits pueden incluir libretas, bolígrafos, termos o botellas, camisas, gorras, accesorios tecnológicos y otros artículos seleccionados según el perfil del destinatario y el mensaje que la empresa quiere transmitir.",
      "Ideas 360 puede ayudarte a seleccionar y coordinar los productos que mejor se adapten a tu presupuesto, el tipo de recipient y el empaque o presentación que desees para el kit."
    ],
    benefits: [
      "Genera una primera impresión memorable y positiva",
      "Refuerza pertenencia e identidad corporativa",
      "Combina múltiples productos en una presentación unificada",
      "Personalizable según presupuesto y perfil del destinatario",
      "Ideal para onboarding de colaboradores o bienvenida de clientes"
    ],
    image: "/images/services/sd-3.jpg",
    featured: true
  },
  {
    title: "Sets Personalizados y Regalos Premium",
    slug: "sets-personalizados-premium",
    category: "Regalos Corporativos",
    description:
      "Opciones de mayor valor percibido para clientes clave, colaboradores destacados o celebraciones especiales de tu empresa.",
    longDescription: [
      "Algunos momentos requieren un regalo corporativo que vaya más allá del estándar. Para clientes estratégicos, eventos institucionales, aniversarios, reconocimientos o celebraciones especiales, los sets premium con productos de mayor calidad generan un impacto diferente.",
      "Pueden incluir artículos tecnológicos, set de escritorio, kits de bienestar, productos de cuero u otros materiales premium, todos personalizados con la identidad visual de la empresa.",
      "Ideas 360 puede orientarte en la selección de opciones según el presupuesto disponible y el tipo de relación o momento que deseas celebrar con este regalo."
    ],
    benefits: [
      "Alta percepción de valor y consideración para el receptor",
      "Refuerza relaciones con clientes y aliados clave",
      "Eleva la imagen de marca en momentos importantes",
      "Asesoría para seleccionar los productos más adecuados",
      "Opciones de empaque y presentación especial"
    ],
    image: "/images/services/services-details.jpg"
  },

  // ── MATERIAL POP ─────────────────────────────────────────────────────────────
  {
    title: "Banners, Roll Ups y Señalización",
    slug: "banners-roll-ups-senalizacion",
    category: "Material POP",
    description:
      "Material visual para destacar tu marca en ferias, eventos, puntos de venta y activaciones. Impacto inmediato y presencia visual de alto alcance.",
    longDescription: [
      "Los banners, roll ups y materiales de señalización son indispensables para cualquier empresa que necesite visibilidad en espacios físicos. Ferias comerciales, stands, puntos de venta, lobbies, eventos corporativos o lanzamientos de producto: el material visual bien diseñado marca una diferencia inmediata.",
      "Disponibles en distintos formatos, materiales y sistemas de montaje. Los roll ups son especialmente populares por su practicidad: se montan y desmontan fácilmente, son portátiles y reutilizables.",
      "Ideas 360 puede coordinar la producción de material POP que sea coherente con la identidad visual de tu empresa, en los formatos y cantidades que mejor se adapten a tu evento o campaña."
    ],
    benefits: [
      "Visibilidad inmediata y de alto impacto en espacios físicos",
      "Roll ups: portátiles, prácticos y reutilizables",
      "Variedad de formatos y materiales de impresión",
      "Coherencia visual con el branding de la empresa",
      "Esenciales para ferias, stands y puntos de venta"
    ],
    image: "/images/services/sd-1.jpg",
    featured: true
  },
  {
    title: "Displays y Material para Punto de Venta",
    slug: "displays-punto-de-venta",
    category: "Material POP",
    description:
      "Soportes visuales, displays y material de apoyo para destacar tu producto o marca en el punto de venta y espacios comerciales.",
    longDescription: [
      "El material POP para punto de venta tiene una función clara: capturar la atención del comprador en el momento de decisión. Displays de producto, exhibidores, dangler, cenefas, stoppers, totem y otros soportes visuales ayudan a que tu marca o producto destaque en el espacio físico donde se vende.",
      "Son especialmente relevantes para lanzamientos de producto, activaciones en tiendas, campañas de temporada y cualquier iniciativa donde la presencia en el punto de venta sea estratégica.",
      "Ideas 360 puede coordinar la producción de material POP adaptado al espacio, el formato y el objetivo de tu campaña, orientándote sobre los materiales y formatos más adecuados."
    ],
    benefits: [
      "Captura atención en el momento de decisión de compra",
      "Variedad de formatos según el tipo de espacio comercial",
      "Refuerza campaña y coherencia visual en el punto de venta",
      "Adaptable a distintos tipos de establecimiento",
      "Apoyo en la selección del formato más eficiente"
    ],
    image: "/images/services/sd-2.jpg"
  },

  // ── PERSONALIZACIÓN DE MARCA ─────────────────────────────────────────────────
  {
    title: "Bordado y Serigrafía",
    slug: "bordado-serigrafia",
    category: "Personalización de Marca",
    description:
      "Técnicas de personalización textil para aplicar tu logo en prendas, bolsas y textiles con resultados duraderos y de alta calidad.",
    longDescription: [
      "El bordado es la técnica más duradera para personalizar textiles. Tu logo se cose directamente sobre la prenda, lo que garantiza que el resultado resiste lavados y uso intensivo. Es ideal para uniformes corporativos, polos, gorras y artículos donde la durabilidad es prioritaria.",
      "La serigrafía es la técnica más común para personalización en grandes volúmenes. Permite aplicar diseños con colores planos y bien definidos sobre textiles, bolsas, camisas y otros materiales de manera eficiente y económica.",
      "La elección entre bordado y serigrafía depende del tipo de producto, el diseño, la cantidad y el presupuesto. Ideas 360 puede orientarte sobre cuál es la mejor opción para tu caso específico."
    ],
    benefits: [
      "Bordado: máxima durabilidad y acabado premium",
      "Serigrafía: eficiente para volúmenes medios y altos",
      "Ambas técnicas dan resultados profesionales y duraderos",
      "Asesoría para elegir la técnica según diseño y material",
      "Aplicables en camisas, gorras, bolsas y textiles en general"
    ],
    image: "/images/services/sd-3.jpg",
    featured: true
  },
  {
    title: "Sublimación, Estampado y Grabado",
    slug: "sublimacion-estampado-grabado",
    category: "Personalización de Marca",
    description:
      "Técnicas de personalización para productos rígidos, sintéticos y artículos de uso cotidiano. Tu logo impreso, estampado o grabado con precisión.",
    longDescription: [
      "La sublimación permite imprimir diseños de alta resolución y múltiples colores en poliéster y materiales sintéticos. Es ideal para gorras, camisas de deporte, bolsos y productos que requieren diseños fotográficos o con gradientes.",
      "El estampado por transfer es otra técnica versátil que permite aplicar diseños complejos sobre textiles de algodón con buenos resultados estéticos y producción eficiente.",
      "El grabado láser es la técnica elegida para artículos de metal, madera, cuero y vidrio. Produce un acabado permanente, preciso y de alta calidad, ideal para artículos premium, llaveros, artículos de escritorio y regalos corporativos de mayor valor."
    ],
    benefits: [
      "Sublimación: colores vivos y diseños de alta resolución",
      "Estampado por transfer: versátil y de buena calidad",
      "Grabado láser: acabado permanente y premium para artículos rígidos",
      "Técnica seleccionada según el producto y el diseño",
      "Resultados duraderos y de aspecto profesional"
    ],
    image: "/images/services/services-details.jpg"
  }
];

export const featuredServices = services.filter((s) => s.featured);

export const servicesByCategory = services.reduce(
  (acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  },
  {} as Record<ProductCategory, Service[]>
);

export const categories: ProductCategory[] = [
  "Artículos Promocionales",
  "Textiles y Uniformes",
  "Regalos Corporativos",
  "Material POP",
  "Personalización de Marca"
];

export type ServiceCategory = ProductCategory;
