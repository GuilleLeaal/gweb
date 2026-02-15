const steps = [
  { t: "Brief rápido", d: "Definimos objetivo, estilo y contenido." },
  { t: "Diseño", d: "Propuesta visual moderna y clara." },
  { t: "Desarrollo", d: "Construcción responsive + animaciones sutiles." },
  { t: "Publicación", d: "Deploy + ajustes finales." },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Proceso</h2>
      <p className="mt-2 text-gweb-muted max-w-2xl">
        Simple, rápido y sin vueltas. Te doy algo que se vea premium y convierta.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-4">
        {steps.map((s, idx) => (
          <div key={s.t} className="rounded-3xl border border-gweb-line bg-gradient-to-b from-gweb-panel to-black/30 p-6 shadow-soft">
            <div className="text-sm text-gweb-muted">0{idx + 1}</div>
            <div className="mt-2 font-semibold">{s.t}</div>
            <div className="mt-2 text-sm text-gweb-muted">{s.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
