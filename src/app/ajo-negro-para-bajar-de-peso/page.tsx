import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BASE_URL = "https://www.ajonegroaustral.cl";
const WA_URL = `https://api.whatsapp.com/send/?phone=56974348843&text=${encodeURIComponent("Hola. Me gustaría saber más sobre el ajo negro Austral.")}&type=phone_number&app_absent=0`;

export const metadata: Metadata = {
  title: "Ajo Negro para Bajar de Peso: ¿Sirve para Adelgazar? Cómo Tomarlo",
  description:
    "¿El ajo negro sirve para bajar de peso? Descubre cómo ayuda a adelgazar, por qué funciona, cómo tomarlo en ayunas y la dosis diaria recomendada.",
  alternates: { canonical: `${BASE_URL}/ajo-negro-para-bajar-de-peso` },
  openGraph: {
    title: "Ajo Negro para Bajar de Peso: ¿Sirve para Adelgazar? Cómo Tomarlo",
    description:
      "¿El ajo negro sirve para bajar de peso? Cómo ayuda a adelgazar, por qué funciona, cómo tomarlo en ayunas y la dosis diaria recomendada.",
    url: `${BASE_URL}/ajo-negro-para-bajar-de-peso`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿El ajo negro sirve para bajar de peso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro no quema grasa de forma directa, pero sí es un apoyo real para bajar de peso dentro de una alimentación equilibrada. Actúa como prebiótico mejorando la microbiota intestinal (clave en el metabolismo), reduce la inflamación crónica de bajo grado asociada a la obesidad y mejora la sensibilidad a la insulina, lo que ayuda a regular el apetito y el almacenamiento de grasa. Sus efectos son graduales y se notan con consumo constante.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo tomar ajo negro para adelgazar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para apoyar la pérdida de peso se recomienda consumir de 1 a 3 dientes de ajo negro al día, preferentemente en ayunas para maximizar la absorción de sus compuestos bioactivos. Puede comerse directamente, con un poco de agua o con pan integral. La constancia es lo más importante: debe acompañar a una dieta equilibrada y actividad física, no reemplazarlas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto ajo negro hay que tomar al día para bajar de peso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La dosis habitual es de 1 a 3 dientes diarios. Para un objetivo de control de peso, 1 a 2 dientes en ayunas de forma constante es suficiente. No por consumir más cantidad se acelera el resultado: el efecto es acumulativo y depende de la regularidad, no de dosis altas puntuales.",
      },
    },
    {
      "@type": "Question",
      name: "¿En cuánto tiempo se ven resultados con el ajo negro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los efectos del ajo negro son acumulativos, no inmediatos. La mayoría de los estudios observan cambios en marcadores metabólicos (glucosa, perfil lipídico, inflamación) tras 4 a 8 semanas de consumo regular. En el control de peso, el ajo negro es un complemento: los resultados visibles dependen del conjunto de la dieta y el ejercicio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es mejor tomar ajo negro en ayunas para adelgazar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. En ayunas, la S-alilcisteína (SAC) y los demás compuestos bioactivos del ajo negro se absorben mejor al no competir con otros alimentos. Además, tomarlo a primera hora ayuda a establecer un hábito constante. Quienes tienen el estómago sensible pueden tomarlo con el desayuno sin perder beneficios de forma significativa.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ajo negro quema grasa abdominal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No existe ningún alimento que queme grasa abdominal de forma localizada, y el ajo negro no es la excepción. Lo que sí hace es contribuir a un entorno metabólico más favorable —menos inflamación, mejor sensibilidad a la insulina y mejor microbiota— que facilita la reducción de grasa corporal cuando se acompaña de un déficit calórico y ejercicio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tiene contraindicaciones tomar ajo negro para bajar de peso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro es seguro para la mayoría de las personas. Se recomienda precaución en quienes toman anticoagulantes (puede potenciar su efecto), en personas alérgicas al ajo y en embarazo o lactancia (consultar al médico). Al ser fermentado, se tolera mucho mejor que el ajo crudo, pero en dosis muy altas puede causar molestias digestivas leves.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Ajo negro para bajar de peso", item: `${BASE_URL}/ajo-negro-para-bajar-de-peso` },
  ],
};

