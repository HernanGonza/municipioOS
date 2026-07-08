import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  Zap,
  Network,
  TrendingUp,
  Share2,
  ChevronRight,
  Circle,
  Search,
  Clock,
  Lightbulb,
  Target,
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
          "Gestión municipal integrada: un único sistema para toda la administración. Módulos que crecen con tu municipio.",
      },
      { property: "og:title", content: "Gestión Municipal Integrada" },
      {
        property: "og:description",
        content: "Menos sistemas aislados. Más gestión integrada. Un municipio, una sola plataforma.",
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
    featured: false,
  },
  {
    icon: FileCheck2,
    name: "Licencias y Permisos",
    desc: "Solicitud, seguimiento y aprobación de licencias municipales completamente digitalizadas.",
    featured: false,
  },
  {
    icon: Coins,
    name: "Gestión Tributaria & Tesorería",
    desc: "Recaudación, catastro digital, facturación electrónica y seguimiento de impuestos municipales.",
    featured: false,
  },
  {
    icon: Wrench,
    name: "Servicios Públicos & Mantenimiento",
    desc: "Infraestructura, reportes de baches, alumbrado, agua y servicios urbanos en tiempo real.",
    featured: true,
  },
  {
    icon: MapPin,
    name: "Obras Públicas & Territorio",
    desc: "Registro georreferenciado de obras y servicios ejecutados, con fotos antes/después y estados de verificación.",
    featured: true,
  },
  {
    icon: Vote,
    name: "Presupuesto Participativo",
    desc: "Los vecinos proponen, votan y priorizan proyectos para su barrio, con seguimiento público del estado de cada iniciativa.",
    featured: false,
  },
  {
    icon: Megaphone,
    name: "Comunicación & Transparencia",
    desc: "Portal de transparencia, boletines oficiales, información municipal y archivo histórico digital.",
    featured: false,
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
    desc: "Puesta en marcha de la solución y los módulos contratados, lista para empezar a operar.",
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
    desc: "Sitio web municipal moderno, integrado con la solución, adaptativo y optimizado para ciudadanos.",
  },
  {
    icon: LifeBuoy,
    name: "Mesa de Ayuda & Soporte Prioritario",
    desc: "Canal de soporte dedicado con tiempos de respuesta garantizados para incidentes críticos.",
  },
  {
    icon: Puzzle,
    name: "Desarrollo de Módulos a Medida",
    desc: "Si tu municipio necesita una funcionalidad que no está en el catálogo, la diseñamos e integramos.",
  },
  {
    icon: Server,
    name: "Implementación de Gobernanza de Datos",
    desc: "Configuramos la infraestructura para que tu municipio aloje su propia base de datos.",
  },
  {
    icon: Link2,
    name: "Integraciones con Sistemas de Terceros",
    desc: "Conectamos la solución con pasarelas de pago, organismos provinciales y otros sistemas.",
  },
  {
    icon: Megaphone,
    name: "Comunicación Estratégica (Enfoque)",
    desc: "Enfoque Misiones diseña y ejecuta la estrategia de comunicación a partir de los datos de gestión.",
  },
];

const implementationSteps = [
  {
    number: 1,
    title: "Reunión",
    desc: "Entendemos tu municipio, necesidades y procesos actuales.",
  },
  {
    number: 2,
    title: "Implementación",
    desc: "Desplegamos el sistema base. Cero interrupción de operaciones.",
  },
  {
    number: 3,
    title: "Migración",
    desc: "Trasladamos tus datos de forma segura y verificada.",
  },
  {
    number: 4,
    title: "Capacitación",
    desc: "Equipos entrenados. Listos para trabajar en la plataforma.",
  },
  {
    number: 5,
    title: "Funcionando",
    desc: "Tu municipio operando en MunicipioOS. Agregás módulos cuando los necesites.",
  },
];

// Animation preset
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

