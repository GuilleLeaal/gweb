import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Sparkles,
  Rocket,
  Smartphone,
  Search,
  ShieldCheck,
  Building2,
  LayoutTemplate,
  MapPin,
} from "lucide-react";
import { CONTACT } from "../../config/contact";

import calypsoPreview from "../../assets/projects/calypso.jpg";
import vittaPreview from "../../assets/projects/vittagroup.jpg";

type Highlight = {
  icon: React.ElementType;
  title: string;
  desc: string;
};

type Project = {
  name: string;
  status: string;
  featured?: boolean;
  desc: string;
  href: string;
  preview: string;
  stack: string[];
  tag?: string;
  highlights: Highlight[];
};

const projects: Project[] = [
  {
    name: "Vitta Group",
    status: "En producción",
    featured: true,
    tag: "Inmobiliaria premium",
    desc: "Mini sitio inmobiliario premium con catálogo de propiedades, páginas dinámicas y una presencia visual más sólida para transmitir confianza, seriedad y valor.",
    href: "https://vittagroup.uy/",
    preview: vittaPreview,
    stack: ["Next.js", "Tailwind", "Sanity CMS", "SEO dinámico", "Deploy"],
    highlights: [
      {
        icon: Building2,
        title: "Catálogo real de propiedades",
        desc: "Listings conectados a CMS para cargar, editar y mantener propiedades fácilmente.",
      },
      {
        icon: LayoutTemplate,
        title: "Sitio más escalable",
        desc: "Base preparada para crecer con nuevas propiedades, secciones y contenido administrable.",
      },
      {
        icon: Search,
        title: "SEO trabajado",
        desc: "Metadata dinámica, sitemap y estructura enfocada en mejorar visibilidad en Google.",
      },
      {
        icon: MapPin,
        title: "Enfoque local",
        desc: "Pensado para Montevideo y un público que busca confianza al invertir o consultar.",
      },
    ],
  },
  {
    name: "Calypso Eventos",
    status: "En producción",
    tag: "Landing de conversión",
    desc: "Landing premium para salón de eventos, diseñada para presencia online, confianza y conversión.",
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
        desc: "Experiencia cuidada en mobile y desktop, sin sensación de plantilla rota.",
      },
      {
        icon: Search,
        title: "Base de visibilidad",
        desc: "Estructura, títulos y metadata listos para posicionar mejor.",
      },
      {
        icon: ShieldCheck,
        title: "Deploy y estabilidad",
        desc: "Publicado en producción y listo para seguir creciendo con mejoras.",
      },
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (d: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: d,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-gweb-line bg-black/40 shadow-soft">
      <div className="flex items-center gap-2 border-b border-gweb-line bg-black/35 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>

        <div className="ml-3 flex-1">
          <div className="flex h-8 items-center rounded-xl border border-gweb-line bg-black/30 px-3">
            <div className="truncate text-xs text-gweb-muted">{alt}</div>
          </div>
        </div>
      </div>

      <div className="relative">
        <img
          src={src}
          alt={alt}
          className="h-[260px] w-full object-cover md:h-[340px] lg:h-[380px]"
          loading="lazy"
        />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_260px_at_15%_15%,rgba(46,107,77,0.22),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_260px_at_85%_10%,rgba(58,139,98,0.14),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const whatsappText = encodeURIComponent(
    `Hola! Vi el proyecto de ${project.name} y quiero una web similar. ¿Me pasás propuesta y packs?`,
  );

  return (
    <motion.article
      variants={fadeUp}
      custom={0.06 + index * 0.08}
      className="grid gap-6 lg:grid-cols-12"
    >
      <div className="lg:col-span-7">
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="group block"
        >
          <div className="relative">
            <BrowserFrame
              src={project.preview}
              alt={project.href.replace("https://", "").replace("http://", "")}
            />

            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-gweb-line bg-black/60 px-3 py-1.5 text-xs text-gweb-muted backdrop-blur">
              <BadgeCheck size={14} className="text-gweb-green2" />
              {project.status}
            </div>

            {project.featured && (
              <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-gweb-line bg-black/60 px-3 py-1.5 text-xs text-gweb-muted backdrop-blur">
                <Sparkles size={14} className="text-gweb-green2" />
                Featured
              </div>
            )}

            <div className="pointer-events-none absolute bottom-5 right-5">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-gweb-line bg-black/55 px-4 py-2 font-semibold backdrop-blur transition opacity-100 md:opacity-0 md:group-hover:opacity-100">
                Ver sitio <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="lg:col-span-5">
        <div className="rounded-[28px] border border-gweb-line bg-gradient-to-b from-gweb-panel to-black/30 p-6 shadow-soft md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              {project.tag && (
                <div className="inline-flex items-center gap-2 rounded-full border border-gweb-line bg-black/25 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-gweb-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-gweb-green2" />
                  {project.tag}
                </div>
              )}

              <div className="mt-3 text-xl font-extrabold tracking-tight md:text-2xl">
                {project.name}
              </div>

              <p className="mt-2 text-sm text-gweb-muted">{project.desc}</p>
            </div>

            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-2xl border border-gweb-line bg-black/35 px-4 py-2 text-sm font-semibold transition hover:bg-white/5"
            >
              Ver <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-6 grid gap-3">
            {project.highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className="rounded-2xl border border-gweb-line bg-black/25 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl border border-gweb-line bg-black/35">
                      <Icon size={18} className="text-gweb-green2" />
                    </div>

                    <div>
                      <div className="font-semibold">{h.title}</div>
                      <div className="mt-0.5 text-xs leading-relaxed text-gweb-muted">
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
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-gweb-line bg-black/25 px-3 py-1 text-xs text-gweb-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={`${CONTACT.whatsapp}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gweb-green px-5 py-3 font-semibold transition hover:bg-gweb-green2 shadow-soft"
            >
              Pedir una similar <ArrowUpRight size={18} />
            </a>

            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gweb-line bg-black/20 px-5 py-3 font-semibold transition hover:bg-white/5"
            >
              Ver Instagram <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <motion.div variants={fadeUp} custom={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-gweb-line bg-black/20 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-gweb-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-gweb-green2" />
            Portfolio
          </div>

          <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
            Trabajos reales
          </h2>

          <p className="mt-2 max-w-2xl text-gweb-muted">
            Casos reales publicados y pensados para negocio: diseño cuidado,
            estructura clara, experiencia responsive y base sólida para
            posicionamiento.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} custom={0.08} className="flex gap-3">
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gweb-line bg-black/20 px-5 py-3 font-semibold transition hover:bg-white/5"
          >
            Ver Instagram <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        className="mt-10 space-y-10"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        custom={0.2}
        className="mt-10 rounded-[28px] border border-gweb-line bg-gradient-to-b from-gweb-panel to-black/30 p-6 shadow-soft md:p-7"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold">
              ¿Querés algo de este nivel para tu negocio?
            </div>
            <p className="mt-2 max-w-2xl text-sm text-gweb-muted">
              Puedo hacerte desde una landing simple hasta un sitio más premium
              y escalable, según lo que necesites hoy y lo que quieras crecer
              después.
            </p>
          </div>

          <a
            href={`${CONTACT.whatsapp}?text=${encodeURIComponent(
              "Hola! Vi tu portfolio y quiero una propuesta para mi negocio.",
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gweb-green px-5 py-3 font-semibold transition hover:bg-gweb-green2 shadow-soft"
          >
            Pedir propuesta <ArrowUpRight size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
