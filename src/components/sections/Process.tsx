const steps = [
  { 
    t: "Formulario estratégico", 
    d: "Completás un brief profesional donde definimos objetivos, público, estilo, contenido y palabras clave." 
  },
  { 
    t: "Estructura & Dirección", 
    d: "Con esa información definimos arquitectura del sitio y enfoque visual alineado a tu negocio." 
  },
  { 
    t: "Desarrollo optimizado", 
    d: "Construcción responsive con foco en velocidad, SEO técnico y conversión." 
  },
  { 
    t: "Lanzamiento", 
    d: "Publicación en tu dominio + configuración básica para Google y ajustes finales." 
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-20">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Proceso de trabajo
        </h2>

        <p className="mt-3 text-gweb-muted">
          Nada se improvisa. Empezamos con un formulario estratégico que nos permite
          entender tu negocio antes de diseñar. Cada etapa está pensada para que tu
          web no solo se vea premium, sino que genere resultados.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-4">
        {steps.map((s, idx) => (
          <div
            key={s.t}
            className="group relative rounded-3xl border border-gweb-line 
            bg-gradient-to-b from-gweb-panel to-black/30 
            p-6 shadow-soft transition-all duration-300 
            hover:-translate-y-1 hover:border-white/20"
          >
            <div className="text-xs tracking-widest text-gweb-muted">
              0{idx + 1}
            </div>

            <div className="mt-3 font-semibold text-lg">
              {s.t}
            </div>

            <div className="mt-3 text-sm text-gweb-muted leading-relaxed">
              {s.d}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
