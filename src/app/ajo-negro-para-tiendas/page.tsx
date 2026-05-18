import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BASE_URL = "https://ajonegroaustral.cl";
const WA_URL = `https://api.whatsapp.com/send/?phone=56974348843&text=${encodeURIComponent("Hola. Tengo una tienda de productos naturales y quiero cotizar ajo negro Austral.")}&type=phone_number&app_absent=0`;

export const metadata: Metadata = {
  title: "Ajo Negro para Tiendas Naturales en Chile",
  description:
    "Ajo negro artesanal para tiendas naturales y gourmet en Chile. Venta mayorista desde 20 unidades.",
  alternates: { canonical: `${BASE_URL}/ajo-negro-para-tiendas` },
  openGraph: {
    title: "Ajo Negro para Tiendas Naturales en Chile",
    description:
      "Distribuidor de ajo negro artesanal para tiendas naturales y gourmet. Origen Patagonia Chilena. Mayorista desde 20 unidades.",
    url: `${BASE_URL}/ajo-negro-para-tiendas`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué hace al ajo negro atractivo para una tienda de productos naturales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro es un superalimento con doble concentración de antioxidantes respecto al ajo blanco, fermentado de forma natural sin aditivos ni conservantes. Su origen en la Patagonia Chilena, su proceso artesanal y sus propiedades lo hacen muy atractivo para clientes de tiendas naturales, dietéticas y gourmet.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el precio y el mínimo para tiendas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio por unidad es $1.800 CLP (bolsa 60 g) y $3.400 CLP (bolsa 100 g), con un mínimo de 20 unidades. El precio de referencia por kilo es $27.500 CLP.",
      },
    },
    {
      "@type": "Question",
      name: "¿El producto tiene etiqueta y código de barras?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nuestras bolsas cuentan con etiqueta con información del producto, origen e ingredientes. Para consultas sobre requerimientos específicos de etiquetado para tiendas, contáctanos directamente por WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto dura el ajo negro en tienda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro tiene una vida útil de varios meses en lugar fresco y seco, sin necesidad de refrigeración hasta abrir el envase. Ideal para exhibición en tienda sin cadena de frío.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hacen despacho a tiendas fuera de la Región Metropolitana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, despachamos a todo Chile por Starken y Bluexpress. El costo del flete va por cuenta del comprador y se coordina según la región al confirmar el pedido.",
      },
    },
    {
      "@type": "Question",
      name: "¿Pueden abastecer de forma periódica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Trabajamos con tiendas en ciclos de reposición. Cuéntanos tu frecuencia de compra y volumen estimado para coordinar un abastecimiento continuo sin quiebres de stock.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Ajo Negro para Tiendas", item: `${BASE_URL}/ajo-negro-para-tiendas` },
  ],
};

const ARGUMENTOS = [
  { num: "01", title: "Producto diferenciador", body: "El ajo negro sigue siendo un producto escaso en el mercado chileno. Incorporarlo en tu tienda te posiciona como referente en productos naturales de autor." },
  { num: "02", title: "Origen con relato", body: "Producido artesanalmente en Futaleufú, Patagonia Chilena. El origen geográfico es parte del valor del producto para tus clientes." },
  { num: "03", title: "Sin aditivos ni conservantes", body: "Fermentación 100% natural. Sin conservantes, sin colorantes, sin atajos. Un argumento de venta honesto para clientes exigentes." },
  { num: "04", title: "Fácil de exhibir", body: "No requiere cadena de frío hasta abrir el envase. Vida útil de varios meses en lugar fresco y seco. Ideal para góndola o vitrina." },
  { num: "05", title: "Precio retail atractivo", body: "Con precio mayorista a $27.500/kg, el margen de reventa en bolsas individuales es amplio para el canal retail." },
  { num: "06", title: "Reposición flexible", body: "Mínimo de solo 20 unidades. Puedes comenzar con un pedido pequeño para testear la rotación antes de escalar." },
];

