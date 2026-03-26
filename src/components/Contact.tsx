const WHATSAPP_MESSAGE =
  "Hola. Me gustaría cotizar sus productos de Ajo Negro Austral al mayorista.";
const WHATSAPP_LINK = `https://api.whatsapp.com/send/?phone=56985660954&text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}&type=phone_number&app_absent=0`;

const CONTACT_INFO = [
  {
    label: "WhatsApp",
    value: "+56 9 8566 0954",
    href: WHATSAPP_LINK,
    icon: "W",
  },
  {
    label: "Email",
    value: "contacto@amconsultora.cl",
    href: "mailto:contacto@amconsultora.cl",
    icon: "E",
  },
  { label: "Origen", value: "Patagonia Chilena", href: null, icon: "P" },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-earth tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">
            Hablemos
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl mb-6">Contáctanos</h2>
          <div className="w-12 h-px bg-earth mx-auto mb-6" />
          <p className="text-charcoal/45 max-w-lg mx-auto font-sans leading-relaxed">
            Cuéntanos qué formato necesitas y tu ciudad. Respondemos rápido.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-xl mb-6">Información</h3>
              <div className="space-y-5">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-charcoal/[0.04] flex items-center justify-center shrink-0">
                      <span className="text-earth text-xs font-sans font-medium">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] text-charcoal/35 tracking-[0.2em] uppercase font-sans mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-charcoal/70 hover:text-charcoal transition-colors font-sans text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-charcoal/70 font-sans text-sm">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-charcoal/[0.06] pt-8">
              <p className="text-charcoal/35 text-sm font-sans leading-relaxed">
                Para pedidos mayoristas, cuéntanos el volumen estimado y la
                frecuencia. Nos adaptamos a tu negocio.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#25D366] px-5 py-3.5 text-sm font-sans font-medium text-white transition-colors hover:bg-[#1eb95a]"
                aria-label="Contactar por WhatsApp para cotización mayorista"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M19.05 4.94A9.94 9.94 0 0 0 12 2a9.96 9.96 0 0 0-8.7 14.82L2 22l5.31-1.38A9.96 9.96 0 1 0 19.05 4.94ZM12 20.07a8.01 8.01 0 0 1-4.08-1.12l-.29-.17-3.15.82.84-3.08-.19-.31A8.04 8.04 0 1 1 12 20.07Zm4.41-5.99c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.4-1.33-1.64-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.61.57.24 1.01.38 1.35.48.57.18 1.09.16 1.5.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
                </svg>
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
