const PRODUCTS = [
  {
    label: "Más elegido",
    name: "Bolsa 60 g",
    desc: "Formato ideal para descubrir y regalar.",
    cta: "Comprar",
    featured: true,
  },
  {
    label: "Formato familia",
    name: "Bolsa 100 g",
    desc: "Más rendimiento para tu cocina diaria.",
    cta: "Comprar",
    featured: false,
  },
  {
    label: "Para negocios",
    name: "Mayorista",
    desc: "Restaurantes, tiendas y distribuidores.",
    cta: "Cotizar",
    featured: false,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-charcoal text-white overflow-hidden">
      {/* Hero background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/hero-ajo-negro.mp4" type="video/mp4" />
      </video>

      {/* Contrast overlay for readability */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center w-full">
          {/* Copy */}
          <div>
            <p className="text-earth-light tracking-[0.3em] uppercase text-[11px] mb-8 font-sans">
              Ajo negro premium · Patagonia Chilena
            </p>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-8">
              Sabor único
              <br />
              <span className="text-earth-light">del sur</span>.
            </h1>

            <div className="w-16 h-px bg-earth mb-8" />

            <p className="text-lg text-white/50 max-w-md mb-12 leading-relaxed font-sans">
              Ajo cultivado en la Patagonia Chilena, transformado con un proceso
              de maduración que realza sus notas dulces y umami. Refinado y de
              campo.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#productos"
                className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal font-sans text-sm tracking-widest uppercase hover:bg-earth-light transition-colors duration-300"
              >
                Ver productos
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white/70 font-sans text-sm tracking-widest uppercase hover:border-white/50 hover:text-white transition-colors duration-300"
              >
                Contáctanos
              </a>
            </div>
          </div>

          {/* Product cards */}
          <div className="flex flex-col gap-4">
            {PRODUCTS.map((p) => (
              <div
                key={p.name}
                className={`group relative border p-6 sm:p-7 transition-all duration-300 hover:bg-white/[0.03] ${
                  p.featured
                    ? "border-earth/30 bg-white/[0.02]"
                    : "border-white/[0.07]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-earth-light/80 mb-2 font-sans">
                      {p.label}
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl mb-1">
                      {p.name}
                    </h3>
                    <p className="text-white/40 text-sm font-sans">{p.desc}</p>
                  </div>
                  <a
                    href="#contacto"
                    className="shrink-0 mt-1 text-[11px] tracking-widest uppercase border border-white/15 px-5 py-2.5 hover:bg-white hover:text-charcoal transition-colors duration-300 font-sans"
                  >
                    {p.cta}
                  </a>
                </div>

                {p.featured && (
                  <div className="absolute top-0 right-0 w-1 h-full bg-earth" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient transition to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
