import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BASE_URL = "https://www.ajonegroaustral.cl";
const WA_URL = `https://api.whatsapp.com/send/?phone=56974348843&text=${encodeURIComponent("Hola. Me gustaría consultar sobre el ajo negro Austral.")}&type=phone_number&app_absent=0`;

export const metadata: Metadata = {
  title: "Beneficios del Ajo Negro: Propiedades y Usos",
  description:
    "Descubre las propiedades y beneficios del ajo negro artesanal: antioxidantes, sistema inmune y salud cardiovascular.",
  alternates: { canonical: `${BASE_URL}/beneficios-ajo-negro` },
  openGraph: {
    title: "Beneficios del Ajo Negro: Propiedades y Usos",
    description:
      "Descubre los beneficios y propiedades del ajo negro artesanal: antioxidantes, sistema inmune y salud cardiovascular.",
    url: `${BASE_URL}/beneficios-ajo-negro`,
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
        text: "El ajo negro sirve para reforzar el sistema inmune, reducir el colesterol LDL, mejorar la circulación y como antiinflamatorio natural. También se usa ampliamente en gastronomía gracias a su sabor suave, dulce y umami. A diferencia del ajo blanco, no produce olor fuerte ni molestias digestivas, lo que lo hace ideal para consumo diario.",
      },
    },
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
        text: "Ajo Negro Austral produce y distribuye ajo negro artesanal desde Futaleufú, Patagonia Chilena, a todo el país. Disponible en bolsas de 60 g y 100 g para consumo personal, y en pedidos mayoristas para restaurantes y tiendas de productos naturales.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Beneficios del Ajo Negro", item: `${BASE_URL}/beneficios-ajo-negro` },
  ],
};

const PROPERTIES = [
  {
    num: "01",
    title: "Alto en antioxidantes",
    body: "Contiene hasta el doble de antioxidantes que el ajo blanco, principalmente S-alilcisteína (SAC), que protege las células del daño oxidativo.",
  },
  {
    num: "02",
    title: "Apoya el sistema inmune",
    body: "Sus compuestos bioactivos estimulan la actividad inmunitaria, contribuyendo a una mayor resistencia frente a infecciones y procesos inflamatorios.",
  },
  {
    num: "03",
    title: "Salud cardiovascular",
    body: "El consumo regular se asocia con la reducción del colesterol LDL, los triglicéridos y un leve efecto vasodilatador que favorece la salud del corazón.",
  },
  {
    num: "04",
    title: "Sin olor ni picor",
    body: "La fermentación elimina la alicina responsable del olor intenso. Sabor suave y umami, sin aliento posterior: cómodo para consumo diario.",
  },
  {
    num: "05",
    title: "Mejor tolerancia digestiva",
    body: "Al fermentar se reducen los fructanos que causan molestias gastrointestinales. Tiene efecto prebiótico y es bien tolerado por quienes son sensibles al ajo crudo.",
  },
  {
    num: "06",
    title: "Antiinflamatorio natural",
    body: "Los polifenoles y compuestos sulfurados tienen propiedades antiinflamatorias documentadas, relevantes para el manejo de condiciones inflamatorias crónicas.",
  },
];

const COMPARISON = [
  { label: "Color", blanco: "Blanco marfil", negro: "Negro intenso" },
  { label: "Sabor", blanco: "Picante y fuerte", negro: "Dulce, suave, umami" },
  { label: "Olor", blanco: "Intenso, persistente", negro: "Prácticamente nulo" },
  { label: "Antioxidantes", blanco: "Base", negro: "Hasta 2× más" },
  { label: "S-alilcisteína (SAC)", blanco: "Baja biodisponibilidad", negro: "Alta biodisponibilidad" },
  { label: "Tolerancia digestiva", blanco: "Puede causar molestias", negro: "Fácil de digerir" },
  { label: "Conservación", blanco: "Semanas en lugar fresco", negro: "Meses sin refrigeración" },
];

const USES = [
  { title: "Solo o con pan", body: "Come 1–3 dientes al día directamente o untados en pan tostado. Es la forma más simple de incorporarlo al desayuno o merienda." },
  { title: "Aderezos y salsas", body: "Tritura con aceite de oliva, limón y hierbas para crear un aderezo umami que funciona en ensaladas, pasta y carnes a la plancha." },
  { title: "Mantequilla compuesta", body: "Mezcla con mantequilla blanda para obtener una mantequilla gourmet ideal para carnes, tostadas o como base de salsas." },
  { title: "Risottos y pastas", body: "Incorpora al final de la cocción. Se integra sin opacar los otros sabores y aporta profundidad umami a cualquier preparación de cereal o pasta." },
  { title: "Carnes y mariscos", body: "Lamina sobre cortes de carne o mariscos al momento de servir. Añade complejidad sin el picor del ajo crudo." },
  { title: "Dosis diaria recomendada", body: "Entre 1 y 3 dientes al día es suficiente para aprovechar sus propiedades. No requiere cocción, aunque puede usarse cocinado sin perder sus beneficios esenciales." },
];

