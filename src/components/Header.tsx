"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contáctanos", href: "#contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            className={`transition-all duration-500 ${
              scrolled ? "opacity-100" : "opacity-95"
            }`}
            aria-label="Ajo Negro Austral"
          >
            <Image
              src="/logo-ajo-austral.png"
              alt="Logo Ajo Negro Austral"
              width={180}
              height={44}
              priority
              className="h-8 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[11px] tracking-[0.2em] uppercase transition-colors duration-500 ${
                  scrolled
                    ? "text-charcoal/50 hover:text-charcoal"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-[60] flex flex-col gap-1.5 p-2"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                menuOpen
                  ? "rotate-45 translate-y-[3px] bg-white"
                  : scrolled
                    ? "bg-charcoal"
                    : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                menuOpen
                  ? "-rotate-45 -translate-y-[3px] bg-white"
                  : scrolled
                    ? "bg-charcoal"
                    : "bg-white"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-charcoal flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-3xl text-white/70 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
