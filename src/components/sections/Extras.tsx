import { Server, Globe, Repeat, FilePlus, Clock } from "lucide-react";

const extras = [
  {
    icon: Server,
    title: "Configuración de hosting y publicación",
    price: "USD 30",
    desc: "Me encargo de dejar tu sitio funcionando online correctamente.",
  },
  {
    icon: Globe,
    title: "Gestión de dominio",
    price: "USD 20",
    desc: "Te ayudo a registrar y configurar tu dominio (el dominio se paga aparte, anual).",
  },
  {
    icon: Repeat,
    title: "Mantenimiento mensual",
    price: "USD 25 / mes",
    desc: "Pequeños cambios, ajustes y soporte continuo.",
  },
  {
    icon: FilePlus,
    title: "Página extra",
    price: "USD 35",
    desc: "A partir del Pack Semi-Premium.",
  },
  {
    icon: Clock,
    title: "Cambios puntuales fuera de alcance",
    price: "USD 20 / hora",
    desc: "Para modificaciones adicionales no contempladas inicialmente.",
  },
];

export default function Extras() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Extras opcionales
        </h2>
        <p className="mt-2 text-gweb-muted max-w-2xl">
          Servicios adicionales para adaptar la web exactamente a lo que necesites.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {extras.map((e) => {
          const Icon = e.icon;
          return (
            <div
              key={e.title}
              className="rounded-3xl border border-gweb-line bg-gradient-to-b from-gweb-panel to-black/30 p-6 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl border border-gweb-line bg-black/35 grid place-items-center">
                  <Icon size={18} className="text-gweb-green2" />
                </div>

                <div>
                  <div className="font-semibold">{e.title}</div>
                  <div className="mt-1 text-sm text-gweb-muted">{e.desc}</div>
                  <div className="mt-3 text-sm font-semibold text-gweb-text">
                    {e.price}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
