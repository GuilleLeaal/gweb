import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

import logoWhite from "../assets/brand/LogoGWGrande.png";
import { CONTACT } from "../config/contact";

const nav = [
  { label: "Packs", href: "#packs" },
  { label: "Trabajos", href: "#portfolio" },
  { label: "Proceso", href: "#process" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#top");

  const lastActiveRef = useRef<string>("#top");

  const whatsappText = useMemo(
    () =>
      encodeURIComponent(
        "Hola! Quiero una web para mi negocio. Vi GWeb y me interesa la promo/los packs. ¿Me contás cuál me conviene?",
      ),
    [],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Active section: por rangos entre puntos medios
  useEffect(() => {
    let ticking = false;

    const updateActive = () => {
      const sections = nav
        .map((item) => {
          const id = item.href.replace("#", "");
          const el = document.getElementById(id);
          if (!el) return null;

          return {
            href: item.href,
            top: el.getBoundingClientRect().top + window.scrollY,
          };
        })
        .filter(Boolean) as { href: string; top: number }[];

      if (!sections.length) {
        ticking = false;
        return;
      }

      // Hace que la sección se marque ANTES de llegar exactamente al top
      const activationOffset = 340;
      const y = window.scrollY + activationOffset;

      let current = "#top";

      for (let i = 0; i < sections.length; i++) {
        const currentSection = sections[i];
        const nextSection = sections[i + 1];

        const start = currentSection.top;
        const end = nextSection ? nextSection.top : Number.POSITIVE_INFINITY;

        if (y >= start && y < end) {
          current = currentSection.href;
          break;
        }
      }

      if (current !== lastActiveRef.current) {
        lastActiveRef.current = current;
        setActive(current);
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActive);
      }
    };

    updateActive();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("load", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("load", onScroll);
    };
  }, []);

  const go = (href: string) => {
    setOpen(false);

    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 96;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={[
          "mx-auto max-w-6xl px-4",
          "transition-all duration-300",
          scrolled ? "pt-3" : "pt-4",
        ].join(" ")}
      >
        <div className="relative">
          <div
            className={[
              "pointer-events-none absolute -inset-1 rounded-[22px] blur-xl opacity-0 transition-opacity duration-300",
              scrolled
                ? "opacity-100 bg-[radial-gradient(600px_120px_at_20%_0%,rgba(46,107,77,0.25),transparent)]"
                : "opacity-0",
            ].join(" ")}
          />

          <div
            className={[
              "relative flex items-center justify-between rounded-2xl px-4 py-3",
              "border border-gweb-line backdrop-blur-xl",
              scrolled ? "bg-black/58 shadow-soft" : "bg-black/35",
            ].join(" ")}
          >
            <button
              onClick={() => go("#top")}
              className="flex items-center gap-3"
              aria-label="Ir arriba"
            >
              <img src={logoWhite} alt="GWeb" className="h-8 w-auto" />
              <span className="hidden sm:block font-semibold tracking-tight">
                GWeb
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-2 text-sm">
              {nav.map((n) => {
                const isActive = active === n.href;
                return (
                  <button
                    key={n.href}
                    onClick={() => go(n.href)}
                    className={[
                      "relative rounded-full px-4 py-2 transition",
                      isActive
                        ? "text-gweb-text"
                        : "text-gweb-muted hover:text-gweb-text",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "pointer-events-none absolute inset-0 rounded-full border border-gweb-line",
                        "transition-opacity",
                        isActive ? "opacity-100 bg-black/30" : "opacity-0",
                      ].join(" ")}
                    />
                    <span className="relative z-10">{n.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href={`${CONTACT.whatsapp}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-gweb-green hover:bg-gweb-green2 transition shadow-soft"
              >
                WhatsApp
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-gweb-line bg-black/20 hover:bg-white/5 transition"
              >
                Instagram
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gweb-line bg-black/40 hover:bg-white/5 transition"
              aria-label="Abrir menú"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <>
              <motion.button
                type="button"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px] md:hidden"
                aria-label="Cerrar menú"
              />

              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.22, ease }}
                className="relative z-50 mt-3 overflow-hidden rounded-2xl border border-gweb-line bg-black/78 shadow-soft backdrop-blur-xl md:hidden"
              >
                <div className="grid gap-2 p-3">
                  <div className="px-2 pb-1 text-xs text-gweb-muted">
                    Navegación
                  </div>

                  {nav.map((n) => {
                    const isActive = active === n.href;
                    return (
                      <button
                        key={n.href}
                        onClick={() => go(n.href)}
                        className={[
                          "text-left rounded-xl px-4 py-3 transition border",
                          isActive
                            ? "bg-white/5 border-gweb-green/40 text-gweb-text"
                            : "bg-white/0 border-gweb-line hover:bg-white/5 text-gweb-muted hover:text-gweb-text",
                        ].join(" ")}
                      >
                        {n.label}
                      </button>
                    );
                  })}

                  <div className="mt-2 grid gap-2">
                    <a
                      href={`${CONTACT.whatsapp}?text=${whatsappText}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between rounded-xl px-4 py-3 font-semibold bg-gweb-green hover:bg-gweb-green2 transition shadow-soft"
                    >
                      WhatsApp <ArrowUpRight size={18} />
                    </a>

                    <a
                      href={CONTACT.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between rounded-xl px-4 py-3 font-semibold border border-gweb-line bg-black/20 hover:bg-white/5 transition"
                    >
                      Instagram <ArrowUpRight size={18} />
                    </a>
                  </div>

                  <div className="px-1 pt-1 text-[11px] text-gweb-muted">
                    Tip: podés cerrar con{" "}
                    <span className="font-semibold text-gweb-text">ESC</span>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
