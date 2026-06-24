import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BASE_URL = "https://www.ajonegroaustral.cl";
const WA_URL = `https://api.whatsapp.com/send/?phone=56974348843&text=${encodeURIComponent("Hola. Me gustaría saber más sobre el ajo negro Austral.")}&type=phone_number&app_absent=0`;

export const metadata: Metadata = {
  title: "Ajo Negro en Ayunas: Beneficios, Propiedades y Cómo Tomarlo",
  description:
    "Descubre las propiedades del ajo negro en ayunas: por qué se absorbe mejor, qué beneficios aporta, cuántos dientes tomar y cómo hacerlo paso a paso.",
  alternates: { canonical: `${BASE_URL}/ajo-negro-en-ayunas` },
  openGraph: {
    title: "Ajo Negro en Ayunas: Beneficios, Propiedades y Cómo Tomarlo",
    description:
      "Propiedades del ajo negro en ayunas: por qué se absorbe mejor, qué beneficios aporta, cuántos dientes tomar y cómo hacerlo.",
    url: `${BASE_URL}/ajo-negro-en-ayunas`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Para qué sirve el ajo negro en ayunas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tomar ajo negro en ayunas permite que sus compuestos bioactivos —especialmente la S-alilcisteína (SAC)— se absorban con mayor eficiencia, al no competir con otros alimentos en la digestión. En ayunas aprovecha mejor sus propiedades antioxidantes, cardiovasculares e inmunitarias, y ayuda a establecer un hábito constante a primera hora del día.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son las propiedades del ajo negro en ayunas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En ayunas, el ajo negro potencia su efecto antioxidante (protección celular), su apoyo al sistema inmune, la reducción del colesterol LDL y los triglicéridos, su efecto antiinflamatorio y su acción prebiótica sobre la microbiota intestinal. La mayor biodisponibilidad con el estómago vacío hace que estos efectos se aprovechen al máximo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántos dientes de ajo negro tomar en ayunas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lo habitual es 1 a 2 dientes de ajo negro en ayunas. Para mantenimiento basta con 1 diente diario; en periodos de mayor exigencia inmunitaria puede subirse a 2. No es necesario superar los 3 dientes: el efecto depende de la constancia, no de la cantidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo tomar ajo negro en ayunas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saca 1 o 2 dientes de la bolsa y cómelos directamente al despertar, acompañados de un vaso de agua. También puede tomarse sobre un poco de pan integral o con una cucharadita de miel. Idealmente, espera entre 15 y 30 minutos antes del desayuno para maximizar la absorción.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ajo negro en ayunas hace daño al estómago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A diferencia del ajo crudo, el ajo negro está fermentado: pierde la alicina responsable de la irritación y el picor, por lo que es suave con la mucosa gástrica y se tolera bien incluso con el estómago vacío. Las personas muy sensibles pueden acompañarlo con un poco de pan o tomarlo con el desayuno.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ajo negro en ayunas sirve para bajar de peso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tomado en ayunas, el ajo negro apoya el control de peso al mejorar la microbiota, regular la glucosa y reducir la inflamación. No es un quemador de grasa, pero como parte de una rutina matinal y una dieta equilibrada puede ayudar a controlar el apetito y los antojos durante el día.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Ajo negro en ayunas", item: `${BASE_URL}/ajo-negro-en-ayunas` },
  ],
};

const PROPIEDADES = [
  {
    num: "01",
    title: "Máxima absorción de SAC",
    body: "Con el estómago vacío, la S-alilcisteína y los demás compuestos bioactivos se absorben sin competir con otros alimentos. Es el momento de mayor biodisponibilidad del día.",
  },
  {
    num: "02",
    title: "Antioxidante celular",
    body: "Neutraliza los radicales libres que se acumulan durante la noche. Empezar el día con su carga antioxidante apoya la protección celular frente al estrés oxidativo.",
  },
  {
    num: "03",
    title: "Apoyo cardiovascular",
    body: "El consumo regular en ayunas se asocia con la reducción del colesterol LDL y los triglicéridos, y con un leve efecto vasodilatador que favorece la circulación.",
  },
  {
    num: "04",
    title: "Refuerzo inmune",
    body: "Sus compuestos estimulan la actividad de las células de defensa. Tomarlo a primera hora ayuda a sostener el hábito y mantener el apoyo inmunitario constante.",
  },
  {
    num: "05",
    title: "Efecto prebiótico",
    body: "Alimenta la microbiota intestinal antes del primer alimento del día, favoreciendo la salud digestiva y un metabolismo más equilibrado.",
  },
  {
    num: "06",
    title: "Hábito fácil de sostener",
    body: "Sin olor ni picor, el ajo negro en ayunas se vuelve un ritual matinal cómodo. Y la constancia es justamente lo que permite aprovechar sus beneficios acumulativos.",
  },
];

