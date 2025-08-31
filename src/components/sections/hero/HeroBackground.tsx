'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { GoldParticles } from '@/components/animations/GoldParticles'

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Animated dots/stars background
    const dots: Array<{
      x: number
      y: number
      radius: number
      opacity: number
      speed: number
      angle: number
    }> = []

    // Create dots
    for (let i = 0; i < 100; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.5 + 0.1,
        angle: Math.random() * Math.PI * 2,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and animate dots
      dots.forEach((dot, index) => {
        // Update position
        dot.x += Math.cos(dot.angle) * dot.speed
        dot.y += Math.sin(dot.angle) * dot.speed

        // Wrap around screen
        if (dot.x < 0) dot.x = canvas.width
        if (dot.x > canvas.width) dot.x = 0
        if (dot.y < 0) dot.y = canvas.height
        if (dot.y > canvas.height) dot.y = 0

        // Animate opacity
        dot.opacity += Math.sin(Date.now() * 0.001 + index) * 0.01

        // Draw dot
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(40, 81, 90, ${Math.max(0.1, Math.min(0.8, dot.opacity))})`
        ctx.fill()

        // Draw connections to nearby dots
        dots.forEach((otherDot, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(dot.x - otherDot.x, 2) + Math.pow(dot.y - otherDot.y, 2)
            )

            if (distance < 120) {
              ctx.beginPath()
              ctx.moveTo(dot.x, dot.y)
              ctx.lineTo(otherDot.x, otherDot.y)
              ctx.strokeStyle = `rgba(40, 81, 90, ${0.1 * (1 - distance / 120)})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div className="absolute inset-0">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-mbras-navy via-mbras-teal to-mbras-navy-dark opacity-90" />

      {/* Animated Gradient Mesh */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-navy-mesh opacity-30" />
      </motion.div>

      {/* Gold Particles */}
      <GoldParticles />

      {/* Spotlight Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-96 h-96 bg-mbras-gold rounded-full blur-3xl animate-pulse" />
      </motion.div>

      {/* Animated Rings */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 0], opacity: [0, 0.2, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.3,
              ease: 'easeInOut'
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-96 h-96 border border-mbras-gold/30 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 360
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}
            className="absolute"
          >
            <div
              className="w-4 h-4 bg-mbras-gold/20 transform rotate-45"
              style={{
                clipPath: i % 2 === 0 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-mbras-navy to-transparent" />
    </div>
  )
}
