'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import { NAVIGATION_LINKS } from '@/lib/constants'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false)

    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur-md border-b border-border/60 shadow-luxury'
          : 'bg-transparent'
      )}
    >
      <nav className={cn('container mx-auto px-4', scrolled ? 'py-2' : 'py-4')}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" onClick={() => handleLinkClick('#hero')}>
              <Logo className="h-10 w-auto" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-1">
                {NAVIGATION_LINKS.map((link, index) => (
                  <NavigationMenuItem key={link.href}>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <NavigationMenuLink
                        onClick={() => handleLinkClick(link.href)}
                        className={cn(
                          'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
                          'hover:bg-accent/30 hover:text-foreground focus:bg-accent/30 focus:text-foreground focus:outline-none',
                          'disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
                          pathname === link.href && 'bg-accent text-accent-foreground'
                        )}
                      >
                        <span className="relative text-foreground/90">
                          {link.label}
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-mbras-gold/70 rounded-full"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        </span>
                      </NavigationMenuLink>
                    </motion.div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleLinkClick('#register')}
                className="font-display font-medium"
              >
                Entrar
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Button
                variant="gold"
                size="sm"
                onClick={() => handleLinkClick('#register')}
                className="font-display font-semibold shadow-gold-glow hover:shadow-navy-depth"
              >
                Cadastrar
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="glass rounded-lg p-4 space-y-2 border border-border/60">
                {NAVIGATION_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Button
                      variant="ghost"
                      className={cn(
                        'w-full justify-start font-display font-medium',
                        pathname === link.href && 'bg-accent text-accent-foreground'
                      )}
                      onClick={() => handleLinkClick(link.href)}
                    >
                      {link.label}
                    </Button>
                  </motion.div>
                ))}

                <div className="pt-4 space-y-2 border-t border-border">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full font-display font-medium"
                      onClick={() => handleLinkClick('#register')}
                    >
                      Entrar
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                  >
                    <Button
                      variant="gold"
                      className="w-full font-display font-semibold shadow-gold-glow"
                      onClick={() => handleLinkClick('#register')}
                    >
                      Cadastrar
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Shimmering bottom border accent */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-mbras-gold/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-[2px] bg-gold-shimmer animate-shimmer opacity-10" />
    </header>
  )
}
