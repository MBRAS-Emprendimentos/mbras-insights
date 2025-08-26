"use client";

import React from "react";

export function PremiumShowcase() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="mb-6 text-7xl font-bold">
            MBRAS Premium Design
          </h1>
          <p className="text-gradient-premium text-2xl font-display">
            Elevating digital experiences with luxury aesthetics
          </p>
          <div className="divider-gold mx-auto max-w-md" />
        </section>

        {/* Premium Cards Grid */}
        <section className="mb-20">
          <h2 className="mb-10 text-4xl font-display text-gradient-premium">
            Premium Cards
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-stagger">
            {/* Luxury Card */}
            <div className="card-luxury rounded-xl p-8">
              <div className="badge-premium mb-4">
                <span>✨</span>
                <span>Premium</span>
              </div>
              <h3 className="mb-4 text-2xl font-display font-bold">
                Luxury Card
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience the elegance of our premium card design with subtle
                hover effects and sophisticated shadows.
              </p>
              <button className="btn-luxury w-full">
                Explore Premium Features
              </button>
            </div>

            {/* Glass Card */}
            <div className="glass-premium rounded-xl p-8 hover-lift">
              <div className="accent-gold-luxury inline-block">
                <h3 className="mb-4 text-2xl font-display font-bold text-mbras-gold">
                  Glass Morphism
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Modern glass effect with backdrop blur and premium border
                styling for a sophisticated look.
              </p>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-mbras-gold/20 animate-pulse-premium" />
                <div className="h-12 w-12 rounded-lg bg-mbras-teal/20 animate-float-premium" />
                <div className="h-12 w-12 rounded-lg bg-mbras-navy/20 animate-pulse-premium" />
              </div>
            </div>

            {/* Feature Card */}
            <div className="bg-card rounded-xl p-8 shadow-premium-lg hover-3d">
              <div className="mb-6 h-16 w-16 rounded-full bg-gradient-to-br from-mbras-gold to-mbras-gold-light shadow-gold-glow" />
              <h3 className="mb-4 text-2xl font-display font-bold">
                3D Hover Effect
              </h3>
              <p className="text-muted-foreground">
                Interactive 3D transform on hover for an engaging user
                experience.
              </p>
            </div>
          </div>
        </section>

        {/* Premium Buttons */}
        <section className="mb-20">
          <h2 className="mb-10 text-4xl font-display text-gradient-premium">
            Premium Buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn-luxury">
              Primary Luxury
            </button>
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-mbras-navy to-mbras-teal text-white font-medium shadow-premium-md hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1">
              Gradient Button
            </button>
            <button className="px-6 py-3 rounded-lg bg-transparent border-2 border-mbras-gold text-mbras-gold font-medium hover:bg-mbras-gold hover:text-mbras-navy transition-all duration-300">
              Outline Gold
            </button>
            <button className="px-6 py-3 rounded-lg glass-premium font-medium hover:shadow-premium-md transition-all duration-300">
              Glass Button
            </button>
          </div>
        </section>

        {/* Premium Form Elements */}
        <section className="mb-20">
          <h2 className="mb-10 text-4xl font-display text-gradient-premium">
            Premium Inputs
          </h2>
          <div className="max-w-md space-y-4">
            <input
              type="text"
              placeholder="Premium text input..."
              className="input-premium"
            />
            <div className="relative">
              <input
                type="email"
                placeholder="Email with icon..."
                className="input-premium pl-12"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <textarea
              placeholder="Premium textarea with auto-resize..."
              className="input-premium min-h-[120px] resize-none"
            />
          </div>
        </section>

        {/* Loading States */}
        <section className="mb-20">
          <h2 className="mb-10 text-4xl font-display text-gradient-premium">
            Premium Loading
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <div className="skeleton-premium h-32 rounded-lg" />
              <div className="skeleton-premium h-4 w-3/4 rounded" />
              <div className="skeleton-premium h-4 w-1/2 rounded" />
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-20 w-20">
                <div className="absolute inset-0 rounded-full bg-mbras-gold/20 animate-ping" />
                <div className="relative h-20 w-20 rounded-full bg-mbras-gold animate-pulse-premium" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-20 w-40 rounded-lg bg-gradient-to-r from-mbras-navy via-mbras-teal to-mbras-gold animate-shimmer-premium bg-[length:200%_100%]" />
            </div>
          </div>
        </section>

        {/* Typography & Effects */}
        <section className="mb-20">
          <h2 className="mb-10 text-4xl font-display text-gradient-premium">
            Typography & Effects
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-luxury mb-4">
                Luxury Serif Display
              </h3>
              <p className="text-lg leading-relaxed max-w-3xl">
                Our premium typography system combines elegant serif fonts for
                headlines with clean sans-serif for body text, creating a
                sophisticated reading experience that embodies luxury and
                professionalism.
              </p>
            </div>
            <div className="flex gap-8">
              <div className="glow-premium-gold p-6 rounded-lg bg-mbras-gold text-mbras-navy">
                Gold Glow Effect
              </div>
              <div className="glow-premium-navy p-6 rounded-lg bg-mbras-navy text-white">
                Navy Glow Effect
              </div>
            </div>
          </div>
        </section>

        {/* Premium Dividers */}
        <section className="mb-20">
          <h2 className="mb-10 text-4xl font-display text-gradient-premium">
            Premium Dividers
          </h2>
          <div className="space-y-8">
            <div className="divider-premium" />
            <div className="divider-gold" />
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-background px-4 text-sm text-muted-foreground">
                  Premium Section
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Animation Showcase */}
        <section className="mb-20">
          <h2 className="mb-10 text-4xl font-display text-gradient-premium">
            Premium Animations
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="p-6 rounded-lg bg-card shadow-premium-md animate-fade-in-up">
              <p className="font-medium">Fade In Up</p>
            </div>
            <div className="p-6 rounded-lg bg-card shadow-premium-md animate-fade-in-down animation-delay-200">
              <p className="font-medium">Fade In Down</p>
            </div>
            <div className="p-6 rounded-lg bg-card shadow-premium-md animate-slide-in-left animation-delay-400">
              <p className="font-medium">Slide In Left</p>
            </div>
            <div className="p-6 rounded-lg bg-card shadow-premium-md animate-scale-in animation-delay-600">
              <p className="font-medium">Scale In</p>
            </div>
          </div>
        </section>

        {/* Premium Badges & Tags */}
        <section className="mb-20">
          <h2 className="mb-10 text-4xl font-display text-gradient-premium">
            Premium Badges
          </h2>
          <div className="flex flex-wrap gap-4">
            <span className="badge-premium">
              <span>⭐</span>
              <span>Premium</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-mbras-navy text-white">
              <span>🎯</span>
              <span>Featured</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-mbras-teal text-white">
              <span>🚀</span>
              <span>New</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border border-mbras-gold text-mbras-gold">
              <span>✨</span>
              <span>Exclusive</span>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
