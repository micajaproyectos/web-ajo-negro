import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BASE_URL = "https://www.ajonegroaustral.cl";
const WA_URL = `https://api.whatsapp.com/send/?phone=56974348843&text=${encodeURIComponent("Hola. Me gustaría saber más sobre el ajo negro Austral.")}&type=phone_number&app_absent=0`;

export const metadata: Metadata = {
  title: "¿Cómo consumir Ajo Negro? Dosis, Formas y Recetas",
  description:
    "Aprende a consumir ajo negro: dosis diaria recomendada, si tomarlo en ayunas o con comida, formas de uso y cómo incorporarlo en recetas.",
  alternates: { canonical: `${BASE_URL}/como-consumir-ajo-negro` },
  openGraph: {
    title: "¿Cómo consumir Ajo Negro? Dosis, Formas y Recetas",
    description:
      "Dosis diaria, formas de uso, ayunas vs. con comida y recetas con ajo negro. Guía completa.",
    url: `${BASE_URL}/como-consumir-ajo-negro`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo se consume el ajo negro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro se puede consumir directamente, untado en pan tostado, incorporado en aderezos, mezclado con mantequilla, o añadido al final de preparaciones calientes. Al ser fermentado, no tiene el sabor picante del ajo crudo y puede comerse solo sin ninguna preparación previa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto ajo negro se puede tomar al día?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La dosis habitual recomendada es de 1 a 3 dientes de ajo negro al día. Para consumo de mantenimiento basta con 1 diente diario. En temporadas de mayor exigencia inmunitaria puede aumentarse a 2 o 3 dientes. No existe toxicidad documentada a estas dosis.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es mejor consumir ajo negro en ayunas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consumirlo en ayunas maximiza la absorción de sus compuestos bioactivos, especialmente la S-alilcisteína (SAC), al no haber otros alimentos que compitan en el proceso digestivo. Sin embargo, también puede tomarse con el desayuno o las comidas sin perder sus beneficios de forma significativa.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ajo negro se puede cocinar o hay que comerlo crudo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro puede consumirse tanto crudo como cocinado. Su textura ya es suave y su sabor no cambia drásticamente con el calor moderado. Para preservar al máximo sus compuestos bioactivos se recomienda añadirlo al final de las preparaciones o fuera del fuego directo.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ajo negro se puede comer directamente de la bolsa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Los dientes de ajo negro de la bolsa están listos para consumir sin preparación. Tienen textura suave y pegajosa, sabor dulce con notas de umami. Se comen como cualquier otro alimento, sin necesidad de cocinarlo ni remojarlo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda en hacer efecto el ajo negro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los beneficios del ajo negro son acumulativos y no inmediatos. Con consumo regular de 1 a 3 dientes diarios durante 4 a 8 semanas es cuando la mayoría de los estudios observan mejoras en marcadores como el colesterol LDL, la presión arterial o la respuesta inmune.",
      },
    },
    {
      "@type": "Question",
      name: "¿Con qué alimentos combina bien el ajo negro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro combina muy bien con pan tostado, aceite de oliva, quesos maduros, carnes rojas y de caza, mariscos, pasta, arroz y verduras asadas. Su sabor umami potencia los platos sin opacarlos. También se usa con miel como remedio natural para las defensas.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Cómo consumir ajo negro", item: `${BASE_URL}/como-consumir-ajo-negro` },
  ],
};