// Hero component with parallax
function HeroSection({ heroImage }: { heroImage: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden bg-gradient-hero">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-8 lg:pt-24">
        <motion.div className="min-w-0">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-ink-soft shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Ecosistema modular para gobiernos locales
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-6 text-balance break-words font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Un municipio.{" "}
            <span className="text-gradient-brand">Una plataforma.</span>
            <br />
            Todos los datos conectados.
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl"
          >
            Gestión municipal centralizada. Datos unificados. Decisiones informadas. Todo integrado en un único ecosistema que crece con tu municipio.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#flujo"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              Ver cómo funciona
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#implementacion"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground shadow-sm hover:bg-surface-2"
            >
              Agendar reunión
            </a>
          </motion.div>
          <motion.dl
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.5 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border/70 pt-8"
          >
            {[
              { k: "+20", v: "Módulos proyectados" },
              { k: "100%", v: "Responsive" },
              { k: "∞", v: "Actualizaciones" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-xl font-extrabold text-foreground">
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-ink-soft">{s.v}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div style={{ y }} className="relative min-w-0">
          <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-brand opacity-20 blur-3xl" />
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="overflow-hidden rounded-3xl border border-border bg-surface shadow-card-hover"
          >
            <img
              src={heroImage}
              alt="Sistema modular integrado para gestión municipal"
              width={1408}
              height={1024}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Index() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
        .scroll-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .scroll-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
        }
      `}</style>

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
            <a href="#flujo" className="hover:text-foreground">Cómo funciona</a>
            <a href="#arquitectura" className="hover:text-foreground">Arquitectura</a>
            <a href="#modulos" className="hover:text-foreground">Módulos</a>
            <a href="#red" className="hover:text-foreground">Red de Municipios</a>
            <a href="#implementacion" className="hover:text-foreground">Implementación</a>
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
                { href: "#flujo", label: "Cómo funciona" },
                { href: "#arquitectura", label: "Arquitectura" },
                { href: "#modulos", label: "Módulos" },
                { href: "#red", label: "Red de Municipios" },
                { href: "#implementacion", label: "Implementación" },
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

      {/* HERO - PROBLEM ORIENTED */}
      <HeroSection heroImage={heroImage} />

      {/* PARA EL INTENDENTE */}
      <section className="border-t border-border bg-gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
                Para los que lideran
              </span>
              <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
                Para Autoridades
              </h2>
              <p className="mt-6 text-lg text-ink-soft">
                MunicipioOS no es solo un sistema. Es tu aliado de gestión.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  { icon: BarChart3, title: "Ver toda la gestión desde un único tablero", desc: "Panel de control ejecutivo con indicadores clave en tiempo real" },
                  { icon: Puzzle, title: "Detectar cuellos de botella", desc: "Identifica qué procesos ralentizan la administración" },
                  { icon: TrendingUp, title: "Medir tiempos de respuesta", desc: "Cuánto tardan los trámites, reportes y servicios" },
                  { icon: FileCheck2, title: "Mostrar resultados con evidencia", desc: "Documentación foto a foto, antes y después, auditable" },
                  { icon: Globe, title: "Indicadores para tomar decisiones", desc: "Datos concretos para planificar y presupuestar" },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className="p-2 rounded-lg bg-gradient-brand/10 text-gradient-brand shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-ink-soft">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-border bg-surface p-8 shadow-card"
            >
              <div className="space-y-6">
                <div className="rounded-2xl bg-gradient-brand/10 p-6 border border-gradient-brand/20">
                  <p className="font-semibold text-foreground mb-3">Panel del Intendente</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-ink-soft">Reportes resueltos hoy</span>
                      <span className="font-bold text-gradient-brand">47</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink-soft">Tiempo promedio de respuesta</span>
                      <span className="font-bold text-gradient-brand">2.4 días</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink-soft">Satisfacción ciudadana</span>
                      <span className="font-bold text-gradient-brand">94%</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-cyan/10 p-6 border border-cyan/20">
                  <p className="font-semibold text-foreground mb-3">Cuellos de botella detectados</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                      <span>Licencias: deuda de 23 días</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                      <span>Tributaria: pagos atrasados -18%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FLUJO CIUDADANO - PROBLEMA A SOLUCIÓN */}
      <section id="flujo" className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
              De la queja a la acción
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Así funciona en la práctica
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Un ciudadano reporta un problema. El municipio lo resuelve. El ciudadano sabe qué pasó. Sin intermediarios, sin demoras.
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-6 items-stretch">
            {[
              { icon: Users, label: "Ciudadano", desc: "Reporta un problema" },
              { icon: Circle, label: "App Móvil", desc: "Con foto y ubicación" },
              { icon: LayoutDashboard, label: "Sistema", desc: "Recibe y categoriza" },
              { icon: Wrench, label: "Cuadrilla", desc: "Asignación automática" },
              { icon: CheckCircle2, label: "Resolver", desc: "Documentan con foto" },
              { icon: MessageCircle, label: "Notificación", desc: "Ciudadano ve la solución" },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="flex-1 w-full">
                  <div className="rounded-2xl border border-border bg-surface-2 p-6 h-full flex flex-col items-center justify-center gap-3 text-center card-hover">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-sm">{step.label}</h3>
                      <p className="text-xs text-ink-soft mt-1">{step.desc}</p>
                    </div>
                  </div>
                </div>
                {i < 5 && (
                  <div className="hidden md:flex items-center justify-center h-6">
                    <ChevronRight className="h-5 w-5 text-gradient-brand" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl border border-border bg-surface-2">
            <p className="text-center text-sm leading-relaxed text-ink-soft">
              <strong>Resultado:</strong> El ciudadano no se siente ignorado. El municipio demuestra gestión. Todo queda documentado y auditable. Sin papeles, sin demoras, sin grises.
            </p>
          </div>
        </div>
      </section>

      {/* ARQUITECTURA - DIAGRAMA VISUAL */}
      <section id="arquitectura" className="border-t border-border bg-surface-2 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
              La arquitectura
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Sistema base + Módulos acoplables
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Todo funciona sobre un sistema central sólido. Los módulos se acoplan sin afectar el resto.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3 items-start">
            {/* SISTEMA BASE - Central */}
            <div className="lg:col-span-1">
              <div className="rounded-3xl border-2 border-gradient-brand bg-gradient-to-br from-gradient-brand/10 to-transparent p-8 relative shadow-lg">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-background px-3 py-1 rounded-full border border-border">
                  <span className="text-xs font-bold uppercase text-cyan">Core</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-center mb-8 mt-4">Sistema Base</h3>
                <div className="space-y-3">
                  {[
                    "Panel unificado",
                    "Integración de datos",
                    "Usuarios y permisos",
                    "Reportes centrales",
                    "Auditoría completa",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MÓDULOS - Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {modules.map((m) => (
                  <div
                    key={m.name}
                    className={`rounded-2xl border p-4 text-center text-xs font-semibold transition-all card-hover ${
                      m.featured
                        ? "border-transparent bg-gradient-brand text-primary-foreground shadow-glow"
                        : "border-border bg-surface text-foreground"
                    }`}
                  >
                    <div className="flex justify-center mb-2">
                      <m.icon className="h-5 w-5" />
                    </div>
                    <p className="line-clamp-2">{m.name}</p>
                    {m.featured && (
                      <p className="text-[10px] mt-1 opacity-75">Destacado</p>
                    )}
                  </div>
                ))}
                <div className="rounded-2xl border-2 border-dashed border-border bg-transparent p-4 flex items-center justify-center text-xs font-semibold text-ink-soft">
                  + más en desarrollo
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-xl border border-border bg-surface text-center text-sm text-ink-soft">
            <span className="font-semibold">Cada módulo evoluciona de forma independiente.</span> Sin romper nada. Sin reemplazar. Sin fricción.
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section id="modulos" className="relative overflow-hidden border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
                Módulos del Ecosistema
              </span>
              <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
                Activá solo los módulos que{" "}
                <span className="text-gradient-brand">tu municipio necesita</span>
              </h2>
              <p className="mt-5 text-lg text-ink-soft">
                Cada módulo se integra de forma nativa en el ecosistema. Crecen juntos. Se comunican. Generan datos que otros módulos aprovechan.
              </p>
            </div>
            <div className="rounded-full border border-border bg-surface-2 px-4 py-2 text-xs font-semibold text-ink-soft shadow-sm">
              Incorporación progresiva
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, idx) => (
              <motion.article
                key={m.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: idx * 0.08 }}
                onClick={() => setSelectedModule(m.name)}
                className={`group relative flex flex-col rounded-2xl border p-7 transition-all hover:-translate-y-1 cursor-pointer card-hover ${
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
                    Destacado
                  </span>
                )}
                <p className="mt-4 text-[11px] font-semibold opacity-75">
                  Click para más detalles →
                </p>
              </motion.article>
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
            className="w-full max-w-3xl rounded-3xl border border-border bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8">
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

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
                {selectedModule === "Participación Ciudadana" && (
                  <>
                    <div className="space-y-3">
                      <p className="font-semibold text-foreground text-sm">
                        Sistema integral de participación ciudadana
                      </p>
                      <div>
                        <h3 className="font-bold text-foreground mb-1 text-sm">Aplicación Móvil</h3>
                        <ul className="space-y-1 ml-4 text-xs">
                          <li>• <strong>Reportes anónimos</strong> con geolocalización</li>
                          <li>• <strong>Seguimiento</strong> del estado de los reportes</li>
                          <li>• <strong>Valoración</strong> de reportes por vecinos</li>
                          <li>• <strong>Encuestas</strong> y consultas vecinales</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1 text-sm">Panel Central</h3>
                        <ul className="space-y-1 ml-4 text-xs">
                          <li>• Recepción centralizada de reportes</li>
                          <li>• Estadísticas en tiempo real por barrio</li>
                          <li>• Mapa de calor de zonas críticas</li>
                          <li>• Asignación automática de tareas</li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
                {selectedModule === "Gestión Ambiental & Sostenibilidad" && (
                  <>
                    <p className="font-semibold text-foreground text-base">Control ambiental integral</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Monitoreo de calidad ambiental en tiempo real</li>
                      <li>• Gestión centralizada de residuos y reciclaje</li>
                      <li>• Registro de proyectos ecológicos</li>
                      <li>• Reportes de sostenibilidad</li>
                    </ul>
                  </>
                )}
                {selectedModule === "Licencias y Permisos" && (
                  <>
                    <p className="font-semibold text-foreground text-base">Digitalización completa de licencias</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Portal ciudadano para solicitar en línea</li>
                      <li>• Seguimiento en tiempo real</li>
                      <li>• Generación automática de documentos</li>
                      <li>• Pagos en línea integrados</li>
                    </ul>
                  </>
                )}
                {selectedModule === "Gestión Tributaria & Tesorería" && (
                  <>
                    <p className="font-semibold text-foreground text-base">Control financiero municipal</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Catastro digital actualizado</li>
                      <li>• Recaudación digitalizada</li>
                      <li>• Facturación electrónica</li>
                      <li>• Portal de pagos para ciudadanos</li>
                    </ul>
                  </>
                )}
                {selectedModule === "Servicios Públicos & Mantenimiento" && (
                  <>
                    <p className="font-semibold text-foreground text-base">Gestión de infraestructura</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Portal para reportar problemas</li>
                      <li>• Seguimiento de órdenes de trabajo</li>
                      <li>• Gestión de cuadrillas</li>
                      <li>• Mantenimiento preventivo planificado</li>
                    </ul>
                  </>
                )}
                {selectedModule === "Obras Públicas & Territorio" && (
                  <>
                    <p className="font-semibold text-foreground text-base">Registro territorial de obras</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Registro georreferenciado de obras</li>
                      <li>• Fotos antes y después</li>
                      <li>• Seguimiento por barrio</li>
                      <li>• Mapas de calor de intervenciones</li>
                    </ul>
                  </>
                )}
                {selectedModule === "Presupuesto Participativo" && (
                  <>
                    <p className="font-semibold text-foreground text-base">Participación en priorización</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Vecinos proponen proyectos</li>
                      <li>• Votación y priorización ciudadana</li>
                      <li>• Seguimiento público del estado</li>
                      <li>• Integración con ejecución municipal</li>
                    </ul>
                  </>
                )}
                {selectedModule === "Comunicación & Transparencia" && (
                  <>
                    <p className="font-semibold text-foreground text-base">Transparencia pública</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Portal de transparencia centralizado</li>
                      <li>• Boletín oficial digital</li>
                      <li>• Archivo histórico digital</li>
                      <li>• Indicadores de gestión exportables</li>
                    </ul>
                  </>
                )}
              </div>

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

      {/* RED COLABORATIVA DE MUNICIPIOS */}
      <section id="red" className="border-t border-border bg-surface-2 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan">
              <Network className="h-3.5 w-3.5" /> Ecosistema colaborativo
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              La primera <span className="text-gradient-brand">red colaborativa</span> de municipios
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-foreground font-semibold">
              Ningún municipio debería resolver los mismos problemas desde cero.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              MunicipioOS conecta gobiernos locales para compartir soluciones, procedimientos, indicadores y experiencias. Cuando un municipio mejora, toda la red mejora con él.
            </p>
          </motion.div>

          {/* MÓDULOS DE COLABORACIÓN */}
          <div className="mb-16">
            <h3 className="font-display text-2xl font-bold mb-8">Módulo: Red de Municipios</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Sparkles, label: "Novedades", desc: "Últimas mejoras y funcionalidades" },
                { icon: TrendingUp, label: "Buenas prácticas", desc: "Experiencias que funcionaron" },
                { icon: FileCheck2, label: "Procedimientos", desc: "Flujos de trabajo documentados" },
                { icon: Puzzle, label: "Formularios", desc: "Templates reutilizables" },
                { icon: BarChart3, label: "Indicadores", desc: "KPIs e métricas" },
                { icon: Users, label: "Benchmark", desc: "Compárate con municipios similares" },
                { icon: MessageCircle, label: "Consultas", desc: "Preguntas entre municipios" },
                { icon: Globe, label: "Marketplace", desc: "Recursos compartidos" },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: idx * 0.06 }}
                  className="rounded-2xl border border-border bg-surface p-6 hover:border-gradient-brand hover:shadow-card-hover transition-all"
                >
                  <div className="flex flex-col items-center gap-3 mb-3 text-center">
                    <div className="p-2 rounded-lg bg-gradient-brand/10 text-gradient-brand">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground">{item.label}</h4>
                  </div>
                  <p className="text-xs text-ink-soft text-center">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EJEMPLOS DE COLABORACIÓN */}
          <div className="grid gap-8 md:grid-cols-2 mb-16">
            <motion.div
              {...fadeUp}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <h3 className="font-display font-bold text-lg mb-4 text-gradient-brand">Compartir Conocimiento</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <FileCheck2 className="h-5 w-5 text-gradient-brand shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Procedimientos</p>
                    <p className="text-xs text-ink-soft mt-1">Un municipio armó un excelente procedimiento para habilitaciones comerciales. Otros lo importan. Sin reinventar nada.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <BarChart3 className="h-5 w-5 text-gradient-brand shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Indicadores</p>
                    <p className="text-xs text-ink-soft mt-1">¿Cómo mides reparación de baches? ¿Recolección? ¿Atención al vecino? Todos los indicadores se comparten.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <TrendingUp className="h-5 w-5 text-gradient-brand shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Dashboards</p>
                    <p className="text-xs text-ink-soft mt-1">Un secretario crea un tablero espectacular. Otro municipio lo adopta con un clic. Ya está funcionando.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <h3 className="font-display font-bold text-lg mb-4 text-cyan">Inteligencia Colectiva</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Lightbulb className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Consultas</p>
                    <p className="text-xs text-ink-soft mt-1">"¿Cómo resolvieron el control de vendedores ambulantes?" Otros municipios responden, comparten protocolos, ordenanzas.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Target className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Municipios Similares</p>
                    <p className="text-xs text-ink-soft mt-1">Encuentra municipios parecidos al tuyo (habitantes, presupuesto, superficie). Ve cómo resolvieron tus mismos problemas.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Zap className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Experiencias</p>
                    <p className="text-xs text-ink-soft mt-1">Un municipio implementó poda inteligente. Bajó 40% los reclamos. Eso genera comunidad y aprendizaje colectivo.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CATÁLOGO DE MÓDULOS MEJORADO */}
          <motion.div
            {...fadeUp}
            className="rounded-2xl border border-border bg-gradient-hero p-8 md:p-10"
          >
            <h3 className="font-display text-2xl font-bold mb-8">Catálogo de Módulos Comunitario</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold text-foreground mb-4">Cada módulo tiene visibilidad completa</p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-ink-soft">Utilizado por</span>
                    <span className="font-semibold">42 municipios</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-soft">Satisfacción</span>
                    <span className="font-semibold text-gradient-brand">4.8 / 5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-soft">Desarrollado por</span>
                    <span className="font-semibold">Eldorado</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-soft">Mejoras aportadas por</span>
                    <span className="font-semibold">Oberá, Puerto Iguazú</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-soft">Integraciones nativas</span>
                    <span className="font-semibold">3</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-4">Marketplace de recursos</p>
                <ul className="space-y-2 text-sm">
                  {["Plantillas de procedimientos", "Protocolos de atención", "Ordenanzas municipales", "Dashboards listos para usar", "KPIs preconfigurados", "Encuestas y consultas"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-gradient-brand shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* DIFERENCIAL COMPETITIVO */}
          <motion.div
            {...fadeUp}
            className="mt-16 max-w-4xl"
          >
            <p className="text-lg text-foreground mb-6">
              Si mañana aparece un sistema mejor, un municipio podría cambiarse.
            </p>
            <p className="text-lg text-foreground mb-12">
              Pero si forma parte de una red donde comparte módulos, indicadores, procedimientos y experiencias con decenas de municipios...
            </p>
            <h3 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-foreground">Ya no está comprando un sistema.</span>
              <br />
              <span className="text-gradient-brand">Está formando parte de un ecosistema.</span>
            </h3>
          </motion.div>
        </div>
      </section>

      {/* ¿CÓMO EMPEZAMOS? */}
      <section id="implementacion" className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Sin sorpresas, sin disrupciones
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              ¿Cómo empezamos?
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Implementación progresiva. Tu municipio sigue funcionando sin interrupciones.
            </p>
          </div>

          {/* Desktop version */}
          <div className="hidden md:grid grid-cols-5 gap-4 mb-12">
            {implementationSteps.map((step, idx) => (
              <div key={step.number} className="relative">
                <div className="rounded-2xl border border-border bg-surface p-6 text-center card-hover" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-brand text-primary-foreground font-display font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-xs text-ink-soft">{step.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 border-border bg-background flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-brand" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile version */}
          <div className="md:hidden space-y-4 mb-12">
            {implementationSteps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-brand text-primary-foreground font-display font-bold mb-2">
                    {step.number}
                  </div>
                  {step.number < 5 && <div className="w-1 h-8 bg-border" />}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-display font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-ink-soft">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl border border-border bg-surface-2 text-center">
            <p className="text-sm leading-relaxed text-ink-soft">
              <strong>Implementación progresiva:</strong> adaptada a cada municipio. Sin interrupciones operativas. Con capacitación integrada y soporte dedicado en cada fase. Tiempos concretos se definen en la reunión inicial.
            </p>
          </div>
        </div>
      </section>

      {/* GOBERNANZA DE DATOS */}
      <section className="border-t border-border bg-gradient-hero py-24">
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
              El ecosistema funciona igual esté alojado en nuestros servidores o en tu propia infraestructura.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-8 shadow-card card-hover">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                <Cloud className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold">
                Alojado por Paralelo
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Nosotros gestionamos todo: infraestructura, mantenimiento, respaldos y actualizaciones.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8 shadow-card card-hover">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                <Server className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold">
                Infraestructura propia
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Si necesitás alojar en tu propio servidor, lo hacemos posible. Mismo ecosistema.
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 py-4 text-sm text-ink-soft">
            <Lock className="h-4 w-4 shrink-0 text-cyan" />
            Mismo ecosistema, mismas funcionalidades — sin importar dónde aloje los datos.
          </div>
        </div>
      </section>

      {/* SERVICIOS COMPLEMENTARIOS */}
      <section className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Más allá del sistema
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Servicios que acompañan <span className="text-gradient-brand">tu transformación</span>
            </h2>
          </div>

          {/* INCLUIDO */}
          <div className="mt-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan">
              <CheckCircle2 className="h-3.5 w-3.5" /> Incluido en tu implementación
            </span>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {includedServices.map((s) => (
                <div
                  key={s.name}
                  className="rounded-2xl border border-border bg-background p-6 card-hover"
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

          {/* ADD-ONS */}
          <div className="mt-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Servicios adicionales
            </span>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {addons.map((a) => (
                <article
                  key={a.name}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface-2 p-7 transition-all hover:-translate-y-1 hover:shadow-card-hover card-hover"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-gradient-brand opacity-10 blur-2xl transition-opacity group-hover:opacity-25" />
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                    <Sparkles className="h-3 w-3" /> Opcional
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

      {/* ALIANZA - PREMIUM AL FINAL */}
      <section className="border-t border-border bg-surface-2 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-4xl font-extrabold">
              Respaldado por <span className="text-gradient-brand">expertos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Paralelo */}
            <motion.div
              {...fadeUp}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-brand/10 text-gradient-brand flex items-center justify-center">
                  <Blocks className="h-8 w-8" />
                </div>
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Paralelo</h3>
              <p className="text-sm text-ink-soft">
                Diseño y evolución del ecosistema. Arquitectura sólida, módulos innovadores, soporte técnico de primer nivel.
              </p>
            </motion.div>

            {/* Plus */}
            <div className="flex justify-center">
              <div className="font-display text-4xl font-bold text-gradient-brand">+</div>
            </div>

            {/* Enfoque */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-2xl bg-cyan/10 text-cyan flex items-center justify-center">
                  <Megaphone className="h-8 w-8" />
                </div>
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Enfoque Misiones</h3>
              <p className="text-sm text-ink-soft">
                Comunicación estratégica y contenido. Convierte tu gestión en visibilidad, participación y credibilidad.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 p-8 rounded-2xl border border-border bg-surface text-center">
            <p className="text-sm leading-relaxed text-ink-soft">
              <strong>Resultado:</strong> Plataforma técnica sólida + Comunicación estratégica = Municipio moderno, visible, participativo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL FUERTE */}
      <section className="border-t border-border bg-gradient-hero py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6">
            ¿Listo para modernizar la gestión de tu municipio?
          </h2>
          <p className="text-lg text-ink-soft mb-10 max-w-2xl mx-auto">
            Implementamos MunicipioOS de forma progresiva, respetando los procesos actuales y acompañando a cada equipo durante la transición. Sin disrupción. Con tranquilidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hola@paralelo.tech"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              Solicitar una demostración
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-8 py-4 text-base font-semibold text-foreground shadow-sm hover:bg-surface-2"
            >
              Agendar una reunión
            </a>
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
            <a 
              href="https://enfoquemisiones.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-ink-soft hover:text-foreground transition-colors"
            >
              <Megaphone className="h-5 w-5 text-cyan" />
              <span className="text-xs font-semibold">Enfoque Misiones</span>
            </a>
          </div>
          <p>© {new Date().getFullYear()} Paralelo × Enfoque Misiones. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}