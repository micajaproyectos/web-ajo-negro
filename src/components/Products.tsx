 "use client";

import Image from "next/image";
import { useState } from "react";

const PRODUCTS = [
  {
    name: "Bolsa 60 g",
    subtitle: "Ideal para primeros usos",
    features: [
      "Formato práctico y elegante",
      "Perfecta para regalos gourmet",
      "Recomendada para degustación",
    ],
    cta: "Comprar 60 g",
    highlight: false,
    image: "/productos/bolsa-60g.png",
  },
  {
    name: "Bolsa 100 g",
    subtitle: "Más para cocinar y compartir",
    features: [
      "Mayor rendimiento por compra",
      "Cocina diaria con toque gourmet",
      "Ideal para preparaciones y salsas",
    ],
    cta: "Comprar 100 g",
    highlight: true,
    image: "/productos/bolsa-100g.png",
  },
  {
    name: "Pedidos mayoristas",
    subtitle: "Volumen y continuidad para tu negocio",
    features: [
      "Restaurantes y hoteles",
      "Tiendas gourmet y distribuidores",
      "Condiciones según volumen",
    ],
    cta: "Solicitar cotización",
    highlight: false,
    image: "/productos/mayorista.png",
    backgroundImage: "/productos/fondo-productos.png",
  },
];

export default function Products() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section id="productos" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">
            Nuestros productos
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl mb-6">
            Tres formas de llevarlo
          </h2>
          <div className="w-12 h-px bg-earth mx-auto mb-6" />
          <p className="text-charcoal/45 max-w-lg mx-auto font-sans leading-relaxed">
            Ajo negro de la Patagonia Chilena en el formato que necesites:
            personal, familiar o para tu negocio.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className={`group relative flex flex-col transition-all duration-500 ${
                p.highlight
                  ? "bg-charcoal text-white shadow-2xl shadow-charcoal/20 md:-translate-y-4"
                  : p.name === "Pedidos mayoristas"
                    ? "text-white shadow-lg shadow-charcoal/20"
                  : "bg-warm-white border border-charcoal/[0.05] hover:shadow-lg hover:shadow-charcoal/[0.04]"
              }`}
              style={
                p.name === "Pedidos mayoristas"
                  ? {
                      backgroundImage: "url('/productos/fondo-productos.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : undefined
              }
            >
              {p.name === "Pedidos mayoristas" && (
                <div className="absolute inset-0 bg-charcoal/65" aria-hidden="true" />
              )}

              <div
                className={`relative h-px w-full ${
                  p.highlight ? "bg-earth" : "bg-charcoal/[0.08]"
                }`}
              />

              <div
                className={`relative mx-6 mt-6 overflow-hidden ${
                  p.highlight ? "bg-white/[0.04]" : "bg-charcoal/[0.03]"
                }`}
              >
                {p.image && !failedImages[p.name] ? (
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-5"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [p.name]: true }))
                      }
                    />
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        boxShadow: "inset 0 0 40px 18px rgba(0, 0, 0, 0.22)",
                      }}
                      aria-hidden="true"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] flex items-center justify-center">
                    <span
                      className={`font-serif text-lg ${
                        p.highlight ? "text-white/35" : "text-charcoal/35"
                      }`}
                    >
                      Mayorista
                    </span>
                  </div>
                )}
              </div>

              <div className="relative flex flex-col flex-1 p-8 lg:p-10">
                <div className="mb-8">
                  <h3 className="font-serif text-2xl lg:text-3xl mb-2">
                    {p.name}
                  </h3>
                  <p
                    className={`text-sm font-sans ${
                      p.highlight || p.name === "Pedidos mayoristas"
                        ? "text-white/70"
                        : "text-charcoal/35"
                    }`}
                  >
                    {p.subtitle}
                  </p>
                </div>

                <ul className="flex-1 space-y-4 mb-10">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm font-sans"
                    >
                      <span
                        className={`mt-1.5 block w-1.5 h-1.5 rounded-full shrink-0 ${
                          p.highlight ? "bg-earth-light" : "bg-earth"
                        }`}
                      />
                      <span
                        className={
                          p.highlight || p.name === "Pedidos mayoristas"
                            ? "text-white/85"
                            : "text-charcoal/55"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`inline-flex items-center justify-center px-6 py-3.5 text-sm tracking-widest uppercase font-sans transition-colors duration-300 ${
                    p.highlight
                      ? "bg-white text-charcoal hover:bg-earth-light"
                      : p.name === "Pedidos mayoristas"
                        ? "bg-white text-charcoal hover:bg-earth-light"
                      : "bg-charcoal text-white hover:bg-earth-dark"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
