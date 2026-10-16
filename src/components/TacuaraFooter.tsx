import { Globe, Info, Mail } from "lucide-react";

const SITE_URL = "https://www.tacuara.com.ar";
const EMAIL = "hola@tacuara.com.ar";

/** Pie de página común de las propuestas de Tacuara. */
export function TacuaraFooter({ title }: { title: string }) {
  return (
    <footer className="relative overflow-hidden bg-[oklch(0.2_0.035_135)] text-[oklch(0.96_0.02_100/0.75)]">
      <div className="mx-auto w-[min(1180px,calc(100%-48px))]">
        <div className="relative z-10 flex flex-col justify-between gap-7 border-b border-dashed border-[oklch(0.96_0.02_100/0.3)] py-11 md:flex-row md:items-center">
          <div>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tacuara, sitio web"
              className="flex min-h-11 items-center gap-3.5 text-[oklch(0.96_0.02_100)] no-underline"
            >
              <img src="/tacuara-mark-bn-96.webp" alt="" width={44} height={44} className="h-11 w-11 rounded-md object-cover" />
              <span className="text-[2rem] font-extrabold lowercase leading-none tracking-[-0.03em]">tacuara</span>
            </a>
            <div className="mt-4 text-sm">{title}</div>
          </div>
          <ul className="flex list-none flex-wrap gap-x-5 gap-y-1.5 p-0 text-base">
            {[
              { href: `mailto:${EMAIL}`, icon: <Mail size={18} aria-hidden="true" />, label: EMAIL },
              { href: SITE_URL, icon: <Globe size={18} aria-hidden="true" />, label: "www.tacuara.com.ar" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex min-h-11 items-center gap-2 text-[oklch(0.96_0.02_100)] underline decoration-transparent underline-offset-[5px] transition hover:text-[oklch(0.78_0.17_130)] hover:decoration-current"
                >
                  {l.icon} {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative z-10 flex flex-col gap-3 pb-2 pt-6 font-mono text-[0.74rem] uppercase tracking-[0.04em] md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Tacuara · Propuesta elaborada en Octubre 2026</span>
          <span className="flex items-center gap-2">
            <Info size={14} aria-hidden="true" /> Propuesta de proveedor. No es un sitio oficial del Gobierno.
          </span>
        </div>
      </div>
      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[3vw] select-none text-center text-[clamp(5rem,22vw,20rem)] font-extrabold lowercase leading-[0.8] tracking-[-0.05em] text-[oklch(0.96_0.02_100/0.07)]"
      >
        tacuara
      </p>
    </footer>
  );
}
