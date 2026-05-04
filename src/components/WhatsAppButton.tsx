const WHATSAPP_MESSAGE =
  "Hola. Me gustaría cotizar sus productos de Ajo Negro Austral.";
const WHATSAPP_LINK = `https://api.whatsapp.com/send/?phone=56974348843&text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}&type=phone_number&app_absent=0`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        group fixed bottom-7 right-7 z-50
        flex items-center gap-3
        bg-charcoal text-cream
        pl-5 pr-4 py-3.5
        shadow-[0_4px_24px_rgba(12,10,9,0.18)]
        transition-all duration-300 ease-out
        hover:bg-earth-dark hover:shadow-[0_6px_32px_rgba(12,10,9,0.28)]
        hover:translate-y-[-2px]
      "
    >
      <span className="font-sans text-[11px] tracking-[0.18em] uppercase text-earth-light transition-colors duration-300 group-hover:text-cream/80 whitespace-nowrap">
        Cotizar
      </span>

      <span className="w-px h-4 bg-earth/40" aria-hidden="true" />

      <span className="relative flex items-center justify-center w-7 h-7">
        {/* subtle green dot indicator */}
        <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-[#25D366] ring-2 ring-charcoal group-hover:ring-earth-dark transition-colors duration-300" aria-hidden="true" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-cream"
          aria-hidden="true"
        >
          <path d="M19.05 4.94A9.94 9.94 0 0 0 12 2a9.96 9.96 0 0 0-8.7 14.82L2 22l5.31-1.38A9.96 9.96 0 1 0 19.05 4.94ZM12 20.07a8.01 8.01 0 0 1-4.08-1.12l-.29-.17-3.15.82.84-3.08-.19-.31A8.04 8.04 0 1 1 12 20.07Zm4.41-5.99c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.4-1.33-1.64-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.61.57.24 1.01.38 1.35.48.57.18 1.09.16 1.5.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </span>
    </a>
  );
}