export default function TiendasPage() {
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
              <span className="text-white/50">Para tiendas</span>
            </nav>
            <div className="max-w-2xl">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">
                Tiendas naturales · Distribución
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-8">
                Ajo Negro Mayorista
                <br />
                <span className="text-earth-light">para Tiendas Naturales</span>.
              </h1>
              <div className="w-16 h-px bg-earth mb-8" />
              <p className="text-lg text-white/50 leading-relaxed font-sans mb-12">
                Distribuidor directo de ajo negro artesanal desde la Patagonia Chilena.
                Un superalimento natural sin aditivos, con historia de origen y margen
                atractivo para tu tienda.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal font-sans text-sm tracking-widest uppercase hover:bg-earth-light transition-colors duration-300">
                  Cotizar para mi tienda
                </a>
                <Link href="/ajo-negro-mayorista"
                  className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white/70 font-sans text-sm tracking-widest uppercase hover:border-white/50 hover:text-white transition-colors duration-300">
                  Ver precios
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
        </section>

        {/* Argumentos */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Por qué incorporarlo</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Un producto que<br />se vende solo</h2>
              <div className="w-12 h-px bg-earth mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {ARGUMENTOS.map((a) => (
                <div key={a.num} className="bg-cream border border-charcoal/[0.05] p-8 lg:p-10 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-earth/20" />
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth/80 mb-4 font-sans">{a.num}</p>
                  <h3 className="font-serif text-xl mb-3">{a.title}</h3>
                  <p className="text-charcoal/55 text-sm font-sans leading-relaxed">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Precios retail sugeridos */}
        <section className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Precio y margen</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Atractivo para<br />el canal retail</h2>
              <div className="w-12 h-px bg-earth mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto">
              {[
                { name: "Bolsa 60 g", mayorista: "$1.800", retail: "$1.800 por unidad", highlight: false },
                { name: "Bolsa 100 g", mayorista: "$3.400", retail: "$3.400 por unidad", highlight: true },
              ].map((p) => (
                <div key={p.name} className={`relative p-8 lg:p-10 border ${p.highlight ? "bg-charcoal text-white border-charcoal" : "bg-warm-white border-charcoal/[0.05]"}`}>
                  {p.highlight && <div className="absolute top-0 right-0 w-1 h-full bg-earth" />}
                  <h3 className="font-serif text-2xl mb-6">{p.name}</h3>
                  <p className={`text-[10px] tracking-[0.2em] uppercase font-sans mb-1 ${p.highlight ? "text-white/40" : "text-charcoal/35"}`}>Precio mayorista</p>
                  <p className={`font-serif text-3xl mb-4 ${p.highlight ? "text-earth-light" : "text-charcoal"}`}>{p.mayorista}</p>
                  <div className={`w-8 h-px mb-4 ${p.highlight ? "bg-earth" : "bg-earth/40"}`} />
                  <p className={`text-[10px] tracking-[0.2em] uppercase font-sans mb-1 ${p.highlight ? "text-white/40" : "text-charcoal/35"}`}>Precio retail</p>
                  <p className={`font-sans text-sm ${p.highlight ? "text-white/70" : "text-charcoal/55"}`}>{p.retail}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-charcoal/35 text-xs font-sans mt-8">Precio desde 20 unidades · $27.500/kg de referencia</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Preguntas frecuentes</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Lo que preguntan las tiendas</h2>
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

        {/* Guías de contenido */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-[10px] tracking-[0.25em] uppercase text-charcoal/30 font-sans mb-6">Más sobre el producto</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Beneficios y propiedades del ajo negro", href: "/beneficios-ajo-negro" },
                { label: "¿Para qué sirve el ajo negro?", href: "/para-que-sirve-el-ajo-negro" },
                { label: "¿Cómo consumir ajo negro?", href: "/como-consumir-ajo-negro" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="group flex items-center justify-between border border-charcoal/[0.07] p-6 bg-warm-white hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                  <p className="font-serif text-base group-hover:text-earth transition-colors duration-300">{item.label}</p>
                  <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 shrink-0 ml-4">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 lg:py-36 bg-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">Distribución directa</p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">Empieza con<br /><span className="text-earth-light">20 unidades</span>.</h2>
            <div className="w-12 h-px bg-earth mx-auto mb-8" />
            <p className="text-white/45 font-sans leading-relaxed max-w-md mx-auto mb-12">
              Cuéntanos el nombre de tu tienda, ubicación y qué formatos te interesan. Coordinamos tu primer pedido por WhatsApp.
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
