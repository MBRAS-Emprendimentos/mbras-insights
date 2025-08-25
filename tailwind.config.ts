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
        // System colors using CSS variables
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",
        card: {
          DEFAULT: "hsl(var(--color-card))",
          foreground: "hsl(var(--color-card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--color-popover))",
          foreground: "hsl(var(--color-popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          foreground: "hsl(var(--color-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--color-secondary))",
          foreground: "hsl(var(--color-secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--color-muted))",
          foreground: "hsl(var(--color-muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--color-accent))",
          foreground: "hsl(var(--color-accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--color-destructive))",
          foreground: "hsl(var(--color-destructive-foreground))",
        },
        border: "hsl(var(--color-border))",
        input: "hsl(var(--color-input))",
        ring: "hsl(var(--color-ring))",
        sidebar: {
          DEFAULT: "hsl(var(--color-sidebar))",
          foreground: "hsl(var(--color-sidebar-foreground))",
          primary: "hsl(var(--color-sidebar-primary))",
          "primary-foreground": "hsl(var(--color-sidebar-primary-foreground))",
          accent: "hsl(var(--color-sidebar-accent))",
          "accent-foreground": "hsl(var(--color-sidebar-accent-foreground))",
          border: "hsl(var(--color-sidebar-border))",
          ring: "hsl(var(--color-sidebar-ring))",
        },
        chart: {
          "1": "hsl(var(--color-chart-1))",
          "2": "hsl(var(--color-chart-2))",
          "3": "hsl(var(--color-chart-3))",
          "4": "hsl(var(--color-chart-4))",
          "5": "hsl(var(--color-chart-5))",
        },
        // MBRAS Brand Colors using CSS variables
        mbras: {
          navy: {
            DEFAULT: "hsl(var(--color-mbras-navy))",
            dark: "hsl(var(--color-mbras-navy-dark))",
            light: "hsl(var(--color-mbras-navy-light))",
            50: "#E6EBF3",
            100: "#C2D0E3",
            200: "#9AB3D1",
            300: "#7296BF",
            400: "#4A79AD",
            500: "#2A5C9B",
            600: "#1E4A82",
            700: "#163868",
            800: "#0E264E",
            900: "#061428",
          },
          teal: {
            DEFAULT: "hsl(var(--color-mbras-teal))",
            light: "hsl(var(--color-mbras-teal-light))",
            dark: "hsl(var(--color-mbras-teal-dark))",
            50: "#E8F0F2",
            100: "#C7DDE1",
            200: "#A3C8CF",
            300: "#7FB3BD",
            400: "#5B9EAB",
            500: "#3F8999",
            600: "#337487",
            700: "#28515A",
            800: "#1E3D45",
            900: "#142930",
          },
          gold: {
            DEFAULT: "hsl(var(--color-mbras-gold))",
            light: "hsl(var(--color-mbras-gold-light))",
            dark: "hsl(var(--color-mbras-gold-dark))",
            glow: "#FFD700",
            50: "#FEF9EC",
            100: "#FDF1D3",
            200: "#FBE8B7",
            300: "#F9DF9B",
            400: "#F7D67F",
            500: "#F3BA57",
            600: "#F0A93C",
            700: "#E9962A",
            800: "#D7821E",
            900: "#B86D19",
          },
          cream: "hsl(var(--color-mbras-cream))",
          pearl: "hsl(var(--color-mbras-pearl))",
          graphite: "hsl(var(--color-mbras-graphite))",
          charcoal: "hsl(var(--color-mbras-charcoal))",
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
        "fade-up": "fadeUp 0.5s ease-out",
        "fade-down": "fadeDown 0.5s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-in-right": "slideInRight 0.4s ease-out",
        "slide-in-left": "slideInLeft 0.4s ease-out",
        "scale-in": "scaleIn 0.35s ease-out",
        "glow-pulse": "glowPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glowPulse: {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 20px 5px rgba(243, 186, 87, 0.5)",
          },
          "50%": {
            opacity: "0.8",
            boxShadow: "0 0 30px 10px rgba(243, 186, 87, 0.7)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gold-shimmer":
          "linear-gradient(105deg, transparent 40%, rgba(243, 186, 87, 0.7) 50%, transparent 60%)",
        "navy-mesh":
          "radial-gradient(at 40% 20%, hsla(215, 65%, 15%, 1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189, 36%, 25%, 0.8) 0px, transparent 50%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(243, 186, 87, 0.3)",
        "navy-depth": "0 10px 40px rgba(10, 30, 60, 0.2)",
        luxury: "0 20px 60px rgba(0, 0, 0, 0.15)",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
