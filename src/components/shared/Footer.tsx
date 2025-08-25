'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react'
import { Logo } from './Logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { COMPANY, FOOTER_LINKS } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <footer className="relative bg-mbras-navy text-mbras-pearl overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-mbras-charcoal to-mbras-navy opacity-90" />
      <div className="absolute inset-0 bg-navy-mesh opacity-20" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-mbras-gold/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-mbras-navy-light/30">
          <div className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h3 className="text-3xl md:text-4xl font-luxury font-bold text-mbras-gold mb-4">
                Insights Exclusivos em Primeira Mão
              </h3>
              <p className="text-lg text-mbras-pearl/80 mb-8 max-w-2xl mx-auto">
                Receba análises premium, tendências de mercado e oportunidades exclusivas
                diretamente na sua caixa de entrada.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Seu melhor e-mail"
                  className="flex-1 h-12 bg-mbras-navy-light/50 border-mbras-gold/30 text-white placeholder:text-mbras-pearl/50 focus:border-mbras-gold"
                />
                <Button
                  size="lg"
                  className="bg-gradient-gold hover:shadow-gold-glow text-mbras-navy font-display font-semibold px-8 h-12"
                >
                  Inscrever-se
                </Button>
              </div>

              <p className="text-xs text-mbras-pearl/60 mt-4">
                Sem spam. Apenas insights valiosos. Cancele quando quiser.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="mb-6">
                <Logo variant="full" className="mb-4" />
                <p className="text-mbras-pearl/80 leading-relaxed max-w-md">
                  Hub de inteligência exclusiva que conecta líderes do mercado imobiliário
                  através de análises proprietárias e insights acionáveis.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-mbras-gold" />
                  <span>{COMPANY.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-mbras-gold" />
                  <span>{COMPANY.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-mbras-gold" />
                  <span>{COMPANY.address}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                {[
                  { icon: Linkedin, href: COMPANY.social.linkedin, label: 'LinkedIn' },
                  { icon: Instagram, href: COMPANY.social.instagram, label: 'Instagram' },
                  { icon: Youtube, href: COMPANY.social.youtube, label: 'YouTube' },
                  { icon: Twitter, href: COMPANY.social.twitter, label: 'Twitter' }
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-mbras-navy-light/50 hover:bg-mbras-gold/20 rounded-full flex items-center justify-center text-mbras-pearl/60 hover:text-mbras-gold transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-display font-semibold text-mbras-gold mb-6">
                Empresa
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-mbras-pearl/70 hover:text-mbras-gold transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-display font-semibold text-mbras-gold mb-6">
                Produtos
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.products.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-mbras-pearl/70 hover:text-mbras-gold transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div variants={itemVariants} className="md:col-start-2 lg:col-start-auto">
              <h4 className="text-lg font-display font-semibold text-mbras-gold mb-6">
                Recursos
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-mbras-pearl/70 hover:text-mbras-gold transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-display font-semibold text-mbras-gold mb-6">
                Legal
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-mbras-pearl/70 hover:text-mbras-gold transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-mbras-navy-light/30">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row items-center gap-4 text-sm text-mbras-pearl/60"
              >
                <span>© {currentYear} MBRAS Emprendimentos. Todos os direitos reservados.</span>
                <span className="hidden sm:block">•</span>
                <span>CNPJ: {COMPANY.cnpj}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-6 text-xs text-mbras-pearl/50"
              >
                <Link href="/privacidade" className="hover:text-mbras-gold transition-colors">
                  Política de Privacidade
                </Link>
                <Link href="/termos" className="hover:text-mbras-gold transition-colors">
                  Termos de Uso
                </Link>
                <Link href="/cookies" className="hover:text-mbras-gold transition-colors">
                  Cookies
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-8 right-8 w-12 h-12 bg-mbras-gold/20 hover:bg-mbras-gold/30 backdrop-blur-sm border border-mbras-gold/30 rounded-full flex items-center justify-center text-mbras-gold transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span className="sr-only">Voltar ao topo</span>
        </motion.button>
      </div>
    </footer>
  )
}
