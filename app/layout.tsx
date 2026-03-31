import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fontHeading = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const fontBody = Nunito({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "La Mie Dorée — Boulangerie Pâtisserie artisanale Lyon",
  description:
    "Boulangerie pâtisserie artisanale au cœur de la Guillotière, Lyon 7ème. Pains au levain, viennoiseries, pâtisseries fines. Click & Collect disponible.",
  keywords: [
    "boulangerie Lyon",
    "pâtisserie artisanale Lyon 7",
    "pain au levain Lyon",
    "click and collect boulangerie Lyon",
    "La Mie Dorée",
  ],
  openGraph: { images: ["/images/hero.jpg"] },
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body className="antialiased font-body bg-cream text-dark min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