const FORMAS = [
  {
    num: "01",
    title: "Directo, sin preparación",
    body: "La forma más simple. Saca el diente de la bolsa y cómelo solo. Textura suave, sabor dulce y umami. Ideal para incorporarlo como hábito diario en el desayuno o antes de dormir.",
  },
  {
    num: "02",
    title: "Con pan tostado",
    body: "Unta el diente sobre pan tostado caliente como si fuera paté. El calor del pan realza el sabor. Es la forma más común de introducirlo en la dieta y la que más gusta a quienes lo prueban por primera vez.",
  },
  {
    num: "03",
    title: "Aderezos y vinagretas",
    body: "Tritura 2–3 dientes con aceite de oliva, limón y sal. Obtienes un aderezo umami que funciona en ensaladas, carpaccios, pulpo o verduras asadas. Se conserva en frío hasta una semana.",
  },
  {
    num: "04",
    title: "Mantequilla compuesta",
    body: "Mezcla con mantequilla ablandada a temperatura ambiente. Puedes añadir perejil o tomillo. Excelente sobre carnes a la plancha, ostiones o tostadas. Congela en papel film para tener siempre disponible.",
  },
  {
    num: "05",
    title: "En recetas calientes",
    body: "Agrégalo al final de risottos, pastas o salsas oscuras, fuera del fuego directo. El calor suave no destruye sus compuestos activos y aporta profundidad de sabor sin el picor del ajo crudo.",
  },
  {
    num: "06",
    title: "Con miel (remedio tradicional)",
    body: "Un diente de ajo negro con una cucharadita de miel en ayunas. Potencia los efectos antioxidantes y antibacterianos de ambos ingredientes. Usado habitualmente en temporadas de resfríos o mayor exigencia inmunitaria.",
  },
];

const RECETAS = [
  { plato: "Tostada de ajo negro y ricotta", detalle: "Pan de masa madre, ricotta fresca, 2 dientes de ajo negro laminados, aceite de oliva y sal de escamas." },
  { plato: "Aderezo umami para ensalada", detalle: "3 dientes triturados, 4 cdas. aceite de oliva, 1 cda. vinagre de jerez, sal y pimienta. Emulsionar." },
  { plato: "Mantequilla de ajo negro", detalle: "100 g mantequilla + 4 dientes triturados + perejil picado. Mezclar y enrollar en film. Refrigerar." },
  { plato: "Risotto con ajo negro", detalle: "Preparar risotto clásico. Al apagar el fuego, incorporar 3–4 dientes en láminas y revolver." },
  { plato: "Carne con salsa de ajo negro", detalle: "Sellar la carne. En la misma sartén, desglasear con vino tinto, reducir y agregar 4 dientes triturados." },
  { plato: "Mayonesa negra", detalle: "Emulsionar 6 dientes con 1 huevo, 150 ml aceite, jugo de limón y sal. Textura sedosa, sabor profundo." },
];

