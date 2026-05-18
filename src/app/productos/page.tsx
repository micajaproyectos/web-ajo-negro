import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products, productSlugs } from "@/lib/products";

const BASE_URL = "https://ajonegroaustral.cl";

export const metadata: Metadata = {
  title: "Productos de Ajo Negro Artesanal",
  description:
    "Compra ajo negro artesanal en formatos 60g, 100g y pedidos mayoristas. Producción local desde Futaleufú.",
  alternates: {
    canonical: `${BASE_URL}/productos`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Productos", item: `${BASE_URL}/productos` },
  ],
};

export default function ProductosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-charcoal text-white overflow-hidden pt-32 pb-24">
          <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "48px 48px" }} />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <nav className="text-[11px] tracking-[0.15em] uppercase text-white/30 mb-12 font-sans flex gap-2">
              <Link href="/" className="hover:text-white/60 transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-white/50">Productos</span>
            </nav>
            <div className="max-w-2xl">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">
                Ajo negro artesanal · Patagonia Chilena
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-8">
                Productos de
                <br />
                <span className="text-earth-light">Ajo Negro Artesanal</span>.
              </h1>
              <div className="w-16 h-px bg-earth mb-8" />
              <p className="text-lg text-white/50 leading-relaxed font-sans">
                Ajo negro producido artesanalmente en Futaleufú, Patagonia. Fermentación
                natural sin aditivos. Bolsas individuales y pedidos mayoristas para
                restaurantes y tiendas de productos naturales.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
        </section>

        {/* Productos */}
        <section className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {productSlugs.map((slug, i) => {
                const product = products[slug];
                const highlight = i === 1;
                return (
                  <Link
                    key={slug}
                    href={`/productos/${slug}`}
                    className={`group relative flex flex-col transition-all duration-500 ${
                      highlight
                        ? "bg-charcoal text-white shadow-2xl shadow-charcoal/20 md:-translate-y-4"
                        : "bg-warm-white border border-charcoal/[0.05] hover:shadow-lg hover:shadow-charcoal/[0.04]"
                    }`}
                  >
                    <div className={`h-px w-full ${highlight ? "bg-earth" : "bg-charcoal/[0.08]"}`} />
                    <div className={`mx-6 mt-6 overflow-hidden ${highlight ? "bg-white/[0.04]" : "bg-charcoal/[0.03]"}`}>
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={product.image}
                          alt={product.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-contain p-5"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-8 lg:p-10">
                      <h2 className="font-serif text-2xl lg:text-3xl mb-2">{product.name}</h2>
                      <p className={`text-sm font-sans flex-1 mb-8 ${highlight ? "text-white/70" : "text-charcoal/45"}`}>
                        {product.description.slice(0, 90)}…
                      </p>
                      <div className="flex items-center justify-between">
                        <p className={`font-serif text-2xl ${highlight ? "text-earth-light" : "text-charcoal"}`}>
                          {product.pricePerKg
                            ? `$${Number(product.price).toLocaleString("es-CL")}/kg`
                            : `$${Number(product.price).toLocaleString("es-CL")}`}
                        </p>
                        <span className={`text-[11px] tracking-widest uppercase font-sans transition-colors duration-300 ${
                          highlight ? "text-earth-light group-hover:text-white" : "text-charcoal/40 group-hover:text-charcoal"
                        }`}>
                          Ver →
                        </span>
                      </div>
                    </div>
                    {highlight && <div className="absolute top-0 right-0 w-1 h-full bg-earth" />}
                  </Link>
                );
              })}
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