const MECANISMOS = [
  {
    num: "01",
    title: "Efecto prebiótico",
    body: "Alimenta la microbiota intestinal, que cumple un rol central en el metabolismo y en cómo el cuerpo extrae y almacena energía. Una flora intestinal equilibrada se asocia con mejor control del peso.",
  },
  {
    num: "02",
    title: "Reduce la inflamación",
    body: "La inflamación crónica de bajo grado está directamente relacionada con la obesidad y la resistencia a perder peso. Los compuestos del ajo negro inhiben vías inflamatorias como el NF-κB.",
  },
  {
    num: "03",
    title: "Mejora la sensibilidad a la insulina",
    body: "Al ayudar a regular los niveles de glucosa en sangre y mejorar la respuesta a la insulina, contribuye a reducir los picos que favorecen el almacenamiento de grasa y los antojos.",
  },
  {
    num: "04",
    title: "Apoya la saciedad",
    body: "Un metabolismo de la glucosa más estable se traduce en menos antojos y picoteos entre comidas. No es un supresor del apetito, pero ayuda a sostener una alimentación más ordenada.",
  },
  {
    num: "05",
    title: "Fácil de sostener",
    body: "Sin picor ni olor fuerte, el ajo negro es cómodo de tomar todos los días. Y el factor que más influye en cualquier objetivo de peso es justamente la constancia del hábito.",
  },
  {
    num: "06",
    title: "Bajo en calorías, alto en antioxidantes",
    body: "Aporta muy pocas calorías y una alta densidad de antioxidantes —hasta el doble que el ajo blanco—, ideal para una dieta orientada a la salud y al control del peso.",
  },
];

const COMO_TOMAR = [
  {
    dosis: "1–2 dientes",
    contexto: "En ayunas",
    detalle: "El momento óptimo. Con el estómago vacío los compuestos bioactivos se absorben mejor. Acompaña con agua o un poco de pan integral.",
  },
  {
    dosis: "4–8 semanas",
    contexto: "Constancia",
    detalle: "El efecto es acumulativo, no inmediato. Es en este rango de tiempo cuando los estudios observan mejoras en los marcadores metabólicos.",
  },
  {
    dosis: "+ Dieta",
    contexto: "Como complemento",
    detalle: "El ajo negro apoya, no reemplaza. Sus beneficios se potencian junto a una alimentación equilibrada y actividad física regular.",
  },
];