const PASOS = [
  {
    paso: "01",
    title: "Al despertar",
    body: "Toma 1 o 2 dientes de ajo negro directamente de la bolsa, antes de cualquier otro alimento.",
  },
  {
    paso: "02",
    title: "Acompaña con agua",
    body: "Cómelos con un vaso de agua. Si prefieres, sobre un poco de pan integral o con una cucharadita de miel.",
  },
  {
    paso: "03",
    title: "Espera al desayuno",
    body: "Idealmente deja pasar 15 a 30 minutos antes de desayunar para maximizar la absorción.",
  },
  {
    paso: "04",
    title: "Sé constante",
    body: "Repite cada mañana. Los efectos del ajo negro son acumulativos y se notan tras varias semanas de consumo regular.",
  },
];

export default function AyunasPage() {
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
              <span className="text-white/50">Ajo negro en ayunas</span>
            </nav>
            <div className="max-w-2xl">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">
                Rutina matinal · Salud · Bienestar
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-8">
                Ajo Negro
                <br />
                <span className="text-earth-light">en Ayunas</span>.
              </h1>
              <div className="w-16 h-px bg-earth mb-8" />
              <p className="text-lg text-white/50 leading-relaxed font-sans mb-12">
                Tomar ajo negro en ayunas es la forma de aprovechar al máximo sus propiedades: con el
                estómago vacío, sus antioxidantes y compuestos bioactivos se absorben mejor. Sin olor,
                sin picor y fácil de convertir en hábito diario.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/productos" className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal font-sans text-sm tracking-widest uppercase hover:bg-earth-light transition-colors duration-300">
                  Ver productos
                </Link>
                <Link href="/como-consumir-ajo-negro" className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white/70 font-sans text-sm tracking-widest uppercase hover:border-white/50 hover:text-white transition-colors duration-300">
                  Cómo consumirlo
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
        </section>

        {/* Respuesta directa — snippet bait */}
        <section className="py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="border-l-4 border-earth pl-8">
              <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-4">Respuesta directa</p>
              <p className="font-serif text-2xl lg:text-3xl text-charcoal leading-relaxed mb-6">
                El ajo negro en ayunas sirve para aprovechar al máximo sus propiedades: con el estómago vacío, la S-alilcisteína y demás compuestos se absorben mejor, potenciando su efecto antioxidante, cardiovascular e inmunitario.
              </p>
              <p className="text-charcoal/55 font-sans leading-relaxed">
                Se recomienda tomar <strong className="text-charcoal font-medium">1 a 2 dientes al despertar</strong>, con un vaso de agua y esperando unos minutos antes del desayuno. Al ser fermentado, el ajo negro no irrita el estómago como el ajo crudo, por lo que se tolera bien incluso en ayunas.
              </p>
            </div>
          </div>
        </section>

        {/* Propiedades en ayunas */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Propiedades</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Propiedades del Ajo Negro en Ayunas</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-6" />
              <p className="text-charcoal/45 max-w-xl mx-auto font-sans leading-relaxed">
                No cambian las propiedades del ajo negro, sino el grado en que el cuerpo las aprovecha. Con el estómago vacío, la absorción es mayor y el efecto más eficiente.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {PROPIEDADES.map((p) => (
                <article key={p.num} className="bg-cream border border-charcoal/[0.05] p-8 lg:p-10 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-earth/20" />
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth/80 mb-4 font-sans">{p.num}</p>
                  <h3 className="font-serif text-xl mb-3">{p.title}</h3>
                  <p className="text-charcoal/55 text-sm font-sans leading-relaxed">{p.body}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/beneficios-ajo-negro" className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase font-sans text-earth hover:text-charcoal transition-colors">
                Ver todos los beneficios y propiedades del ajo negro →
              </Link>
            </div>
          </div>
        </section>

        {/* Cómo tomarlo paso a paso */}
        <section className="py-28 lg:py-36 bg-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Paso a paso</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Cómo Tomar Ajo Negro en Ayunas</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-8" />
              <p className="text-white/45 font-sans leading-relaxed max-w-xl mx-auto">
                Un ritual matinal simple de cuatro pasos. Sin preparación complicada: los dientes salen de la bolsa listos para comer.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-white/[0.06]">
              {PASOS.map((p) => (
                <div key={p.paso} className="bg-charcoal p-8 lg:p-10">
                  <p className="font-serif text-4xl text-earth-light mb-3">{p.paso}</p>
                  <h3 className="font-serif text-xl mb-3">{p.title}</h3>
                  <p className="text-white/45 font-sans text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-white/20 text-xs font-sans mt-10">
              El ajo negro es un alimento funcional, no un medicamento. No reemplaza tratamientos médicos.
            </p>
          </div>
        </section>

        {/* Links internos */}
        <section className="py-20 lg:py-28 bg-warm-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Link href="/como-consumir-ajo-negro" className="group border border-charcoal/[0.08] p-8 lg:p-10 bg-cream hover:shadow-lg hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-4">Guía de uso</p>
                <h3 className="font-serif text-2xl mb-3 group-hover:text-earth transition-colors duration-300">¿Cómo consumir ajo negro?</h3>
                <p className="text-charcoal/45 font-sans text-sm leading-relaxed mb-6">
                  Dosis diaria, ayunas vs. con comida, formas de uso y recetas prácticas.
                </p>
                <span className="text-[11px] tracking-widest uppercase font-sans text-charcoal/35 group-hover:text-earth transition-colors duration-300">Ver guía →</span>
              </Link>
              <Link href="/para-que-sirve-el-ajo-negro" className="group border border-charcoal/[0.08] p-8 lg:p-10 bg-cream hover:shadow-lg hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-4">Usos</p>
                <h3 className="font-serif text-2xl mb-3 group-hover:text-earth transition-colors duration-300">¿Para qué sirve el ajo negro?</h3>
                <p className="text-charcoal/45 font-sans text-sm leading-relaxed mb-6">
                  Presión arterial, colesterol, diabetes, hígado, memoria y más usos.
                </p>
                <span className="text-[11px] tracking-widest uppercase font-sans text-charcoal/35 group-hover:text-earth transition-colors duration-300">Leer guía →</span>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ajo-negro-para-bajar-de-peso" className="group flex items-center justify-between border border-charcoal/[0.07] p-6 bg-cream hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-1">Salud</p>
                  <p className="font-serif text-base group-hover:text-earth transition-colors duration-300">Ajo negro para bajar de peso</p>
                </div>
                <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 shrink-0 ml-4">→</span>
              </Link>
              <Link href="/productos" className="group flex items-center justify-between border border-charcoal/[0.07] p-6 bg-cream hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-1">Comprar</p>
                  <p className="font-serif text-base group-hover:text-earth transition-colors duration-300">Ajo negro artesanal — Bolsas 60 g y 100 g</p>
                </div>
                <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 shrink-0 ml-4">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 lg:py-36">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">FAQ</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Preguntas Frecuentes</h2>
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
            <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">Ajo Negro Austral</p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">
              Artesanal, desde
              <br />
              <span className="text-earth-light">la Patagonia Chilena</span>.
            </h2>
            <div className="w-12 h-px bg-earth mx-auto mb-8" />
            <p className="text-white/45 font-sans leading-relaxed max-w-md mx-auto mb-12">
              Producido en Futaleufú sin aditivos. Bolsas de 60 g y 100 g listas para tu rutina diaria en ayunas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/productos" className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal font-sans text-sm tracking-widest uppercase hover:bg-earth-light transition-colors duration-300">
                Ver productos
              </Link>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white/70 font-sans text-sm tracking-widest uppercase hover:border-white/50 hover:text-white transition-colors duration-300">
                Consultar por WhatsApp
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
