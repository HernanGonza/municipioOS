import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Blocks,
  LayoutDashboard,
  Database,
  ShieldCheck,
  BarChart3,
  Users,
  Leaf,
  FileCheck2,
  Coins,
  Wrench,
  Megaphone,
  Plus,
  Globe,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  Lock,
  Server,
  Cloud,
  RefreshCw,
  LifeBuoy,
  Puzzle,
  Smartphone,
  Settings,
  MessageCircle,
  Link2,
  MapPin,
  Vote,
  Camera,
  Menu,
  X,
} from "lucide-react";
import heroImage from "@/assets/hero-modular.jpg";
import paraleloLogo from "@/assets/paralelo-logo.png";
import enfoqueLogo from "@/assets/enfoque-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Administración Municipal Modular | Paralelo" },
      {
        name: "description",
        content:
          "Plataforma modular de gestión municipal: sistema base + módulos acoplables. Suscripción mensual por módulo.",
      },
      { property: "og:title", content: "Administración Municipal Modular" },
      {
        property: "og:description",
        content: "Una plataforma base que crece con tu municipio.",
      },
    ],
  }),
  component: Index,
});

const baseFeatures = [
  {
    icon: LayoutDashboard,
    title: "Panel de control unificado",
    desc: "Una sola interfaz para visualizar y operar todas las áreas del municipio en tiempo real.",
  },
  {
    icon: Database,
    title: "Integración de datos municipales",
    desc: "Información centralizada y consistente entre dependencias, sin silos ni duplicaciones.",
  },
  {
    icon: ShieldCheck,
    title: "Usuarios y permisos avanzados",
    desc: "Roles granulares, auditoría de acciones y control de acceso por dependencia.",
  },
  {
    icon: BarChart3,
    title: "Reportes y dashboards",
    desc: "Tableros operativos y reportes ejecutivos listos para la toma de decisiones.",
  },
];

const modules = [
  {
    icon: Users,
    name: "Participación Ciudadana",
    desc: "Canales directos entre gobierno y ciudadanos: consultas, peticiones, encuestas y participación comunitaria integrada.",
    featured: true,
  },
  {
    icon: Leaf,
    name: "Gestión Ambiental & Sostenibilidad",
    desc: "Monitoreo ambiental, gestión de residuos, proyectos ecológicos y reportes de sostenibilidad municipal.",
  },
  {
    icon: FileCheck2,
    name: "Licencias y Permisos",
    desc: "Solicitud, seguimiento y aprobación de licencias municipales completamente digitalizadas.",
  },
  {
    icon: Coins,
    name: "Gestión Tributaria & Tesorería",
    desc: "Recaudación, catastro digital, facturación electrónica y seguimiento de impuestos municipales.",
  },
  {
    icon: Wrench,
    name: "Servicios Públicos & Mantenimiento",
    desc: "Infraestructura, reportes de baches, alumbrado, agua y servicios urbanos en tiempo real.",
  },
  {
    icon: MapPin,
    name: "Obras Públicas & Territorio",
    desc: "Registro georreferenciado de obras y servicios ejecutados, con fotos antes/después y estados de verificación, para demostrar presencia territorial con datos concretos.",
  },
  {
    icon: Vote,
    name: "Presupuesto Participativo",
    desc: "Los vecinos proponen, votan y priorizan proyectos para su barrio, con seguimiento público del estado de cada iniciativa.",
  },
  {
    icon: Megaphone,
    name: "Comunicación & Transparencia",
    desc: "Portal de transparencia, boletines oficiales, información municipal y archivo histórico digital, con indicadores de gestión listos para exportar.",
  },
];

const includedServices = [
  {
    icon: GraduationCap,
    name: "Capacitación & Onboarding",
    desc: "Entrenamiento completo de equipos y adaptación de workflows en cada módulo.",
  },
  {
    icon: RefreshCw,
    name: "Migración e Integración de Datos",
    desc: "Traspaso de la información existente del municipio, sin duplicar cargas ni perder historial.",
  },
  {
    icon: Settings,
    name: "Configuración Inicial",
    desc: "Puesta en marcha de la plataforma y los módulos contratados, lista para empezar a operar.",
  },
  {
    icon: MessageCircle,
    name: "Soporte Técnico Estándar",
    desc: "Canal de soporte para consultas y resolución de incidentes durante toda la suscripción.",
  },
];

