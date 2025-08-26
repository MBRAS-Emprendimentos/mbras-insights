import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // System colors
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },
        popover: {
          DEFAULT: "var(--color-popover)",
          foreground: "var(--color-popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--color-destructive)",
          foreground: "var(--color-destructive-foreground)",
        },
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",

        // Sidebar colors
        sidebar: {
          DEFAULT: "var(--color-sidebar)",
          foreground: "var(--color-sidebar-foreground)",
          primary: "var(--color-sidebar-primary)",
          "primary-foreground": "var(--color-sidebar-primary-foreground)",
          accent: "var(--color-sidebar-accent)",
          "accent-foreground": "var(--color-sidebar-accent-foreground)",
          border: "var(--color-sidebar-border)",
          ring: "var(--color-sidebar-ring)",
        },

        // Chart colors
        chart: {
          "1": "var(--color-chart-1)",
          "2": "var(--color-chart-2)",
          "3": "var(--color-chart-3)",
          "4": "var(--color-chart-4)",
          "5": "var(--color-chart-5)",
        },

        // MBRAS Brand Colors
        mbras: {
          navy: {
            DEFAULT: "var(--color-mbras-navy)",
            dark: "var(--color-mbras-navy-dark)",
            light: "var(--color-mbras-navy-light)",
          },
          teal: {
            DEFAULT: "var(--color-mbras-teal)",
            light: "var(--color-mbras-teal-light)",
            dark: "var(--color-mbras-teal-dark)",
          },
          gold: {
            DEFAULT: "var(--color-mbras-gold)",
            light: "var(--color-mbras-gold-light)",
            dark: "var(--color-mbras-gold-dark)",
          },
          cream: "var(--color-mbras-cream)",
          pearl: "var(--color-mbras-pearl)",
          graphite: "var(--color-mbras-graphite)",
          charcoal: "var(--color-mbras-charcoal)",
        },
      },

      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: [
          "var(--font-montserrat)",
          "Montserrat",
          "system-ui",
          "sans-serif",
        ],
        luxury: [
          "var(--font-playfair)",
          "Playfair Display",
          "Georgia",
          "serif",
        ],
      },

      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
        "3xl": ["2rem", { lineHeight: "2.5rem" }],
        "4xl": ["2.5rem", { lineHeight: "3rem" }],
        "5xl": ["3rem", { lineHeight: "3.5rem" }],
        "6xl": ["3.75rem", { lineHeight: "4.25rem" }],
        "7xl": ["4.5rem", { lineHeight: "5rem" }],
        "8xl": ["6rem", { lineHeight: "6.5rem" }],
        "9xl": ["8rem", { lineHeight: "8.5rem" }],
      },

      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "108": "27rem",
        "120": "30rem",
        "128": "32rem",
        "144": "36rem",
      },

      animation: {
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in-down": "fade-in-down 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "scale-in": "scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both",
        "slide-in-right":
          "slide-in-right 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        "slide-in-left":
          "slide-in-left 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        "float-premium": "float-premium 6s ease-in-out infinite",
        "pulse-premium": "pulse-premium 2s ease-in-out infinite",
        "shimmer-premium": "shimmer-premium 3s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "skeleton-premium": "skeleton-premium 2s ease-in-out infinite",
      },

      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "float-premium": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "33%": { transform: "translateY(-10px) rotate(-2deg)" },
          "66%": { transform: "translateY(-5px) rotate(2deg)" },
        },
        "pulse-premium": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(0.98)" },
        },
        "shimmer-premium": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "skeleton-premium": {
          "100%": { transform: "translateX(100%)" },
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gold-shimmer":
          "linear-gradient(105deg, transparent 40%, oklch(0.75 0.141 77.31 / 0.7) 50%, transparent 60%)",
        "navy-mesh":
          "radial-gradient(at 40% 20%, oklch(0.32 0.089 254.13) 0px, transparent 50%), radial-gradient(at 80% 0%, oklch(0.45 0.061 201.25 / 0.8) 0px, transparent 50%)",
      },

      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        xl: "var(--radius-xl)",
      },

      boxShadow: {
        "premium-sm": "var(--shadow-elevation-low)",
        "premium-md": "var(--shadow-elevation-medium)",
        "premium-lg": "var(--shadow-elevation-high)",
        "premium-xl": "var(--shadow-elevation-ultra)",
        "gold-glow":
          "0 0 20px oklch(0.75 0.141 77.31 / 0.3), 0 0 40px oklch(0.75 0.141 77.31 / 0.2), 0 0 60px oklch(0.75 0.141 77.31 / 0.1)",
        "navy-glow":
          "0 0 20px oklch(0.32 0.089 254.13 / 0.3), 0 0 40px oklch(0.32 0.089 254.13 / 0.2), 0 0 60px oklch(0.32 0.089 254.13 / 0.1)",
        "inner-glow": "inset 0 1px 0 0 oklch(1 0 0 / 0.1)",
        "button-luxury":
          "0 2px 4px oklch(0 0 0 / 0.1), 0 4px 8px oklch(0 0 0 / 0.05)",
        "button-luxury-hover":
          "0 4px 8px oklch(0 0 0 / 0.15), 0 8px 16px oklch(0 0 0 / 0.1)",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },

      blur: {
        xs: "2px",
      },

      saturate: {
        200: "2",
      },
    },
  },
  plugins: [],
};

export default config;
