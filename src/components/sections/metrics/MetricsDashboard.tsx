'use client'

import { motion } from 'framer-motion'
import {
  TrendingUp,
  TrendingDown,
  Home,
  DollarSign,
  Users,
  Building,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Metric {
  id: string
  title: string
  value: string | number
  change: number
  changeLabel: string
  icon: LucideIcon
  color: string
  suffix?: string
  prefix?: string
}

const metrics: Metric[] = [
  {
    id: 'total-properties',
    title: 'Propriedades Ativas',
    value: 124567,
    change: 8.5,
    changeLabel: 'vs mês anterior',
    icon: Home,
    color: 'from-mbras-navy to-mbras-teal',
    suffix: ''
  },
  {
    id: 'average-price',
    title: 'Preço Médio m²',
    value: 8450,
    change: -2.3,
    changeLabel: 'vs mês anterior',
    icon: DollarSign,
    color: 'from-mbras-teal to-mbras-gold',
    prefix: 'R$ ',
    suffix: ''
  },
  {
    id: 'transactions',
    title: 'Transações Mensais',
    value: 15789,
    change: 12.7,
    changeLabel: 'vs mês anterior',
    icon: BarChart3,
    color: 'from-mbras-gold to-mbras-navy',
    suffix: ''
  },
  {
    id: 'vacancy-rate',
    title: 'Taxa de Vacância',
    value: 7.2,
    change: -0.8,
    changeLabel: 'vs mês anterior',
    icon: Building,
    color: 'from-mbras-navy to-mbras-gold',
    suffix: '%'
  },
  {
    id: 'market-volume',
    title: 'Volume de Mercado',
    value: 2.8,
    change: 5.4,
    changeLabel: 'vs mês anterior',
    icon: PieChart,
    color: 'from-mbras-teal to-mbras-navy',
    prefix: 'R$ ',
    suffix: ' bi'
  },
  {
    id: 'active-investors',
    title: 'Investidores Ativos',
    value: 45632,
    change: 15.2,
    changeLabel: 'vs mês anterior',
    icon: Users,
    color: 'from-mbras-gold to-mbras-teal',
    suffix: ''
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95
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

function AnimatedCounter({ value, duration = 2000, prefix = '', suffix = '' }: {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
}) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const updateValue = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setDisplayValue(Math.floor(value * easeOutQuart))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateValue)
      }
    }

    animationFrame = requestAnimationFrame(updateValue)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [value, duration])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K'
    }
    return num.toString()
  }

  return (
    <span>
      {prefix}{formatNumber(displayValue)}{suffix}
    </span>
  )
}

export function MetricsDashboard() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {metrics.map((metric) => (
        <motion.div
          key={metric.id}
          variants={itemVariants}
          whileHover={{
            y: -8,
            transition: { type: 'spring', stiffness: 400, damping: 25 }
          }}
          className="group relative"
        >
          <div className="relative bg-card border border-border rounded-2xl p-6 shadow-luxury hover:shadow-2xl transition-all duration-500 overflow-hidden">
            {/* Background Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} p-0.5 shadow-md`}>
                <div className="flex items-center justify-center w-full h-full bg-background rounded-xl">
                  <metric.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>

              {/* Change Indicator */}
              <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
                metric.change > 0
                  ? 'bg-mbras-teal/10 text-mbras-teal'
                  : 'bg-mbras-gold/10 text-mbras-gold-dark'
              }`}>
                {metric.change > 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span>{Math.abs(metric.change)}%</span>
              </div>
            </div>

            {/* Metric Value */}
            <div className="mb-2">
              <div className="text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {typeof metric.value === 'number' ? (
                  <AnimatedCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                  />
                ) : (
                  `${metric.prefix || ''}${metric.value}${metric.suffix || ''}`
                )}
              </div>
            </div>

            {/* Title and Change Label */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-1 group-hover:text-foreground/80 transition-colors duration-300">
                {metric.title}
              </h3>
              <p className="text-xs text-muted-foreground/80">
                {metric.changeLabel}
              </p>
            </div>

            {/* Animated Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-border">
              <motion.div
                className={`h-full bg-gradient-to-r ${metric.color} opacity-60`}
                initial={{ width: '0%' }}
                whileInView={{
                  width: `${Math.min(Math.abs(metric.change) * 5, 100)}%`
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.5,
                  ease: "easeOut"
                }}
              />
            </div>

            {/* Floating Accent */}
            <motion.div
              className={`absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br ${metric.color} rounded-full opacity-40 blur-sm`}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Summary Card */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-2 lg:col-span-3"
      >
        <div className="relative bg-gradient-to-br from-mbras-navy via-mbras-teal to-mbras-gold p-0.5 rounded-2xl shadow-luxury">
          <div className="bg-background rounded-2xl p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-navy-mesh"></div>
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-mbras-navy to-mbras-gold text-mbras-cream">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground">
                    Performance do Mercado
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Indicadores consolidados dos últimos 30 dias
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-mbras-teal mb-1">
                    +12.5%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Crescimento Geral
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-mbras-gold mb-1">
                    85%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Liquidez do Mercado
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-mbras-teal mb-1">
                    97%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Índice de Confiança
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-mbras-navy mb-1">
                    A+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Rating MBRAS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
