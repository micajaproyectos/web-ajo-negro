import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BASE_URL = "https://ajonegroaustral.cl";
const WA_URL = `https://api.whatsapp.com/send/?phone=56974348843&text=${encodeURIComponent("Hola. Me gustaría saber más sobre el ajo negro Austral.")}&type=phone_number&app_absent=0`;

export const metadata: Metadata = {
  title: "¿Para qué sirve el Ajo Negro? Usos y Beneficios",
  description:
    "El ajo negro sirve para fortalecer el sistema inmune, cuidar el corazón, reducir el colesterol y como ingrediente gourmet. Descubre todos sus usos.",
  alternates: { canonical: `${BASE_URL}/para-que-sirve-el-ajo-negro` },
  openGraph: {
    title: "¿Para qué sirve el Ajo Negro? Usos y Beneficios",
    description:
      "El ajo negro sirve para fortalecer el sistema inmune, cuidar el corazón, reducir el colesterol y como ingrediente gourmet.",
    url: `${BASE_URL}/para-que-sirve-el-ajo-negro`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Para qué sirve el ajo negro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro sirve para reforzar el sistema inmune, reducir el colesterol LDL, mejorar la circulación sanguínea, actuar como antiinflamatorio natural y como potenciador del sabor en cocina gourmet. Al ser fermentado, no produce olor fuerte ni molestias digestivas, lo que lo hace ideal para consumo diario.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para qué sirve el ajo negro en ayunas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consumir ajo negro en ayunas permite que sus compuestos bioactivos, especialmente la S-alilcisteína (SAC), sean absorbidos con mayor eficiencia antes de que otros alimentos interfieran en el proceso digestivo. Se recomienda 1 a 2 dientes con agua o con un poco de pan.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ajo negro sirve para bajar el colesterol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Varios estudios señalan que el consumo regular de ajo negro contribuye a reducir el colesterol LDL (malo) y los triglicéridos, gracias a sus antioxidantes y compuestos organosulfurados. No reemplaza tratamientos médicos, pero es un complemento natural documentado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para qué sirve el ajo negro para la presión arterial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro tiene un leve efecto vasodilatador que puede contribuir a reducir la presión arterial en personas con hipertensión leve. Su efecto es gradual y se potencia con consumo regular. Consultar con un médico antes de usarlo como complemento a un tratamiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto ajo negro se recomienda tomar al día?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La dosis habitual recomendada es de 1 a 3 dientes de ajo negro al día. Puede consumirse directamente, con pan, en ensaladas o incorporado en preparaciones calientes. Al ser fermentado, su digestión es mucho más suave que la del ajo crudo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para qué sirve el ajo negro con miel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La combinación de ajo negro con miel potencia los efectos antioxidantes y antibacterianos de ambos ingredientes. Es una preparación tradicional usada para reforzar las defensas, especialmente en temporada de resfríos. Se consume generalmente en ayunas, 1 diente con una cucharadita de miel.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ajo negro sirve para adelgazar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro no es un quemador de grasa directo, pero su efecto prebiótico mejora la salud digestiva y su capacidad antioxidante reduce la inflamación crónica, dos factores relacionados con el control del peso. Puede ser un complemento útil dentro de una alimentación equilibrada.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Para qué sirve el ajo negro", item: `${BASE_URL}/para-que-sirve-el-ajo-negro` },
  ],
};

const USOS_SALUD = [
  {
    num: "01",
    title: "Sistema inmune",
    body: "Sus compuestos bioactivos — especialmente la S-alilcisteína — estimulan la actividad de las células de defensa, aumentando la resistencia frente a infecciones virales y bacterianas.",
  },
  {
    num: "02",
    title: "Salud cardiovascular",
    body: "Reduce el colesterol LDL y los triglicéridos. Su efecto vasodilatador contribuye a regular la presión arterial y mejora la circulación en personas con hipertensión leve.",
  },
  {
    num: "03",
    title: "Antiinflamatorio natural",
    body: "Inhibe vías inflamatorias crónicas de bajo grado, relacionadas con enfermedades metabólicas, articulares y cardiovasculares. Útil como complemento natural a largo plazo.",
  },
  {
    num: "04",
    title: "Salud digestiva",
    body: "Actúa como prebiótico, alimentando la microbiota intestinal. A diferencia del ajo crudo, no irrita la mucosa gástrica, lo que lo hace apto incluso para estómagos sensibles.",
  },
  {
    num: "05",
    title: "Antioxidante celular",
    body: "Neutraliza radicales libres que dañan el ADN celular y aceleran el envejecimiento. Contiene hasta el doble de capacidad antioxidante total que el ajo blanco fresco.",
  },
  {
    num: "06",
    title: "Energía y vitalidad",
    body: "Su consumo regular se asocia con mayor energía y menor fatiga. No actúa como estimulante, sino como soporte metabólico gradual, ideal para personas activas.",
  },
];

