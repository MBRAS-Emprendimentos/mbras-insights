import { Hero } from '@/components/sections/hero/Hero'
import { FormatsGrid } from '@/components/sections/formats/FormatsGrid'
import { EditorialPillars } from '@/components/sections/pillars/EditorialPillars'
import { EventTimeline } from '@/components/sections/events/EventTimeline'
import { MetricsDashboard } from '@/components/sections/metrics/MetricsDashboard'
import { RegistrationForm } from '@/components/sections/registration/RegistrationForm'

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Formats Section */}
      <section id="formats" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-luxury text-gradient-gold mb-6">
              Formatos de Conteúdo
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Descubra nossos formatos exclusivos de análise e insights para o mercado imobiliário
            </p>
          </div>
          <FormatsGrid />
        </div>
      </section>

      {/* Editorial Pillars Section */}
      <section id="pillars" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-luxury text-foreground mb-6">
              Pilares Editoriais
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Os fundamentos que orientam nossa produção de conteúdo premium
            </p>
          </div>
          <EditorialPillars />
        </div>
      </section>

      {/* Events Timeline Section */}
      <section id="events" className="py-24 bg-mbras-navy text-mbras-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-mesh opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-luxury text-gradient-gold mb-6">
              Cronograma de Eventos
            </h2>
            <p className="text-xl text-mbras-cream/80 max-w-3xl mx-auto">
              Acompanhe os principais eventos e marcos do mercado imobiliário
            </p>
          </div>
          <EventTimeline />
        </div>
      </section>

      {/* Metrics Dashboard Section */}
      <section id="metrics" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-luxury text-foreground mb-6">
              Métricas & Performance
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Dados em tempo real sobre o desempenho do mercado imobiliário
            </p>
          </div>
          <MetricsDashboard />
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-24 bg-gradient-gold relative">
        <div className="absolute inset-0 bg-gold-shimmer"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-luxury text-mbras-navy mb-6">
                Acesso Exclusivo
              </h2>
              <p className="text-xl text-mbras-navy max-w-2xl mx-auto">
                Cadastre-se para receber insights premium e análises exclusivas do mercado imobiliário
              </p>
            </div>
            <RegistrationForm />
          </div>
        </div>
      </section>
    </main>
  )
}
