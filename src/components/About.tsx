const FACTS = [
  { value: "Sur", label: "Origen patagónico" },
  { value: "Umami", label: "Sabor profundo" },
  { value: "Gourmet", label: "Uso versátil" },
];

export default function About() {
  return (
    <section id="nosotros" className="py-28 lg:py-36 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual element */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-charcoal overflow-hidden relative">
              <div className="absolute inset-6 sm:inset-8 border border-white/10 flex flex-col items-center justify-center text-center p-8">
                <p className="text-earth-light tracking-[0.3em] uppercase text-[10px] mb-6 font-sans">
                  Patagonia Chilena
                </p>
                <div className="w-16 h-px bg-earth/40 mb-6" />
                <h3 className="font-serif text-white text-3xl lg:text-4xl leading-tight mb-2">
                  Ajo Negro
                </h3>
                <h3 className="font-serif text-white/60 text-3xl lg:text-4xl leading-tight mb-6">
                  Austral
                </h3>
                <div className="w-16 h-px bg-earth/40 mb-6" />
                <p className="text-white/25 text-[10px] tracking-[0.25em] uppercase font-sans">
                  Elegante · De campo
                </p>
              </div>

              <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>

            <div className="absolute -bottom-3 -right-3 w-2/3 h-20 bg-earth/10 -z-10" />
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">
              Nuestra historia
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-[1.12]">
              Campo, paciencia
              <br />y un acabado{" "}
              <span className="text-earth">elegante</span>.
            </h2>

            <div className="space-y-5 text-charcoal/55 font-sans leading-relaxed mb-14">
              <p>
                Cultivamos ajo en la Patagonia Chilena, donde el clima frío y la
                tierra volcánica entregan un bulbo con carácter único. Luego lo
                transformamos con un proceso de maduración controlada de varias
                semanas.
              </p>
              <p>
                El resultado es un ajo negro de textura suave, notas dulces y un
                profundo sabor umami. Un producto que nace del campo y se
                presenta con la elegancia que merece.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-charcoal/[0.06] pt-8">
              {FACTS.map((fact) => (
                <div key={fact.value}>
                  <div className="font-serif text-2xl text-charcoal mb-1">
                    {fact.value}
                  </div>
                  <div className="text-[10px] text-charcoal/35 tracking-[0.15em] uppercase font-sans">
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
