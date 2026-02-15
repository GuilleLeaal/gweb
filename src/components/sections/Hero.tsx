import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  Smartphone,
  Search,
  CheckCircle2,
  ShieldCheck,
  Crown,
} from "lucide-react";

import logoOutline from "../../assets/brand/logo-outline.svg";
import logoWhite from "../../assets/brand/LogoGWGrande.png";
import { CONTACT } from "../../config/contact";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const whatsappText = useMemo(
    () =>
      encodeURIComponent(
        "Hola! Quiero una web para mi negocio. Vi GWeb y me interesa la promo/los packs. ¿Me contás cuál me conviene?"
      ),
    []
  );

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background layers (IMPORTANTE: pointer-events-none) */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.20]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_18%_18%,rgba(46,107,77,0.26),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_82%_28%,rgba(58,139,98,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_260px_at_50%_0%,rgba(0,0,0,0.65),transparent)]" />

      {/* Watermark logo */}
      <img
        src={logoOutline}
        alt=""
        className="pointer-events-none absolute -right-32 top-10 w-[640px] opacity-[0.08] rotate-6 select-none"
      />

      {/* Accent glow orb */}
      <div className="pointer-events-none absolute -left-28 top-24 h-[420px] w-[420px] rounded-full blur-3xl bg-[radial-gradient(circle,rgba(46,107,77,0.35),transparent_60%)]" />

      {/* Content above backgrounds */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-gweb-line bg-black/35 px-4 py-2 text-sm text-gweb-muted"
            >
              <Sparkles size={16} className="text-gweb-green2" />
              Webs modernas + visibilidad en Google incluida
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05, ease }}
              className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.03]"
            >
              Tu negocio necesita una web que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gweb-green2 to-gweb-green">
                venda
              </span>
              , no solo que exista.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease }}
              className="mt-4 text-base md:text-lg text-gweb-muted max-w-xl"
            >
              Diseño premium, rápida en celular y lista para anuncios. Además, la
              dejamos preparada para que Google la entienda bien y pueda aparecer
              mejor con el tiempo.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18, ease }}
              className="mt-7 flex flex-col sm:flex-row gap-3"
            >
              <a
                href={`${CONTACT.whatsapp}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold
                           bg-gweb-green hover:bg-gweb-green2 transition shadow-soft"
              >
                Pedir propuesta por WhatsApp
                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold
                           border border-gweb-line bg-black/20 hover:bg-white/5 transition"
              >
                Ver en Instagram <ArrowUpRight size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26, ease }}
              className="mt-4 text-xs text-gweb-muted"
            >
              Respuesta rápida • Te recomiendo el pack ideal según tu objetivo
            </motion.div>

            {/* Proof row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease }}
              className="mt-8 grid gap-3 sm:grid-cols-3"
            >
              {[
                { icon: Zap, title: "Rápida", desc: "Optimizada para cargar rápido." },
                { icon: Smartphone, title: "Responsive", desc: "Se ve perfecta en celular." },
                { icon: Search, title: "Google", desc: "Base de visibilidad incluida." },
              ].map((it) => {
                const Icon = it.icon;
                return (
                  <div
                    key={it.title}
                    className="rounded-2xl border border-gweb-line bg-black/25 p-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-9 w-9 rounded-2xl border border-gweb-line bg-black/35 grid place-items-center">
                        <Icon size={16} className="text-gweb-green2" />
                      </div>
                      <div className="font-semibold">{it.title}</div>
                    </div>
                    <div className="mt-2 text-xs text-gweb-muted">{it.desc}</div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="relative"
          >
            {/* floating glow */}
            <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[radial-gradient(600px_240px_at_20%_10%,rgba(46,107,77,0.22),transparent)]" />

            <div className="relative rounded-3xl border border-gweb-line bg-gradient-to-b from-gweb-panel to-black/40 shadow-soft overflow-hidden">
              <div className="flex items-center justify-between px-6 py-5 border-b border-gweb-line bg-black/25">
                <div className="flex items-center gap-3">
                  <img src={logoWhite} alt="GWeb" className="h-9 w-auto" />
                  <div>
                    <div className="text-sm font-semibold">Blueprint de conversión</div>
                    <div className="text-xs text-gweb-muted">
                      Lo que vas a tener en tu web
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 rounded-full border border-gweb-line bg-black/30 px-3 py-1.5 text-xs text-gweb-muted">
                  <ShieldCheck size={14} className="text-gweb-green2" />
                  Prolijo • Escalable
                </div>
              </div>

              <div className="p-6">
                <div className="grid gap-3">
                  {[
                    { t: "Hero claro + CTA fuerte", d: "La gente entiende y te escribe en segundos." },
                    { t: "Packs + promo destacada", d: "Decisión rápida sin confusión de precios." },
                    { t: "Caso real + preview", d: "Confianza inmediata con trabajo en producción." },
                    { t: "Visibilidad en Google", d: "Base lista para que pueda posicionar con el tiempo." },
                  ].map((row) => (
                    <div
                      key={row.t}
                      className="rounded-2xl border border-gweb-line bg-black/25 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-gweb-green2 mt-0.5" />
                        <div>
                          <div className="text-sm font-semibold">{row.t}</div>
                          <div className="mt-1 text-xs text-gweb-muted">{row.d}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-gweb-line bg-black/25 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Crown size={16} className="text-gweb-green2" />
                    Visibilidad en Google incluida
                  </div>
                  <div className="mt-2 text-xs text-gweb-muted leading-relaxed">
                    Dejamos la web ordenada para buscadores (títulos, estructura y configuración base).
                    Así Google la entiende mejor y puede aparecer más arriba con el tiempo.
                  </div>
                </div>
              </div>

              <div className="pointer-events-none h-16 bg-[radial-gradient(520px_90px_at_50%_0%,rgba(46,107,77,0.40),transparent)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
