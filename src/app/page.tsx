"use client";

// External imports
import { motion, Variants } from "framer-motion";

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
  return (
    <div className="min-h-screen bg-gradient-to-b from-mbras-pearl via-white to-mbras-cream">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-navy-mesh opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mbras-pearl/30 to-transparent" />

        {/* Floating decorative elements */}
        <motion.div
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-mbras-gold/10 to-mbras-teal/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-mbras-navy/10 to-mbras-gold/10 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-mbras-gold/10 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-mbras-gold" />
              <span className="text-xs uppercase tracking-widest text-mbras-gold font-semibold">
                Blueprint Exclusivo
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-luxury text-5xl md:text-7xl lg:text-8xl text-mbras-navy mb-8 leading-tight"
            >
              MBRAS
              <span className="block text-3xl md:text-5xl lg:text-6xl mt-4 bg-gradient-to-r from-mbras-gold via-mbras-gold to-mbras-teal bg-clip-text text-primary font-medium">
                Conecta
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl lg:text-2xl text-mbras-navy/90 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
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

            <motion.div
              variants={fadeInUp}
              className="flex justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-mbras-gold to-mbras-gold-light text-white rounded-lg font-display font-semibold hover:shadow-luxury transition-all duration-300 hover:shadow-mbras-gold/20"
              >
                Tornar-se Sócio
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-mbras-navy text-mbras-navy rounded-lg font-display font-semibold hover:bg-mbras-navy hover:text-white transition-all duration-300"
              >
                Conhecer Blueprint
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Concept Section */}
      <section className="py-24 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mbras-navy/5 to-mbras-teal/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-luxury text-4xl md:text-5xl text-mbras-navy mb-4">
                Conceito Central
              </h2>
              <p className="text-lg text-mbras-navy/70 max-w-2xl mx-auto">
                Três pilares fundamentais que definem nossa abordagem exclusiva
                ao mercado premium
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-mbras-navy to-mbras-teal p-0.5 rounded-2xl shadow-luxury"
              >
                <div className="bg-white rounded-2xl p-8 h-full">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-mbras-gold to-mbras-teal rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Building2 className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-mbras-navy mb-4">
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
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-mbras-teal to-mbras-gold p-0.5 rounded-2xl shadow-luxury"
              >
                <div className="bg-white rounded-2xl p-8 h-full">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-mbras-navy to-mbras-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-mbras-navy mb-4">
                    Conexão Estratégica
                  </h3>
                  <p className="text-mbras-gold leading-relaxed text-base lg:text-lg">
                    Trusted circles que geram pipeline off-market e
                    oportunidades exclusivas.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-mbras-gold to-mbras-navy p-0.5 rounded-2xl shadow-luxury"
              >
                <div className="bg-white rounded-2xl p-8 h-full">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-mbras-teal to-mbras-navy rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-mbras-navy mb-4">
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
      <section className="py-32 lg:py-40 bg-gradient-to-br from-mbras-cream to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-shimmer opacity-30" />

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-luxury text-4xl md:text-5xl text-mbras-navy mb-4">
                Estrutura MBRAS Conecta
              </h2>
              <p className="text-lg text-mbras-navy/70 max-w-2xl mx-auto">
                Quatro vertentes integradas que formam um ecossistema completo
                de conteúdo premium
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <motion.div
                variants={slideInLeft}
                className="group bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-luxury hover:shadow-2xl transition-all border border-mbras-gold/10 hover:border-mbras-gold/30"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-mbras-navy to-mbras-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-mbras-navy mb-2">
                      Podcast – &ldquo;MBRAS Conecta: O Podcast&rdquo;
                    </h3>
                    <p className="text-mbras-navy/70">
                      Conversas Chatham House com líderes do mercado, insights
                      exclusivos e análises profundas
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-mbras-gold">
                  <Star className="w-4 h-4" />
                  <span>Episódios quinzenais</span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInScale}
                whileHover={{ scale: 1.03 }}
                className="group bg-white/98 backdrop-blur-sm rounded-2xl p-8 shadow-luxury border border-mbras-teal/20 hover:border-mbras-teal/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-mbras-teal to-mbras-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-mbras-navy mb-2">
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
              </motion.div>

              <motion.div
                variants={fadeInScale}
                className="group bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-luxury hover:shadow-2xl transition-all border border-mbras-navy/10 hover:border-mbras-navy/30"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-mbras-gold to-mbras-navy rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-mbras-navy mb-2">
                      Eventos – &ldquo;MBRAS Conecta: Experience&rdquo;
                    </h3>
                    <p className="text-mbras-navy/70">
                      Encontros exclusivos com 20-50 convidados selecionados,
                      networking premium
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-mbras-navy">
                  <Award className="w-4 h-4" />
                  <span>Eventos trimestrais</span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInScale}
                className="group bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-luxury hover:shadow-2xl transition-all border border-mbras-gold/10 hover:border-mbras-gold/30"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-mbras-navy to-mbras-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-mbras-navy mb-2">
                      Newsletter – &ldquo;MBRAS Conecta: Weekly Brief&rdquo;
                    </h3>
                    <p className="text-mbras-navy/70">
                      One-pager curado e minimalista com os principais insights
                      da semana
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-mbras-gold">
                  <Target className="w-4 h-4" />
                  <span>Envio semanal</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 360 Orchestration Section */}
      <section className="py-28 lg:py-40 bg-gradient-to-br from-mbras-navy to-mbras-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-mesh opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-mbras-gold" />
                <h2 className="font-luxury text-4xl md:text-5xl text-white">
                  Orquestração 360°
                </h2>
              </div>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
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
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-mbras-gold font-semibold">
                      {flow.from}
                    </span>
                    <ChevronRight className="w-5 h-5 text-white/50" />
                    <span className="text-mbras-cream font-semibold">
                      {flow.to}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {flow.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 lg:py-36 bg-gradient-to-b from-mbras-cream to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-luxury text-4xl md:text-5xl text-mbras-navy mb-4">
                Roadmap de Implementação
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-mbras-gold via-mbras-teal to-mbras-navy" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    phase: "0-3 meses",
                    title: "MVP Launch",
                    desc: "Podcast + Newsletter",
                    side: "left",
                  },
                  {
                    phase: "3-6 meses",
                    title: "Expansão Visual",
                    desc: "Vídeos + 1º Evento",
                    side: "right",
                  },
                  {
                    phase: "6-12 meses",
                    title: "Consolidação 360°",
                    desc: "Ciclo completo + expansão internacional",
                    side: "left",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`flex items-center ${item.side === "left" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-1/2 ${item.side === "left" ? "text-right pr-8" : "pl-8"}`}
                    >
                      <div
                        className={`inline-block p-6 bg-white rounded-xl shadow-luxury ${item.side === "left" ? "text-right" : ""}`}
                      >
                        <div className="text-mbras-gold font-semibold text-sm mb-2">
                          {item.phase}
                        </div>
                        <h3 className="font-display text-xl font-bold text-mbras-navy mb-2">
                          {item.title}
                        </h3>
                        <p className="text-mbras-navy/70">{item.desc}</p>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-gradient-to-br from-mbras-gold to-mbras-teal rounded-full z-10 border-4 border-white" />
                    <div className="w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Glossary Section */}
      <section className="py-24 lg:py-36 bg-mbras-navy text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInScale} className="text-center mb-16">
              <h2 className="font-luxury text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Glossário Premium
              </h2>
              <p className="text-lg text-white/80">
                Conceitos-chave que definem nossa abordagem premium
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <h3 className="font-display text-2xl font-bold text-mbras-gold mb-4">
                  Regra de Chatham House
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Utilizada em fóruns e think tanks globais, permite que os
                  participantes falem livremente e compartilhem informações
                  sensíveis. O conteúdo (insights, visões, aprendizados) pode
                  ser usado, mas a identidade de quem disse algo específico deve
                  permanecer confidencial. Isso transmite exclusividade e
                  confiança, criando um espaço seguro para discussões
                  estratégicas.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <h3 className="font-display text-2xl font-bold text-mbras-gold mb-4">
                  Trusted Circles
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Conceito de círculos de confiança formados por UHNWI, C-levels
                  e gestores, nos quais a informação circula de forma
                  controlada, reforçando a credibilidade e fortalecendo as
                  relações de longo prazo.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <h3 className="font-display text-2xl font-bold text-mbras-gold mb-4">
                  Pipeline Off-Market
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Oportunidades de negócios não publicamente listadas,
                  acessíveis apenas por meio de relacionamentos estratégicos e
                  curadoria discreta. Esse elemento é central para o
                  posicionamento premium da MBRAS.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-44 bg-gradient-to-br from-mbras-gold via-mbras-gold-light to-mbras-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-shimmer"></div>

        {/* Animated background elements */}
        <motion.div
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatAnimation}
          initial="initial"
          animate="animate"
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
            <motion.h2
              variants={fadeInScale}
              className="font-luxury text-5xl md:text-6xl lg:text-7xl text-white mb-8"
            >
              Seja Parte do <span className="text-mbras-navy">Top 9%</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/90 mb-16 leading-relaxed"
            >
              Acesso exclusivo ao blueprint dos empreendimentos de alta
              performance
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex gap-4 justify-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group px-12 py-5 bg-white text-mbras-gold rounded-xl font-display font-bold text-lg shadow-lg hover:shadow-luxury transition-all duration-300"
              >
                Tornar-se Sócio
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Sparkles className="w-5 h-5 text-white" />
                <p className="text-white/90 font-medium">
                  Vagas limitadas • Processo seletivo criterioso
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="font-luxury text-4xl md:text-5xl text-mbras-navy mb-6">
                Faça Parte do Círculo
              </h2>
              <p className="text-xl text-mbras-navy/80 mb-8">
                MBRAS Conecta não é apenas uma plataforma – é um movimento de
                transformação do mercado imobiliário brasileiro através da
                conexão estratégica entre os principais players do setor.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-mbras-navy text-white rounded-lg font-display font-bold text-lg hover:bg-mbras-navy-dark transition-all duration-300 shadow-luxury flex items-center gap-3 mx-auto"
              >
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