export default function BajarDePesoPage() {
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
              <span className="text-white/50">Ajo negro para bajar de peso</span>
            </nav>
            <div className="max-w-2xl">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">
                Salud · Metabolismo · Bienestar
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-8">
                Ajo Negro para
                <br />
                <span className="text-earth-light">Bajar de Peso</span>.
              </h1>
              <div className="w-16 h-px bg-earth mb-8" />
              <p className="text-lg text-white/50 leading-relaxed font-sans mb-12">
                El ajo negro no es un quemador de grasa milagroso, pero sí un apoyo real para el control
                del peso: mejora la microbiota, reduce la inflamación y regula la glucosa. Sin picor ni
                olor, es fácil de sostener como hábito diario.
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
                El ajo negro no quema grasa directamente, pero apoya la pérdida de peso al mejorar la microbiota intestinal, reducir la inflamación y regular la glucosa, ayudando al control del apetito dentro de una dieta equilibrada.
              </p>
              <p className="text-charcoal/55 font-sans leading-relaxed">
                A diferencia de los productos &ldquo;milagro&rdquo;, su efecto es gradual y se basa en mejorar el entorno metabólico del cuerpo. Su compuesto clave, la <strong className="text-charcoal font-medium">S-alilcisteína (SAC)</strong>, junto con su efecto prebiótico y antiinflamatorio, lo convierten en un complemento útil para quienes buscan perder peso o mantenerlo de forma sostenible.
              </p>
            </div>
          </div>
        </section>

        {/* Por qué ayuda a bajar de peso */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Cómo funciona</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">¿Por qué el Ajo Negro Ayuda a Bajar de Peso?</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-6" />
              <p className="text-charcoal/45 max-w-xl mx-auto font-sans leading-relaxed">
                No actúa sobre la grasa de forma directa, sino mejorando los procesos metabólicos de fondo que facilitan perder peso y mantenerlo en el tiempo.
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

        {/* Cómo tomar para adelgazar */}
        <section className="py-28 lg:py-36 bg-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Modo de uso</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Cómo Tomar Ajo Negro para Adelgazar</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-8" />
              <p className="text-white/45 font-sans leading-relaxed max-w-xl mx-auto">
                La fórmula es simple: dosis moderada, en ayunas y con constancia. El ajo negro funciona como apoyo, siempre acompañando a una buena alimentación.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {COMO_TOMAR.map((d) => (
                <div key={d.contexto} className="border border-white/10 p-8 bg-white/[0.02]">
                  <p className="font-serif text-4xl text-earth-light mb-2">{d.dosis}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-sans text-white/35 mb-4">{d.contexto}</p>
                  <div className="w-8 h-px bg-earth/40 mb-4" />
                  <p className="text-white/45 font-sans text-sm leading-relaxed">{d.detalle}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/como-consumir-ajo-negro" className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase font-sans text-earth-light hover:text-white transition-colors">
                Guía completa: cómo consumir ajo negro →
              </Link>
            </div>
          </div>
        </section>

        {/* Expectativas realistas */}
        <section className="py-28 lg:py-36">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Honestidad ante todo</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Qué Esperar (y Qué No)</h2>
              <div className="w-12 h-px bg-earth mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-earth bg-warm-white p-8">
                <p className="text-[10px] tracking-[0.2em] uppercase font-sans text-earth mb-5">Sí puede hacer</p>
                <ul className="space-y-3">
                  {[
                    "Mejorar tu microbiota y digestión",
                    "Reducir la inflamación de bajo grado",
                    "Ayudar a regular la glucosa y los antojos",
                    "Complementar una dieta orientada a perder peso",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm font-sans text-charcoal/60">
                      <span className="text-earth mt-0.5 shrink-0">—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-charcoal/[0.07] bg-cream p-8">
                <p className="text-[10px] tracking-[0.2em] uppercase font-sans text-charcoal/40 mb-5">No hace</p>
                <ul className="space-y-3">
                  {[
                    "Quemar grasa de forma directa o localizada",
                    "Sustituir una alimentación equilibrada",
                    "Generar pérdida de peso sin déficit calórico",
                    "Dar resultados inmediatos en días",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm font-sans text-charcoal/55">
                      <span className="text-charcoal/30 mt-0.5 shrink-0">×</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-center text-charcoal/35 text-xs font-sans mt-10">
              El ajo negro es un alimento funcional, no un medicamento ni un sustituto de dieta. No reemplaza tratamientos médicos.
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
                  Presión arterial, colesterol, diabetes, hígado, memoria y más usos respaldados.
                </p>
                <span className="text-[11px] tracking-widest uppercase font-sans text-charcoal/35 group-hover:text-earth transition-colors duration-300">Leer guía →</span>
              </Link>
              <Link href="/como-consumir-ajo-negro" className="group border border-charcoal/[0.08] p-8 lg:p-10 bg-cream hover:shadow-lg hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-4">Guía de uso</p>
                <h3 className="font-serif text-2xl mb-3 group-hover:text-earth transition-colors duration-300">¿Cómo consumir ajo negro?</h3>
                <p className="text-charcoal/45 font-sans text-sm leading-relaxed mb-6">
                  Dosis diaria, ayunas vs. con comida, formas de uso y recetas prácticas.
                </p>
                <span className="text-[11px] tracking-widest uppercase font-sans text-charcoal/35 group-hover:text-earth transition-colors duration-300">Ver guía →</span>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/beneficios-ajo-negro" className="group flex items-center justify-between border border-charcoal/[0.07] p-6 bg-cream hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-1">Propiedades</p>
                  <p className="font-serif text-base group-hover:text-earth transition-colors duration-300">Beneficios y propiedades del ajo negro</p>
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
              Producido en Futaleufú sin aditivos. Bolsas de 60 g y 100 g listas para incorporar a tu rutina diaria.
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
