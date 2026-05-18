import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BASE_URL = "https://ajonegroaustral.cl";
const WA_URL = `https://api.whatsapp.com/send/?phone=56974348843&text=${encodeURIComponent("Hola. Me gustaría saber más sobre el ajo negro Austral.")}&type=phone_number&app_absent=0`;

export const metadata: Metadata = {
  title: "Ajo Negro vs Ajo Normal: Diferencias Clave y Beneficios",
  description:
    "Comparativa entre ajo negro y ajo normal: diferencias de sabor, antioxidantes, digestión y usos. Descubre cuál conviene según tu objetivo.",
  alternates: { canonical: `${BASE_URL}/ajo-negro-vs-ajo-normal` },
  openGraph: {
    title: "Ajo Negro vs Ajo Normal: Diferencias Clave y Beneficios",
    description:
      "Comparativa completa: sabor, antioxidantes, digestión y usos del ajo negro versus el ajo normal.",
    url: `${BASE_URL}/ajo-negro-vs-ajo-normal`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿En qué se diferencia el ajo negro del ajo normal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro es ajo blanco sometido a un proceso de fermentación controlada durante varias semanas. Ese proceso transforma su color (de blanco a negro), su sabor (de picante a dulce y umami), su textura (de firme a suave y cremosa) y su composición nutricional, concentrando antioxidantes y eliminando los compuestos responsables del olor intenso.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ajo negro tiene más beneficios que el ajo blanco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro y el ajo blanco tienen perfiles de beneficios distintos, no necesariamente uno superior al otro. El ajo negro destaca por su mayor concentración de antioxidantes (especialmente S-alilcisteína) y su mejor tolerancia digestiva. El ajo blanco crudo tiene mayor contenido de alicina activa, que se pierde en parte durante la fermentación. Ambos son alimentos con propiedades documentadas.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ajo negro huele igual que el ajo normal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La fermentación transforma la alicina, el compuesto responsable del olor fuerte e intenso del ajo crudo, en compuestos más estables como la S-alilcisteína. El resultado es un ajo prácticamente sin olor, que no genera aliento posterior y es mucho más cómodo de consumir a diario.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es mejor tomar ajo negro o ajo blanco crudo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del objetivo y la tolerancia personal. El ajo blanco crudo tiene alta concentración de alicina con efecto antimicrobiano potente, pero puede irritar la mucosa gástrica y generar olor. El ajo negro es más fácil de consumir diariamente, tiene mayor biodisponibilidad de antioxidantes y no produce olor ni molestias digestivas. Para consumo regular y sostenido, el ajo negro suele ser más práctico.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede reemplazar el ajo normal por ajo negro en recetas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, aunque hay que considerar que aporta sabores distintos. El ajo negro tiene un perfil dulce y umami, no picante, por lo que complementa en lugar de reemplazar directamente al ajo crudo. Funciona especialmente bien en aderezos, salsas oscuras, pastas, risottos y carnes, donde aporta profundidad sin el picor del ajo fresco.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ajo negro es ajo fermentado o tiene aditivos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro es ajo blanco fermentado de forma natural, sin aditivos, colorantes ni conservantes. El color negro y la textura suave son resultado exclusivo del proceso de fermentación controlada a temperatura y humedad constantes durante varias semanas. No se añade ningún ingrediente externo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto ajo negro equivale a un diente de ajo normal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No existe una equivalencia exacta porque sus perfiles de compuestos activos son distintos. Para uso como complemento de salud, la dosis habitual es de 1 a 3 dientes de ajo negro al día. Para uso culinario, un diente de ajo negro puede reemplazar a 1 o 2 dientes de ajo normal dependiendo del plato y el efecto deseado.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Ajo negro vs ajo normal", item: `${BASE_URL}/ajo-negro-vs-ajo-normal` },
  ],
};

