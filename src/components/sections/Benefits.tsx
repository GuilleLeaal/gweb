import { Globe, Zap, TrendingUp, ShieldCheck } from "lucide-react";

const items = [
  { icon: Zap, title: "Rápida en celular", desc: "Carga optimizada y experiencia fluida." },
  { icon: TrendingUp, title: "Pensada para vender", desc: "CTA claro, secciones que convierten." },
  { icon: Globe, title: "Visibilidad en Google", desc: "Estructura y base SEO para posicionar mejor." },
  { icon: ShieldCheck, title: "Entrega prolija", desc: "Código limpio + deploy en producción." },
];

export default function Benefits() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Lo que hace que GWeb convierta</h2>
          <p className="mt-2 text-gweb-muted max-w-2xl">
            No es “solo una web”: es una landing diseñada para que te contacten y te encuentren.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <div key={it.title} className="rounded-3xl border border-gweb-line bg-gradient-to-b from-gweb-panel to-black/30 p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl border border-gweb-line bg-black/35 grid place-items-center">
                  <Icon size={18} className="text-gweb-green2" />
                </div>
                <div className="font-semibold">{it.title}</div>
              </div>
              <p className="mt-3 text-sm text-gweb-muted">{it.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
