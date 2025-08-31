'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'full' | 'icon' | 'text'
  animated?: boolean
}

export function Logo({ className, variant = 'full', animated = true }: LogoProps) {
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        // ease removed for TS compatibility
      }
    }
  }

  const iconVariants = {
    hidden: { rotate: -180, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  const LogoIcon = () => (
    <motion.div
      variants={animated ? iconVariants : undefined}
      initial={animated ? 'hidden' : undefined}
      animate={animated ? 'visible' : undefined}
      className="relative"
    >
      {/* Geometric M shape with golden accent */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        className="text-mbras-navy dark:text-mbras-gold"
        fill="currentColor"
      >
        {/* Background circle */}
        <circle
          cx="20"
          cy="20"
          r="18"
          className="fill-mbras-gold dark:fill-mbras-navy"
          opacity="0.1"
        />

        {/* M Letter */}
        <path
          d="M8 30V12h3l5 12 5-12h3v18h-3V18l-4 8h-2l-4-8v12H8z"
          className="fill-current"
        />

        {/* Golden accent dot */}
        <circle
          cx="32"
          cy="12"
          r="3"
          className="fill-mbras-gold animate-glow-pulse"
        />
      </svg>
    </motion.div>
  )

  const LogoText = () => (
    <motion.div
      variants={animated ? textVariants : undefined}
      initial={animated ? 'hidden' : undefined}
      animate={animated ? 'visible' : undefined}
      className="flex flex-col"
    >
      <span className="text-xl font-luxury font-bold text-mbras-navy dark:text-mbras-cream">
        MBRAS
      </span>
      <span className="text-sm font-display font-medium text-mbras-gold tracking-wider">
        CONECTA
      </span>
    </motion.div>
  )

  if (variant === 'icon') {
    return (
      <div className={cn('inline-flex', className)}>
        <LogoIcon />
      </div>
    )
  }

  if (variant === 'text') {
    return (
      <div className={cn('inline-flex', className)}>
        <LogoText />
      </div>
    )
  }

  // Full logo (default)
  return (
    <motion.div
      variants={animated ? logoVariants : undefined}
      initial={animated ? 'hidden' : undefined}
      animate={animated ? 'visible' : undefined}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className={cn('inline-flex items-center space-x-3 cursor-pointer', className)}
    >
      <LogoIcon />
      <LogoText />
    </motion.div>
  )
}

// Simplified version for loading states
export function LogoSimple({ className }: { className?: string }) {
  return (
    <div className={cn('inline-flex items-center space-x-2', className)}>
      <div className="w-8 h-8 bg-mbras-gold rounded-full flex items-center justify-center">
        <span className="text-mbras-navy font-bold text-lg">M</span>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-mbras-navy dark:text-mbras-cream">
          MBRAS
        </span>
        <span className="text-xs text-mbras-gold font-medium tracking-wider">
          INSIGHTS
        </span>
      </div>
    </div>
  )
}

// Brand mark only (for favicons, small spaces)
export function LogoBrand({ className, size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={cn('text-mbras-navy dark:text-mbras-gold', className)}
      fill="currentColor"
    >
      <circle
        cx="20"
        cy="20"
        r="20"
        className="fill-mbras-gold dark:fill-mbras-navy"
      />
      <path
        d="M12 28V14h2.5l3.5 8.5L21.5 14H24v14h-2.5V18.5L18.5 26h-1l-3-7.5V28H12z"
        className="fill-mbras-navy dark:fill-mbras-gold"
      />
    </svg>
  )
}