const COMPARISON = [
  { label: "Color", normal: "Blanco marfil", negro: "Negro intenso" },
  { label: "Sabor", normal: "Picante, fuerte", negro: "Dulce, suave, umami" },
  { label: "Olor", normal: "Intenso, persistente", negro: "Prácticamente nulo" },
  { label: "Textura", normal: "Firme, crujiente", negro: "Suave, cremosa" },
  { label: "Antioxidantes (ORAC)", normal: "Nivel base", negro: "Hasta 2× más alto" },
  { label: "S-alilcisteína (SAC)", normal: "Baja biodisponibilidad", negro: "Alta biodisponibilidad" },
  { label: "Alicina activa", normal: "Alta (cuando se tritura)", negro: "Reducida por fermentación" },
  { label: "Tolerancia digestiva", normal: "Puede causar molestias", negro: "Fácil de digerir" },
  { label: "Aliento posterior", normal: "Sí, marcado", negro: "No" },
  { label: "Conservación", normal: "Semanas en lugar fresco", negro: "Meses sin refrigeración" },
];

const OBJETIVOS = [
  {
    objetivo: "Consumo diario como hábito de salud",
    recomendado: "Ajo negro",
    razon: "Sin olor ni molestias, fácil de mantener en el tiempo. Mayor biodisponibilidad de antioxidantes.",
  },
  {
    objetivo: "Efecto antimicrobiano puntual",
    recomendado: "Ajo blanco crudo",
    razon: "Tiene mayor concentración de alicina activa, compuesto asociado al efecto antimicrobiano directo.",
  },
  {
    objetivo: "Apoyo cardiovascular sostenido",
    recomendado: "Ajo negro",
    razon: "La S-alilcisteína (SAC) está asociada en estudios observacionales a mejoras en el perfil lipídico y la presión arterial.",
  },
  {
    objetivo: "Cocina cotidiana",
    recomendado: "Ajo blanco",
    razon: "Sabor más potente y versátil para recetas tradicionales. El ajo negro complementa mejor en preparaciones gourmet.",
  },
  {
    objetivo: "Personas con estómago sensible",
    recomendado: "Ajo negro",
    razon: "La fermentación reduce los fructanos que pueden causar molestias gastrointestinales. Mejor tolerado que el ajo crudo.",
  },
  {
    objetivo: "Alta cocina y sabores umami",
    recomendado: "Ajo negro",
    razon: "Perfil de sabor dulce y umami que potencia platos sin opacar otros ingredientes. Muy valorado en gastronomía.",
  },
];

