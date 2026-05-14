import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BASE_URL = "https://www.ajonegroaustral.cl";
const WA_URL = `https://api.whatsapp.com/send/?phone=56974348843&text=${encodeURIComponent("Hola. Quiero cotizar un pedido mayorista de ajo negro Austral.")}&type=phone_number&app_absent=0`;

export const metadata: Metadata = {
  title: "Ajo Negro Mayorista Chile | Proveedor desde la Patagonia",
  description:
    "Proveedor mayorista de ajo negro artesanal para negocios en Chile. Mínimo 20 unidades, $27.500/kg. Bolsas de 60 g y 100 g. Despacho a todo Chile por Starken y Bluexpress.",
  alternates: { canonical: `${BASE_URL}/ajo-negro-mayorista` },
  openGraph: {
    title: "Ajo Negro Mayorista Chile | Proveedor desde la Patagonia",
    description:
      "Proveedor mayorista de ajo negro artesanal. Mínimo 20 unidades, $27.500/kg. Envío a todo Chile.",
    url: `${BASE_URL}/ajo-negro-mayorista`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es el precio mayorista del ajo negro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio es $1.800 CLP por bolsa de 60 g y $3.400 CLP por bolsa de 100 g. El precio de referencia por kilo es $27.500 CLP para pedidos mayoristas de 20 unidades o más.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el mínimo para pedidos mayoristas de ajo negro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El mínimo es de 20 unidades. Pueden ser bolsas de 60 g, de 100 g, o una combinación de ambas. No hay restricción entre formatos para completar el mínimo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hacen despacho a todo Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, despachamos a todo Chile por Starken y Bluexpress. El costo del flete va por cuenta del comprador y se coordina al momento del pedido según la región de destino.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué formatos de ajo negro están disponibles para mayoristas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contamos con bolsas de 60 g y bolsas de 100 g. Ambos formatos tienen el mismo precio por kilo ($27.500 CLP) y pueden combinarse en el pedido.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se hace el pago de un pedido mayorista?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coordinamos el pago directamente por WhatsApp. Aceptamos transferencia bancaria. Una vez confirmado el pago, despachamos el pedido.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ajo negro tiene fecha de vencimiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, el ajo negro tiene una vida útil de varios meses gracias al proceso de fermentación. Se recomienda conservar en lugar fresco y seco. Una vez abierta la bolsa, guardar en refrigeración.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Ajo Negro Mayorista", item: `${BASE_URL}/ajo-negro-mayorista` },
  ],
};

const VENTAJAS = [
  { num: "01", title: "Precio por kilo", body: "$27.500 CLP/kg. Sin intermediarios — directo desde nuestro taller de fermentación en Futaleufú, Patagonia." },
  { num: "02", title: "Mínimo accesible", body: "Solo 20 unidades para acceder al precio mayorista. Puedes combinar bolsas de 60 g y 100 g libremente." },
  { num: "03", title: "Despacho a todo Chile", body: "Enviamos por Starken y Bluexpress a cualquier región. Coordinas el flete directo al confirmar el pedido." },
  { num: "04", title: "Producto artesanal", body: "Fermentación natural sin aditivos ni conservantes. Origen certificable: Futaleufú, Región de Los Lagos." },
  { num: "05", title: "Dos formatos", body: "Bolsas de 60 g y 100 g. Ambas con el mismo precio por kilo, para que elijas según tu cliente." },
  { num: "06", title: "Pedidos recurrentes", body: "Nos adaptamos a ciclos de reposición. Cuéntanos tu frecuencia y volumen estimado para coordinar abastecimiento continuo." },
];

export default function MayoristaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
              <span className="text-white/50">Mayorista</span>
            </nav>
            <div className="max-w-2xl">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">
                Venta mayorista · Patagonia Chilena
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-8">
                Ajo Negro
                <br />
                <span className="text-earth-light">Mayorista</span>.
              </h1>
              <div className="w-16 h-px bg-earth mb-8" />
              <p className="text-lg text-white/50 leading-relaxed font-sans mb-12">
                Proveedor directo de ajo negro artesanal desde Futaleufú. Mínimo 20 unidades,
                $27.500/kg. Bolsas de 60 g y 100 g. Despacho a todo Chile por Starken y Bluexpress.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal font-sans text-sm tracking-widest uppercase hover:bg-earth-light transition-colors duration-300">
                  Cotizar ahora
                </a>
                <Link href="/productos"
                  className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white/70 font-sans text-sm tracking-widest uppercase hover:border-white/50 hover:text-white transition-colors duration-300">
                  Ver productos
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
        </section>

        {/* Precios */}
        <section className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Precios mayoristas</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Directo desde el origen</h2>
              <div className="w-12 h-px bg-earth mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {[
                { name: "Bolsa 60 g", unit: "$1.800", kg: "por unidad", min: "Mín. 20 unidades" },
                { name: "Bolsa 100 g", unit: "$3.400", kg: "por unidad", min: "Mín. 20 unidades", highlight: true },
                { name: "Combinado", unit: "$27.500", kg: "por kilo", min: "Mezcla libre de formatos" },
              ].map((p) => (
                <div key={p.name} className={`relative p-8 lg:p-10 border ${p.highlight ? "bg-charcoal text-white border-charcoal" : "bg-warm-white border-charcoal/[0.05]"}`}>
                  {p.highlight && <div className="absolute top-0 right-0 w-1 h-full bg-earth" />}
                  <h3 className="font-serif text-2xl mb-6">{p.name}</h3>
                  <p className={`font-serif text-4xl mb-1 ${p.highlight ? "text-earth-light" : "text-charcoal"}`}>{p.unit}</p>
                  <p className={`text-sm font-sans mb-6 ${p.highlight ? "text-white/40" : "text-charcoal/35"}`}>{p.kg}</p>
                  <div className={`w-8 h-px mb-6 ${p.highlight ? "bg-earth" : "bg-earth/40"}`} />
                  <p className={`text-[11px] tracking-[0.15em] uppercase font-sans ${p.highlight ? "text-white/50" : "text-charcoal/40"}`}>{p.min}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ventajas */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Por qué elegirnos</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Proveedor directo,<br />sin intermediarios</h2>
              <div className="w-12 h-px bg-earth mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {VENTAJAS.map((v) => (
                <div key={v.num} className="bg-cream border border-charcoal/[0.05] p-8 lg:p-10 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-earth/20" />
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth/80 mb-4 font-sans">{v.num}</p>
                  <h3 className="font-serif text-xl mb-3">{v.title}</h3>
                  <p className="text-charcoal/55 text-sm font-sans leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 lg:py-36">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Preguntas frecuentes</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Todo sobre el mayorista</h2>
              <div className="w-12 h-px bg-earth mx-auto" />
            </div>
            <div className="space-y-px">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="border-t border-charcoal/[0.06] py-8">
                  <h3 className="font-serif text-xl mb-3">{item.name}</h3>
                  <p className="text-charcoal/55 font-sans text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
              <div className="border-t border-charcoal/[0.06]" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 lg:py-36 bg-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">Cotiza hoy</p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">Cuéntanos tu<br /><span className="text-earth-light">volumen y región</span>.</h2>
            <div className="w-12 h-px bg-earth mx-auto mb-8" />
            <p className="text-white/45 font-sans leading-relaxed max-w-md mx-auto mb-12">
              Respondemos rápido. Indícanos cuántas unidades necesitas, qué formatos y tu ciudad, y te confirmamos el pedido.
            </p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal font-sans text-sm tracking-widest uppercase hover:bg-earth-light transition-colors duration-300">
              Cotizar por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
