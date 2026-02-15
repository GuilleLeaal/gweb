import { ArrowUpRight } from "lucide-react";
import logoWhite from "../../assets/brand/logo-white.svg";
import { CONTACT } from "../../config/contact";

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <div className="rounded-[28px] border border-gweb-line bg-[radial-gradient(900px_380px_at_20%_0%,rgba(46,107,77,0.25),transparent)] p-8 md:p-10 shadow-soft">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoWhite} alt="GWeb" className="h-9 w-auto" />
              <span className="text-sm text-gweb-muted">Listo para vender</span>
            </div>

            <h3 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight">
              ¿Hacemos tu web y la dejamos lista para conseguir clientes?
            </h3>

            <p className="mt-2 text-gweb-muted max-w-2xl">
              Te paso propuesta según tu pack ideal y el objetivo de tu negocio.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold
                         bg-gweb-green hover:bg-gweb-green2 transition shadow-soft"
            >
              Hablemos por WhatsApp <ArrowUpRight size={18} />
            </a>

            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold
                         border border-gweb-line bg-black/20 hover:bg-white/5 transition"
            >
              Ver Instagram <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
