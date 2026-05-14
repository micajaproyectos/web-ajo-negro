import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BASE_URL = "https://www.ajonegroaustral.cl";
const WHATSAPP_MESSAGE =
  "Hola. Me gustaría consultar sobre el ajo negro Austral.";
const WA_URL = `https://api.whatsapp.com/send/?phone=56974348843&text=${encodeURIComponent(WHATSAPP_MESSAGE)}&type=phone_number&app_absent=0`;

export const metadata: Metadata = {
  title: "Beneficios del Ajo Negro | Propiedades y Usos",
  description:
    "Descubre los beneficios y propiedades del ajo negro: antioxidantes, sistema inmune, salud cardiovascular y más. Ajo negro artesanal de la Patagonia Chilena.",
  alternates: {
    canonical: `${BASE_URL}/beneficios-ajo-negro`,
  },
  openGraph: {
    title: "Beneficios del Ajo Negro | Propiedades y Usos",
    description:
      "Descubre los beneficios y propiedades del ajo negro: antioxidantes, sistema inmune, salud cardiovascular y más.",
    url: `${BASE_URL}/beneficios-ajo-negro`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es el ajo negro y cómo se produce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro es ajo blanco sometido a un proceso de fermentación a temperatura y humedad controladas durante varias semanas. Este proceso, sin aditivos ni colorantes, transforma los dientes en color negro, con textura suave y un sabor dulce con notas de umami.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son los principales beneficios del ajo negro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro es rico en S-alilcisteína (SAC), un potente antioxidante. Sus principales beneficios incluyen: apoyo al sistema inmune, efecto antiinflamatorio, mejora de la salud cardiovascular (reduce el colesterol LDL y la presión arterial), efecto prebiótico para la salud digestiva, y mayor tolerancia digestiva que el ajo crudo.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ajo negro tiene el mismo olor que el ajo blanco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El proceso de fermentación transforma la alicina (responsable del olor picante del ajo crudo) en compuestos más estables como la S-alilcisteína. El resultado es un ajo sin olor fuerte ni aliento posterior, lo que lo hace mucho más cómodo de consumir a diario.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto ajo negro se recomienda consumir por día?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El consumo habitual recomendado es de 1 a 3 dientes de ajo negro al día, ya sea solo, untado en pan, incorporado en ensaladas o como condimento en preparaciones calientes. Al ser fermentado, su digestión es más suave que el ajo crudo.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ajo negro sirve para reducir el colesterol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varios estudios sugieren que el consumo regular de ajo negro puede contribuir a reducir el colesterol LDL (malo) y los triglicéridos, y a mejorar el perfil lipídico general, gracias a su alta concentración de antioxidantes y compuestos organosulfurados como la S-alilcisteína.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué se diferencia nutricionalmente el ajo negro del ajo blanco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La fermentación concentra y transforma los compuestos bioactivos del ajo. El ajo negro tiene el doble de antioxidantes que el ajo blanco, más S-alilcisteína (SAC) biodisponible, y menor contenido de fructanos que pueden causar molestias digestivas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se usa el ajo negro en la cocina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro es muy versátil: se puede comer directamente, untar en pan como paté, incorporar en aderezos, mayonesas, mantequillas compuestas, salsas de pasta, risottos, carnes y mariscos. Su sabor suave y umami potencia los platos sin opacar otros ingredientes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde se puede comprar ajo negro artesanal en Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ajo Negro Austral produce y distribuye ajo negro artesanal desde Futaleufú, Patagonia Chilena, a todo el país. Disponible en bolsas de 60 g y 100 g para consumo personal, y en pedidos mayoristas para restaurantes y tiendas de productos naturales. Despacho por Starken y Bluexpress.",
      },
    },
  ],
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
      name: "Beneficios del Ajo Negro",
      item: `${BASE_URL}/beneficios-ajo-negro`,
    },
  ],
};

const BENEFITS = [
  {
    title: "Alto en antioxidantes",
    body: "Contiene hasta el doble de antioxidantes que el ajo blanco, principalmente S-alilcisteína (SAC), que protege las células del daño oxidativo.",
  },
  {
    title: "Apoya el sistema inmune",
    body: "Sus compuestos bioactivos estimulan la actividad inmunitaria, contribuyendo a una mayor resistencia frente a infecciones y procesos inflamatorios.",
  },
  {
    title: "Salud cardiovascular",
    body: "El consumo regular se asocia con la reducción del colesterol LDL, los triglicéridos y un leve efecto vasodilatador que favorece la salud del corazón.",
  },
  {
    title: "Sin olor ni picor",
    body: "La fermentación elimina la alicina responsable del olor intenso. El resultado es sabor suave y umami, sin aliento posterior: cómodo de consumir a diario.",
  },
  {
    title: "Mejor tolerancia digestiva",
    body: "Al fermentar se reducen los fructanos que causan molestias gastrointestinales. Tiene efecto prebiótico y es bien tolerado por quienes son sensibles al ajo crudo.",
  },
  {
    title: "Antiinflamatorio natural",
    body: "Los polifenoles y compuestos sulfurados tienen propiedades antiinflamatorias documentadas, relevantes para el manejo de condiciones inflamatorias crónicas.",
  },
];

const USES = [
  "Directamente como aperitivo o con pan tostado",
  "Untado como paté sobre crackers o crostini",
  "Incorporado en aderezos, mayonesas y mantequillas compuestas",
  "Como condimento en risottos, pastas y carnes",
  "En salsas oscuras donde potencie el umami sin opacar otros sabores",
  "Laminado sobre mariscos o carpaccios como toque final",
];

