import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BASE_URL = "https://www.ajonegroaustral.cl";
const WA_URL = `https://api.whatsapp.com/send/?phone=56974348843&text=${encodeURIComponent("Hola. Me gustaría saber más sobre el ajo negro Austral.")}&type=phone_number&app_absent=0`;

export const metadata: Metadata = {
  title: "Ajo Negro y Presión Arterial: ¿Sirve para Bajar la Presión?",
  description:
    "¿El ajo negro baja la presión arterial? Descubre cómo actúa sobre la hipertensión, qué dicen los estudios, cuánto tomar y cómo usarlo de forma segura.",
  alternates: { canonical: `${BASE_URL}/ajo-negro-presion-arterial` },
  openGraph: {
    title: "Ajo Negro y Presión Arterial: ¿Sirve para Bajar la Presión?",
    description:
      "Cómo actúa el ajo negro sobre la presión arterial, qué dicen los estudios, cuánto tomar y cómo usarlo de forma segura.",
    url: `${BASE_URL}/ajo-negro-presion-arterial`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿El ajo negro sirve para bajar la presión arterial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El ajo negro tiene un efecto vasodilatador gracias a sus compuestos organosulfurados, que relajan los vasos sanguíneos y mejoran la circulación. Diversos estudios han documentado reducciones modestas pero consistentes de la presión sistólica en personas con hipertensión leve a moderada tras 8 a 12 semanas de consumo regular. No reemplaza la medicación antihipertensiva, pero es un complemento natural reconocido.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo actúa el ajo negro sobre la presión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro favorece la producción de óxido nítrico, una molécula que relaja y dilata los vasos sanguíneos, reduciendo la resistencia al flujo y, con ello, la presión arterial. Además, su efecto antioxidante protege el endotelio (la pared interna de los vasos) y mejora la elasticidad arterial, lo que contribuye a una mejor regulación de la presión a largo plazo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto ajo negro tomar para la presión arterial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La práctica habitual y los estudios apuntan a 1 a 2 dientes de ajo negro al día, preferentemente en ayunas, de forma constante. Los efectos sobre la presión son acumulativos: la mayoría de los estudios observan resultados tras 8 a 12 semanas de consumo regular, no de manera inmediata.",
      },
    },
    {
      "@type": "Question",
      name: "¿En cuánto tiempo el ajo negro baja la presión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro no produce efectos inmediatos sobre la presión. Su acción es gradual: los estudios que documentan reducciones de la presión sistólica lo hacen tras 8 a 12 semanas de consumo diario y constante. Es un complemento de fondo, no un remedio para bajar la presión de forma puntual.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo tomar ajo negro si tomo medicamentos para la presión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En general el ajo negro es seguro, pero como puede potenciar el efecto hipotensor y también el de los anticoagulantes, es importante consultar con tu médico antes de combinarlo con medicación antihipertensiva o anticoagulante. El ajo negro complementa, nunca reemplaza, el tratamiento médico indicado.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ajo negro también ayuda al colesterol y al corazón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Además de su efecto sobre la presión, el ajo negro contribuye a reducir el colesterol LDL y los triglicéridos, y mejora la circulación gracias a sus antioxidantes y compuestos organosulfurados. Por eso se considera un alimento de apoyo a la salud cardiovascular en su conjunto, no solo a la presión arterial.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Ajo negro y presión arterial", item: `${BASE_URL}/ajo-negro-presion-arterial` },
  ],
};

const MECANISMOS = [
  {
    num: "01",
    title: "Efecto vasodilatador",
    body: "Sus compuestos organosulfurados relajan la musculatura de los vasos sanguíneos, reduciendo la resistencia al flujo y favoreciendo una presión más baja.",
  },
  {
    num: "02",
    title: "Más óxido nítrico",
    body: "El ajo negro estimula la producción de óxido nítrico, la molécula clave que dilata las arterias y mejora la circulación de forma natural.",
  },
  {
    num: "03",
    title: "Protección del endotelio",
    body: "Su alta capacidad antioxidante protege la pared interna de los vasos del daño oxidativo, manteniendo su elasticidad y mejor función a largo plazo.",
  },
  {
    num: "04",
    title: "Apoyo cardiovascular global",
    body: "Reduce el colesterol LDL y los triglicéridos, factores que, junto a la presión, inciden en la salud del corazón y de todo el sistema circulatorio.",
  },
  {
    num: "05",
    title: "Antiinflamatorio",
    body: "Disminuye la inflamación crónica de bajo grado, asociada al endurecimiento arterial y al aumento de la presión con el tiempo.",
  },
  {
    num: "06",
    title: "Cómodo y sin olor",
    body: "Al ser fermentado, no tiene el picor ni el olor del ajo crudo: se puede tomar a diario y en ayunas sin molestias, clave para sostener el hábito.",
  },
];

const PAUTA = [
  {
    dosis: "1–2 dientes",
    contexto: "Al día, en ayunas",
    detalle: "La dosis habitual para apoyar la presión. En ayunas mejora la absorción de sus compuestos bioactivos.",
  },
  {
    dosis: "8–12 semanas",
    contexto: "Consumo constante",
    detalle: "El tiempo en que los estudios observan reducciones de la presión sistólica. El efecto es acumulativo, no inmediato.",
  },
  {
    dosis: "+ Médico",
    contexto: "Si tomas medicación",
    detalle: "Consulta antes de combinarlo con antihipertensivos o anticoagulantes. Complementa, no reemplaza el tratamiento.",
  },
];

