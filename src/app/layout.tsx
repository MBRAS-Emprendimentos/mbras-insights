import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";
import { Providers } from "@/components/providers/Providers";

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

export const metadata = {
  title: "MBRAS Insights | O essencial, antes do consenso",
  description:
    "Hub de inteligência exclusiva do mercado imobiliário de alto padrão",
  keywords:
    "real estate, luxury, insights, São Paulo, Faria Lima, investimento",
  openGraph: {
    title: "MBRAS Insights",
    description: "Inteligência exclusiva que move mercados",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${montserrat.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Providers>
          <div className="relative min-h-screen bg-gradient-to-b from-mbras-pearl to-mbras-cream dark:from-mbras-navy-dark dark:to-mbras-navy">
            <Navigation />
            <main className="relative">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
