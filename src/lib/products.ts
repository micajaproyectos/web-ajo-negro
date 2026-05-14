export type Product = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  price: string;
  priceCurrency: "CLP";
  image: string;
  weightGrams?: number;
  pricePerKg?: boolean;
  minQuantity?: number;
};

export const products: Record<string, Product> = {
  "bolsa-60g": {
    slug: "bolsa-60g",
    name: "Bolsa Ajo Negro 60 g",
    metaTitle: "Ajo Negro 60 g | Artesanal Patagonia Chilena",
    metaDescription:
      "Bolsa de 60 g de ajo negro artesanal de Futaleufú, Patagonia Chilena. Fermentación natural sin aditivos. $1.800 CLP. Envío a todo Chile por Starken y Bluexpress.",
    description:
      "Bolsa de ajo negro artesanal de 60 gramos producida en Futaleufú, Patagonia Chilena. Fermentación natural sin aditivos ni conservantes. Sabor suave, dulce y umami. Ideal para consumo personal, cocina gourmet o regalo.",
    price: "1800",
    priceCurrency: "CLP",
    image: "/productos/bolsa-60g.png",
    weightGrams: 60,
  },
  "bolsa-100g": {
    slug: "bolsa-100g",
    name: "Bolsa Ajo Negro 100 g",
    metaTitle: "Ajo Negro 100 g | Artesanal Patagonia Chilena",
    metaDescription:
      "Bolsa de 100 g de ajo negro artesanal de Futaleufú, Patagonia Chilena. Fermentación natural sin aditivos. $3.400 CLP. Envío a todo Chile por Starken y Bluexpress.",
    description:
      "Bolsa de ajo negro artesanal de 100 gramos producida en Futaleufú, Patagonia Chilena. Fermentación natural sin aditivos ni conservantes. La opción más completa para uso regular en cocina o para quienes ya conocen y disfrutan el ajo negro.",
    price: "3400",
    priceCurrency: "CLP",
    image: "/productos/bolsa-100g.png",
    weightGrams: 100,
  },
  "pedido-mayorista": {
    slug: "pedido-mayorista",
    name: "Pedido Mayorista Ajo Negro",
    metaTitle: "Ajo Negro Mayorista Chile | Proveedor para Restaurantes y Tiendas",
    metaDescription:
      "Proveedor mayorista de ajo negro artesanal para restaurantes y tiendas de productos naturales. Mínimo 20 unidades. Precio $27.500/kg. Despacho a todo Chile.",
    description:
      "Pedido mayorista de ajo negro artesanal para restaurantes, tiendas de productos naturales y revendedores. Mínimo 20 unidades (bolsas de 60 g, de 100 g, o combinación de ambas). Precio $27.500 por kilo. Despacho a todo Chile por Starken y Bluexpress.",
    price: "27500",
    priceCurrency: "CLP",
    image: "/productos/mayorista.png",
    pricePerKg: true,
    minQuantity: 20,
  },
};

export const productSlugs = Object.keys(products) as (keyof typeof products)[];