export default function PresionArterialPage() {
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
              <span className="text-white/50">Ajo negro y presión arterial</span>
            </nav>
            <div className="max-w-2xl">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">
                Salud cardiovascular · Bienestar
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-8">
                Ajo Negro y
                <br />
                <span className="text-earth-light">Presión Arterial</span>.
              </h1>
              <div className="w-16 h-px bg-earth mb-8" />
              <p className="text-lg text-white/50 leading-relaxed font-sans mb-12">
                El ajo negro tiene un efecto vasodilatador natural que ayuda a regular la presión arterial.
                No sustituye la medicación, pero como complemento diario es un aliado reconocido de la salud
                cardiovascular. Sin olor ni picor, fácil de mantener.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/productos" className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal font-sans text-sm tracking-widest uppercase hover:bg-earth-light transition-colors duration-300">
                  Ver productos
                </Link>
                <Link href="/para-que-sirve-el-ajo-negro" className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white/70 font-sans text-sm tracking-widest uppercase hover:border-white/50 hover:text-white transition-colors duration-300">
                  Otros usos
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
                Sí, el ajo negro ayuda a bajar la presión arterial: su efecto vasodilatador relaja los vasos sanguíneos y mejora la circulación, con reducciones modestas de la presión sistólica documentadas tras 8 a 12 semanas de consumo regular.
              </p>
              <p className="text-charcoal/55 font-sans leading-relaxed">
                Actúa estimulando la producción de <strong className="text-charcoal font-medium">óxido nítrico</strong> y protegiendo el endotelio vascular gracias a sus antioxidantes. No reemplaza la medicación antihipertensiva, pero es un complemento natural seguro para la mayoría de las personas. Si tomas medicamentos para la presión, consulta con tu médico.
              </p>
            </div>
          </div>
        </section>

        {/* Cómo actúa */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Cómo actúa</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Cómo el Ajo Negro Regula la Presión</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-6" />
              <p className="text-charcoal/45 max-w-xl mx-auto font-sans leading-relaxed">
                Su efecto sobre la presión no es un golpe puntual, sino la suma de varios mecanismos que mejoran la salud de los vasos sanguíneos de forma sostenida.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {MECANISMOS.map((m) => (
                <article key={m.num} className="bg-cream border border-charcoal/[0.05] p-8 lg:p-10 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-earth/20" />
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth/80 mb-4 font-sans">{m.num}</p>
                  <h3 className="font-serif text-xl mb-3">{m.title}</h3>
                  <p className="text-charcoal/55 text-sm font-sans leading-relaxed">{m.body}</p>
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

        {/* Pauta de consumo */}
        <section className="py-28 lg:py-36 bg-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Pauta de consumo</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Cuánto Ajo Negro Tomar para la Presión</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-8" />
              <p className="text-white/45 font-sans leading-relaxed max-w-xl mx-auto">
                Dosis moderada, constancia y, si tomas medicación, acompañamiento médico. Esa es la base para usarlo de forma segura y efectiva.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {PAUTA.map((d) => (
                <div key={d.contexto} className="border border-white/10 p-8 bg-white/[0.02]">
                  <p className="font-serif text-4xl text-earth-light mb-2">{d.dosis}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-sans text-white/35 mb-4">{d.contexto}</p>
                  <div className="w-8 h-px bg-earth/40 mb-4" />
                  <p className="text-white/45 font-sans text-sm leading-relaxed">{d.detalle}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-white/20 text-xs font-sans mt-10">
              El ajo negro es un alimento funcional, no un medicamento. No reemplaza el tratamiento antihipertensivo. Consulta a tu médico.
            </p>
          </div>
        </section>

        {/* Links internos */}
        <section className="py-20 lg:py-28 bg-warm-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Link href="/para-que-sirve-el-ajo-negro" className="group border border-charcoal/[0.08] p-8 lg:p-10 bg-cream hover:shadow-lg hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-4">Usos</p>
                <h3 className="font-serif text-2xl mb-3 group-hover:text-earth transition-colors duration-300">¿Para qué sirve el ajo negro?</h3>
                <p className="text-charcoal/45 font-sans text-sm leading-relaxed mb-6">
                  Colesterol, diabetes, hígado, memoria, sistema inmune y más usos respaldados.
                </p>
                <span className="text-[11px] tracking-widest uppercase font-sans text-charcoal/35 group-hover:text-earth transition-colors duration-300">Leer guía →</span>
              </Link>
              <Link href="/beneficios-ajo-negro" className="group border border-charcoal/[0.08] p-8 lg:p-10 bg-cream hover:shadow-lg hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-4">Propiedades</p>
                <h3 className="font-serif text-2xl mb-3 group-hover:text-earth transition-colors duration-300">Beneficios y propiedades del ajo negro</h3>
                <p className="text-charcoal/45 font-sans text-sm leading-relaxed mb-6">
                  Antioxidantes, sistema inmune y salud cardiovascular en una guía completa.
                </p>
                <span className="text-[11px] tracking-widest uppercase font-sans text-charcoal/35 group-hover:text-earth transition-colors duration-300">Ver guía →</span>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ajo-negro-en-ayunas" className="group flex items-center justify-between border border-charcoal/[0.07] p-6 bg-cream hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-1">Rutina</p>
                  <p className="font-serif text-base group-hover:text-earth transition-colors duration-300">Ajo negro en ayunas</p>
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
              Producido en Futaleufú sin aditivos. Bolsas de 60 g y 100 g para incorporarlo a tu rutina de salud cardiovascular.
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
