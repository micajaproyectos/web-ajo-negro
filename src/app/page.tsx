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
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
