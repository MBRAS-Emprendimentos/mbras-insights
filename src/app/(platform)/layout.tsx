import { Navigation } from '@/components/shared/Navigation'
import { ThemeToggle } from '@/components/shared/ThemeToggle'

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Platform Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <Navigation />
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center">
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      {/* Platform Content */}
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-display font-bold tracking-tight">
            MBRAS Insights Platform
          </h2>
        </div>
        <main className="flex-1 space-y-4">
          {children}
        </main>
      </div>
    </div>
  )
}
