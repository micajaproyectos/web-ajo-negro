import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
      name: "¿Qué es el ajo negro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro es ajo blanco sometido a un proceso de fermentación controlada durante semanas a temperatura y humedad constantes. Este proceso transforma los dientes de ajo en un producto de color negro, sabor dulce y umami, con una concentración mucho mayor de antioxidantes que el ajo fresco.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son los beneficios del ajo negro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro contiene hasta el doble de antioxidantes que el ajo blanco, principalmente S-alilcisteína (SAC). Entre sus beneficios destacan el apoyo al sistema inmune, propiedades antiinflamatorias, mejora de la circulación, reducción del colesterol LDL y efecto prebiótico. Además, al ser fermentado, es mejor tolerado por quienes son sensibles al ajo crudo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se produce el ajo negro Austral?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nuestro ajo negro se produce artesanalmente en Futaleufú, Patagonia Chilena, mediante fermentación a temperatura y humedad controladas durante varias semanas. Usamos ajo seleccionado cultivado en la Patagonia, sin aditivos ni conservantes, respetando un proceso 100% natural.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el ajo negro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las bolsas individuales tienen un precio de $1.800 CLP (60 g) y $3.400 CLP (100 g). Para pedidos mayoristas de 20 o más unidades (60 g o 100 g), el precio es de $27.500 por kilo. Envío a todo Chile por Starken o Bluexpress.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hacen envíos a todo Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, despachamos a todo Chile a través de Starken y Bluexpress. El tiempo de entrega varía según la región. Para coordinar tu pedido y calcular el flete, contáctanos directamente por WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el mínimo para pedidos mayoristas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El mínimo para pedidos mayoristas es de 20 unidades, ya sea de bolsas de 60 g, de 100 g, o una combinación de ambas. El precio mayorista es de $27.500 por kilo. Ideal para restaurantes, tiendas de productos naturales y revendedores.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se conserva el ajo negro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ajo negro se conserva en un lugar fresco y seco, alejado de la luz directa. Una vez abierto, se recomienda guardarlo en refrigeración. Tiene una vida útil de varios meses sin necesidad de conservantes gracias al proceso de fermentación.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué se diferencia el ajo negro del ajo blanco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A diferencia del ajo blanco, el ajo negro tiene un sabor suave, dulce y con notas de umami, sin el picor ni el olor intenso del ajo crudo. Nutricionalmente, su proceso de fermentación potencia los compuestos bioactivos, especialmente la S-alilcisteína (SAC), haciéndolo más fácil de digerir y con mayor concentración de antioxidantes.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <Products />
        <About />

        {/* Links de contenido */}
        <section className="py-16 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "¿Para qué sirve el ajo negro?", href: "/para-que-sirve-el-ajo-negro" },
                { label: "Beneficios y propiedades", href: "/beneficios-ajo-negro" },
                { label: "¿Cómo consumirlo?", href: "/como-consumir-ajo-negro" },
                { label: "Ajo negro vs ajo normal", href: "/ajo-negro-vs-ajo-normal" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="group flex items-center justify-between border border-charcoal/[0.07] p-6 bg-cream hover:shadow-md hover:shadow-charcoal/[0.04] transition-shadow duration-500">
                  <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-earth font-sans mb-2">Guía</p>
                    <p className="font-serif text-base group-hover:text-earth transition-colors duration-300">{item.label}</p>
                  </div>
                  <span className="text-charcoal/25 group-hover:text-earth transition-colors duration-300 font-sans shrink-0 ml-4">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 lg:py-36">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Preguntas frecuentes</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Lo que nos preguntan</h2>
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

        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