export default function BeneficiosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      <main>
        {/* ── Hero ── */}
        <section className="relative bg-charcoal text-white overflow-hidden pt-32 pb-24">
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <nav className="text-[11px] tracking-[0.15em] uppercase text-white/30 mb-12 font-sans flex gap-2">
              <Link href="/" className="hover:text-white/60 transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-white/50">Beneficios del ajo negro</span>
            </nav>

            <div className="max-w-2xl">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">
                Guía completa · Ajo negro Austral
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-8">
                Beneficios del
                <br />
                <span className="text-earth-light">Ajo Negro</span>.
              </h1>
              <div className="w-16 h-px bg-earth mb-8" />
              <p className="text-lg text-white/50 leading-relaxed font-sans mb-12">
                El ajo negro es el resultado de fermentar ajo blanco durante semanas a temperatura
                y humedad controladas. Un proceso natural que concentra antioxidantes, elimina el
                olor fuerte y transforma su sabor en algo completamente distinto.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/productos"
                  className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal font-sans text-sm tracking-widest uppercase hover:bg-earth-light transition-colors duration-300"
                >
                  Ver productos
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white/70 font-sans text-sm tracking-widest uppercase hover:border-white/50 hover:text-white transition-colors duration-300"
                >
                  Consultar
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
        </section>

        {/* ── Beneficios ── */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">
                Propiedades
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">
                ¿Qué hace especial<br />al ajo negro?
              </h2>
              <div className="w-12 h-px bg-earth mx-auto mb-6" />
              <p className="text-charcoal/45 max-w-lg mx-auto font-sans leading-relaxed">
                La fermentación no solo cambia el color y el sabor: transforma profundamente
                su composición nutricional y sus propiedades.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {BENEFITS.map((b, i) => (
                <article
                  key={b.title}
                  className="bg-cream border border-charcoal/[0.05] p-8 lg:p-10 relative hover:shadow-lg hover:shadow-charcoal/[0.04] transition-shadow duration-500"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-earth/20" />
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth/80 mb-4 font-sans">
                    0{i + 1}
                  </p>
                  <h3 className="font-serif text-xl mb-3">{b.title}</h3>
                  <p className="text-charcoal/55 text-sm font-sans leading-relaxed">{b.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Usos en cocina ── */}
        <section className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Visual */}
              <div className="relative">
                <div className="aspect-[4/5] bg-charcoal overflow-hidden relative">
                  <div className="absolute inset-6 sm:inset-8 border border-white/10 flex flex-col items-center justify-center text-center p-8">
                    <p className="text-earth-light tracking-[0.3em] uppercase text-[10px] mb-6 font-sans">
                      Gastronomía
                    </p>
                    <div className="w-16 h-px bg-earth/40 mb-6" />
                    <h3 className="font-serif text-white text-3xl lg:text-4xl leading-tight mb-2">
                      Sabor
                    </h3>
                    <h3 className="font-serif text-white/60 text-3xl lg:text-4xl leading-tight mb-6">
                      Umami
                    </h3>
                    <div className="w-16 h-px bg-earth/40 mb-6" />
                    <p className="text-white/25 text-[10px] tracking-[0.25em] uppercase font-sans">
                      Dulce · Profundo · Versátil
                    </p>
                  </div>
                  <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-2/3 h-20 bg-earth/10 -z-10" />
              </div>

              {/* Copy */}
              <div>
                <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">
                  En la cocina
                </p>
                <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-[1.12]">
                  Extraordinariamente
                  <br />
                  <span className="text-earth">versátil</span>.
                </h2>
                <p className="text-charcoal/55 font-sans leading-relaxed mb-10">
                  Su sabor suave, dulce y con notas de umami lo hace ideal tanto para uso
                  cotidiano como para preparaciones de alta gastronomía. Se integra sin
                  opacar y potencia sin imponerse.
                </p>
                <ul className="space-y-4">
                  {USES.map((use) => (
                    <li key={use} className="flex items-start gap-4 font-sans text-sm text-charcoal/65">
                      <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-earth shrink-0" />
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">
                Preguntas frecuentes
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Lo que más nos preguntan</h2>
              <div className="w-12 h-px bg-earth mx-auto" />
            </div>
            <div className="space-y-px">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="border-t border-charcoal/[0.06] py-8">
                  <h3 className="font-serif text-xl mb-3">{item.name}</h3>
                  <p className="text-charcoal/55 font-sans text-sm leading-relaxed">
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
              <div className="border-t border-charcoal/[0.06]" />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-28 lg:py-36 bg-charcoal text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">
              Ajo Negro Austral · Patagonia Chilena
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">
              Pruébalo directo
              <br />
              <span className="text-earth-light">desde el origen</span>.
            </h2>
            <div className="w-12 h-px bg-earth mx-auto mb-8" />
            <p className="text-white/45 font-sans leading-relaxed max-w-md mx-auto mb-12">
              Producido artesanalmente en Futaleufú. Bolsas de 60 g y 100 g para consumo
              personal, y pedidos mayoristas para restaurantes y tiendas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/productos"
                className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal font-sans text-sm tracking-widest uppercase hover:bg-earth-light transition-colors duration-300"
              >
                Ver productos
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white/70 font-sans text-sm tracking-widest uppercase hover:border-white/50 hover:text-white transition-colors duration-300"
              >
                Cotizar mayorista
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
