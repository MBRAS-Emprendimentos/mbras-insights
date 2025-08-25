"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoldParticles } from "@/components/animations/GoldParticles";

const taglines = [
  "O essencial, antes do consenso",
  "Inteligência exclusiva que move mercados",
  "Decisões bilionárias começam aqui",
];

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxOffset = scrollY * 0.5;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-mbras-navy via-mbras-navy-dark to-mbras-teal">
        {/* Animated Background Mesh */}
        <motion.div
          className="absolute inset-0 bg-navy-mesh opacity-30"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
          }}
        />
        <GoldParticles />

        {/* Spotlight Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 3, delay: 1 }}
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
              animate={{ scale: [0, 2, 0], opacity: [0, 0.1, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-96 h-96 border border-mbras-gold/20 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="text-center space-y-8"
        >
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            className="inline-block"
          >
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-mbras-gold to-mbras-gold-dark rounded-2xl flex items-center justify-center glow-gold mx-auto">
                <span className="text-5xl font-luxury font-black text-mbras-navy">
                  M
                </span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 w-8 h-8 bg-mbras-gold/20 rounded-full border-2 border-mbras-gold"
              />
            </div>
          </motion.div>

          {/* Title */}
          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-8xl font-luxury font-bold text-mbras-cream leading-tight"
            >
              MBRAS{" "}
              <motion.span
                className="text-gradient-gold animate-glow-pulse inline-block"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(243, 186, 87, 0.5)",
                    "0 0 40px rgba(243, 186, 87, 0.8)",
                    "0 0 20px rgba(243, 186, 87, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Insights
              </motion.span>
            </motion.h1>

            {/* Animated Tagline */}
            <div className="h-20 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={taglineIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-xl sm:text-2xl lg:text-3xl font-light text-mbras-pearl/90 font-display"
                >
                  {taglines[taglineIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-mbras-pearl/80 leading-relaxed font-sans"
          >
            Hub de inteligência exclusiva que conecta líderes do alto padrão
            através de análises proprietárias e insights acionáveis do mercado
            imobiliário brasileiro.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="group bg-gradient-gold hover:shadow-gold-glow text-mbras-navy font-display font-bold px-10 py-6 text-lg transition-all duration-300 rounded-xl"
              >
                <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                Reserve seu lugar exclusivo
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-mbras-gold/50 text-mbras-pearl hover:bg-mbras-gold/10 hover:border-mbras-gold px-10 py-6 text-lg backdrop-blur-sm rounded-xl font-display font-semibold transition-all duration-300"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Assistir apresentação
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto"
          >
            {[
              { value: "300+", label: "Líderes do mercado", icon: "👥" },
              { value: "15", label: "Anos de expertise", icon: "⭐" },
              { value: "70+", label: "NPS Score", icon: "📈" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center p-6 glass rounded-xl"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <p className="text-3xl sm:text-4xl font-bold text-mbras-gold font-display">
                  {stat.value}
                </p>
                <p className="text-sm text-mbras-pearl/70 font-sans mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center text-mbras-pearl/60 cursor-pointer"
            onClick={() => {
              const nextSection = document.querySelector("#formats");
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span className="text-sm font-medium mb-2 font-display">
              Explore
            </span>
            <div className="w-6 h-10 border-2 border-mbras-gold/50 rounded-full flex justify-center relative overflow-hidden">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="w-1 h-3 bg-mbras-gold rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-mbras-navy-dark to-transparent pointer-events-none" />
    </section>
  );
}