export default function ComoConsumirPage() {
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
              <span className="text-white/50">Cómo consumir ajo negro</span>
            </nav>
            <div className="max-w-2xl">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">
                Guía de uso · Ajo Negro Austral
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-8">
                Cómo consumir
                <br />
                <span className="text-earth-light">el Ajo Negro</span>.
              </h1>
              <div className="w-16 h-px bg-earth mb-8" />
              <p className="text-lg text-white/50 leading-relaxed font-sans mb-12">
                El ajo negro es uno de los superalimentos más versátiles. Se puede comer solo, en recetas
                gourmet o como complemento diario para la salud. Sin sabor picante, sin olor, sin preparación
                complicada.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/productos"
                  className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal font-sans text-sm tracking-widest uppercase hover:bg-earth-light transition-colors duration-300">
                  Ver productos
                </Link>
                <Link href="/beneficios-ajo-negro"
                  className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white/70 font-sans text-sm tracking-widest uppercase hover:border-white/50 hover:text-white transition-colors duration-300">
                  Ver beneficios
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
        </section>

        {/* Respuesta directa */}
        <section className="py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="border-l-4 border-earth pl-8">
              <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-4">Respuesta directa</p>
              <p className="font-serif text-2xl lg:text-3xl text-charcoal leading-relaxed mb-6">
                El ajo negro se consume directamente, con pan, en aderezos o incorporado en recetas. La dosis habitual es de 1 a 3 dientes al día, preferentemente en ayunas.
              </p>
              <p className="text-charcoal/55 font-sans leading-relaxed">
                A diferencia del ajo crudo, no necesita cocción ni preparación especial: los dientes salen de la bolsa listos para comer. Su textura suave y su sabor dulce con notas de umami lo hacen fácil de incorporar en cualquier momento del día y en casi cualquier tipo de plato.
              </p>
            </div>
          </div>
        </section>

        {/* Formas de consumir */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Usos prácticos</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Formas de Consumir Ajo Negro</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-6" />
              <p className="text-charcoal/45 max-w-xl mx-auto font-sans leading-relaxed">
                Desde el consumo más simple hasta preparaciones de alta cocina, el ajo negro se adapta a todos los estilos de alimentación sin requerir técnicas especiales.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {FORMAS.map((f) => (
                <article key={f.num} className="bg-cream border border-charcoal/[0.05] p-8 lg:p-10 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-earth/20" />
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth/80 mb-4 font-sans">{f.num}</p>
                  <h3 className="font-serif text-xl mb-3">{f.title}</h3>
                  <p className="text-charcoal/55 text-sm font-sans leading-relaxed">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Dosis diaria */}
        <section className="py-28 lg:py-36 bg-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Dosis</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Dosis Diaria de Ajo Negro Recomendada</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-8" />
              <p className="text-white/45 font-sans leading-relaxed max-w-xl mx-auto">
                No existe una dosis oficial, pero la práctica habitual y los estudios más citados apuntan a un rango claro según el objetivo.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  dosis: "1 diente",
                  contexto: "Mantenimiento diario",
                  detalle: "Para apoyar el sistema inmune y la salud cardiovascular de forma gradual. Ideal para quienes lo incorporan como hábito permanente.",
                },
                {
                  dosis: "2–3 dientes",
                  contexto: "Uso activo o preventivo",
                  detalle: "En temporadas de resfríos, mayor estrés o exigencia física. También recomendado en las primeras semanas para notar el efecto más rápido.",
                },
                {
                  dosis: "En ayunas",
                  contexto: "Máxima absorción",
                  detalle: "El momento óptimo. Con el estómago vacío, los compuestos bioactivos se absorben sin interferencia. Puede acompañarse de agua o un poco de pan.",
                },
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

        {/* Ayunas vs. con comida */}
        <section className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div>
                <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Momento del día</p>
                <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-[1.12]">
                  Ajo negro en ayunas
                  <br />
                  <span className="text-earth">o con comida</span>
                </h2>
                <p className="text-charcoal/60 font-sans leading-relaxed mb-6">
                  La pregunta más frecuente entre quienes empiezan con el ajo negro. La respuesta corta: <strong className="text-charcoal font-medium">en ayunas es mejor, pero con comida también funciona.</strong>
                </p>
                <p className="text-charcoal/60 font-sans leading-relaxed mb-6">
                  En ayunas, la S-alilcisteína (SAC) y los demás compuestos bioactivos se absorben sin competencia. El pH gástrico en ese momento también favorece la biodisponibilidad. Es el protocolo que usan la mayoría de los estudios.
                </p>
                <p className="text-charcoal/60 font-sans leading-relaxed">
                  Si tienes el estómago delicado o simplemente prefieres tomarlo con el desayuno, también es válido. El ajo negro es notablemente más suave que el ajo crudo y no irrita la mucosa gástrica, por lo que tolera bien cualquier momento del día.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    momento: "En ayunas",
                    recomendado: true,
                    puntos: [
                      "Mayor absorción de S-alilcisteína (SAC)",
                      "Mejor biodisponibilidad de antioxidantes",
                      "Protocolo usado en la mayoría de estudios",
                      "Con agua o un poco de pan para quien prefiere",
                    ],
                  },
                  {
                    momento: "Con el desayuno o las comidas",
                    recomendado: false,
                    puntos: [
                      "Más cómodo para estómagos sensibles",
                      "Fácil de recordar si ya tienes un ritual de comida",
                      "Absorción ligeramente menor pero significativa",
                      "Sin contraindicación con ningún alimento habitual",
                    ],
                  },
                ].map((op) => (
                  <div key={op.momento} className={`border p-8 ${op.recomendado ? "border-earth bg-warm-white" : "border-charcoal/[0.07] bg-cream"}`}>
                    <div className="flex items-center gap-3 mb-5">
                      <h3 className="font-serif text-xl">{op.momento}</h3>
                      {op.recomendado && (
                        <span className="text-[9px] tracking-[0.2em] uppercase font-sans text-earth border border-earth/40 px-2 py-0.5">Recomendado</span>
                      )}
                    </div>
                    <ul className="space-y-2">
                      {op.puntos.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-sm font-sans text-charcoal/55">
                          <span className="text-earth mt-0.5 shrink-0">—</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recetas */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Gastronomía</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Ajo Negro en Recetas</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-6" />
              <p className="text-charcoal/45 max-w-xl mx-auto font-sans leading-relaxed">
                Ideas prácticas para incorporar el ajo negro en la cocina cotidiana. Todas usan la bolsa directamente, sin elaboraciones complejas.
              </p>
            </div>
            <div className="space-y-0 max-w-4xl mx-auto">
              {RECETAS.map((r, i) => (
                <div key={r.plato} className={`flex items-start gap-6 py-7 ${i < RECETAS.length - 1 ? "border-b border-charcoal/[0.06]" : ""}`}>
                  <span className="font-serif text-2xl text-earth/35 shrink-0 leading-none mt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-sans text-sm font-medium text-charcoal mb-1">{r.plato}</p>
                    <p className="font-sans text-sm text-charcoal/45 leading-relaxed">{r.detalle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Links internos */}
        <section className="py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <p className="text-[10px] tracking-[0.25em] uppercase text-charcoal/30 font-sans mb-8 text-center">Guías relacionadas</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Link href="/beneficios-ajo-negro"
                className="group flex items-center justify-between border border-charcoal/[0.07] p-8 bg-warm-white hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-2">Propiedades</p>
                  <p className="font-serif text-xl group-hover:text-earth transition-colors duration-300">Beneficios y propiedades del ajo negro</p>
                </div>
                <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 font-sans text-xl shrink-0 ml-6">→</span>
              </Link>
              <Link href="/para-que-sirve-el-ajo-negro"
                className="group flex items-center justify-between border border-charcoal/[0.07] p-8 bg-warm-white hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-2">Usos</p>
                  <p className="font-serif text-xl group-hover:text-earth transition-colors duration-300">¿Para qué sirve el ajo negro?</p>
                </div>
                <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 font-sans text-xl shrink-0 ml-6">→</span>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Link href="/ajo-negro-en-ayunas"
                className="group flex items-center justify-between border border-charcoal/[0.07] p-6 bg-warm-white hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-1">Rutina</p>
                  <p className="font-serif text-lg group-hover:text-earth transition-colors duration-300">Ajo negro en ayunas: propiedades y cómo tomarlo</p>
                </div>
                <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 font-sans text-xl shrink-0 ml-6">→</span>
              </Link>
              <Link href="/ajo-negro-vs-ajo-normal"
                className="group flex items-center justify-between border border-charcoal/[0.07] p-6 bg-warm-white hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-1">Comparativa</p>
                  <p className="font-serif text-lg group-hover:text-earth transition-colors duration-300">Ajo negro vs ajo normal: sabor, antioxidantes y digestión</p>
                </div>
                <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 font-sans text-xl shrink-0 ml-6">→</span>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/productos"
                className="group flex items-center justify-between border border-charcoal/[0.07] p-6 bg-cream hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-1">Comprar</p>
                  <p className="font-serif text-base group-hover:text-earth transition-colors duration-300">Todos los productos</p>
                </div>
                <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 font-sans shrink-0 ml-4">→</span>
              </Link>
              <Link href="/productos/bolsa-60g"
                className="group flex items-center justify-between border border-charcoal/[0.07] p-6 bg-cream hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-1">Comprar</p>
                  <p className="font-serif text-base group-hover:text-earth transition-colors duration-300">Bolsa 60 g</p>
                </div>
                <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 font-sans shrink-0 ml-4">→</span>
              </Link>
              <Link href="/productos/bolsa-100g"
                className="group flex items-center justify-between border border-charcoal/[0.07] p-6 bg-cream hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-1">Comprar</p>
                  <p className="font-serif text-base group-hover:text-earth transition-colors duration-300">Bolsa 100 g</p>
                </div>
                <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 font-sans shrink-0 ml-4">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 lg:py-36 bg-warm-white">
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
              Bolsas de 60 g y 100 g listas para consumir. Fermentación natural sin aditivos. Despacho a todo Chile por Starken y Bluexpress.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/productos"
                className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal font-sans text-sm tracking-widest uppercase hover:bg-earth-light transition-colors duration-300">
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
