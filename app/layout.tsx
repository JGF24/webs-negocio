import type { Metadata } from "next";
import { Fraunces, Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--f-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--f-serif" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--f-fraunces" });
const outfit = Outfit({ subsets: ["latin"], variable: "--f-display" });

export const metadata: Metadata = {
  title: "Webs de ejemplo para negocios locales · Julián Graña",
  description: "Demos de webs en Next.js para peluquerías, restaurantes y clínicas: precios, horario, opiniones y reservas.",
  robots: { index: false }, // son demos: que no compitan en Google con negocios reales
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${fraunces.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