const addons = [
  {
    icon: Globe,
    name: "Rediseño Web Municipal",
    desc: "Sitio web municipal moderno, integrado con la plataforma, adaptativo y optimizado para ciudadanos y buscadores.",
  },
  {
    icon: LifeBuoy,
    name: "Mesa de Ayuda & Soporte Prioritario",
    desc: "Canal de soporte dedicado con tiempos de respuesta garantizados para incidentes críticos de la gestión municipal.",
  },
  {
    icon: Puzzle,
    name: "Desarrollo de Módulos a Medida",
    desc: "Si tu municipio necesita una funcionalidad que no está en el catálogo, la diseñamos e integramos como un módulo más de la plataforma.",
  },
  {
    icon: Server,
    name: "Implementación de Gobernanza de Datos",
    desc: "Configuramos la infraestructura para que tu municipio aloje su propia base de datos, cumpliendo requisitos normativos o de política interna.",
  },
  {
    icon: Link2,
    name: "Integraciones con Sistemas de Terceros",
    desc: "Conectamos la plataforma con pasarelas de pago, organismos provinciales o nacionales, y otros sistemas que ya use el municipio.",
  },
  {
    icon: Megaphone,
    name: "Comunicación Estratégica (Enfoque)",
    desc: "Enfoque Misiones diseña y ejecuta la estrategia de comunicación a partir de los datos de gestión de la plataforma: contenido para redes sociales, campañas de difusión y notas de prensa.",
  },
];

