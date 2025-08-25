"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crown,
  Download,
  Eye,
  Calendar,
  Users,
  Clock,
  TrendingUp,
  Award,
  Lock,
  Zap,
  BarChart,
  FileText,
} from "lucide-react";
import { FormatCard } from "./FormatCard";
import { FormatModal } from "./FormatModal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Format {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  frequency: string;
  audience: string;
  format: "pdf" | "interactive" | "video" | "webinar" | "dashboard";
  premium: boolean;
  status: "available" | "coming-soon" | "new" | "popular";
  color: "navy" | "teal" | "gold";
  previewImage?: string;
  deliveryTime: string;
  value: string;
  testimonial?: {
    author: string;
    role: string;
    company: string;
    quote: string;
  };
}

const formats: Format[] = [
  {
    id: "market-pulse",
    title: "Market Pulse",
    subtitle: "O coração do mercado em tempo real",
    description:
      "Dashboard interativo com indicadores em tempo real do mercado imobiliário de alto padrão. Visualize tendências, volumes e oportunidades conforme elas acontecem.",
    icon: <Zap className="w-6 h-6" />,
    features: [
      "Dados em tempo real",
      "Heatmaps de valorização",
      "Alertas personalizados",
      "API de integração",
      "Machine Learning predictions",
      "Relatórios automatizados",
    ],
    frequency: "Tempo real",
    audience: "C-Level & Investidores",
    format: "dashboard",
    premium: true,
    status: "popular",
    color: "gold",
    deliveryTime: "Acesso imediato",
    value: "R$ 200M+ em decisões informadas",
    testimonial: {
      author: "Roberto Silva",
      role: "CEO",
      company: "Vanguard Developments",
      quote:
        "O Market Pulse transformou nossa tomada de decisão. ROI de 300% no primeiro trimestre.",
    },
  },
  {
    id: "faria-lima-focus",
    title: "Faria Lima Focus",
    subtitle: "O epicentro dos negócios bilionários",
    description:
      "Análise exclusiva do quadrante mais valioso da América Latina. Movimentações, tendências e oportunidades na região que define o mercado.",
    icon: <TrendingUp className="w-6 h-6" />,
    features: [
      "Análise por quadrante",
      "Pipeline de lançamentos",
      "Perfil de compradores",
      "Tendências de precificação",
      "Comparativo YoY",
      "Forecast trimestral",
    ],
    frequency: "Semanal",
    audience: "Developers & Fundos",
    format: "pdf",
    premium: true,
    status: "new",
    color: "navy",
    deliveryTime: "Toda segunda-feira",
    value: "15 deals fechados/mês",
  },
  {
    id: "luxury-insights",
    title: "Luxury Insights",
    subtitle: "Inteligência para o ultra-premium",
    description:
      "Deep dive no mercado de imóveis acima de R$ 10 milhões. Análise comportamental, tendências globais e oportunidades exclusivas.",
    icon: <Award className="w-6 h-6" />,
    features: [
      "Análise psicográfica",
      "Benchmarking global",
      "Private deals",
      "Art & Real Estate correlation",
      "Family office trends",
      "Luxury index MBRAS",
    ],
    frequency: "Mensal",
    audience: "UHNW Individuals",
    format: "video",
    premium: true,
    status: "available",
    color: "gold",
    deliveryTime: "Primeiro dia útil",
    value: "R$ 2B+ em transações",
  },
  {
    id: "market-intelligence",
    title: "Market Intelligence",
    subtitle: "Seu radar de oportunidades",
    description:
      "Sistema de inteligência que monitora mais de 500 indicadores para identificar oportunidades antes do mercado.",
    icon: <BarChart className="w-6 h-6" />,
    features: [
      "Scoring de oportunidades",
      "Risk assessment",
      "Análise preditiva",
      "Competitor tracking",
      "Regulatory updates",
      "Market sentiment",
    ],
    frequency: "Diário",
    audience: "Gestores & Analistas",
    format: "interactive",
    premium: false,
    status: "available",
    color: "teal",
    deliveryTime: "Atualização às 6h",
    value: "73% de accuracy",
  },
  {
    id: "masterclass-series",
    title: "Masterclass Series",
    subtitle: "Conhecimento que transforma",
    description:
      "Webinars exclusivos com os maiores nomes do mercado. Networking, insights e oportunidades em sessões ao vivo.",
    icon: <Users className="w-6 h-6" />,
    features: [
      "Speakers internacionais",
      "Q&A exclusivo",
      "Networking sessions",
      "Certificado MBRAS",
      "Material complementar",
      "Gravações disponíveis",
    ],
    frequency: "Quinzenal",
    audience: "Profissionais do setor",
    format: "webinar",
    premium: true,
    status: "coming-soon",
    color: "navy",
    deliveryTime: "Próxima: 15/Jan",
    value: "500+ participantes/sessão",
  },
];