const USOS_COCINA = [
  { uso: "Directamente o con pan tostado", detalle: "La forma más simple. 1–3 dientes al día, solos o untados." },
  { uso: "Aderezos y vinagretas", detalle: "Tritúralos con aceite de oliva y limón para un aderezo umami único." },
  { uso: "Mantequilla compuesta", detalle: "Mezcla con mantequilla blanda. Ideal para carnes, ostiones o tostadas." },
  { uso: "Risottos y pastas", detalle: "Incorpora al final. Aporta profundidad sin opacar otros sabores." },
  { uso: "Salsas oscuras", detalle: "En salsas de carne o bordelesas, potencia el umami de forma elegante." },
  { uso: "Ajo negro con miel", detalle: "Combinación tradicional para reforzar defensas, especialmente en invierno." },
];

export default function ParaQueSirvePage() {
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
              <span className="text-white/50">Para qué sirve el ajo negro</span>
            </nav>
            <div className="max-w-2xl">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">
                Salud · Gastronomía · Bienestar
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-8">
                Para qué sirve
                <br />
                <span className="text-earth-light">el Ajo Negro</span>.
              </h1>
              <div className="w-16 h-px bg-earth mb-8" />
              <p className="text-lg text-white/50 leading-relaxed font-sans mb-12">
                El ajo negro es un superalimento fermentado con propiedades antioxidantes, cardiovasculares
                e inmunitarias. Sin olor fuerte, sin picor y con un sabor umami que lo hace ideal tanto
                para la salud diaria como para la alta cocina.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/productos" className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal font-sans text-sm tracking-widest uppercase hover:bg-earth-light transition-colors duration-300">
                  Ver productos
                </Link>
                <Link href="/beneficios-ajo-negro" className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white/70 font-sans text-sm tracking-widest uppercase hover:border-white/50 hover:text-white transition-colors duration-300">
                  Ver beneficios completos
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
                El ajo negro sirve para fortalecer el sistema inmune, reducir el colesterol, mejorar la circulación y actuar como antiinflamatorio natural.
              </p>
              <p className="text-charcoal/55 font-sans leading-relaxed">
                También es un ingrediente gourmet de sabor umami, sin olor fuerte ni molestias digestivas. Se produce fermentando ajo blanco durante semanas a temperatura y humedad controladas, proceso que concentra sus compuestos bioactivos — especialmente la <strong className="text-charcoal font-medium">S-alilcisteína (SAC)</strong> — y elimina los compuestos responsables del olor y la irritación.
              </p>
            </div>
          </div>
        </section>

        {/* Usos del ajo negro para la salud */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Salud y bienestar</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Usos del Ajo Negro para la Salud</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-6" />
              <p className="text-charcoal/45 max-w-xl mx-auto font-sans leading-relaxed">
                Sus beneficios no son inmediatos sino acumulativos. El consumo regular — 1 a 3 dientes diarios — es lo que permite aprovechar todo su potencial sobre la salud.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {USOS_SALUD.map((u) => (
                <article key={u.num} className="bg-cream border border-charcoal/[0.05] p-8 lg:p-10 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-earth/20" />
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth/80 mb-4 font-sans">{u.num}</p>
                  <h3 className="font-serif text-xl mb-3">{u.title}</h3>
                  <p className="text-charcoal/55 text-sm font-sans leading-relaxed">{u.body}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/beneficios-ajo-negro" className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase font-sans text-earth hover:text-charcoal transition-colors">
                Ver guía completa de beneficios y propiedades →
              </Link>
            </div>
          </div>
        </section>

        {/* Ajo negro para la cocina gourmet */}
        <section
          className="relative py-28 lg:py-36 overflow-hidden"
          style={{ backgroundImage: "url('/cocina.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-black/65" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div>
                <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Gastronomía</p>
                <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-[1.12] text-white">
                  Ajo Negro para
                  <br />
                  <span className="text-earth-light">la Cocina Gourmet</span>
                </h2>
                <p className="text-white/60 font-sans leading-relaxed mb-6">
                  Más allá de sus propiedades para la salud, el ajo negro es un ingrediente gastronómico de alta valoración. Su sabor dulce, suave y con notas de umami lo convierte en un potenciador de platos que no compite con otros ingredientes, sino que los eleva.
                </p>
                <p className="text-white/60 font-sans leading-relaxed">
                  Chefs y cocineros de todo Chile lo incorporan en preparaciones que van desde lo más sencillo — un trozo de pan tostado — hasta elaboraciones de alta cocina como tartas, risottos y fondos de carne. No requiere cocción, aunque también resiste el calor sin perder sus características esenciales.
                </p>
              </div>
              <div className="space-y-0">
                {USOS_COCINA.map((item, i) => (
                  <div key={item.uso} className={`flex items-start gap-6 py-6 ${i < USOS_COCINA.length - 1 ? "border-b border-white/[0.08]" : ""}`}>
                    <span className="font-serif text-2xl text-earth-light/50 shrink-0 leading-none mt-1">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="font-sans text-sm font-medium text-white mb-1">{item.uso}</p>
                      <p className="font-sans text-sm text-white/45 leading-relaxed">{item.detalle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cuánto tomar al día */}
        <section className="py-28 lg:py-36 bg-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Dosis</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">¿Cuánto Ajo Negro Tomar al Día?</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-8" />
              <p className="text-white/45 font-sans leading-relaxed max-w-xl mx-auto">
                No existe una dosis médica oficial, pero la práctica habitual y los estudios más citados convergen en un rango claro.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { dosis: "1 diente", contexto: "Mantenimiento", detalle: "Consumo diario para apoyar el sistema inmune y la salud cardiovascular a largo plazo." },
                { dosis: "2–3 dientes", contexto: "Uso activo", detalle: "Recomendado cuando se busca un efecto más marcado, como en temporadas de mayor demanda inmunitaria." },
                { dosis: "En ayunas", contexto: "Mayor absorción", detalle: "El momento óptimo para consumirlo. Se absorbe mejor antes del desayuno, con agua o un poco de pan." },
              ].map((d) => (
                <div key={d.contexto} className="border border-white/10 p-8 bg-white/[0.02]">
                  <p className="font-serif text-4xl text-earth-light mb-2">{d.dosis}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-sans text-white/35 mb-4">{d.contexto}</p>
                  <div className="w-8 h-px bg-earth/40 mb-4" />
                  <p className="text-white/45 font-sans text-sm leading-relaxed">{d.detalle}</p>
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
              <Link href="/beneficios-ajo-negro" className="group border border-charcoal/[0.08] p-8 lg:p-10 bg-cream hover:shadow-lg hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-4">Propiedades</p>
                <h3 className="font-serif text-2xl mb-3 group-hover:text-earth transition-colors duration-300">Beneficios y propiedades del ajo negro</h3>
                <p className="text-charcoal/45 font-sans text-sm leading-relaxed mb-6">
                  Guía completa: antioxidantes, sistema inmune, comparativa ajo negro vs. ajo blanco.
                </p>
                <span className="text-[11px] tracking-widest uppercase font-sans text-charcoal/35 group-hover:text-earth transition-colors duration-300">Leer guía →</span>
              </Link>
              <Link href="/como-consumir-ajo-negro" className="group border border-charcoal/[0.08] p-8 lg:p-10 bg-cream hover:shadow-lg hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-4">Guía de uso</p>
                <h3 className="font-serif text-2xl mb-3 group-hover:text-earth transition-colors duration-300">¿Cómo consumir ajo negro?</h3>
                <p className="text-charcoal/45 font-sans text-sm leading-relaxed mb-6">
                  Dosis diaria, formas de uso, ayunas vs. con comida y recetas prácticas.
                </p>
                <span className="text-[11px] tracking-widest uppercase font-sans text-charcoal/35 group-hover:text-earth transition-colors duration-300">Ver guía →</span>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/productos" className="group flex items-center justify-between border border-charcoal/[0.07] p-6 bg-cream hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-1">Comprar</p>
                  <p className="font-serif text-base group-hover:text-earth transition-colors duration-300">Ajo negro artesanal — Bolsas 60 g y 100 g</p>
                </div>
                <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 shrink-0 ml-4">→</span>
              </Link>
              <Link href="/ajo-negro-vs-ajo-normal" className="group flex items-center justify-between border border-charcoal/[0.07] p-6 bg-cream hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-1">Comparativa</p>
                  <p className="font-serif text-base group-hover:text-earth transition-colors duration-300">Ajo negro vs ajo normal</p>
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
              Producido en Futaleufú sin aditivos. Bolsas de 60 g y 100 g para consumo personal, y pedidos mayoristas para restaurantes y tiendas.
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