function Index() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-primary-foreground shadow-glow">
              <Blocks className="h-4 w-4" />
            </span>
            <span>
              Municipio<span className="text-gradient-brand">OS</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex">
            <a href="#alianza" className="hover:text-foreground">Alianza</a>
            <a href="#plataforma" className="hover:text-foreground">Plataforma</a>
            <a href="#modulos" className="hover:text-foreground">Módulos</a>
            <a href="#movil" className="hover:text-foreground">Móvil</a>
            <a href="#gobernanza" className="hover:text-foreground">Datos</a>
            <a href="#servicios" className="hover:text-foreground">Servicios</a>
          </nav>
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-foreground md:hidden"
            aria-label="Abrir menú"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="border-t border-border bg-background px-6 py-4 md:hidden">
            <div className="flex flex-col gap-1 text-sm font-medium text-ink-soft">
              {[
                { href: "#alianza", label: "Alianza" },
                { href: "#plataforma", label: "Plataforma" },
                { href: "#modulos", label: "Módulos" },
                { href: "#movil", label: "Móvil" },
                { href: "#gobernanza", label: "Datos" },
                { href: "#servicios", label: "Servicios" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-2 py-2.5 hover:bg-surface-2 hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-8 lg:pt-24">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-ink-soft shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Plataforma modular para gobiernos locales
            </div>
            <h1 className="mt-6 text-balance break-words font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Administración{" "}
              <span className="text-gradient-brand">Municipal Modular</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
              Una plataforma base que crece con tu municipio. Empezá con lo
              esencial y activá solo los módulos que necesitás, cuando los
              necesitás.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#modulos"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Explorar módulos
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#plataforma"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground shadow-sm hover:bg-surface-2"
              >
                Ver plataforma base
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border/70 pt-8">
              {[
                { k: "Modular", v: "Activá solo lo que necesitás" },
                { k: "Mensual", v: "Suscripción por módulo" },
                { k: "Escalable", v: "Crece con el municipio" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-display text-xl font-extrabold text-foreground">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-ink-soft">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative min-w-0">
            <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-brand opacity-20 blur-3xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-card-hover">
              <img
                src={heroImage}
                alt="Bloques modulares interconectados representando módulos del sistema municipal"
                width={1408}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ALIANZA ESTRATÉGICA */}
      <section id="alianza" className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Alianza estratégica
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Tecnología <span className="text-gradient-brand">+</span> Comunicación{" "}
              <span className="text-gradient-brand">+</span> Estrategia
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface-2 p-8 shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <img src={paraleloLogo} alt="Paralelo" className="h-10 w-auto max-w-[140px] object-contain" />
                <span className="text-xs font-semibold uppercase tracking-widest text-ink-soft">
                  Tecnología
                </span>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-ink-soft">
                Diseño y evolución de la plataforma de gestión municipal.
                Módulos, actualizaciones y soporte centralizado para cada
                municipio.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface-2 p-8 shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <img src={enfoqueLogo} alt="Enfoque Misiones" className="h-auto w-28 max-w-[140px] object-contain" />
                <span className="text-xs font-semibold uppercase tracking-widest text-ink-soft">
                  Comunicación
                </span>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-ink-soft">
                Comunicación estratégica y posicionamiento institucional.
                Convierte la gestión municipal en contenido, participación y
                visibilidad real.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-surface-2 p-8 md:p-10">
            <div className="flex items-start gap-4">
              <Sparkles className="mt-1 h-5 w-5 shrink-0 text-cyan" />
              <div>
                <h3 className="font-display text-xl font-bold">
                  ¿Por qué esta alianza es clave?
                </h3>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {[
                    "La plataforma no queda como herramienta interna",
                    "Se transforma en contenido comunicable",
                    "Aumenta la participación ciudadana",
                    "Potencia la visibilidad de la gestión municipal",
                  ].map((b) => (
                    <div key={b} className="flex items-start gap-2 text-sm text-ink-soft">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 border-t border-border pt-6 text-sm leading-relaxed text-ink-soft">
                  Paralelo y Enfoque Misiones integran plataforma, comunicación
                  y estrategia para que la gestión municipal sea visible,
                  participativa y sostenible desde el primer mes. La
                  plataforma genera los indicadores y datos de gestión;
                  Enfoque los convierte en contenido, campañas y comunicación
                  institucional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPUESTA DE VALOR */}
      <section id="plataforma" className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Plataforma base
              </span>
              <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
                Lo que incluye todo municipio,{" "}
                <span className="text-gradient-brand">desde el día uno</span>
              </h2>
              <p className="mt-6 text-lg text-ink-soft">
                El núcleo del sistema unifica gestión administrativa, datos,
                accesos y reportes. Sobre esta base, se conectan los módulos
                que tu municipio necesite.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-ink-soft">
                {[
                  "Gestión administrativa centralizada",
                  "Implementación guiada por nuestro equipo",
                  "Actualizaciones continuas incluidas",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {baseFeatures.map((f) => (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-border bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section id="modulos" className="relative overflow-hidden border-t border-border bg-surface-2 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
                Módulos acoplables
              </span>
              <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
                Activá solo los módulos que{" "}
                <span className="text-gradient-brand">tu municipio necesita</span>
              </h2>
              <p className="mt-5 text-lg text-ink-soft">
                Cada módulo se integra de forma nativa sobre la plataforma
                base, con una suscripción mensual independiente.
              </p>
            </div>
            <div className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-ink-soft shadow-sm">
              Suscripción mensual · por módulo
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <article
                key={m.name}
                onClick={() => setSelectedModule(m.name)}
                className={`group relative flex flex-col rounded-2xl border p-7 transition-all hover:-translate-y-1 cursor-pointer ${
                  m.featured
                    ? "border-transparent bg-gradient-brand text-primary-foreground shadow-glow"
                    : "border-border bg-surface shadow-card hover:shadow-card-hover"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-xl ${
                      m.featured
                        ? "bg-white/15 text-primary-foreground backdrop-blur"
                        : "bg-gradient-brand text-primary-foreground shadow-glow"
                    }`}
                  >
                    <m.icon className="h-5 w-5" />
                  </span>
                  
                </div>
                <h3 className="mt-6 font-display text-xl font-bold leading-tight">
                  {m.name}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    m.featured ? "text-primary-foreground/90" : "text-ink-soft"
                  }`}
                >
                  {m.desc}
                </p>
                {m.featured && (
                  <span className="mt-5 inline-flex w-fit items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur">
                    Módulo destacado
                  </span>
                )}
                <p className="mt-4 text-[11px] font-semibold opacity-75">
                  Click para más detalles →
                </p>
              </article>
            ))}

            {/* +más */}
            <article className="flex flex-col items-start justify-center rounded-2xl border-2 border-dashed border-border bg-transparent p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface text-ink-soft">
                <Plus className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold">y muchos más…</h3>
              <p className="mt-3 text-sm text-ink-soft">
                +10 módulos en desarrollo: control de personal, turnos,
                inventario, salud municipal, cultura y más.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MODAL DE MÓDULOS */}
      {selectedModule && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setSelectedModule(null)}
        >
          <div 
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8">
              {/* Header del Modal */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="font-display text-3xl font-extrabold">
                    {selectedModule}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedModule(null)}
                  className="text-2xl font-light text-ink-soft hover:text-foreground"
                >
                  ✕
                </button>
              </div>

              {/* Contenido por módulo */}
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
                {selectedModule === "Participación Ciudadana" && (
                  <>
                    <div className="space-y-4">
                      <p className="font-semibold text-foreground text-base">
                        Sistema integral de participación ciudadana para gobiernos locales
                      </p>
                      
                      <div>
                        <h3 className="font-bold text-foreground mb-2">Aplicación Móvil para Ciudadanos</h3>
                        <ul className="space-y-2 ml-4">
                          <li>• <strong>Reportes anónimos</strong> de situaciones urbanas: falta de luz, seguridad, calles deterioradas, cloacas rotas, espacios públicos</li>
                          <li>• <strong>Geolocalización integrada</strong> (con opción de seleccionar barrio manualmente)</li>
                          <li>• <strong>Categorización automática</strong> de reportes por tema y ubicación</li>
                          <li>• <strong>Seguimiento</strong> del estado de los reportes realizados</li>
                          <li>• <strong>Valoración</strong> de reportes por otros vecinos</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-foreground mb-2">Panel Central de Gestión</h3>
                        <ul className="space-y-2 ml-4">
                          <li>• <strong>Recepción centralizada</strong> de todos los reportes ciudadanos</li>
                          <li>• <strong>Estadísticas en tiempo real</strong>: por barrio, por tema, por estado</li>
                          <li>• <strong>Mapa de calor</strong> que muestra zonas críticas del municipio</li>
                          <li>• <strong>Asignación de tareas</strong> a dependencias responsables</li>
                          <li>• <strong>Seguimiento</strong> del estado de resolución</li>
                          <li>• <strong>Trazabilidad completa</strong> de cada reporte (creación, asignación, resolución)</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-foreground mb-2">Funcionalidades Complementarias</h3>
                        <ul className="space-y-2 ml-4">
                          <li>• <strong>Encuestas y consultas</strong> vecinales sobre temas específicos</li>
                          <li>• <strong>Votaciones</strong> para priorizar obras y mejoras</li>
                          <li>• <strong>Historial de participación</strong> por barrio y tema</li>
                          <li>• <strong>Integración total</strong> con el panel de gestión municipal</li>
                          <li>• <strong>Reportes ejecutivos</strong> para comunicación pública</li>
                        </ul>
                      </div>

                      <div className="mt-6 p-4 rounded-lg border border-cyan/20 bg-cyan/5">
                        <p className="text-xs font-semibold text-cyan uppercase mb-2">Impacto esperado</p>
                        <p>Transformación de la relación gobierno-ciudadanía mediante canales directos, transparencia en la gestión y participación activa en la mejora del municipio.</p>
                      </div>
                    </div>
                  </>
                )}

                {selectedModule === "Gestión Ambiental & Sostenibilidad" && (
                  <>
                    <p className="font-semibold text-foreground text-base">
                      Control ambiental integral y gestión de sostenibilidad municipal
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• Monitoreo de calidad ambiental en tiempo real</li>
                      <li>• Gestión centralizada de residuos y reciclaje</li>
                      <li>• Registro de proyectos ecológicos y su avance</li>
                      <li>• Reportes de sostenibilidad (ODS, métricas ambientales)</li>
                      <li>• Alertas automáticas por incidentes ambientales</li>
                      <li>• Estadísticas de impacto ambiental por período</li>
                    </ul>
                  </>
                )}

                {selectedModule === "Licencias y Permisos" && (
                  <>
                    <p className="font-semibold text-foreground text-base">
                      Digitalización completa de procesos de licencias
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• Portal ciudadano para solicitar licencias en línea</li>
                      <li>• Seguimiento en tiempo real del estado de trámites</li>
                      <li>• Integración con inspecciones digitales</li>
                      <li>• Generación automática de documentos</li>
                      <li>• Pagos en línea integrados</li>
                      <li>• Base de datos centralizada de licencias vigentes</li>
                    </ul>
                  </>
                )}

                {selectedModule === "Gestión Tributaria & Tesorería" && (
                  <>
                    <p className="font-semibold text-foreground text-base">
                      Control financiero y recaudación municipal
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• Catastro digital con información parcelaria actualizada</li>
                      <li>• Recaudación de impuestos y tasas digitalizadas</li>
                      <li>• Facturación electrónica automática</li>
                      <li>• Portal de pagos para ciudadanos</li>
                      <li>• Seguimiento de deudas por contribuyente</li>
                      <li>• Reportes financieros y de tesorería</li>
                    </ul>
                  </>
                )}

                {selectedModule === "Servicios Públicos & Mantenimiento" && (
                  <>
                    <p className="font-semibold text-foreground text-base">
                      Gestión operativa de infraestructura municipal
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• Portal ciudadano para reportar problemas (baches, luminarias, agua)</li>
                      <li>• Seguimiento de órdenes de trabajo y mantenimiento</li>
                      <li>• Gestión de cuadrillas y asignación de tareas</li>
                      <li>• Historial de intervenciones por ubicación</li>
                      <li>• Planificación de mantenimiento preventivo</li>
                      <li>• Integración con sistema de reportes ciudadanos</li>
                    </ul>
                  </>
                )}

                {selectedModule === "Obras Públicas & Territorio" && (
                  <>
                    <p className="font-semibold text-foreground text-base">
                      Registro y verificación territorial de obras y servicios
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• Registro georreferenciado de obras ejecutadas, en ejecución y servicios realizados</li>
                      <li>• Fotografías antes y después de cada intervención</li>
                      <li>• Estados de seguimiento: pendiente, en proceso, finalizada, verificada</li>
                      <li>• Historial completo por barrio, con responsables y tiempos de ejecución</li>
                      <li>• Módulo específico para intervenciones de cercanía (iluminación, poda, veredas, plazas)</li>
                      <li>• Indicadores de cumplimiento y mapas de calor de intervenciones por zona</li>
                    </ul>
                  </>
                )}

                {selectedModule === "Presupuesto Participativo" && (
                  <>
                    <p className="font-semibold text-foreground text-base">
                      Participación ciudadana en la priorización de proyectos barriales
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• Presentación de proyectos por parte de vecinos o del municipio</li>
                      <li>• Votación y priorización ciudadana de iniciativas</li>
                      <li>• Seguimiento público del estado de cada proyecto</li>
                      <li>• Categorización por barrio y tipo de intervención</li>
                      <li>• Integración con el panel de gestión municipal para su ejecución</li>
                      <li>• Estadísticas de participación por barrio</li>
                    </ul>
                  </>
                )}

                {selectedModule === "Comunicación & Transparencia" && (
                  <>
                    <p className="font-semibold text-foreground text-base">
                      Transparencia pública y comunicación municipal
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• Portal de transparencia con información pública centralizada</li>
                      <li>• Boletín oficial digital con búsqueda integrada</li>
                      <li>• Sistema de archivo histórico digital</li>
                      <li>• Publicación de actas y resoluciones</li>
                      <li>• Calendario de eventos y convocatorias públicas</li>
                      <li>• Acceso a información mediante solicitudes formales</li>
                      <li>• Indicadores y reportes de gestión listos para exportar</li>
                    </ul>
                    <div className="mt-6 p-4 rounded-lg border border-cyan/20 bg-cyan/5">
                      <p className="text-xs font-semibold text-cyan uppercase mb-2">A tener en cuenta</p>
                      <p>
                        El módulo entrega los datos e indicadores de la gestión, listos para
                        comunicar. La elaboración del contenido en sí (piezas para redes,
                        campañas, notas de prensa) la realiza Enfoque Misiones como servicio
                        aparte — ver "Con costo adicional".
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Footer del Modal */}
              <div className="mt-8 flex gap-3 pt-6 border-t border-border">
                <button
                  onClick={() => setSelectedModule(null)}
                  className="flex-1 rounded-full border border-border bg-surface px-4 py-3 font-semibold text-foreground hover:bg-surface-2"
                >
                  Cerrar
                </button>
                <a
                  href="mailto:hola@paralelo.tech"
                  className="flex-1 rounded-full bg-gradient-brand px-4 py-3 font-semibold text-primary-foreground hover:scale-[1.02] transition-transform text-center"
                >
                  Consultar
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MÓVIL */}
      <section id="movil" className="border-t border-border bg-surface-2 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
                Aplicaciones móviles
              </span>
              <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
                Cada módulo puede vivir{" "}
                <span className="text-gradient-brand">también en el bolsillo</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                La gestión municipal no siempre pasa por un escritorio. El
                vecino reporta desde la vereda, la cuadrilla carga evidencia
                de una obra recién terminada, el referente territorial releva
                una necesidad en el momento — la plataforma tiene que estar
                ahí, no esperar a que alguien vuelva a la oficina.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                Por eso cada módulo puede tener su propia aplicación móvil
                nativa, pensada para el uso real en el territorio, no como
                una versión reducida de la pantalla de escritorio.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  icon: Smartphone,
                  title: "Participación Ciudadana",
                  desc: "El vecino reporta y hace seguimiento desde su celular, sin pasar por el navegador.",
                },
                {
                  icon: Camera,
                  title: "Obras Públicas & Territorio",
                  desc: "Las cuadrillas cargan fotos y actualizan el estado de una intervención in situ.",
                },
                {
                  icon: Wrench,
                  title: "Servicios Públicos & Mantenimiento",
                  desc: "El personal de campo recibe y cierra órdenes de trabajo desde el lugar.",
                },
              ].map((e) => (
                <div
                  key={e.title}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 shadow-card"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                    <e.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold">{e.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GOBERNANZA DE DATOS */}
      <section id="gobernanza" className="border-t border-border bg-gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
              Gobernanza de datos
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Tus datos,{" "}
              <span className="text-gradient-brand">tus reglas</span>
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Sabemos que la información municipal es sensible. Por eso la
              plataforma está pensada para que cada municipio decida dónde y
              cómo se resguardan sus datos, sin resignar ninguna
              funcionalidad.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-8 shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                <Cloud className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold">
                Alojado por Paralelo
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Nosotros gestionamos la infraestructura de punta a punta:
                mantenimiento, actualizaciones y respaldos incluidos. La
                opción más simple para arrancar rápido.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8 shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                <Server className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold">
                Gobernanza propia
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Si tu municipio necesita resguardar la información en su
                propia infraestructura por motivos normativos o de política
                interna, lo hacemos posible sin perder ninguna funcionalidad
                de la plataforma.
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 py-4 text-sm text-ink-soft">
            <Lock className="h-4 w-4 shrink-0 text-cyan" />
            Misma plataforma, mismas funcionalidades — sin importar dónde
            vivan los datos.
          </div>
        </div>
      </section>

      {/* SERVICIOS COMPLEMENTARIOS */}
      <section id="servicios" className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Servicios adicionales
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Personalización e <span className="text-gradient-brand">implementación</span>
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Más allá de la plataforma: servicios profesionales para acompañar
              la transformación digital del municipio.
            </p>
          </div>

          {/* INCLUIDO EN LA SUSCRIPCIÓN */}
          <div className="mt-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan">
              <CheckCircle2 className="h-3.5 w-3.5" /> Incluido en tu suscripción
            </span>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {includedServices.map((s) => (
                <div
                  key={s.name}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan/10 text-cyan">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold">{s.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-soft">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CON COSTO ADICIONAL */}
          <div className="mt-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Con costo adicional
            </span>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {addons.map((a) => (
                <article
                  key={a.name}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface-2 p-7 transition-all hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-gradient-brand opacity-10 blur-2xl transition-opacity group-hover:opacity-25" />
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                    <Sparkles className="h-3 w-3" /> Add-on
                  </span>
                  <span className="mt-4 grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface text-primary">
                    <a.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">{a.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-ink-soft sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 font-display font-bold">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-brand text-primary-foreground">
                <Blocks className="h-3.5 w-3.5" />
              </span>
              MunicipioOS · por Paralelo
            </div>
            <div className="h-5 w-px bg-border" />
            <a href="https://enfoquemisiones.com/" target="_blank" rel="noopener noreferrer">
              <img src={enfoqueLogo} alt="Enfoque Misiones" className="h-auto w-24 object-contain opacity-80 transition-opacity hover:opacity-100" />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Paralelo × Enfoque Misiones. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}