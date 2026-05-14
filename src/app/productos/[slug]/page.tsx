import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products, productSlugs } from "@/lib/products";

const BASE_URL = "https://www.ajonegroaustral.cl";
const WHATSAPP_NUMBER = "56974348843";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products[slug];
  if (!product) return {};

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `${BASE_URL}/productos/${slug}`,
    },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `${BASE_URL}/productos/${slug}`,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params;
  const product = products[slug];
  if (!product) notFound();

  const waMessage = encodeURIComponent(
    `Hola, me interesa el producto: ${product.name}. ¿Podrían darme más información?`
  );
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${BASE_URL}/productos/${slug}`,
    name: product.name,
    description: product.description,
    image: `${BASE_URL}${product.image}`,
    brand: {
      "@type": "Brand",
      name: "Ajo Negro Austral",
    },
    offers: {
      "@type": product.pricePerKg ? "AggregateOffer" : "Offer",
      price: product.price,
      priceCurrency: product.priceCurrency,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Ajo Negro Austral",
        "@id": `${BASE_URL}/#org`,
      },
      ...(product.pricePerKg && {
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: product.price,
          priceCurrency: product.priceCurrency,
          unitCode: "KGM",
        },
      }),
      ...(product.minQuantity && {
        eligibleQuantity: {
          "@type": "QuantitativeValue",
          minValue: product.minQuantity,
          unitText: "unidades",
        },
      }),
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
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${BASE_URL}/productos/${slug}`,
      },
    ],
  };

  const priceDisplay = product.pricePerKg
    ? `$${Number(product.price).toLocaleString("es-CL")} / kg`
    : `$${Number(product.price).toLocaleString("es-CL")} CLP`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-stone-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-stone-500 mb-8">
            <Link href="/" className="hover:text-stone-800">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/productos" className="hover:text-stone-800">Productos</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-800">{product.name}</span>
          </nav>

          <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col sm:flex-row gap-10">
            <div className="relative w-full sm:w-56 h-56 shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, 224px"
                priority
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-bold text-stone-900 mb-3">{product.name}</h1>
                <p className="text-stone-600 mb-6">{product.description}</p>
                {product.minQuantity && (
                  <p className="text-sm text-stone-500 mb-4">
                    Pedido mínimo: {product.minQuantity} unidades
                  </p>
                )}
              </div>
              <div>
                <p className="text-2xl font-bold text-stone-900 mb-6">{priceDisplay}</p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-stone-500 text-center">
            Envío a todo Chile por Starken y Bluexpress · Producido en Futaleufú, Patagonia
          </div>
        </div>
      </main>
    </>
  );
}
