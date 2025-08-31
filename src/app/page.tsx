"use client";

// External imports
import { motion, Variants } from "framer-motion";

export const dynamic = "force-static";

// Icon imports
import {
  ArrowRight,
  Sparkles,
  Building2,
  Target,
  Globe,
  Users,
  TrendingUp,
  Calendar,
  ChevronRight,
  Zap,
  Award,
  Mic,
  Star,
  Video,
  Mail,
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
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-navy-mesh opacity-[0.035]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mbras-pearl/40 to-transparent" />

        {/* Subtle radial spotlight for a refined, luxury feel */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-gradient-radial from-mbras-gold/10 via-transparent to-transparent blur-3xl" />
          <div className="absolute bottom-[-20rem] right-[-10rem] w-[42rem] h-[42rem] bg-gradient-radial from-mbras-navy/10 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">
          <motion.div
            initial={shouldAnimate ? "hidden" : undefined}
            animate={shouldAnimate ? "visible" : undefined}
            variants={staggerContainer}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-mbras-gold/20">
                <Sparkles className="w-4 h-4 text-mbras-gold" />
                <span className="text-xs uppercase tracking-[0.18em] text-mbras-gold font-semibold">
                  Blueprint Exclusivo
                </span>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-luxury text-5xl md:text-7xl lg:text-8xl text-mbras-navy mb-6 leading-tight tracking-tight"
            >
              <span className="block">MBRAS</span>
              <span className="block text-3xl md:text-5xl lg:text-6xl mt-3 bg-gradient-to-r from-mbras-gold via-mbras-gold to-mbras-teal bg-clip-text text-transparent font-semibold tracking-tight">
                Conecta
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl lg:text-2xl text-mbras-navy/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed [text-wrap:balance]"
            >
              A plataforma definitiva de inteligência imobiliária premium que
              conecta
              <span className="text-mbras-gold font-semibold">
                {" "}
                incorporadoras
              </span>
              ,
              <span className="text-mbras-teal font-semibold">
                {" "}
                investidores
              </span>{" "}
              e
              <span className="text-mbras-navy font-semibold">
                {" "}
                especialistas
              </span>{" "}
              do setor em um ecossistema exclusivo de oportunidades e
              conhecimento estratégico.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 rounded-xl bg-gradient-to-r from-mbras-gold to-mbras-gold-light text-mbras-cream font-display font-semibold shadow-gold-glow hover:shadow-luxury transition-all duration-300"
              >
                Tornar-se Sócio
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 rounded-xl font-display font-semibold text-mbras-navy glass border border-mbras-gold/30 hover:bg-mbras-pearl/60 transition-all duration-300"
              >
                Conhecer Blueprint
              </motion.button>
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-luxury text-4xl md:text-5xl text-mbras-navy mb-3 tracking-tight">
                Conceito Central
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
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-0.5 bg-gradient-to-br from-mbras-gold/40 via-mbras-teal/20 to-transparent shadow-luxury"
              >
                <div className="rounded-2xl glass border border-mbras-gold/20 p-8 h-full">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-mbras-navy to-mbras-teal rounded-xl flex items-center justify-center mb-6 ring-1 ring-mbras-navy/10">
                    <Building2 className="w-8 h-8 text-mbras-cream" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-mbras-navy mb-3 tracking-tight">
                    Incorporadoras Premium
                  </h3>
                  <p className="text-mbras-navy/80 leading-relaxed text-base lg:text-lg">
                    Acesso exclusivo a investidores qualificados, análises de
                    mercado em tempo real e ferramentas avançadas de
                    precificação e viabilidade.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-0.5 bg-gradient-to-br from-mbras-gold/40 via-mbras-teal/20 to-transparent shadow-luxury"
              >
                <div className="rounded-2xl glass border border-mbras-gold/20 p-8 h-full">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-mbras-navy to-mbras-gold rounded-xl flex items-center justify-center mb-6 ring-1 ring-mbras-navy/10">
                    <Users className="w-8 h-8 text-mbras-cream" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-mbras-navy mb-3 tracking-tight">
                    Conexão Estratégica
                  </h3>
                  <p className="text-mbras-navy/80 leading-relaxed text-base lg:text-lg">
                    Trusted circles que geram pipeline off-market e
                    oportunidades exclusivas.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-0.5 bg-gradient-to-br from-mbras-gold/40 via-mbras-teal/20 to-transparent shadow-luxury"
              >
                <div className="rounded-2xl glass border border-mbras-gold/20 p-8 h-full">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-mbras-teal to-mbras-navy rounded-xl flex items-center justify-center mb-6 ring-1 ring-mbras-navy/10">
                    <TrendingUp className="w-8 h-8 text-mbras-cream" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-mbras-navy mb-3 tracking-tight">
                    Inteligência Acionável
                  </h3>
                  <p className="text-mbras-navy/80 leading-relaxed text-base lg:text-lg">
                    Análise sem ruído, dados precisos e insights que direcionam
                    decisões estratégicas.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Structure Section */}
      <section className="py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mbras-pearl/40 to-transparent" />
        <div className="absolute inset-0 bg-navy-mesh opacity-[0.02]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-52 right-1/4 w-[48rem] h-[48rem] bg-gradient-radial from-mbras-gold/10 via-transparent to-transparent blur-3xl" />
          <div className="absolute -bottom-40 left-1/5 w-[36rem] h-[36rem] bg-gradient-radial from-mbras-navy/10 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-luxury text-4xl md:text-5xl text-mbras-navy mb-3 tracking-tight">
                Estrutura MBRAS Conecta
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
                      <Mic className="w-6 h-6 text-mbras-cream" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-mbras-navy mb-2 tracking-tight">
                        Podcast – &ldquo;MBRAS Conecta: O Podcast&rdquo;
                      </h3>
                      <p className="text-mbras-navy/80">
                        Conversas Chatham House com líderes do mercado, insights
                        exclusivos e análises profundas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-mbras-gold">
                    <Star className="w-4 h-4" />
                    <span>Episódios quinzenais</span>
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
                      <Video className="w-6 h-6 text-mbras-cream" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-mbras-navy mb-2 tracking-tight">
                        Vídeos – &ldquo;MBRAS Conecta: Insights&rdquo;
                      </h3>
                      <p className="text-mbras-navy/80">
                        Mini-documentários (5-8min) com análises visuais e tours
                        exclusivos de propriedades
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-mbras-teal">
                    <Zap className="w-4 h-4" />
                    <span>Conteúdo semanal</span>
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
                      <Calendar className="w-6 h-6 text-mbras-cream" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-mbras-navy mb-2 tracking-tight">
                        Eventos – &ldquo;MBRAS Conecta: Experience&rdquo;
                      </h3>
                      <p className="text-mbras-navy/80">
                        Encontros exclusivos com 20-50 convidados selecionados,
                        networking premium
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-mbras-navy">
                    <Award className="w-4 h-4" />
                    <span>Eventos trimestrais</span>
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
                      <Mail className="w-6 h-6 text-mbras-cream" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-mbras-navy mb-2 tracking-tight">
                        Newsletter – &ldquo;MBRAS Conecta: Weekly Brief&rdquo;
                      </h3>
                      <p className="text-mbras-navy/80">
                        One-pager curado e minimalista com os principais insights
                        da semana
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-mbras-gold">
                    <Target className="w-4 h-4" />
                    <span>Envio semanal</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 360 Orchestration Section */}
      <section className="py-28 lg:py-40 bg-gradient-to-br from-mbras-navy to-mbras-teal text-mbras-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-mesh opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/3 w-[46rem] h-[46rem] bg-gradient-radial from-mbras-gold/10 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-mbras-gold" />
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
              {[
                {
                  from: "Conecta",
                  to: "Podcast",
                  desc: "Relatórios exclusivos transformam-se em episódios aprofundados",
                },
                {
                  from: "Vídeos",
                  to: "Eventos",
                  desc: "Apresentações visuais enriquecem encontros presenciais",
                },
                {
                  from: "Eventos",
                  to: "Podcasts/Vídeos",
                  desc: "Momentos especiais documentados e compartilhados",
                },
                {
                  from: "Newsletter",
                  to: "CRM",
                  desc: "Engajamento direto com audiência qualificada",
                },
              ].map((flow, index) => (
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
                      <ChevronRight className="w-5 h-5 text-mbras-cream/50" />
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
      <section className="py-24 lg:py-36 bg-mbras-navy text-mbras-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-mesh opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
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
                whileHover={{ y: -6 }}
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
                whileHover={{ y: -6 }}
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
                whileHover={{ y: -6 }}
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
      <section className="py-32 lg:py-44 relative overflow-hidden bg-gradient-to-br from-mbras-cream via-mbras-pearl to-mbras-cream">
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInScale} className="font-luxury text-5xl md:text-6xl lg:text-7xl text-mbras-navy mb-6 tracking-tight">
              Faça Parte do Top 1%
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-mbras-navy/80 mb-16 leading-relaxed [text-wrap:balance]">
              Acesso exclusivo ao blueprint dos empreendimentos de alta performance
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex gap-4 justify-center"
            >
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="group px-12 py-5 rounded-xl bg-gradient-to-r from-mbras-gold to-mbras-gold-light text-mbras-cream font-display font-bold text-lg shadow-gold-glow hover:shadow-luxury transition-all duration-300">
                Tornar-se Sócio
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full border border-mbras-gold/30 text-mbras-navy">
                <Sparkles className="w-5 h-5 text-mbras-gold" />
                <p className="text-mbras-navy/80 font-medium">Vagas limitadas • Processo seletivo criterioso</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="font-luxury text-4xl md:text-5xl text-mbras-navy mb-3 tracking-tight">Faça Parte do Círculo</h2>
              <p className="text-xl text-mbras-navy/80 mb-8 [text-wrap:balance]">MBRAS Conecta não é apenas uma plataforma – é um movimento de transformação do mercado imobiliário brasileiro através da conexão estratégica entre os principais players do setor.</p>

              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="px-10 py-5 rounded-xl font-display font-bold text-lg glass border border-mbras-gold/30 text-mbras-navy hover:bg-mbras-pearl/60 transition-all duration-300 flex items-center gap-3 mx-auto">
                Solicitar Acesso Exclusivo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
