import { useEffect, useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Sparkles, Crown } from "lucide-react";
import { CONTACT } from "../../config/contact";

type Pack = {
  name: string;
  price: string;
  desc: string;
  bullets: string[];
  highlight?: boolean;
  promo?: {
    newPrice: string;
    note: string;
    // si querés cambiar la fecha exacta, tocá esto:
    endsAtISO?: string; // "2026-04-01T00:00:00-03:00"
  };
};

const packs: Pack[] = [
  {
    name: "Simple",
    price: "USD 100",
    desc: "Landing rápida y directa para contacto.",
    bullets: ["1 página", "CTA a WhatsApp/IG", "Responsive", "Entrega 1–2 días"],
  },
  {
    name: "Semi-Premium",
    price: "USD 200",
    desc: "Presencia online completa sin complicaciones.",
    bullets: [
      "Secciones completas",
      "Micro-animaciones",
      "Optimizada móvil",
      "Entrega 3–5 días",
    ],
  },
  {
    name: "Super-Premium",
    price: "Desde USD 600",
    desc: "Experiencia visual top con animaciones avanzadas y visibilidad online incluida.",
    bullets: [
      "Animaciones avanzadas (experiencia premium)",
      "Diseño diferencial de alto impacto",
      "Optimizado para conversión",
      "Preparado para aparecer mejor en Google",
      "Configuración base para buscadores incluida",
    ],
    highlight: true,
    promo: {
      newPrice: "USD 250",
      note: "Promo lanzamiento válida hasta abril",
      endsAtISO: "2026-04-01T00:00:00-03:00",
    },
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (d: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: d, ease: [0.16, 1, 0.3, 1] },
  }),
};

function useCountdown(targetISO?: string) {
  const target = useMemo(() => (targetISO ? new Date(targetISO).getTime() : null), [targetISO]);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!target) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!target) return null;

  const diff = Math.max(0, target - now);
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  return { days, hours, minutes, done: diff === 0 };
}

export default function Packs() {
  const promoText = encodeURIComponent(
    "Hola! Quiero aprovechar la promo del Super-Premium a USD 250 hasta abril."
  );

  const superPack = packs.find((p) => p.highlight);
  const countdown = useCountdown(superPack?.promo?.endsAtISO);

  // Orden: left (Simple) - center (Super) - right (Semi)
  const ordered = useMemo(() => {
    const simple = packs.find((p) => p.name === "Simple");
    const semi = packs.find((p) => p.name === "Semi-Premium");
    const superP = packs.find((p) => p.highlight);
    return [simple, superP, semi].filter(Boolean) as Pack[];
  }, []);

  return (
    <section id="packs" className="mx-auto max-w-6xl px-4 py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <motion.div variants={fadeUp} custom={0}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Packs</h2>
          <p className="mt-2 text-gweb-muted max-w-2xl">
            Elegí según tu objetivo. El pack más avanzado está en promoción por tiempo limitado.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} custom={0.08} className="flex flex-wrap items-center gap-3">
          <a
            href={`${CONTACT.whatsapp}?text=${promoText}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold
                       bg-gweb-green hover:bg-gweb-green2 transition shadow-soft"
          >
            Quiero la promo <ArrowUpRight size={18} />
          </a>

          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold
                       border border-gweb-line bg-black/20 hover:bg-white/5 transition"
          >
            Ver Instagram <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </motion.div>

      {/* Grid: Super centrado y destacado */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        className="mt-10 grid gap-6 md:grid-cols-3 md:items-stretch"
      >
        {ordered.map((p, i) => {
          const isPromo = !!p.promo;
          const isSuper = !!p.highlight;

          const ctaHref = isPromo
            ? `${CONTACT.whatsapp}?text=${promoText}`
            : CONTACT.whatsapp;

          return (
            <motion.div
              key={p.name}
              variants={fadeUp}
              custom={0.06 + i * 0.06}
              className={[
                "relative flex flex-col justify-between rounded-3xl border p-6 shadow-soft",
                isSuper
                  ? "border-gweb-green/70 bg-[radial-gradient(900px_420px_at_20%_0%,rgba(46,107,77,0.28),transparent)] md:scale-[1.04] md:-translate-y-2"
                  : "border-gweb-line bg-gradient-to-b from-gweb-panel to-black/30",
              ].join(" ")}
            >
              {/* Header badges: NO absolute para evitar solapes */}
              <div className="flex flex-wrap items-center gap-2">
                {isSuper && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-gweb-green/55 bg-black/40 px-3 py-1.5 text-xs">
                    <Crown size={14} className="text-gweb-green2" />
                    Más completo
                  </span>
                )}

                {isPromo && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-gweb-green/55 bg-black/40 px-3 py-1.5 text-xs">
                    <Sparkles size={14} className="text-gweb-green2" />
                    PROMO hasta abril
                  </span>
                )}

                {isSuper && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-gweb-green/55 bg-black/40 px-3 py-1.5 text-xs">
                    <span className="h-2 w-2 rounded-full bg-gweb-green2" />
                    Incluye visibilidad en Google
                  </span>
                )}
              </div>

              <div className="mt-4">
                <div className="text-lg font-semibold">{p.name}</div>

                {/* Precio */}
                {isPromo && p.promo ? (
                  <div className="mt-2">
                    <div className="text-sm text-gweb-muted line-through">{p.price}</div>
                    <div className="text-3xl font-extrabold tracking-tight">
                      {p.promo.newPrice}
                    </div>

                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <div className="text-xs text-gweb-muted">{p.promo.note}</div>

                      {/* Countdown elegante */}
                      {countdown && isSuper && !countdown.done && (
                        <div className="text-xs rounded-full border border-gweb-line bg-black/25 px-3 py-1 text-gweb-muted">
                          Termina en{" "}
                          <span className="text-gweb-text font-semibold">
                            {countdown.days}d {countdown.hours}h {countdown.minutes}m
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="mt-1 text-2xl font-extrabold">{p.price}</div>
                )}

                <p className="mt-3 text-sm text-gweb-muted">{p.desc}</p>

                <ul className="mt-5 grid gap-2 text-sm text-gweb-muted">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gweb-green2" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Explicación SEO humana (solo Super) */}
                {isSuper && (
                  <div className="mt-6 rounded-2xl border border-gweb-line bg-black/25 p-4">
                    <div className="text-sm font-semibold">
                      ¿Qué significa visibilidad en Google?
                    </div>
                    <p className="mt-2 text-xs text-gweb-muted leading-relaxed">
                      Tu web queda preparada para que Google la entienda bien:
                      estructura ordenada, títulos correctos y configuración básica
                      para buscadores. Es la base para que pueda aparecer mejor con el tiempo.
                    </p>
                  </div>
                )}
              </div>

              <a
                href={ctaHref}
                target="_blank"
                rel="noreferrer"
                className={[
                  "mt-6 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold transition",
                  isPromo
                    ? "bg-gweb-green hover:bg-gweb-green2 shadow-soft"
                    : "bg-black/35 border border-gweb-line hover:bg-white/5",
                ].join(" ")}
              >
                {isPromo ? "Aprovechar promo" : "Consultar"} <ArrowUpRight size={16} />
              </a>

              {/* Glow sutil en Super */}
              {isSuper && (
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-gweb-green/15" />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
