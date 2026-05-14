import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products, productSlugs } from "@/lib/products";

const BASE_URL = "https://www.ajonegroaustral.cl";

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
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params;
  const product = products[slug];
  if (!product) notFound();

  const waMessage = encodeURIComponent(
    `Hola. Me interesa el producto: ${product.name}. ¿Podrían darme más información?`
  );
  const waUrl = `https://api.whatsapp.com/send/?phone=56974348843&text=${waMessage}&type=phone_number&app_absent=0`;

  const priceDisplay = product.pricePerKg
    ? `$${Number(product.price).toLocaleString("es-CL")}/kg`
    : `$${Number(product.price).toLocaleString("es-CL")}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${BASE_URL}/productos/${slug}`,
    name: product.name,
    description: product.description,
    image: `${BASE_URL}${product.image}`,
    brand: { "@type": "Brand", name: "Ajo Negro Austral" },
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
      { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Productos", item: `${BASE_URL}/productos` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${BASE_URL}/productos/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-charcoal text-white overflow-hidden pt-32 pb-24">
          <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "48px 48px" }} />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <nav className="text-[11px] tracking-[0.15em] uppercase text-white/30 mb-12 font-sans flex gap-2">
              <Link href="/" className="hover:text-white/60 transition-colors">Inicio</Link>
              <span>/</span>
              <Link href="/productos" className="hover:text-white/60 transition-colors">Productos</Link>
              <span>/</span>
              <span className="text-white/50">{product.name}</span>
            </nav>
            <div className="max-w-2xl">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">
                Ajo negro artesanal · Patagonia Chilena
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-8">
                {product.name.split(" ").slice(0, -1).join(" ")}
                <br />
                <span className="text-earth-light">{product.name.split(" ").slice(-1)}</span>.
              </h1>
              <div className="w-16 h-px bg-earth mb-8" />
              <p className="text-lg text-white/50 leading-relaxed font-sans">
                Fermentación natural sin aditivos. Producido en Futaleufú, Patagonia Chilena.
                Envío a todo Chile por Starken y Bluexpress.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
        </section>

        {/* Producto */}
        <section className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Imagen */}
              <div className="bg-charcoal/[0.03] border border-charcoal/[0.05]">
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-10"
                    priority
                  />
                </div>
              </div>

              {/* Detalle */}
              <div className="flex flex-col">
                <div className="h-px w-full bg-charcoal/[0.08] mb-10" />
                <p className="text-[10px] tracking-[0.25em] uppercase text-earth/80 mb-3 font-sans">
                  Producto
                </p>
                <h2 className="font-serif text-3xl lg:text-4xl mb-6">{product.name}</h2>
                <p className="text-charcoal/55 font-sans leading-relaxed mb-8">
                  {product.description}
                </p>

                {product.minQuantity && (
                  <div className="bg-warm-white border border-charcoal/[0.05] px-6 py-4 mb-8">
                    <p className="text-[11px] tracking-[0.15em] uppercase text-charcoal/40 font-sans">
                      Pedido mínimo: {product.minQuantity} unidades
                    </p>
                  </div>
                )}

                <div className="mb-10">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-charcoal/35 font-sans mb-2">
                    Precio
                  </p>
                  <p className="font-serif text-4xl text-charcoal">{priceDisplay}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-charcoal text-white font-sans text-sm tracking-widest uppercase hover:bg-earth transition-colors duration-300"
                  >
                    Consultar por WhatsApp
                  </a>
                  <Link
                    href="/productos"
                    className="inline-flex items-center justify-center px-8 py-3.5 border border-charcoal/20 text-charcoal/60 font-sans text-sm tracking-widest uppercase hover:border-charcoal/50 hover:text-charcoal transition-colors duration-300"
                  >
                    Ver todos
                  </Link>
                </div>

                <div className="mt-10 pt-10 border-t border-charcoal/[0.06]">
                  <p className="text-[11px] tracking-[0.15em] uppercase text-charcoal/30 font-sans">
                    Envío a todo Chile · Starken y Bluexpress · Origen Futaleufú, Región de Los Lagos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Otros productos */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Más opciones</p>
              <h2 className="font-serif text-3xl lg:text-4xl">Otros productos</h2>
              <div className="w-12 h-px bg-earth mx-auto mt-6" />
            </div>
            <div className="flex justify-center">
              <Link
                href="/productos"
                className="inline-flex items-center px-8 py-3.5 bg-charcoal text-white font-sans text-sm tracking-widest uppercase hover:bg-earth transition-colors duration-300"
              >
                Ver todos los productos
              </Link>
            </div>
          </div>
        </section>

        {/* CTA mayorista */}
        <section className="py-28 lg:py-36 bg-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">Restaurantes y tiendas</p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">¿Necesitas volumen?<br /><span className="text-earth-light">Tenemos mayorista</span>.</h2>
            <div className="w-12 h-px bg-earth mx-auto mb-8" />
            <p className="text-white/45 font-sans leading-relaxed max-w-md mx-auto mb-12">
              Mínimo 20 unidades a $27.500/kg. Bolsas de 60 g y 100 g. Despacho a todo Chile.
            </p>
            <Link
              href="/ajo-negro-mayorista"
              className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal font-sans text-sm tracking-widest uppercase hover:bg-earth-light transition-colors duration-300"
            >
              Ver condiciones mayorista
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
