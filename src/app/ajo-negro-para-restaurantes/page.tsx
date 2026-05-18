import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BASE_URL = "https://ajonegroaustral.cl";
const WA_URL = `https://api.whatsapp.com/send/?phone=56974348843&text=${encodeURIComponent("Hola. Soy de un restaurante y quiero cotizar ajo negro Austral al por mayor.")}&type=phone_number&app_absent=0`;

export const metadata: Metadata = {
  title: "Ajo Negro para Restaurantes en Chile",
  description:
    "Ajo negro artesanal para restaurantes y cocinas profesionales. Sabor umami único y despacho a todo Chile.",
  alternates: { canonical: `${BASE_URL}/ajo-negro-para-restaurantes` },
  openGraph: {
    title: "Ajo Negro para Restaurantes en Chile",
    description:
      "Proveedor de ajo negro artesanal para restaurantes. Origen Patagonia Chilena. Mayorista desde 20 unidades.",
    url: `${BASE_URL}/ajo-negro-para-restaurantes`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Para qué sirve el ajo negro en cocina profesional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro aporta profundidad de sabor umami sin el picor del ajo crudo. Es ideal para salsas oscuras, mantequillas compuestas, aderezos, risottos, carnes y mariscos. Su textura suave permite untarlo o incorporarlo sin necesidad de cocción adicional.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el precio mayorista para restaurantes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio es $27.500 CLP por kilo. El mínimo es de 20 unidades (bolsas de 60 g o 100 g, o combinación). Para restaurantes con volumen mayor podemos coordinar condiciones especiales.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ajo negro tiene olor fuerte en cocina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La fermentación elimina la alicina responsable del olor característico del ajo crudo. El ajo negro tiene un aroma suave y agradable, lo que facilita su uso en cocinas donde el control de olores es importante.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto dura el ajo negro y cómo se almacena?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro tiene una vida útil de varios meses en lugar fresco y seco. Una vez abierta la bolsa, se recomienda refrigerar. No requiere conservantes ni cadena de frío para su almacenamiento en bodega.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tienen despacho a restaurantes fuera de Santiago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, despachamos a todo Chile por Starken y Bluexpress. El costo del flete va por cuenta del comprador y se coordina al confirmar el pedido según la región.",
      },
    },
    {
      "@type": "Question",
      name: "¿Pueden abastecer de forma periódica a un restaurante?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Nos adaptamos a ciclos de reposición según el consumo del restaurante. Cuéntanos la frecuencia estimada y el volumen por pedido para coordinar el abastecimiento.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Ajo Negro para Restaurantes", item: `${BASE_URL}/ajo-negro-para-restaurantes` },
  ],
};

const USOS = [
  { title: "Salsas y fondos", body: "Añade profundidad umami a salsas oscuras, demi-glace y fondos de carne sin dominar el perfil de sabor." },
  { title: "Mantequillas compuestas", body: "Ideal para mantequillas de maître d'hôtel, garlic butter y otros compuestos que acompañan carnes y panes." },
  { title: "Aderezos y vinagretas", body: "Su textura suave permite incorporarlo directamente en emulsiones sin necesidad de procesar." },
  { title: "Carnes y mariscos", body: "Laminado sobre un filete o un ceviche, aporta un toque gourmet visual y de sabor que distingue el plato." },
  { title: "Pastas y risottos", body: "Integrado en la base o como toque final, potencia la riqueza del plato con notas dulces y terrosas." },
  { title: "Untables y entradas", body: "Servido solo con pan artesanal o en tablas de quesos como entrada, genera experiencia de sabor única." },
];

