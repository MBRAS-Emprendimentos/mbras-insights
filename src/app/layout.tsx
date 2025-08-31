import type { Metadata, Viewport } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MBRAS Conecta | O essencial, antes do consenso",
  description:
    "Hub de inteligência exclusiva do mercado imobiliário de alto padrão",
  keywords:
    "real estate, luxury, insights, São Paulo, Faria Lima, investimento",
  openGraph: {
    url: siteUrl,
    siteName: "MBRAS Conecta",
    title: "MBRAS Conecta",
    description: "Inteligência exclusiva que move mercados",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        type: "image/png",
      },
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MBRAS Conecta",
    description: "Inteligência exclusiva que move mercados",
    images: ["/twitter-image", "/og-image.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1E3C",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} ${playfair.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-gradient-to-b from-mbras-pearl to-mbras-cream dark:from-mbras-navy-dark dark:to-mbras-navy">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
