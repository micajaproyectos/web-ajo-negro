import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ajo Negro Austral — Patagonia Chilena",
  description:
    "Ajo negro cultivado en la Patagonia Chilena. Sabor único del sur. Bolsas de 60 g, 100 g y pedidos mayoristas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${playfair.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
