'use client'

import { motion } from 'framer-motion'
import { Crown, Download, Eye, Calendar, Users } from 'lucide-react'

interface Format {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  frequency: string
  audience: string
  format: 'pdf' | 'interactive' | 'video' | 'webinar'
  premium: boolean
  color: 'navy' | 'teal' | 'gold'
  previewImage?: string
}

interface FormatCardProps {
  format: Format
  onClick: () => void
}

export function FormatCard({ format, onClick }: FormatCardProps) {
  const getColorClasses = (color: string, premium: boolean) => {
    const baseClasses = {
      navy: premium
        ? 'border-mbras-navy/30 hover:border-mbras-navy/60 hover:shadow-navy-depth'
        : 'border-mbras-navy/20 hover:border-mbras-navy/40',
      teal: premium
        ? 'border-mbras-teal/30 hover:border-mbras-teal/60 hover:shadow-luxury'
        : 'border-mbras-teal/20 hover:border-mbras-teal/40',
      gold: premium
        ? 'border-mbras-gold/30 hover:border-mbras-gold/60 hover:shadow-gold-glow'
        : 'border-mbras-gold/20 hover:border-mbras-gold/40'
    }
    return baseClasses[color as keyof typeof baseClasses]
  }

  const getAccentColor = (color: string) => {
    const colors = {
      navy: 'text-mbras-navy',
      teal: 'text-mbras-teal',
      gold: 'text-mbras-gold'
    }
    return colors[color as keyof typeof colors]
  }

  const getFormatIcon = (formatType: string) => {
    const icons = {
      pdf: <Download className="w-4 h-4" />,
      interactive: <Eye className="w-4 h-4" />,
      video: <Eye className="w-4 h-4" />,
      webinar: <Calendar className="w-4 h-4" />
    }
    return icons[formatType as keyof typeof icons]
  }

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative cursor-pointer group
        bg-card border-2 rounded-2xl p-6
        transition-all duration-300
        hover:bg-card/90 backdrop-blur-sm
        ${getColorClasses(format.color, format.premium)}
      `}
    >
      {/* Premium Badge */}
      {format.premium && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute -top-2 -right-2 z-10"
        >
          <div className="bg-mbras-gold text-mbras-navy px-3 py-1 rounded-full text-xs font-display font-bold flex items-center gap-1 shadow-gold-glow">
            <Crown className="w-3 h-3" />
            Premium
          </div>
        </motion.div>
      )}

      {/* Icon & Title */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{format.icon}</div>
          <div>
            <h3 className={`text-xl font-display font-bold ${getAccentColor(format.color)} group-hover:text-opacity-80 transition-colors`}>
              {format.title}
            </h3>
          </div>
        </div>
        <div className="text-muted-foreground">
          {getFormatIcon(format.format)}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
        {format.description}
      </p>

      {/* Key Features Preview */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {format.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
            >
              {feature}
            </span>
          ))}
          {format.features.length > 3 && (
            <span className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground">
              +{format.features.length - 3} mais
            </span>
          )}
        </div>
      </div>

      {/* Meta Information */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{format.frequency}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>{format.audience}</span>
        </div>
      </div>

      {/* Action Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full"
      >
        <button className={`
          w-full py-3 px-4 rounded-lg font-display font-semibold text-sm
          transition-all duration-300 flex items-center justify-center gap-2
          ${format.premium
            ? 'bg-mbras-gold text-mbras-navy hover:bg-mbras-gold-dark shadow-gold-glow'
            : 'bg-primary text-primary-foreground hover:bg-primary/90'
          }
        `}>
          <Eye className="w-4 h-4" />
          {format.premium ? 'Ver Detalhes Premium' : 'Ver Mais'}
        </button>
      </motion.div>

      {/* Hover Glow Effect */}
      <div className={`
        absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none
        ${format.color === 'gold' && 'bg-mbras-gold'}
        ${format.color === 'navy' && 'bg-mbras-navy'}
        ${format.color === 'teal' && 'bg-mbras-teal'}
      `} />
    </motion.div>
  )
}
