import React from 'react';

export function MBRASColorsExample() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-luxury text-gradient-gold">
            MBRAS Design System
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exemplos das cores proprietárias e utilitários customizados para a plataforma MBRAS Insights
          </p>
        </div>

        {/* Brand Colors Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-display text-foreground">Cores da Marca</h2>

          {/* Navy Palette */}
          <div className="space-y-4">
            <h3 className="text-xl font-display text-mbras-navy">Navy Collection</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-navy-50 shadow-luxury mb-2"></div>
                <span className="text-xs">50</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-navy-100 shadow-luxury mb-2"></div>
                <span className="text-xs">100</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-navy-200 shadow-luxury mb-2"></div>
                <span className="text-xs">200</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-navy-300 shadow-luxury mb-2"></div>
                <span className="text-xs">300</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-navy-400 shadow-luxury mb-2"></div>
                <span className="text-xs">400</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-navy-500 shadow-luxury mb-2"></div>
                <span className="text-xs">500</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-navy-600 shadow-luxury mb-2"></div>
                <span className="text-xs">600</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-navy shadow-luxury mb-2"></div>
                <span className="text-xs">DEFAULT</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-navy-800 shadow-luxury mb-2"></div>
                <span className="text-xs">800</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-navy-900 shadow-luxury mb-2"></div>
                <span className="text-xs">900</span>
              </div>
            </div>
          </div>

          {/* Teal Palette */}
          <div className="space-y-4">
            <h3 className="text-xl font-display text-mbras-teal">Teal Collection</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-teal-50 shadow-luxury mb-2"></div>
                <span className="text-xs">50</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-teal-100 shadow-luxury mb-2"></div>
                <span className="text-xs">100</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-teal-200 shadow-luxury mb-2"></div>
                <span className="text-xs">200</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-teal-300 shadow-luxury mb-2"></div>
                <span className="text-xs">300</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-teal-400 shadow-luxury mb-2"></div>
                <span className="text-xs">400</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-teal-500 shadow-luxury mb-2"></div>
                <span className="text-xs">500</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-teal-600 shadow-luxury mb-2"></div>
                <span className="text-xs">600</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-teal shadow-luxury mb-2"></div>
                <span className="text-xs">DEFAULT</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-teal-800 shadow-luxury mb-2"></div>
                <span className="text-xs">800</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-teal-900 shadow-luxury mb-2"></div>
                <span className="text-xs">900</span>
              </div>
            </div>
          </div>

          {/* Gold Palette */}
          <div className="space-y-4">
            <h3 className="text-xl font-display text-mbras-gold">Gold Collection</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-gold-50 shadow-luxury mb-2"></div>
                <span className="text-xs">50</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-gold-100 shadow-luxury mb-2"></div>
                <span className="text-xs">100</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-gold-200 shadow-luxury mb-2"></div>
                <span className="text-xs">200</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-gold-300 shadow-luxury mb-2"></div>
                <span className="text-xs">300</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-gold-400 shadow-luxury mb-2"></div>
                <span className="text-xs">400</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-gold shadow-luxury mb-2 glow-gold"></div>
                <span className="text-xs">DEFAULT</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-gold-600 shadow-luxury mb-2"></div>
                <span className="text-xs">600</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-gold-700 shadow-luxury mb-2"></div>
                <span className="text-xs">700</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-gold-800 shadow-luxury mb-2"></div>
                <span className="text-xs">800</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-mbras-gold-900 shadow-luxury mb-2"></div>
                <span className="text-xs">900</span>
              </div>
            </div>
          </div>

          {/* Neutral Colors */}
          <div className="space-y-4">
            <h3 className="text-xl font-display text-foreground">Neutral Collection</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-24 h-16 rounded-lg bg-mbras-cream shadow-luxury mb-2 border border-border"></div>
                <span className="text-sm">Cream</span>
              </div>
              <div className="text-center">
                <div className="w-24 h-16 rounded-lg bg-mbras-pearl shadow-luxury mb-2 border border-border"></div>
                <span className="text-sm">Pearl</span>
              </div>
              <div className="text-center">
                <div className="w-24 h-16 rounded-lg bg-mbras-graphite shadow-luxury mb-2"></div>
                <span className="text-sm text-white">Graphite</span>
              </div>
              <div className="text-center">
                <div className="w-24 h-16 rounded-lg bg-mbras-charcoal shadow-luxury mb-2"></div>
                <span className="text-sm text-white">Charcoal</span>
              </div>
            </div>
          </div>
        </section>

        {/* Animations Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-display text-foreground">Animações</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6 animate-fade-up">
              <h3 className="font-display text-lg mb-2">Fade Up</h3>
              <p className="text-muted-foreground">animate-fade-up</p>
            </div>
            <div className="card p-6 animate-scale-in">
              <h3 className="font-display text-lg mb-2">Scale In</h3>
              <p className="text-muted-foreground">animate-scale-in</p>
            </div>
            <div className="card p-6 animate-float">
              <h3 className="font-display text-lg mb-2">Float</h3>
              <p className="text-muted-foreground">animate-float</p>
            </div>
          </div>
        </section>

        {/* Glass Effects Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-display text-foreground">Efeitos de Vidro</h2>
          <div className="relative bg-gradient-to-r from-mbras-navy via-mbras-teal to-mbras-navy-dark p-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-navy-mesh opacity-50"></div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-lg">
                <h3 className="font-display text-lg mb-2 text-white">Glass Light</h3>
                <p className="text-white/80">Efeito de vidro fosco claro</p>
              </div>
              <div className="glass-dark p-6 rounded-lg">
                <h3 className="font-display text-lg mb-2 text-white">Glass Dark</h3>
                <p className="text-white/80">Efeito de vidro fosco escuro</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gradients Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-display text-foreground">Gradientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="gradient-gold p-8 rounded-lg text-center">
              <h3 className="font-display text-xl text-white mb-2">Gold Gradient</h3>
              <p className="text-white/90">gradient-gold</p>
            </div>
            <div className="gradient-navy p-8 rounded-lg text-center">
              <h3 className="font-display text-xl text-white mb-2">Navy Gradient</h3>
              <p className="text-white/90">gradient-navy</p>
            </div>
          </div>
        </section>

        {/* Shadows Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-display text-foreground">Sombras</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 shadow-gold-glow">
              <h3 className="font-display text-lg mb-2">Gold Glow</h3>
              <p className="text-muted-foreground">shadow-gold-glow</p>
            </div>
            <div className="card p-6 shadow-navy-depth">
              <h3 className="font-display text-lg mb-2">Navy Depth</h3>
              <p className="text-muted-foreground">shadow-navy-depth</p>
            </div>
            <div className="card p-6 shadow-luxury">
              <h3 className="font-display text-lg mb-2">Luxury</h3>
              <p className="text-muted-foreground">shadow-luxury</p>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-display text-foreground">Tipografia</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-sans text-xl mb-2">Inter (font-sans)</h3>
              <p className="font-sans text-muted-foreground">
                Fonte principal para textos gerais e interface
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl mb-2">Montserrat (font-display)</h3>
              <p className="font-display text-muted-foreground">
                Fonte para títulos e elementos de destaque
              </p>
            </div>
            <div>
              <h3 className="font-luxury text-xl mb-2">Playfair Display (font-luxury)</h3>
              <p className="font-luxury text-muted-foreground">
                Fonte elegante para elementos premium
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Elements */}
        <section className="space-y-6">
          <h2 className="text-3xl font-display text-foreground">Elementos Interativos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-200">
              Primary Button
            </button>
            <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-200">
              Secondary Button
            </button>
            <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-200 animate-glow-pulse">
              Accent Button
            </button>
            <button className="border border-border text-foreground px-6 py-3 rounded-lg hover:bg-muted transition-all duration-200">
              Outline Button
            </button>
          </div>
        </section>

        {/* Dark Mode Toggle Info */}
        <section className="space-y-4 text-center">
          <h2 className="text-3xl font-display text-foreground">Modo Escuro</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Adicione a classe <code className="bg-muted px-2 py-1 rounded">dark</code> ao elemento raiz
            para ativar o tema escuro com as cores MBRAS otimizadas.
          </p>
        </section>

      </div>
    </div>
  );
}

export default MBRASColorsExample;