export default function BeneficiosPage() {
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
              <span className="text-white/50">Beneficios del ajo negro</span>
            </nav>
            <div className="max-w-2xl">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">
                Guía completa · Ajo negro Austral
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-8">
                Beneficios y Propiedades
                <br />
                <span className="text-earth-light">del Ajo Negro</span>.
              </h1>
              <div className="w-16 h-px bg-earth mb-8" />
              <p className="text-lg text-white/50 leading-relaxed font-sans mb-12">
                El ajo negro es el resultado de fermentar ajo blanco durante semanas a temperatura
                y humedad controladas. Un proceso natural que concentra antioxidantes, elimina el
                olor fuerte y transforma su sabor en algo completamente distinto.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/productos" className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal font-sans text-sm tracking-widest uppercase hover:bg-earth-light transition-colors duration-300">
                  Ver productos
                </Link>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white/70 font-sans text-sm tracking-widest uppercase hover:border-white/50 hover:text-white transition-colors duration-300">
                  Consultar
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
        </section>

        {/* Propiedades del ajo negro */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Propiedades</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Propiedades del Ajo Negro</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-6" />
              <p className="text-charcoal/45 max-w-xl mx-auto font-sans leading-relaxed">
                La fermentación no solo cambia el color y el sabor: transforma profundamente su composición
                nutricional y activa compuestos que en el ajo fresco están bloqueados o son menos biodisponibles.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {PROPERTIES.map((p) => (
                <article key={p.num} className="bg-cream border border-charcoal/[0.05] p-8 lg:p-10 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-earth/20" />
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth/80 mb-4 font-sans">{p.num}</p>
                  <h3 className="font-serif text-xl mb-3">{p.title}</h3>
                  <p className="text-charcoal/55 text-sm font-sans leading-relaxed">{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios antioxidantes */}
        <section className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Antioxidantes</p>
                <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-[1.12]">
                  Beneficios Antioxidantes
                  <br />
                  <span className="text-earth">del Ajo Negro</span>
                </h2>
                <p className="text-charcoal/60 font-sans leading-relaxed mb-6">
                  El compuesto clave del ajo negro es la <strong className="text-charcoal font-medium">S-alilcisteína (SAC)</strong>, un aminoácido organosulfurado que se forma durante el proceso de fermentación y que en el ajo blanco existe en cantidades mucho menores.
                </p>
                <p className="text-charcoal/60 font-sans leading-relaxed mb-6">
                  La SAC actúa directamente sobre los radicales libres, reduciendo el estrés oxidativo celular. Estudios publicados en revistas de nutrición señalan que el ajo negro puede contener hasta el doble de capacidad antioxidante total (ORAC) que el ajo fresco.
                </p>
                <p className="text-charcoal/60 font-sans leading-relaxed">
                  Adicionalmente, la fermentación aumenta la concentración de polifenoles y reduce el contenido de fructanos, lo que se traduce en un alimento más biodisponible y más fácil de digerir que el ajo crudo.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "2×", label: "Más antioxidantes que ajo blanco" },
                  { stat: "SAC", label: "Compuesto activo principal" },
                  { stat: "0", label: "Aditivos ni conservantes" },
                  { stat: "100%", label: "Fermentación natural" },
                ].map((item) => (
                  <div key={item.label} className="bg-warm-white border border-charcoal/[0.05] p-8 text-center">
                    <p className="font-serif text-4xl text-earth mb-3">{item.stat}</p>
                    <p className="text-[11px] tracking-[0.15em] uppercase text-charcoal/40 font-sans leading-relaxed">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ajo negro y sistema inmune */}
        <section className="py-28 lg:py-36 bg-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Inmunidad</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Ajo Negro y Sistema Inmune</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-8" />
              <p className="text-white/50 font-sans leading-relaxed">
                Una de las propiedades más estudiadas del ajo negro es su efecto sobre la respuesta inmunitaria. Sus compuestos bioactivos actúan en varios frentes del sistema de defensa del organismo.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Activación de macrófagos",
                  body: "Los polisacáridos del ajo negro estimulan la actividad de los macrófagos, células del sistema inmune encargadas de detectar y eliminar agentes patógenos.",
                },
                {
                  title: "Efecto antiinflamatorio",
                  body: "La S-alilcisteína y los polifenoles inhiben vías inflamatorias como el NF-κB, contribuyendo a reducir la inflamación crónica de bajo grado asociada a múltiples enfermedades.",
                },
                {
                  title: "Protección celular",
                  body: "Al reducir el estrés oxidativo, el ajo negro protege las células inmunitarias de la oxidación, manteniendo su funcionalidad durante más tiempo y en condiciones más adversas.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-white/10 p-8 bg-white/[0.02]">
                  <div className="w-8 h-px bg-earth mb-6" />
                  <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                  <p className="text-white/45 font-sans text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferencias entre ajo negro y ajo blanco */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Comparación</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Diferencias entre Ajo Negro y Ajo Blanco</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-6" />
              <p className="text-charcoal/45 max-w-xl mx-auto font-sans leading-relaxed">
                Ambos parten del mismo ingrediente, pero el proceso de fermentación transforma casi por completo sus propiedades organolépticas y nutricionales.
              </p>
            </div>
            <div className="border border-charcoal/[0.07]">
              <div className="grid grid-cols-3 bg-charcoal text-white">
                <div className="p-5 text-[10px] tracking-[0.2em] uppercase font-sans text-white/40"></div>
                <div className="p-5 text-[11px] tracking-[0.2em] uppercase font-sans text-white/60 border-l border-white/10">Ajo blanco</div>
                <div className="p-5 text-[11px] tracking-[0.2em] uppercase font-sans text-earth-light border-l border-white/10">Ajo negro</div>
              </div>
              {COMPARISON.map((row, i) => (
                <div key={row.label} className={`grid grid-cols-3 border-t border-charcoal/[0.07] ${i % 2 === 0 ? "bg-cream" : "bg-warm-white"}`}>
                  <div className="p-5 text-[11px] tracking-[0.15em] uppercase font-sans text-charcoal/40">{row.label}</div>
                  <div className="p-5 text-sm font-sans text-charcoal/55 border-l border-charcoal/[0.07]">{row.blanco}</div>
                  <div className="p-5 text-sm font-sans text-charcoal font-medium border-l border-charcoal/[0.07]">{row.negro}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo consumir ajo negro */}
        <section className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Uso diario</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Cómo Consumir Ajo Negro</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-6" />
              <p className="text-charcoal/45 max-w-xl mx-auto font-sans leading-relaxed">
                Su sabor suave y umami lo hace extraordinariamente versátil. Desde el consumo directo hasta preparaciones de alta gastronomía, se adapta a cualquier estilo de alimentación.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {USES.map((u) => (
                <div key={u.title} className="border-t border-charcoal/[0.08] pt-8">
                  <h3 className="font-serif text-xl mb-3">{u.title}</h3>
                  <p className="text-charcoal/55 font-sans text-sm leading-relaxed">{u.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Links internos */}
        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/para-que-sirve-el-ajo-negro" className="group flex items-center justify-between border border-charcoal/[0.08] p-8 lg:p-10 bg-warm-white hover:shadow-lg hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-2">Guía relacionada</p>
                  <p className="font-serif text-xl group-hover:text-earth transition-colors duration-300">¿Para qué sirve el ajo negro?</p>
                  <p className="text-charcoal/45 font-sans text-sm mt-2">Usos en salud, cocina y preguntas frecuentes.</p>
                </div>
                <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 font-sans text-xl shrink-0 ml-6">→</span>
              </Link>
              <Link href="/como-consumir-ajo-negro" className="group flex items-center justify-between border border-charcoal/[0.08] p-8 lg:p-10 bg-warm-white hover:shadow-lg hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-2">Guía relacionada</p>
                  <p className="font-serif text-xl group-hover:text-earth transition-colors duration-300">¿Cómo consumir ajo negro?</p>
                  <p className="text-charcoal/45 font-sans text-sm mt-2">Dosis, formas de uso, ayunas y recetas.</p>
                </div>
                <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 font-sans text-xl shrink-0 ml-6">→</span>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Link href="/ajo-negro-para-bajar-de-peso" className="group flex items-center justify-between border border-charcoal/[0.08] p-8 lg:p-10 bg-warm-white hover:shadow-lg hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-2">Salud</p>
                  <p className="font-serif text-xl group-hover:text-earth transition-colors duration-300">Ajo negro para bajar de peso</p>
                  <p className="text-charcoal/45 font-sans text-sm mt-2">Cómo ayuda a adelgazar, por qué funciona y cómo tomarlo.</p>
                </div>
                <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 font-sans text-xl shrink-0 ml-6">→</span>
              </Link>
              <Link href="/ajo-negro-vs-ajo-normal" className="group flex items-center justify-between border border-charcoal/[0.08] p-8 lg:p-10 bg-warm-white hover:shadow-lg hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-2">Comparativa</p>
                  <p className="font-serif text-xl group-hover:text-earth transition-colors duration-300">Ajo negro vs ajo normal: diferencias clave</p>
                  <p className="text-charcoal/45 font-sans text-sm mt-2">Sabor, antioxidantes, digestión y cuál conviene según el objetivo.</p>
                </div>
                <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 font-sans text-xl shrink-0 ml-6">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">FAQ</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Preguntas Frecuentes sobre el Ajo Negro</h2>
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
            <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">Ajo Negro Austral · Patagonia Chilena</p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">
              Pruébalo directo
              <br />
              <span className="text-earth-light">desde el origen</span>.
            </h2>
            <div className="w-12 h-px bg-earth mx-auto mb-8" />
            <p className="text-white/45 font-sans leading-relaxed max-w-md mx-auto mb-12">
              Producido artesanalmente en Futaleufú. Bolsas de 60 g y 100 g para consumo personal, y pedidos mayoristas para restaurantes y tiendas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/productos" className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal font-sans text-sm tracking-widest uppercase hover:bg-earth-light transition-colors duration-300">
                Ver productos
              </Link>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white/70 font-sans text-sm tracking-widest uppercase hover:border-white/50 hover:text-white transition-colors duration-300">
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
