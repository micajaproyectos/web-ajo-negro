"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/gtag";

type Status = "idle" | "loading" | "success" | "error";

const DEFAULT_MENSAJE = "Hola! estoy interesado en vender sus productos.";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [fono, setFono] = useState("");
  const [mensaje, setMensaje] = useState(DEFAULT_MENSAJE);
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("success");
    trackEvent("generate_lead", { method: "form" });

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombre.trim(),
        correo: correo.trim(),
        fono: fono.trim(),
        mensaje: mensaje.trim(),
      }),
    }).catch(() => {});

    setNombre("");
    setCorreo("");
    setFono("");
    setMensaje(DEFAULT_MENSAJE);
  }

  if (status === "success") {
    return (
      <div className="border border-earth/30 bg-black/70 p-8 lg:p-10">
        <p className="text-[10px] tracking-[0.25em] uppercase text-earth-light font-sans mb-3">
          Mensaje recibido
        </p>
        <p className="font-serif text-2xl mb-3 text-white">Gracias por contactarnos.</p>
        <p className="text-white/45 font-sans text-sm leading-relaxed">
          Nos pondremos en contacto de inmediato.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[11px] tracking-widest uppercase font-sans text-white/35 hover:text-white transition-colors"
        >
          Enviar otro mensaje →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-0">
      {/* Nombre */}
      <div className="border border-white/[0.08] border-b-0 px-5 pt-5 pb-4 bg-black/70 focus-within:border-earth/50 transition-colors duration-300">
        <label className="block text-[10px] tracking-[0.2em] uppercase text-white/70 font-sans mb-2">
          Nombre empresa / negocio
        </label>
        <input
          type="text"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej: Restaurante El Sur"
          className="w-full bg-transparent font-sans text-sm text-white placeholder:text-white/20 outline-none"
        />
      </div>

      {/* Correo */}
      <div className="border border-white/[0.08] border-b-0 px-5 pt-5 pb-4 bg-black/70 focus-within:border-earth/50 transition-colors duration-300">
        <label className="block text-[10px] tracking-[0.2em] uppercase text-white/70 font-sans mb-2">
          Correo de contacto
        </label>
        <input
          type="email"
          required
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="correo@empresa.cl"
          className="w-full bg-transparent font-sans text-sm text-white placeholder:text-white/20 outline-none"
        />
      </div>

      {/* Fono */}
      <div className="border border-white/[0.08] border-b-0 px-5 pt-5 pb-4 bg-black/70 focus-within:border-earth/50 transition-colors duration-300">
        <label className="block text-[10px] tracking-[0.2em] uppercase text-white/70 font-sans mb-2">
          Fono de contacto
        </label>
        <div className="flex items-center gap-2">
          <span className="font-sans text-sm text-white/35 shrink-0 select-none">+569</span>
          <div className="w-px h-4 bg-white/10 shrink-0" />
          <input
            type="tel"
            required
            value={fono}
            onChange={(e) => setFono(e.target.value.replace(/\D/g, "").slice(0, 8))}
            placeholder="87654321"
            maxLength={8}
            className="w-full bg-transparent font-sans text-sm text-white placeholder:text-white/20 outline-none"
          />
        </div>
      </div>

      {/* Mensaje */}
      <div className="border border-white/[0.08] px-5 pt-5 pb-4 bg-black/70 focus-within:border-earth/50 transition-colors duration-300">
        <label className="block text-[10px] tracking-[0.2em] uppercase text-white/70 font-sans mb-2">
          Mensaje
        </label>
        <textarea
          required
          rows={3}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="w-full bg-transparent font-sans text-sm text-white placeholder:text-white/20 outline-none resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-400/70 text-xs font-sans pt-3">
          Error al enviar. Intenta de nuevo o contáctanos por WhatsApp.
        </p>
      )}

      <div className="pt-5">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full inline-flex items-center justify-center px-8 py-3.5 bg-earth text-white font-sans text-sm tracking-widest uppercase hover:bg-earth-light hover:text-charcoal transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Enviando..." : "Enviar mensaje"}
        </button>
      </div>
    </form>
  );
}
