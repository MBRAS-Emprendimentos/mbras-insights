'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Play, Download, ArrowRight } from 'lucide-react'

export function HeroActions() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      {/* Primary CTA - Register */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => handleScroll('register')}
        className="
          group relative px-8 py-4 bg-mbras-gold text-mbras-navy
          font-display font-semibold text-lg
          rounded-xl shadow-gold-glow
          hover:shadow-navy-depth
          transition-all duration-300
          animate-glow-pulse
          flex items-center gap-3
        "
      >
        <span>Acesso Exclusivo</span>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gold-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      </motion.button>

      {/* Secondary CTA - Watch Demo */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsVideoModalOpen(true)}
        className="
          group relative px-8 py-4
          bg-transparent border-2 border-mbras-gold/50 text-white
          font-display font-semibold text-lg
          rounded-xl backdrop-blur-sm
          hover:border-mbras-gold hover:bg-mbras-gold/10
          transition-all duration-300
          flex items-center gap-3
        "
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <Play className="w-5 h-5 fill-current" />
        </motion.div>
        <span>Ver Demonstração</span>
      </motion.button>

      {/* Tertiary CTA - Download Report */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => handleScroll('formats')}
        className="
          group relative px-6 py-4
          bg-transparent text-white/80
          font-display font-medium text-base
          hover:text-white
          transition-all duration-300
          flex items-center gap-2
        "
      >
        <Download className="w-4 h-4" />
        <span>Relatório Gratuito</span>
        <motion.div
          animate={{ x: [0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronRight className="w-4 h-4" />
        </motion.div>
      </motion.button>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="relative bg-mbras-navy rounded-2xl p-8 m-4 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="aspect-video bg-mbras-teal/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-mbras-gold mx-auto mb-4" />
                <h3 className="text-xl font-display text-white mb-2">
                  Demonstração da Plataforma
                </h3>
                <p className="text-white/70">
                  Vídeo em breve - Conheça os recursos premium da MBRAS Insights
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
