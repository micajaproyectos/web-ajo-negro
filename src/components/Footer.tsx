import Image from "next/image";

const NAV_LINKS = [
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contáctanos", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-12 items-start mb-16">
          {/* Brand */}
          <div>
            <a href="#" aria-label="Ajo Negro Austral" className="inline-block mb-4">
              <Image
                src="/logo-ajo-austral.png"
                alt="Logo Ajo Negro Austral"
                width={180}
                height={44}
                className="h-8 w-auto"
              />
            </a>
            <p className="text-white/25 text-sm font-sans leading-relaxed max-w-[220px]">
              Ajo negro cultivado en la Patagonia Chilena. Sabor único del sur.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-5 font-sans">
              Navegación
            </h4>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/40 hover:text-white/80 transition-colors text-sm font-sans"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-5 font-sans">
              Contacto
            </h4>
            <div className="flex flex-col gap-3 text-sm font-sans">
              <a
                href="#"
                className="text-white/40 hover:text-white/80 transition-colors"
              >
                +56 9 8566 0954
              </a>
              <a
                href="mailto:contacto@amconsultora.cl"
                className="text-white/40 hover:text-white/80 transition-colors"
              >
                contacto@amconsultora.cl
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/15 text-xs font-sans">
            &copy; 2026 Ajo Negro Austral. Todos los derechos reservados.
          </p>
          <p className="text-white/15 text-xs font-sans">
            Patagonia Chilena
          </p>
        </div>
      </div>
    </footer>
  );
}
