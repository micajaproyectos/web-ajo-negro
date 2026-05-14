export type Product = {
  slug: string;
  name: string;
  h1Main: string;
  h1Sub: string;
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
    h1Main: "Bolsa de Ajo Negro",
    h1Sub: "Artesanal 60g",
    metaTitle: "Ajo Negro Artesanal 60g desde Patagonia",
    metaDescription:
      "Bolsa de ajo negro artesanal 60g producido en Patagonia Chilena. Fermentación natural y despacho a todo Chile.",
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
    h1Main: "Bolsa de Ajo Negro",
    h1Sub: "Artesanal 100g",
    metaTitle: "Ajo Negro Artesanal 100g desde Patagonia",
    metaDescription:
      "Bolsa de ajo negro artesanal 100g producido en Patagonia Chilena. Fermentación natural y despacho a todo Chile.",
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
    h1Main: "Pedido Mayorista",
    h1Sub: "de Ajo Negro Artesanal",
    metaTitle: "Ajo Negro Mayorista para Restaurantes y Tiendas",
    metaDescription:
      "Venta mayorista de ajo negro artesanal para restaurantes y tiendas naturales. Desde 20 unidades.",
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
