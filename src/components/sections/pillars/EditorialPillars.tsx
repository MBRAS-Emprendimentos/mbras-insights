'use client'

import { motion } from 'framer-motion'
import {
  TrendingUp,
  Brain,
  Target,
  Zap,
  Shield,
  Crown
} from 'lucide-react'

const pillars = [
  {
    icon: TrendingUp,
    title: 'Análise Data-Driven',
    description: 'Insights baseados em dados precisos e análises estatísticas avançadas do mercado imobiliário.',
    color: 'from-mbras-navy to-mbras-teal'
  },
  {
    icon: Brain,
    title: 'Inteligência de Mercado',
    description: 'Compreensão profunda das dinâmicas e tendências que moldam o setor imobiliário.',
    color: 'from-mbras-teal to-mbras-gold'
  },
  {
    icon: Target,
    title: 'Foco Estratégico',
    description: 'Conteúdo direcionado para decisões estratégicas de investimento e desenvolvimento.',
    color: 'from-mbras-gold to-mbras-navy'
  },
  {
    icon: Zap,
    title: 'Agilidade Editorial',
    description: 'Informações em tempo real sobre mudanças e oportunidades no mercado imobiliário.',
    color: 'from-mbras-navy to-mbras-gold'
  },
  {
    icon: Shield,
    title: 'Credibilidade Premium',
    description: 'Fontes confiáveis e metodologia rigorosa para garantir a qualidade dos insights.',
    color: 'from-mbras-teal to-mbras-navy'
  },
  {
    icon: Crown,
    title: 'Exclusividade',
    description: 'Acesso privilegiado a análises e dados exclusivos para profissionais do setor.',
    color: 'from-mbras-gold to-mbras-teal'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6
    }
  }
}

export function EditorialPillars() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {pillars.map((pillar, index) => (
        <motion.div
          key={pillar.title}
          variants={itemVariants}
          whileHover={{
            y: -8,
            transition: { type: 'spring', stiffness: 300, damping: 20 }
          }}
          className="group relative"
        >
          <div className="relative bg-card border border-border rounded-2xl p-8 h-full shadow-luxury hover:shadow-xl transition-all duration-500 overflow-hidden">
            {/* Background Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

            {/* Icon Container */}
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} p-0.5 mb-6 shadow-lg`}
            >
              <div className="flex items-center justify-center w-full h-full bg-background rounded-xl">
                <pillar.icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
            </motion.div>

            {/* Content */}
            <div className="relative">
              <h3 className="text-xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {pillar.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {pillar.description}
              </p>
            </div>

            {/* Hover Effect Border */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />
          </div>

          {/* Floating Accent */}
          <motion.div
            className={`absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br ${pillar.color} rounded-full opacity-60 blur-sm`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
