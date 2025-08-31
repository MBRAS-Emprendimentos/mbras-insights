"use client";

// External imports
import { motion, Variants } from "framer-motion";

export const dynamic = "force-static";

// Icon imports
import {
  ArrowRight,
  Building2,
  Target,
  Globe,
  Users,
  TrendingUp,
  ChevronRight,
  Zap,
  Award,
  Star,
} from "lucide-react";

// Animation variants with proper typing
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Static data for mappings (outside component to avoid re-creation)
const ORCHESTRATION_FLOWS = [
  {
    from: "Dashboard",
    to: "Insights",
    desc: "Indicadores curados viram contexto acionável",
  },
  {
    from: "Insights",
    to: "Conexões",
    desc: "Análises conectam você a quem decide",
  },
  {
    from: "Conexões",
    to: "Propostas",
    desc: "Interações evoluem em deals com rastro e histórico",
  },
  {
    from: "Propostas",
    to: "CRM",
    desc: "Integração e follow-up organizado",
  },
] as const;

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const floatAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  const shouldAnimate = (() => {
    if (typeof window === "undefined") return true;
    try {
      return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      return true;
    }
  })();
  return (
    <div className="min-h-screen bg-gradient-to-b from-mbras-pearl via-mbras-pearl to-mbras-cream">
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden min-h-screen flex items-center">
        {/* Premium layered background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mbras-pearl via-mbras-cream/30 to-mbras-pearl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-mbras-gold/5 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-mbras-navy/5 via-transparent to-transparent" />
        </div>

        {/* Luxury pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A2332' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        
        {/* Animated golden orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={shouldAnimate ? { 
              x: [0, 100, 0],
              y: [0, -100, 0],
            } : undefined}
            transition={shouldAnimate ? { duration: 20, repeat: Infinity, ease: "linear" } : undefined}
            className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-gradient-radial from-mbras-gold/8 to-transparent blur-3xl"
          />
          <motion.div
            animate={shouldAnimate ? { 
              x: [0, -100, 0],
              y: [0, 100, 0],
            } : undefined}
            transition={shouldAnimate ? { duration: 25, repeat: Infinity, ease: "linear", delay: 5 } : undefined}
            className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] bg-gradient-radial from-mbras-navy/8 to-transparent blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 py-32 lg:py-40 relative z-10">
          <motion.div
            initial={shouldAnimate ? "hidden" : undefined}
            animate={shouldAnimate ? "visible" : undefined}
            variants={staggerContainer}
            className="max-w-6xl mx-auto text-center"
          >
            {/* Main title with premium typography */}
            <motion.h1
              variants={fadeInUp}
              className="mb-8"
            >
              <span className="block font-luxury text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.02em] text-mbras-navy mb-2">
                MBRAS
              </span>
              <div className="relative inline-block">
                <span className="relative z-10 block text-4xl md:text-6xl lg:text-7xl font-luxury font-medium bg-gradient-to-r from-mbras-gold via-mbras-gold-light to-mbras-gold bg-clip-text text-transparent tracking-wide">
                  Conecta
                </span>
                {/* Elegant underline */}
                <motion.div 
                  initial={shouldAnimate ? { scaleX: 0 } : undefined}
                  animate={shouldAnimate ? { scaleX: 1 } : undefined}
                  transition={shouldAnimate ? { duration: 1.2, delay: 0.5, ease: "easeOut" } : undefined}
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-mbras-gold to-transparent"
                />
              </div>
            </motion.h1>

            {/* Tagline discreta sob o título */}
            <motion.p
              variants={fadeInUp}
              className="text-mbras-navy/60 text-xs md:text-sm font-light uppercase tracking-[0.3em] mb-8"
            >
              A Inteligência do Mercado em um Só Lugar
            </motion.p>

            {/* Hero description with improved typography */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl lg:text-2xl text-mbras-navy/70 max-w-4xl mx-auto mb-16 font-light leading-loose [text-wrap:balance]"
            >
              <span className="text-mbras-navy/90 font-normal">No mercado de altíssimo padrão,</span>{" "}
              informação nunca faltou. O que falta é{" "}
              <span className="text-mbras-gold font-medium">clareza</span>.
              A decisão certa não nasce de planilhas, mas de{" "}
              <span className="italic">contexto, timing e confiança</span>.
            </motion.p>

            {/* Premium CTA buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <motion.a
                href="#pilares"
                aria-label="Conhecer o Conecta — ir para Pilares do Conecta"
                whileHover={shouldAnimate ? { scale: 1.02, y: -2 } : undefined}
                whileTap={shouldAnimate ? { scale: 0.98 } : undefined}
                className="group relative px-12 py-5 overflow-hidden rounded-2xl font-display font-medium text-base tracking-wide transition-all duration-500"
              >
                {/* Button gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-mbras-gold via-mbras-gold-light to-mbras-gold" />
                
                {/* Animated shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
                
                {/* Button content */}
                <span className="relative z-10 text-mbras-cream flex items-center gap-3">
                  Conhecer o Conecta
                  <ArrowRight aria-hidden="true" focusable="false" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            </motion.div>
     
          </motion.div>
        </div>
      </section>

      {/* Core Concept Section */}
      <section className="py-24 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mbras-navy/5 to-mbras-teal/5 opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mbras-pearl/40 to-transparent" />
        {/* Subtle radial accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/3 w-[50rem] h-[50rem] bg-gradient-radial from-mbras-gold/10 via-transparent to-transparent blur-3xl" />
          <div className="absolute -bottom-40 right-1/4 w-[36rem] h-[36rem] bg-gradient-radial from-mbras-navy/10 via-transparent to-transparent blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={shouldAnimate ? "hidden" : undefined}
            whileInView={shouldAnimate ? "visible" : undefined}
            viewport={shouldAnimate ? { once: true } : undefined}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-luxury text-4xl md:text-5xl text-mbras-navy mb-3 tracking-tight">
                Onde a Clareza Substitui o Ruído
              </h2>
              <div className="mx-auto mb-5 h-px w-24 bg-gradient-to-r from-transparent via-mbras-gold/60 to-transparent rounded-full" />
              <p className="text-lg text-mbras-navy/70 max-w-2xl mx-auto [text-wrap:balance]">
                Três pilares fundamentais que definem nossa abordagem exclusiva
                ao mercado premium
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                variants={fadeInUp}
                whileHover={shouldAnimate ? { y: -6 } : undefined}
                className="group relative rounded-2xl p-0.5 bg-gradient-to-br from-mbras-gold/40 via-mbras-teal/20 to-transparent shadow-luxury"
              >
                <div className="rounded-2xl glass border border-mbras-gold/20 p-8 h-full">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-mbras-navy to-mbras-teal rounded-xl flex items-center justify-center mb-6 ring-1 ring-mbras-navy/10">
                    <Building2 aria-hidden="true" focusable="false" className="w-8 h-8 text-mbras-cream" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-mbras-navy mb-3 tracking-tight">
                    Clareza, não volume
                  </h3>
                  <p className="text-mbras-navy/80 leading-relaxed text-base lg:text-lg">
                    Aqui os números ganham vida. Análises revelam padrões antes
                    de virarem consenso e um dashboard curado mostra apenas o que
                    importa ao seu perfil.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={shouldAnimate ? { y: -6 } : undefined}
                className="group relative rounded-2xl p-0.5 bg-gradient-to-br from-mbras-gold/40 via-mbras-teal/20 to-transparent shadow-luxury"
              >
                <div className="rounded-2xl glass border border-mbras-gold/20 p-8 h-full">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-mbras-navy to-mbras-gold rounded-xl flex items-center justify-center mb-6 ring-1 ring-mbras-navy/10">
                    <Users aria-hidden="true" focusable="false" className="w-8 h-8 text-mbras-cream" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-mbras-navy mb-3 tracking-tight">
                    Relações com lastro
                  </h3>
                  <p className="text-mbras-navy/80 leading-relaxed text-base lg:text-lg">
                    Cada contato passa por curadoria. Do outro lado, quem decide:
                    family offices, diretores de novas frentes e investidores de
                    alto tíquete.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={shouldAnimate ? { y: -6 } : undefined}
                className="group relative rounded-2xl p-0.5 bg-gradient-to-br from-mbras-gold/40 via-mbras-teal/20 to-transparent shadow-luxury"
              >
                <div className="rounded-2xl glass border border-mbras-gold/20 p-8 h-full">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-mbras-teal to-mbras-navy rounded-xl flex items-center justify-center mb-6 ring-1 ring-mbras-navy/10">
                    <TrendingUp aria-hidden="true" focusable="false" className="w-8 h-8 text-mbras-cream" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-mbras-navy mb-3 tracking-tight">
                    Negócios que nascem prontos
                  </h3>
                  <p className="text-mbras-navy/80 leading-relaxed text-base lg:text-lg">
                    Propostas com modelos interativos, análises de sensibilidade e
                    acesso direto aos responsáveis. Cada interação tem rastro e
                    histórico.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Structure Section */}
      <section id="pilares" className="py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mbras-pearl/40 to-transparent" />
        <div className="absolute inset-0 bg-navy-mesh opacity-[0.02]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-52 right-1/4 w-[48rem] h-[48rem] bg-gradient-radial from-mbras-gold/10 via-transparent to-transparent blur-3xl" />
          <div className="absolute -bottom-40 left-1/5 w-[36rem] h-[36rem] bg-gradient-radial from-mbras-navy/10 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={shouldAnimate ? "hidden" : undefined}
            whileInView={shouldAnimate ? "visible" : undefined}
            viewport={shouldAnimate ? { once: true } : undefined}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-luxury text-4xl md:text-5xl text-mbras-navy mb-3 tracking-tight">
                Pilares do Conecta
              </h2>
              <div className="mx-auto mb-5 h-px w-24 bg-gradient-to-r from-transparent via-mbras-gold/60 to-transparent rounded-full" />
              <p className="text-lg text-mbras-navy/70 max-w-2xl mx-auto [text-wrap:balance]">
                Quatro vertentes integradas que formam um ecossistema completo
                de conteúdo premium
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <motion.div
                variants={slideInLeft}
                className="group rounded-2xl p-0.5 bg-gradient-to-br from-mbras-gold/40 via-mbras-teal/20 to-transparent shadow-luxury"
              >
                <div className="bg-card glass rounded-2xl p-8 h-full border border-mbras-gold/20">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-mbras-navy to-mbras-teal rounded-lg flex items-center justify-center flex-shrink-0 ring-1 ring-mbras-navy/10">
                      <TrendingUp aria-hidden="true" focusable="false" className="w-6 h-6 text-mbras-cream" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-mbras-navy mb-2 tracking-tight">
                        Clareza que guia decisões
                      </h3>
                      <p className="text-mbras-navy/80">
                        Indicadores curados e leituras de contexto que antecipam
                        movimentos de mercado e reduzem ruído.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-mbras-gold">
                    <Star aria-hidden="true" focusable="false" className="w-4 h-4" />
                    <span>Contexto acionável</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInScale}
                className="group rounded-2xl p-0.5 bg-gradient-to-br from-mbras-gold/40 via-mbras-teal/20 to-transparent shadow-luxury"
              >
                <div className="bg-card glass rounded-2xl p-8 h-full border border-mbras-gold/20">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-mbras-teal to-mbras-gold rounded-lg flex items-center justify-center flex-shrink-0 ring-1 ring-mbras-navy/10">
                      <Users aria-hidden="true" focusable="false" className="w-6 h-6 text-mbras-cream" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-mbras-navy mb-2 tracking-tight">
                        Relações com lastro
                      </h3>
                      <p className="text-mbras-navy/80">
                        Curadoria rigorosa conecta você a quem decide —
                        relações que começam sólidas e evoluem em negócios.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-mbras-teal">
                    <Zap aria-hidden="true" focusable="false" className="w-4 h-4" />
                    <span>Conexões qualificadas</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInScale}
                className="group rounded-2xl p-0.5 bg-gradient-to-br from-mbras-gold/40 via-mbras-teal/20 to-transparent shadow-luxury"
              >
                <div className="bg-card glass rounded-2xl p-8 h-full border border-mbras-gold/20">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-mbras-gold to-mbras-navy rounded-lg flex items-center justify-center flex-shrink-0 ring-1 ring-mbras-navy/10">
                      <Target aria-hidden="true" focusable="false" className="w-6 h-6 text-mbras-cream" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-mbras-navy mb-2 tracking-tight">
                        Negócios que nascem prontos
                      </h3>
                      <p className="text-mbras-navy/80">
                        Propostas com modelos interativos, análises e acesso
                        direto aos responsáveis. Menos retrabalho. Mais execução.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-mbras-navy">
                    <Award aria-hidden="true" focusable="false" className="w-4 h-4" />
                    <span>Execução elegante</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInScale}
                className="group rounded-2xl p-0.5 bg-gradient-to-br from-mbras-gold/40 via-mbras-teal/20 to-transparent shadow-luxury"
              >
                <div className="bg-card glass rounded-2xl p-8 h-full border border-mbras-gold/20">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-mbras-navy to-mbras-gold rounded-lg flex items-center justify-center flex-shrink-0 ring-1 ring-mbras-navy/10">
                      <Zap aria-hidden="true" focusable="false" className="w-6 h-6 text-mbras-cream" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-mbras-navy mb-2 tracking-tight">
                        Tecnologia a serviço da confiança
                      </h3>
                      <p className="text-mbras-navy/80">
                        O Conecta aprende com seus usuários, sugere conexões e se
                        integra às ferramentas de gestão — sem perder a elegância
                        na execução.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-mbras-gold">
                    <Target aria-hidden="true" focusable="false" className="w-4 h-4" />
                    <span>Integração inteligente</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 360 Orchestration Section */}
      <section id="orquestracao" className="py-28 lg:py-40 bg-gradient-to-br from-mbras-navy to-mbras-teal text-mbras-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-mesh opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/3 w-[46rem] h-[46rem] bg-gradient-radial from-mbras-gold/10 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={shouldAnimate ? "hidden" : undefined}
            whileInView={shouldAnimate ? "visible" : undefined}
            viewport={shouldAnimate ? { once: true } : undefined}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <Globe aria-hidden="true" focusable="false" className="w-8 h-8 text-mbras-gold" />
                <h2 className="font-luxury text-4xl md:text-5xl text-mbras-cream tracking-tight">
                  Orquestração 360°
                </h2>
              </div>
              <div className="mx-auto mb-5 h-px w-24 bg-gradient-to-r from-transparent via-mbras-gold/60 to-transparent rounded-full" />
              <p className="text-lg text-mbras-cream/80 max-w-2xl mx-auto">
                Integração completa entre todas as vertentes, criando um fluxo
                contínuo de valor
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {ORCHESTRATION_FLOWS.map((flow, index) => (
                <motion.div
                  key={index}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className="rounded-xl p-0.5 bg-gradient-to-br from-mbras-gold/40 via-mbras-teal/20 to-transparent"
                >
                  <div className="bg-mbras-cream/10 backdrop-blur-md rounded-xl p-8 border border-mbras-cream/20">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-mbras-gold font-semibold">
                      {flow.from}
                      </span>
                      <ChevronRight aria-hidden="true" focusable="false" className="w-5 h-5 text-mbras-cream/50" />
                      <span className="text-mbras-cream font-semibold">
                      {flow.to}
                      </span>
                    </div>
                    <p className="text-mbras-cream/80 text-sm leading-relaxed">
                      {flow.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Glossary Section */}
      <section id="glossario" className="py-24 lg:py-36 bg-mbras-navy text-mbras-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-mesh opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={shouldAnimate ? "hidden" : undefined}
            whileInView={shouldAnimate ? "visible" : undefined}
            viewport={shouldAnimate ? { once: true, margin: "-100px" } : undefined}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInScale} className="text-center mb-16">
              <h2 className="font-luxury text-4xl md:text-5xl lg:text-6xl text-mbras-cream mb-3 tracking-tight">
                Glossário Premium
              </h2>
              <div className="mx-auto mb-5 h-px w-24 bg-gradient-to-r from-transparent via-mbras-gold/60 to-transparent rounded-full" />
              <p className="text-lg text-mbras-cream/80 [text-wrap:balance]">
                Conceitos-chave que definem nossa abordagem premium
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                variants={fadeInUp}
                whileHover={shouldAnimate ? { y: -6 } : undefined}
                className="rounded-xl p-0.5 bg-gradient-to-br from-mbras-gold/40 via-mbras-teal/20 to-transparent"
              >
                <div className="bg-mbras-cream/10 backdrop-blur-sm rounded-xl p-8 border border-mbras-cream/25">
                  <div className="mb-4 flex items-center gap-2 text-mbras-cream/70">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-mbras-gold" />
                    <span className="text-[10px] uppercase tracking-[0.18em]">Conceito</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-mbras-gold mb-3 tracking-tight">
                    Regra de Chatham House
                  </h3>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-mbras-gold/40 to-transparent mb-5" />
                  <p className="text-mbras-cream/90 leading-relaxed">
                    Utilizada em fóruns e think tanks globais, permite que os
                    participantes falem livremente e compartilhem informações
                    sensíveis. O conteúdo (insights, visões, aprendizados) pode
                    ser usado, mas a identidade de quem disse algo específico deve
                    permanecer confidencial. Isso transmite exclusividade e
                    confiança, criando um espaço seguro para discussões
                    estratégicas.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={shouldAnimate ? { y: -6 } : undefined}
                className="rounded-xl p-0.5 bg-gradient-to-br from-mbras-gold/40 via-mbras-teal/20 to-transparent"
              >
                <div className="bg-mbras-cream/10 backdrop-blur-sm rounded-xl p-8 border border-mbras-cream/25">
                  <div className="mb-4 flex items-center gap-2 text-mbras-cream/70">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-mbras-gold" />
                    <span className="text-[10px] uppercase tracking-[0.18em]">Conceito</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-mbras-gold mb-3 tracking-tight">
                    Trusted Circles
                  </h3>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-mbras-gold/40 to-transparent mb-5" />
                  <p className="text-mbras-cream/90 leading-relaxed">
                    Conceito de círculos de confiança formados por UHNWI, C-levels
                    e gestores, nos quais a informação circula de forma
                    controlada, reforçando a credibilidade e fortalecendo as
                    relações de longo prazo.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={shouldAnimate ? { y: -6 } : undefined}
                className="rounded-xl p-0.5 bg-gradient-to-br from-mbras-gold/40 via-mbras-teal/20 to-transparent"
              >
                <div className="bg-mbras-cream/10 backdrop-blur-sm rounded-xl p-8 border border-mbras-cream/25">
                  <div className="mb-4 flex items-center gap-2 text-mbras-cream/70">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-mbras-gold" />
                    <span className="text-[10px] uppercase tracking-[0.18em]">Conceito</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-mbras-gold mb-3 tracking-tight">
                    Pipeline Off-Market
                  </h3>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-mbras-gold/40 to-transparent mb-5" />
                  <p className="text-mbras-cream/90 leading-relaxed">
                    Oportunidades de negócios não publicamente listadas,
                    acessíveis apenas por meio de relacionamentos estratégicos e
                    curadoria discreta. Esse elemento é central para o
                    posicionamento premium da MBRAS.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-32 lg:py-44 relative overflow-hidden bg-gradient-to-br from-mbras-cream via-mbras-pearl to-mbras-cream">
        <div className="absolute inset-0 bg-navy-mesh opacity-[0.02]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-1/3 w-[40rem] h-[40rem] bg-gradient-radial from-mbras-gold/10 via-transparent to-transparent blur-3xl" />
          <div className="absolute bottom-[-18rem] left-[-12rem] w-[44rem] h-[44rem] bg-gradient-radial from-mbras-navy/10 via-transparent to-transparent blur-3xl" />
        </div>

        {/* Animated background elements */}
        <motion.div
          variants={floatAnimation}
          initial={shouldAnimate ? "initial" : undefined}
          animate={shouldAnimate ? "animate" : undefined}
          className="absolute top-10 left-10 w-32 h-32 bg-mbras-cream/20 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatAnimation}
          initial={shouldAnimate ? "initial" : undefined}
          animate={shouldAnimate ? "animate" : undefined}
          style={{ animationDelay: "3s" }}
          className="absolute bottom-10 right-10 w-48 h-48 bg-mbras-navy/10 rounded-full blur-2xl"
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={shouldAnimate ? "hidden" : undefined}
            whileInView={shouldAnimate ? "visible" : undefined}
            viewport={shouldAnimate ? { once: true, margin: "-100px" } : undefined}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInScale} className="font-luxury text-5xl md:text-6xl lg:text-7xl text-mbras-navy mb-6 tracking-tight">
              Faça Parte do Top 1%
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-mbras-navy/80 mb-16 leading-relaxed [text-wrap:balance]">
              MBRAS Conecta. Menos ruído. Mais visão. Melhores negócios.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex gap-4 justify-center"
            >
              <motion.button whileHover={shouldAnimate ? { scale: 1.04 } : undefined} whileTap={shouldAnimate ? { scale: 0.98 } : undefined} className="group px-12 py-5 rounded-xl bg-gradient-to-r from-mbras-gold to-mbras-gold-light text-mbras-cream font-display font-bold text-lg shadow-gold-glow hover:shadow-luxury transition-all duration-300">
                Tornar-se Sócio
                <ArrowRight aria-hidden="true" focusable="false" className="inline-block ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
              <motion.button whileHover={shouldAnimate ? { scale: 1.02 } : undefined} whileTap={shouldAnimate ? { scale: 0.98 } : undefined} className="group px-10 py-5 rounded-xl glass border border-mbras-gold/30 text-mbras-navy hover:bg-mbras-cream/60 transition-all duration-300">
                <span className="inline-flex items-center gap-2 font-display font-semibold">
                  Solicitar Acesso Exclusivo
                  <ArrowRight aria-hidden="true" focusable="false" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