export default function AjoNegroVsAjoNormalPage() {
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
              <span className="text-white/50">Ajo negro vs ajo normal</span>
            </nav>
            <div className="max-w-2xl">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-6 font-sans">
                Comparativa · Ajo Negro Austral
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-8">
                Ajo Negro vs
                <br />
                <span className="text-earth-light">Ajo Normal</span>.
              </h1>
              <div className="w-16 h-px bg-earth mb-8" />
              <p className="text-lg text-white/50 leading-relaxed font-sans mb-12">
                Parten del mismo ingrediente, pero el proceso de fermentación los transforma profundamente.
                Diferente color, diferente sabor, diferente composición y diferentes usos. Una comparativa
                honesta sin exagerar ninguno de los dos.
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
              <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-4">Diferencia principal</p>
              <p className="font-serif text-2xl lg:text-3xl text-charcoal leading-relaxed mb-6">
                El ajo negro es ajo blanco fermentado. Ese proceso cambia su color, sabor, textura y composición: concentra antioxidantes, elimina el olor y mejora la tolerancia digestiva.
              </p>
              <p className="text-charcoal/55 font-sans leading-relaxed">
                No son alimentos opuestos ni uno reemplaza al otro. Tienen perfiles de compuestos activos distintos y usos complementarios. La elección depende del objetivo, el contexto de uso y la tolerancia personal.
              </p>
            </div>
          </div>
        </section>

        {/* Qué es el ajo negro */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Origen</p>
                <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-[1.12]">
                  ¿Qué es
                  <br />
                  <span className="text-earth">el ajo negro?</span>
                </h2>
                <p className="text-charcoal/60 font-sans leading-relaxed mb-6">
                  El ajo negro es ajo blanco convencional sometido a un proceso de fermentación controlada durante varias semanas, a temperatura y humedad constantes. No intervienen aditivos, colorantes ni conservantes: el cambio es completamente natural.
                </p>
                <p className="text-charcoal/60 font-sans leading-relaxed mb-6">
                  Durante ese proceso, las reacciones de Maillard y enzimáticas transforman los azúcares y aminoácidos del ajo, produciendo el color negro oscuro, la textura suave y el sabor dulce con notas de umami. Al mismo tiempo, los compuestos organosulfurados se reorganizan, convirtiendo parte de la alicina en <strong className="text-charcoal font-medium">S-alilcisteína (SAC)</strong>, un antioxidante estable y altamente biodisponible.
                </p>
                <p className="text-charcoal/60 font-sans leading-relaxed">
                  El resultado es un alimento que comparte el origen vegetal del ajo fresco pero tiene propiedades organolépticas y nutricionales distintas.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "3–4 sem.", label: "Proceso de fermentación" },
                  { stat: "0", label: "Aditivos o conservantes" },
                  { stat: "SAC", label: "Compuesto antioxidante clave" },
                  { stat: "100%", label: "Origen natural" },
                ].map((item) => (
                  <div key={item.label} className="bg-cream border border-charcoal/[0.05] p-8 text-center">
                    <p className="font-serif text-4xl text-earth mb-3">{item.stat}</p>
                    <p className="text-[11px] tracking-[0.15em] uppercase text-charcoal/40 font-sans leading-relaxed">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tabla comparativa */}
        <section className="py-28 lg:py-36">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Comparativa</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Diferencias entre Ajo Negro y Ajo Normal</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-6" />
              <p className="text-charcoal/45 max-w-xl mx-auto font-sans leading-relaxed">
                Una mirada objetiva a las diferencias más relevantes. Ni uno ni otro es "mejor" en términos absolutos: depende del contexto de uso.
              </p>
            </div>
            <div className="border border-charcoal/[0.07]">
              <div className="grid grid-cols-3 bg-charcoal text-white">
                <div className="p-5 text-[10px] tracking-[0.2em] uppercase font-sans text-white/40"></div>
                <div className="p-5 text-[11px] tracking-[0.2em] uppercase font-sans text-white/60 border-l border-white/10">Ajo normal</div>
                <div className="p-5 text-[11px] tracking-[0.2em] uppercase font-sans text-earth-light border-l border-white/10">Ajo negro</div>
              </div>
              {COMPARISON.map((row, i) => (
                <div key={row.label} className={`grid grid-cols-3 border-t border-charcoal/[0.07] ${i % 2 === 0 ? "bg-cream" : "bg-warm-white"}`}>
                  <div className="p-5 text-[11px] tracking-[0.15em] uppercase font-sans text-charcoal/40">{row.label}</div>
                  <div className="p-5 text-sm font-sans text-charcoal/55 border-l border-charcoal/[0.07]">{row.normal}</div>
                  <div className="p-5 text-sm font-sans text-charcoal font-medium border-l border-charcoal/[0.07]">{row.negro}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sabor y textura */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Experiencia sensorial</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Sabor y Textura</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-6" />
              <p className="text-charcoal/45 max-w-xl mx-auto font-sans leading-relaxed">
                La diferencia más evidente entre los dos. Quien los prueba por primera vez generalmente se sorprende: no parecen el mismo ingrediente.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="border border-charcoal/[0.07] p-8 lg:p-10 bg-cream">
                <p className="text-[10px] tracking-[0.25em] uppercase text-charcoal/35 font-sans mb-6">Ajo normal</p>
                <div className="space-y-5">
                  {[
                    { label: "Sabor", val: "Picante, intenso y persistente. Aumenta al triturarlo por liberación de alicina." },
                    { label: "Textura", val: "Firme y crujiente en crudo. Suaviza al cocinar." },
                    { label: "Olor", val: "Fuerte e inconfundible. Persiste en el aliento varias horas después del consumo." },
                    { label: "Uso crudo", val: "Requiere dosificarse con cuidado. Puede resultar invasivo para estómagos sensibles." },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <span className="text-[10px] tracking-[0.15em] uppercase font-sans text-charcoal/30 shrink-0 w-16 mt-0.5">{item.label}</span>
                      <p className="text-sm font-sans text-charcoal/55 leading-relaxed">{item.val}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-earth/30 p-8 lg:p-10 bg-cream">
                <p className="text-[10px] tracking-[0.25em] uppercase text-earth/80 font-sans mb-6">Ajo negro</p>
                <div className="space-y-5">
                  {[
                    { label: "Sabor", val: "Dulce, suave y con notas de umami. Recuerda al balsámico o la melaza, sin picor." },
                    { label: "Textura", val: "Suave, cremosa y algo pegajosa. Se funde fácilmente en aderezos y preparaciones." },
                    { label: "Olor", val: "Prácticamente nulo. No genera aliento posterior, lo que facilita el consumo diario." },
                    { label: "Uso crudo", val: "Listo para comer directamente de la bolsa, sin preparación ni dosificación cuidadosa." },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <span className="text-[10px] tracking-[0.15em] uppercase font-sans text-charcoal/30 shrink-0 w-16 mt-0.5">{item.label}</span>
                      <p className="text-sm font-sans text-charcoal/55 leading-relaxed">{item.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios antioxidantes */}
        <section className="py-28 lg:py-36 bg-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Antioxidantes</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Beneficios Antioxidantes</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-8" />
              <p className="text-white/50 font-sans leading-relaxed">
                Tanto el ajo blanco como el negro contienen compuestos con actividad antioxidante. La fermentación transforma y concentra algunos de ellos, cambiando el perfil de beneficios.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "S-alilcisteína (SAC)",
                  body: "Presente en ambos, pero en mayor concentración y biodisponibilidad en el ajo negro. Estudios observacionales la asocian con la reducción del estrés oxidativo celular y el apoyo al perfil lipídico.",
                },
                {
                  title: "Capacidad ORAC",
                  body: "La fermentación puede aumentar la capacidad antioxidante total (ORAC) del ajo negro respecto al ajo blanco fresco. Los datos varían según estudios, pero la tendencia documentada indica valores más altos en el ajo fermentado.",
                },
                {
                  title: "Alicina y derivados",
                  body: "El ajo blanco crudo tiene alta concentración de alicina activa al triturarlo, asociada a propiedades antimicrobianas. La fermentación la convierte en SAC y otros compuestos estables, con un perfil antioxidante distinto.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-white/10 p-8 bg-white/[0.02]">
                  <div className="w-8 h-px bg-earth mb-6" />
                  <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                  <p className="text-white/45 font-sans text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-white/20 text-xs font-sans mt-10 max-w-xl mx-auto">
              Los datos sobre antioxidantes provienen de estudios observacionales y de laboratorio. Ninguno de los dos alimentos es un medicamento ni reemplaza tratamientos médicos.
            </p>
          </div>
        </section>

        {/* Digestión y tolerancia */}
        <section className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div>
                <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Digestión</p>
                <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-[1.12]">
                  Digestión y
                  <br />
                  <span className="text-earth">tolerancia</span>
                </h2>
                <p className="text-charcoal/60 font-sans leading-relaxed mb-6">
                  Una de las razones más frecuentes por las que las personas abandonan el ajo crudo como complemento es la intolerancia digestiva: ardor, reflujo, flatulencias o simplemente el olor que persiste.
                </p>
                <p className="text-charcoal/60 font-sans leading-relaxed mb-6">
                  El ajo blanco contiene fructanos, un tipo de fibra fermentable que puede causar molestias en personas con síndrome de intestino irritable o sensibilidad a los FODMAPs. La fermentación del ajo negro reduce significativamente ese contenido.
                </p>
                <p className="text-charcoal/60 font-sans leading-relaxed">
                  Además, la alicina del ajo crudo puede irritar la mucosa gástrica si se consume en ayunas o en cantidades elevadas. El ajo negro, al haberla transformado en otros compuestos durante la fermentación, es considerablemente más suave y puede consumirse cómodamente en ayunas.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    grupo: "Personas con estómago sensible",
                    recomendacion: "Ajo negro",
                    detalle: "Menor contenido de fructanos y sin alicina irritante. Generalmente bien tolerado incluso en ayunas.",
                  },
                  {
                    grupo: "Personas con síndrome de intestino irritable",
                    recomendacion: "Ajo negro con precaución",
                    detalle: "Mejor opción que el ajo blanco, pero conviene comenzar con dosis pequeñas y evaluar tolerancia individual.",
                  },
                  {
                    grupo: "Personas sin sensibilidades digestivas",
                    recomendacion: "Ambos",
                    detalle: "Pueden consumir ajo blanco y ajo negro sin restricciones. La elección depende del objetivo y la preferencia de sabor.",
                  },
                  {
                    grupo: "Personas con reflujo gastroesofágico",
                    recomendacion: "Consultar con médico",
                    detalle: "El ajo en general puede agravar el reflujo en algunas personas. Antes de incorporarlo como suplemento, es recomendable consultarlo.",
                  },
                ].map((item) => (
                  <div key={item.grupo} className="border border-charcoal/[0.07] p-6 bg-warm-white">
                    <p className="text-[10px] tracking-[0.2em] uppercase font-sans text-charcoal/30 mb-2">{item.grupo}</p>
                    <p className="font-sans text-sm font-medium text-charcoal mb-2">{item.recomendacion}</p>
                    <p className="font-sans text-sm text-charcoal/45 leading-relaxed">{item.detalle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cómo consumir cada uno */}
        <section className="py-28 lg:py-36 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Uso práctico</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Cómo Consumir Cada Uno</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-6" />
              <p className="text-charcoal/45 max-w-xl mx-auto font-sans leading-relaxed">
                Tienen formas de uso distintas en cocina y como complemento de alimentación. Conocer las diferencias ayuda a aprovechar mejor cada uno.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-cream border border-charcoal/[0.05] p-8 lg:p-10">
                <h3 className="font-serif text-2xl mb-8">Ajo normal</h3>
                <div className="space-y-5">
                  {[
                    { uso: "Crudo triturado", detalle: "Máximo contenido de alicina. Para aderezos, guacamoles o incorporado a último minuto en platos fríos." },
                    { uso: "Sofrito", detalle: "La forma más habitual en cocina. Cambia su sabor al cocinarse, haciéndose más suave y dulce." },
                    { uso: "Asado entero", detalle: "Pierde parte de sus compuestos pero gana en sabor. Textura cremosa, similar paradójicamente al ajo negro." },
                    { uso: "Como complemento", detalle: "1 diente crudo en ayunas, triturado con agua fría. Efectivo pero difícil de mantener por el olor y el ardor." },
                  ].map((item) => (
                    <div key={item.uso} className="flex gap-4">
                      <span className="text-earth/60 mt-1 shrink-0">—</span>
                      <div>
                        <p className="text-sm font-medium font-sans text-charcoal mb-1">{item.uso}</p>
                        <p className="text-sm font-sans text-charcoal/45 leading-relaxed">{item.detalle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-cream border border-earth/25 p-8 lg:p-10">
                <h3 className="font-serif text-2xl mb-8">Ajo negro</h3>
                <div className="space-y-5">
                  {[
                    { uso: "Directo o con pan", detalle: "Sale de la bolsa listo para comer. Textura suave, sabor dulce. La forma más simple de incorporarlo al día a día." },
                    { uso: "Aderezos y vinagretas", detalle: "Triturado con aceite de oliva y limón. Aporta umami profundo sin el picor del ajo crudo." },
                    { uso: "Incorporado al final en cocina", detalle: "En risottos, pastas o salsas oscuras, añadido fuera del fuego para preservar sus compuestos." },
                    { uso: "Como complemento diario", detalle: "1 a 3 dientes al día, idealmente en ayunas. Sin olor ni molestias: fácil de sostener como hábito." },
                  ].map((item) => (
                    <div key={item.uso} className="flex gap-4">
                      <span className="text-earth mt-1 shrink-0">—</span>
                      <div>
                        <p className="text-sm font-medium font-sans text-charcoal mb-1">{item.uso}</p>
                        <p className="text-sm font-sans text-charcoal/45 leading-relaxed">{item.detalle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/como-consumir-ajo-negro" className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase font-sans text-earth hover:text-charcoal transition-colors">
                Guía completa de cómo consumir ajo negro →
              </Link>
            </div>
          </div>
        </section>

        {/* Cuál conviene según objetivo */}
        <section className="py-28 lg:py-36">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Decisión</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">¿Cuál Conviene según tu Objetivo?</h2>
              <div className="w-12 h-px bg-earth mx-auto mb-6" />
              <p className="text-charcoal/45 max-w-xl mx-auto font-sans leading-relaxed">
                No existe una respuesta única. Cada uno tiene ventajas en contextos distintos.
              </p>
            </div>
            <div className="space-y-0">
              {OBJETIVOS.map((item, i) => (
                <div key={item.objetivo} className={`grid md:grid-cols-3 gap-6 py-7 items-start ${i < OBJETIVOS.length - 1 ? "border-b border-charcoal/[0.06]" : ""}`}>
                  <p className="font-sans text-sm font-medium text-charcoal">{item.objetivo}</p>
                  <p className={`text-sm font-sans font-medium ${item.recomendado.startsWith("Ajo negro") ? "text-earth" : "text-charcoal/70"}`}>
                    {item.recomendado}
                  </p>
                  <p className="text-sm font-sans text-charcoal/45 leading-relaxed">{item.razon}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Links internos */}
        <section className="py-20 lg:py-28 bg-warm-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <p className="text-[10px] tracking-[0.25em] uppercase text-charcoal/30 font-sans mb-8 text-center">Seguir explorando</p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <Link href="/beneficios-ajo-negro"
                className="group flex items-center justify-between border border-charcoal/[0.07] p-6 bg-cream hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-1">Propiedades</p>
                  <p className="font-serif text-base group-hover:text-earth transition-colors duration-300">Beneficios del ajo negro</p>
                </div>
                <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 shrink-0 ml-4">→</span>
              </Link>
              <Link href="/para-que-sirve-el-ajo-negro"
                className="group flex items-center justify-between border border-charcoal/[0.07] p-6 bg-cream hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-1">Usos</p>
                  <p className="font-serif text-base group-hover:text-earth transition-colors duration-300">¿Para qué sirve?</p>
                </div>
                <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 shrink-0 ml-4">→</span>
              </Link>
              <Link href="/como-consumir-ajo-negro"
                className="group flex items-center justify-between border border-charcoal/[0.07] p-6 bg-cream hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-1">Guía de uso</p>
                  <p className="font-serif text-base group-hover:text-earth transition-colors duration-300">¿Cómo consumirlo?</p>
                </div>
                <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 shrink-0 ml-4">→</span>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/productos/bolsa-60g"
                className="group flex items-center justify-between border border-charcoal/[0.07] p-6 bg-cream hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-1">Comprar</p>
                  <p className="font-serif text-base group-hover:text-earth transition-colors duration-300">Bolsa ajo negro 60 g</p>
                </div>
                <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 shrink-0 ml-4">→</span>
              </Link>
              <Link href="/productos/bolsa-100g"
                className="group flex items-center justify-between border border-charcoal/[0.07] p-6 bg-cream hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-1">Comprar</p>
                  <p className="font-serif text-base group-hover:text-earth transition-colors duration-300">Bolsa ajo negro 100 g</p>
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
              Fermentación natural sin aditivos. Producido en Futaleufú. Bolsas de 60 g y 100 g con despacho a todo Chile.
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
