import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Sparkles,
  Rocket,
  Smartphone,
  Search,
  ShieldCheck,
} from "lucide-react";
import { CONTACT } from "../../config/contact";

// ✅ Poné tu screenshot acá:
import calypsoPreview from "../../assets/projects/calypso.jpg";

type Project = {
  name: string;
  status: string;
  desc: string;
  href: string;
  preview: string;
  stack: string[];
  highlights: { icon: any; title: string; desc: string }[];
};

const projects: Project[] = [
  {
    name: "Calypso Eventos",
    status: "En producción",
    desc:
      "Landing premium para salón de eventos, diseñada para presencia online, confianza y conversión.",
    href: "https://calypsoeventos.com.uy/",
    preview: calypsoPreview,
    stack: ["React", "Vite", "Tailwind", "Framer Motion", "SEO base"],
    highlights: [
      {
        icon: Rocket,
        title: "Enfoque en conversión",
        desc: "CTA claro, estructura pensada para que te contacten rápido.",
      },
      {
        icon: Smartphone,
        title: "Responsive real",
        desc: "Experiencia cuidada en mobile y desktop (sin “modo roto”).",
      },
      {
        icon: Search,
        title: "Base de visibilidad",
        desc: "Estructura, títulos y metadata listos para posicionar mejor.",
      },
      {
        icon: ShieldCheck,
        title: "Deploy & estabilidad",
        desc: "Publicado en producción y listo para escalar mejoras.",
      },
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (d: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: d,
      ease: [0.16, 1, 0.3, 1], // ✅ easing tipado, no string
    },
  }),
};


function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative rounded-3xl border border-gweb-line bg-black/40 overflow-hidden shadow-soft">
      {/* top bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gweb-line bg-black/35">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>

        <div className="ml-3 flex-1">
          <div className="h-8 rounded-xl border border-gweb-line bg-black/30 flex items-center px-3">
            <div className="text-xs text-gweb-muted truncate">
              {alt}
            </div>
          </div>
        </div>
      </div>

      {/* image */}
      <div className="relative">
        <img
          src={src}
          alt={alt}
          className="w-full h-[280px] md:h-[360px] object-cover"
          loading="lazy"
        />
        {/* overlays */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_240px_at_20%_20%,rgba(46,107,77,0.22),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_240px_at_80%_10%,rgba(58,139,98,0.16),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>
    </div>
  );
}

export default function Portfolio() {
  const p = projects[0];

  const whatsappText = encodeURIComponent(
    `Hola! Vi el proyecto de ${p.name} y quiero una web similar. ¿Me pasás propuesta y packs?`
  );

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-4 py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <motion.div variants={fadeUp} custom={0}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Trabajos
          </h2>
          <p className="mt-2 text-gweb-muted max-w-2xl">
            Caso real en producción. Cuando sumemos más clientes, los vamos agregando acá con previews y enfoque.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} custom={0.08} className="flex gap-3">
          <a
            href={`${CONTACT.whatsapp}?text=${whatsappText}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold
                       bg-gweb-green hover:bg-gweb-green2 transition shadow-soft"
          >
            Quiero una web así <ArrowUpRight size={18} />
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

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        className="mt-10 grid gap-6 lg:grid-cols-12"
      >
        {/* LEFT: Preview */}
        <motion.div variants={fadeUp} custom={0.05} className="lg:col-span-7">
          <a href={p.href} target="_blank" rel="noreferrer" className="group block">
            <div className="relative">
              <BrowserFrame src={p.preview} alt={p.href.replace("https://", "")} />

              {/* badges */}
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-gweb-line bg-black/55 px-3 py-1.5 text-xs text-gweb-muted backdrop-blur">
                <BadgeCheck size={14} className="text-gweb-green2" />
                {p.status}
              </div>

              <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-gweb-line bg-black/55 px-3 py-1.5 text-xs text-gweb-muted backdrop-blur">
                <Sparkles size={14} className="text-gweb-green2" />
                Featured
              </div>

              {/* hover CTA */}
              <div className="pointer-events-none absolute bottom-5 right-5">
                <div className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 font-semibold
                                bg-black/55 border border-gweb-line backdrop-blur
                                opacity-100 md:opacity-0 md:group-hover:opacity-100 transition">
                  Ver sitio <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* RIGHT: Details */}
        <motion.div variants={fadeUp} custom={0.12} className="lg:col-span-5">
          <div className="rounded-3xl border border-gweb-line bg-gradient-to-b from-gweb-panel to-black/30 shadow-soft p-6 md:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xl md:text-2xl font-extrabold tracking-tight">
                  {p.name}
                </div>
                <p className="mt-2 text-sm text-gweb-muted">
                  {p.desc}
                </p>
              </div>

              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold
                           bg-black/35 border border-gweb-line hover:bg-white/5 transition"
              >
                Ver <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="mt-6 grid gap-3">
              {p.highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.title}
                    className="rounded-2xl border border-gweb-line bg-black/25 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl border border-gweb-line bg-black/35 grid place-items-center">
                        <Icon size={18} className="text-gweb-green2" />
                      </div>
                      <div>
                        <div className="font-semibold">{h.title}</div>
                        <div className="mt-0.5 text-xs text-gweb-muted">
                          {h.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <div className="text-sm font-semibold">Stack</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border border-gweb-line bg-black/25 px-3 py-1 text-gweb-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={`${CONTACT.whatsapp}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold
                           bg-gweb-green hover:bg-gweb-green2 transition shadow-soft"
              >
                Pedir una similar <ArrowUpRight size={18} />
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
            </div>
          </div>

          {/* “Próximamente” pequeño, pero pro */}
          <div className="mt-6 rounded-3xl border border-gweb-line bg-gradient-to-b from-gweb-panel to-black/30 shadow-soft p-6">
            <div className="font-semibold">Próximos proyectos</div>
            <p className="mt-2 text-sm text-gweb-muted">
              Este espacio queda listo para sumar más casos con preview, objetivos y resultados.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-gweb-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-gweb-green2" />
              Coming soon
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
