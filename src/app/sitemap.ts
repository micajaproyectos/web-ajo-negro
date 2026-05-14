import { MetadataRoute } from "next";
import { productSlugs } from "@/lib/products";

const BASE_URL = "https://www.ajonegroaustral.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/productos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...productSlugs.map((slug) => ({
      url: `${BASE_URL}/productos/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${BASE_URL}/beneficios-ajo-negro`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ajo-negro-mayorista`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ajo-negro-para-restaurantes`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/ajo-negro-para-tiendas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/para-que-sirve-el-ajo-negro`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/como-consumir-ajo-negro`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ajo-negro-vs-ajo-normal`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Paso 7 — /blog
    // Paso 8 — /ajo-negro-puerto-montt
    // Paso 8 — /ajo-negro-osorno
    // Paso 8 — /ajo-negro-valdivia
    // Paso 8 — /ajo-negro-coyhaique
    // Paso 8 — /ajo-negro-punta-arenas
    // Paso 8 — /ajo-negro-temuco
    // Paso 8 — /ajo-negro-concepcion
    // Paso 8 — /ajo-negro-santiago
  ];
}
