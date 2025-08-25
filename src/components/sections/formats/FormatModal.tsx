'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Crown, Download, Eye, Calendar, Users, Check, Star, ArrowRight } from 'lucide-react'

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

interface FormatModalProps {
  format: Format
  isOpen: boolean
  onClose: () => void
}

export function FormatModal({ format, isOpen, onClose }: FormatModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const getColorClasses = (color: string) => {
    const colors = {
      navy: {
        accent: 'text-mbras-navy',
        bg: 'bg-mbras-navy/10',
        border: 'border-mbras-navy/20',
        gradient: 'from-mbras-navy/20 to-transparent'
      },
      teal: {
        accent: 'text-mbras-teal',
        bg: 'bg-mbras-teal/10',
        border: 'border-mbras-teal/20',
        gradient: 'from-mbras-teal/20 to-transparent'
      },
      gold: {
        accent: 'text-mbras-gold',
        bg: 'bg-mbras-gold/10',
        border: 'border-mbras-gold/20',
        gradient: 'from-mbras-gold/20 to-transparent'
      }
    }
    return colors[color as keyof typeof colors]
  }

  const getFormatDetails = (formatType: string) => {
    const details = {
      pdf: {
        icon: <Download className="w-5 h-5" />,
        name: 'Relatório PDF',
        description: 'Documento completo em PDF para download'
      },
      interactive: {
        icon: <Eye className="w-5 h-5" />,
        name: 'Dashboard Interativo',
        description: 'Plataforma web com dados em tempo real'
      },
      video: {
        icon: <Eye className="w-5 h-5" />,
        name: 'Conteúdo em Vídeo',
        description: 'Análises apresentadas em formato audiovisual'
      },
      webinar: {
        icon: <Calendar className="w-5 h-5" />,
        name: 'Webinar ao Vivo',
        description: 'Sessões interativas com especialistas'
      }
    }
    return details[formatType as keyof typeof details]
  }

  const colorClasses = getColorClasses(format.color)
  const formatDetails = getFormatDetails(format.format)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="relative bg-background border border-border rounded-2xl shadow-luxury max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`relative p-6 pb-0 bg-gradient-to-r ${colorClasses.gradient}`}>
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 text-muted-foreground hover:text-foreground hover:bg-background transition-all duration-200"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Premium Badge */}
                {format.premium && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-mbras-gold text-mbras-navy px-4 py-2 rounded-full text-sm font-display font-bold flex items-center gap-2 shadow-gold-glow">
                      <Crown className="w-4 h-4" />
                      Premium
                    </div>
                  </div>
                )}

                {/* Title & Icon */}
                <div className="flex items-center gap-4 mt-8">
                  <div className="text-5xl">{format.icon}</div>
                  <div>
                    <h2 className={`text-3xl font-luxury ${colorClasses.accent} mb-2`}>
                      {format.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        {formatDetails.icon}
                        <span>{formatDetails.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{format.frequency}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{format.audience}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    Sobre este formato
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {format.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    {formatDetails.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    O que está incluído
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {format.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                      >
                        <div className={`p-1 rounded-full ${colorClasses.bg}`}>
                          <Check className={`w-4 h-4 ${colorClasses.accent}`} />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Preview/Sample */}
                {format.previewImage ? (
                  <div className="mb-8">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                      Prévia do conteúdo
                    </h3>
                    <div className="rounded-xl overflow-hidden border border-border">
                      <img
                        src={format.previewImage}
                        alt={`Prévia do ${format.title}`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mb-8">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                      Exemplo de conteúdo
                    </h3>
                    <div className={`p-6 rounded-xl ${colorClasses.bg} ${colorClasses.border} border`}>
                      <div className="flex items-center gap-3 mb-3">
                        <Star className={`w-5 h-5 ${colorClasses.accent}`} />
                        <span className="font-display font-semibold text-foreground">
                          Amostra dos insights
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Acesse análises detalhadas como: "O mercado imobiliário de São Paulo apresentou
                        crescimento de 8,5% no último trimestre, impulsionado principalmente pela demanda
                        por imóveis comerciais na região da Faria Lima..."
                      </p>
                    </div>
                  </div>
                )}

                {/* Audience & Value */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-display font-semibold text-foreground mb-3">
                      Ideal para
                    </h4>
                    <div className={`p-4 rounded-lg ${colorClasses.bg} ${colorClasses.border} border`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Users className={`w-4 h-4 ${colorClasses.accent}`} />
                        <span className="font-medium text-foreground">{format.audience}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {format.premium
                          ? 'Profissionais que buscam insights premium e análises exclusivas'
                          : 'Profissionais que desejam acompanhar o mercado com informações confiáveis'
                        }
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-display font-semibold text-foreground mb-3">
                      Frequência
                    </h4>
                    <div className={`p-4 rounded-lg ${colorClasses.bg} ${colorClasses.border} border`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className={`w-4 h-4 ${colorClasses.accent}`} />
                        <span className="font-medium text-foreground">{format.frequency}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Conteúdo atualizado regularmente para manter você sempre informado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 pt-0 border-t border-border bg-muted/30">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="text-center sm:text-left">
                    <p className="text-sm text-muted-foreground">
                      {format.premium ? 'Acesso exclusivo para membros premium' : 'Disponível gratuitamente'}
                    </p>
                    {format.premium && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Faça parte do programa premium da MBRAS Insights
                      </p>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={onClose}
                      className="px-6 py-3 border border-border rounded-lg font-display font-medium text-foreground hover:bg-muted transition-colors"
                    >
                      Voltar
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        px-6 py-3 rounded-lg font-display font-semibold flex items-center gap-2
                        transition-all duration-300
                        ${format.premium
                          ? 'bg-mbras-gold text-mbras-navy hover:bg-mbras-gold-dark shadow-gold-glow'
                          : 'bg-primary text-primary-foreground hover:bg-primary/90'
                        }
                      `}
                    >
                      {format.premium ? 'Solicitar Acesso' : 'Acessar Agora'}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
