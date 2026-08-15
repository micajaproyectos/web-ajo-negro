import Image from "next/image";
import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/ajonegroaustral";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contáctanos", href: "/#contacto" },
];

const GUIAS_LINKS = [
  { label: "Beneficios del ajo negro", href: "/beneficios-ajo-negro" },
  { label: "¿Para qué sirve?", href: "/para-que-sirve-el-ajo-negro" },
  { label: "Cómo consumirlo", href: "/como-consumir-ajo-negro" },
  { label: "Para bajar de peso", href: "/ajo-negro-para-bajar-de-peso" },
  { label: "En ayunas", href: "/ajo-negro-en-ayunas" },
  { label: "Presión arterial", href: "/ajo-negro-presion-arterial" },
  { label: "Ajo negro vs ajo normal", href: "/ajo-negro-vs-ajo-normal" },
];

const MAYORISTA_LINKS = [
  { label: "Compra mayorista", href: "/ajo-negro-mayorista" },
  { label: "Para restaurantes", href: "/ajo-negro-para-restaurantes" },
  { label: "Para tiendas naturales", href: "/ajo-negro-para-tiendas" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-5 gap-10 items-start mb-16">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="Ajo Negro Austral" className="inline-block mb-4">
              <Image
                src="/logo-ajo-austral.png"
                alt="Logo Ajo Negro Austral"
                width={180}
                height={44}
                className="h-8 w-auto"
              />
            </Link>
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
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/40 hover:text-white/80 transition-colors text-sm font-sans"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Guías */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-5 font-sans">
              Guías
            </h4>
            <nav className="flex flex-col gap-3">
              {GUIAS_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/40 hover:text-white/80 transition-colors text-sm font-sans"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mayorista */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-5 font-sans">
              Mayoristas
            </h4>
            <nav className="flex flex-col gap-3">
              {MAYORISTA_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/40 hover:text-white/80 transition-colors text-sm font-sans"
                >
                  {item.label}
                </Link>
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
                href="https://api.whatsapp.com/send/?phone=56974348843&type=phone_number&app_absent=0"
                className="text-white/40 hover:text-white/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                +56 9 7434 8843
              </a>
              <a
                href="mailto:ajonegroaustral@gmail.com"
                className="text-white/40 hover:text-white/80 transition-colors"
              >
                ajonegroaustral@gmail.com
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Ajo Negro Austral"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07Zm0 6.68a3.16 3.16 0 1 0 0 6.32 3.16 3.16 0 0 0 0-6.32Zm0 5.21a2.05 2.05 0 1 1 0-4.1 2.05 2.05 0 0 1 0 4.1Zm4.02-5.33a.74.74 0 1 1-1.47 0 .74.74 0 0 1 1.47 0Z" />
                </svg>
                @ajonegroaustral
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/15 text-xs font-sans">
            &copy; 2026 Ajo Negro Austral. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-xs font-sans flex items-center gap-2">
            Creado por{" "}
            <a
              href="https://amtecnologia.cl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AM Tecnología"
              className="relative inline-flex items-center gap-[1px] font-bold tracking-tight transition-opacity hover:opacity-80"
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              }}
            >
              <span
                style={{
                  background: "linear-gradient(90deg, #7c3aed 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 6px rgba(99,102,241,0.55)) drop-shadow(0 0 2px rgba(6,182,212,0.4))",
                  fontSize: "0.75rem",
                  letterSpacing: "-0.01em",
                }}
              >
                AM
              </span>
              <span
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  letterSpacing: "0.04em",
                }}
              >
                Tecnología
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