export default function RestaurantesPage() {
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
              <span className="text-white/50">Para restaurantes</span>
            </nav>
            <div className="max-w-2xl">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">
                Ingrediente gourmet · Cocina profesional
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-8">
                Ajo Negro para Restaurantes
                <br />
                <span className="text-earth-light">y Cocina Gourmet</span>.
              </h1>
              <div className="w-16 h-px bg-earth mb-8" />
              <p className="text-lg text-white/50 leading-relaxed font-sans mb-12">
                Proveedor directo de ajo negro artesanal desde Futaleufú, Patagonia Chilena.
                Sabor umami único, sin olor fuerte. El ingrediente que distingue un plato.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal font-sans text-sm tracking-widest uppercase hover:bg-earth-light transition-colors duration-300">
                  Solicitar muestra
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

        {/* Usos */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Aplicaciones</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Usos en cocina<br />profesional</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-6" />
              <p className="text-charcoal/45 max-w-lg mx-auto font-sans leading-relaxed">
                Su sabor suave, dulce y umami lo integra sin conflicto en preparaciones de alta cocina o cocina de autor.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {USOS.map((u, i) => (
                <div key={u.title} className="bg-cream border border-charcoal/[0.05] p-8 lg:p-10 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-earth/20" />
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth/80 mb-4 font-sans">0{i + 1}</p>
                  <h3 className="font-serif text-xl mb-3">{u.title}</h3>
                  <p className="text-charcoal/55 text-sm font-sans leading-relaxed">{u.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por qué Austral */}
        <section className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="relative">
                <div className="aspect-[4/5] bg-charcoal overflow-hidden relative">
                  <div className="absolute inset-6 sm:inset-8 border border-white/10 flex flex-col items-center justify-center text-center p-8">
                    <p className="text-earth-light tracking-[0.3em] uppercase text-[10px] mb-6 font-sans">Origen</p>
                    <div className="w-16 h-px bg-earth/40 mb-6" />
                    <h3 className="font-serif text-white text-3xl lg:text-4xl leading-tight mb-2">Futaleufú</h3>
                    <h3 className="font-serif text-white/60 text-3xl lg:text-4xl leading-tight mb-6">Patagonia</h3>
                    <div className="w-16 h-px bg-earth/40 mb-6" />
                    <p className="text-white/25 text-[10px] tracking-[0.25em] uppercase font-sans">Artesanal · Natural · Único</p>
                  </div>
                  <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)", backgroundSize: "24px 24px" }} />
                </div>
                <div className="absolute -bottom-3 -right-3 w-2/3 h-20 bg-earth/10 -z-10" />
              </div>
              <div>
                <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Por qué Ajo Negro Austral</p>
                <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-[1.12]">
                  Un ingrediente con
                  <br /><span className="text-earth">historia que contar</span>.
                </h2>
                <div className="space-y-5 text-charcoal/55 font-sans leading-relaxed mb-10">
                  <p>Producimos ajo negro artesanalmente en Futaleufú, uno de los valles más remotos y prístinos de la Patagonia Chilena. El origen geográfico es parte del relato del plato.</p>
                  <p>Fermentación natural sin aditivos, sin conservantes, sin atajos. El resultado es un producto consistente en sabor y calidad, apto para exigir en carta y defender con orgullo.</p>
                </div>
                <div className="grid grid-cols-3 gap-6 border-t border-charcoal/[0.06] pt-8">
                  {[{ v: "Sin aditivos", l: "Fermentación natural" }, { v: "Umami", l: "Sabor profundo" }, { v: "Patagonia", l: "Origen único" }].map((f) => (
                    <div key={f.v}>
                      <div className="font-serif text-xl text-charcoal mb-1">{f.v}</div>
                      <div className="text-[10px] text-charcoal/35 tracking-[0.15em] uppercase font-sans">{f.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Preguntas frecuentes</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Lo que preguntan los chefs</h2>
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
            <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">Proveedor directo</p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">Solicita una<br /><span className="text-earth-light">muestra sin costo</span>.</h2>
            <div className="w-12 h-px bg-earth mx-auto mb-8" />
            <p className="text-white/45 font-sans leading-relaxed max-w-md mx-auto mb-12">
              Cuéntanos tu restaurante, ciudad y volumen estimado. Podemos coordinar una muestra para que pruebes el producto antes de tu primer pedido mayorista.
            </p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal font-sans text-sm tracking-widest uppercase hover:bg-earth-light transition-colors duration-300">
              Escribir por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