export function FormatsGrid() {
  const [selectedFormat, setSelectedFormat] = useState<Format | null>(null);
  const [filter, setFilter] = useState<"all" | "free" | "premium">("all");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredFormats = formats.filter((format) => {
    if (filter === "free") return !format.premium;
    if (filter === "premium") return format.premium;
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      popular: {
        label: "Popular",
        className: "bg-gradient-gold text-mbras-navy",
      },
      new: {
        label: "Novo",
        className: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
      },
      "coming-soon": {
        label: "Em breve",
        className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
      },
      available: {
        label: "Disponível",
        className:
          "bg-mbras-teal/20 text-mbras-teal border border-mbras-teal/30",
      },
    };
    return badges[status as keyof typeof badges];
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-mbras-gold/5 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-luxury font-bold text-foreground mb-6">
            Formatos <span className="text-gradient-gold">Exclusivos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Inteligência em múltiplos formatos, adaptada às suas necessidades e
            ritmo de decisão
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-2 glass rounded-2xl gap-2">
            {[
              { key: "all", label: "Todos", count: formats.length },
              {
                key: "free",
                label: "Gratuitos",
                count: formats.filter((f) => !f.premium).length,
              },
              {
                key: "premium",
                label: "Premium",
                count: formats.filter((f) => f.premium).length,
              },
            ].map(({ key, label, count }) => (
              <motion.button
                key={key}
                onClick={() => setFilter(key as any)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "relative px-6 py-3 rounded-xl font-display font-medium transition-all duration-300",
                  "hover:shadow-lg",
                  filter === key
                    ? "bg-gradient-gold text-mbras-navy shadow-gold-glow"
                    : "bg-background/50 text-foreground hover:bg-muted",
                )}
              >
                <span className="relative z-10">{label}</span>
                <Badge
                  variant="secondary"
                  className="ml-2 bg-background/50 text-xs"
                >
                  {count}
                </Badge>
                {filter === key && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-gold rounded-xl"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Formats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredFormats.map((format) => (
              <motion.div
                key={format.id}
                layout
                variants={itemVariants}
                onHoverStart={() => setHoveredCard(format.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative"
              >
                {/* 3D Hover Effect Container */}
                <motion.div
                  animate={{
                    rotateX: hoveredCard === format.id ? -5 : 0,
                    rotateY: hoveredCard === format.id ? 5 : 0,
                    scale: hoveredCard === format.id ? 1.02 : 1,
                    z: hoveredCard === format.id ? 50 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                >
                  <FormatCard
                    format={format}
                    onClick={() => setSelectedFormat(format)}
                    isHovered={hoveredCard === format.id}
                    statusBadge={getStatusBadge(format.status)}
                  />
                </motion.div>

                {/* Glow Effect on Hover */}
                {hoveredCard === format.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                      "absolute inset-0 rounded-2xl blur-xl -z-10",
                      format.color === "gold" && "bg-mbras-gold/30",
                      format.color === "navy" && "bg-mbras-navy/30",
                      format.color === "teal" && "bg-mbras-teal/30",
                    )}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Precisa de um formato personalizado?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-mbras-navy to-mbras-teal text-white font-display font-semibold rounded-xl shadow-luxury hover:shadow-2xl transition-all duration-300"
          >
            Falar com especialista
          </motion.button>
        </motion.div>
      </div>

      {/* Format Modal */}
      <AnimatePresence>
        {selectedFormat && (
          <FormatModal
            format={selectedFormat}
            isOpen={!!selectedFormat}
            onClose={() => setSelectedFormat(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
