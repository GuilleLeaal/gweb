import logoWhite from "../assets/brand/logo-white.svg";
import { CONTACT } from "../config/contact";

export default function Footer() {
  return (
    <footer className="border-t border-gweb-line">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logoWhite} alt="GWeb" className="h-8 w-auto" />
            <div>
              <div className="font-semibold">GWeb</div>
              <div className="text-sm text-gweb-muted">
                Webs modernas para negocios y emprendimientos.
              </div>
            </div>
          </div>

          <div className="text-sm text-gweb-muted space-y-2">
            <div>
              Instagram:{" "}
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gweb-text transition"
              >
                @gweb.oficial
              </a>
            </div>

            <div>
              WhatsApp:{" "}
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gweb-text transition"
              >
                +598 98 429 614
              </a>
            </div>

            <div>
              Email:{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="hover:text-gweb-text transition"
              >
                {CONTACT.email}
              </a>
            </div>

            <div className="pt-2 text-xs text-gweb-muted">
              © {new Date().getFullYear()} GWeb. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
