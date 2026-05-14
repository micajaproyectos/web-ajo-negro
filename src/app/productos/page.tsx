import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products, productSlugs } from "@/lib/products";

const BASE_URL = "https://www.ajonegroaustral.cl";

export const metadata: Metadata = {
  title: "Productos | Ajo Negro Artesanal Patagonia Chilena",
  description:
    "Bolsas de ajo negro artesanal de 60 g y 100 g, y pedidos mayoristas para restaurantes y tiendas naturales. Producido en Futaleufú, Patagonia Chilena. Envío a todo Chile.",
  alternates: {
    canonical: `${BASE_URL}/productos`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Productos",
      item: `${BASE_URL}/productos`,
    },
  ],
};

export default function ProductosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-stone-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-stone-500 mb-8">
            <Link href="/" className="hover:text-stone-800">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-800">Productos</span>
          </nav>

          <h1 className="text-3xl font-bold text-stone-900 mb-4">
            Ajo Negro Artesanal Patagonia Chilena
          </h1>
          <p className="text-stone-600 mb-12 max-w-2xl">
            Producido artesanalmente en Futaleufú, Patagonia. Fermentación natural
            sin aditivos. Disponible en bolsas individuales y pedidos mayoristas
            para restaurantes y tiendas de productos naturales.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {productSlugs.map((slug) => {
              const product = products[slug];
              return (
                <Link
                  key={slug}
                  href={`/productos/${slug}`}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
                >
                  <div className="relative h-48 mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <h2 className="font-semibold text-stone-900 mb-1">{product.name}</h2>
                  <p className="text-sm text-stone-500 flex-1">{product.description.slice(0, 80)}…</p>
                  <p className="mt-4 text-stone-800 font-bold">
                    {product.pricePerKg
                      ? `$${Number(product.price).toLocaleString("es-CL")} / kg`
                      : `$${Number(product.price).toLocaleString("es-CL")} CLP`}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
