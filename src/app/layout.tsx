import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import favicon from "./favicon.png";
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

const BASE_URL = "https://www.ajonegroaustral.cl";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ajo Negro Artesanal de la Patagonia Chilena",
    template: "%s",
  },
  description:
    "Ajo negro artesanal producido en Futaleufú, Patagonia Chilena. Venta mayorista para restaurantes y tiendas naturales.",
  keywords: [
    "ajo negro Chile",
    "ajo negro Patagonia",
    "ajo negro mayorista Chile",
    "proveedor ajo negro Chile",
    "ajo negro para restaurantes",
    "ajo negro artesanal",
    "ajo negro fermentado Chile",
    "comprar ajo negro Chile",
    "ajo negro natural",
    "ajo negro gourmet Chile",
    "distribuidor ajo negro Chile",
    "ajo negro tiendas naturales",
    "ajo negro Futaleufú",
    "ajo negro revendedores",
    "beneficios del ajo negro",
    "propiedades ajo negro",
    "ajo negro precio Chile",
    "ajo negro bolsa 60g",
    "ajo negro bolsa 100g",
    "ajo negro pedido mayorista",
    "ajo negro envío Chile",
    "ajo negro sur de Chile",
    "ajo negro Puerto Montt",
    "ajo negro Osorno",
    "ajo negro Valdivia",
    "ajo negro Coyhaique",
    "ajo negro Punta Arenas",
    "ajo negro Santiago",
    "ajo negro Temuco",
    "ajo negro Concepción",
    "ajo negro Patagonia chilena",
    "ajo negro región de los Lagos",
    "superalimento Chile",
    "ajo negro antioxidante",
    "fermentado artesanal Chile",
    "productos naturales Patagonia",
    "Ajo Negro Austral",
    "ajo negro Starken",
    "ajo negro Bluexpress",
  ],
  authors: [{ name: "Ajo Negro Austral", url: BASE_URL }],
  creator: "Ajo Negro Austral",
  publisher: "Ajo Negro Austral",
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: BASE_URL,
    siteName: "Ajo Negro Austral",
    title: "Ajo Negro Austral | Proveedor Mayorista desde la Patagonia Chilena",
    description:
      "Ajo negro artesanal de Futaleufú, Patagonia. Mayorista para restaurantes y tiendas naturales. Mínimo 20 unidades, $27.500/kg. Envíos a todo Chile.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Ajo Negro Austral — Ajo negro de la Patagonia Chilena",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajo Negro Austral | Proveedor Mayorista desde la Patagonia Chilena",
    description:
      "Ajo negro artesanal de la Patagonia Chilena. Proveedor mayorista para restaurantes y tiendas naturales. Envíos a todo Chile.",
    images: ["/og-image.webp"],
  },
  verification: {
    google: "iykkbzZT3avrZd4uRTvyU6rzNX3cAnJnjTMW8TPyyGI",
  },
  icons: {
    icon: favicon.src,
    shortcut: favicon.src,
    apple: favicon.src,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#org`,
  name: "Ajo Negro Austral",
  description:
    "Productores artesanales de ajo negro en Futaleufú, Patagonia Chilena. Proveedor mayorista para restaurantes y tiendas de productos naturales en todo Chile.",
  url: BASE_URL,
  telephone: "+56974348843",
  email: "ajonegroaustral@gmail.com",
  image: `${BASE_URL}/og-image.webp`,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/og-image.webp`,
    width: 1200,
    height: 630,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Futaleufú",
    addressRegion: "Región de Los Lagos",
    addressCountry: "CL",
  },
  areaServed: [
    { "@type": "Country", name: "Chile" },
    { "@type": "City", name: "Santiago" },
    { "@type": "City", name: "Concepción" },
    { "@type": "City", name: "Temuco" },
    { "@type": "City", name: "Puerto Montt" },
    { "@type": "City", name: "Valdivia" },
    { "@type": "City", name: "Osorno" },
    { "@type": "City", name: "Coyhaique" },
    { "@type": "City", name: "Punta Arenas" },
    { "@type": "City", name: "Futaleufú" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Productos de Ajo Negro Artesanal",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@id": `${BASE_URL}/productos/bolsa-60g` },
        price: "1800",
        priceCurrency: "CLP",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        itemOffered: { "@id": `${BASE_URL}/productos/bolsa-100g` },
        price: "3400",
        priceCurrency: "CLP",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        itemOffered: { "@id": `${BASE_URL}/productos/pedido-mayorista` },
        price: "27500",
        priceCurrency: "CLP",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "27500",
          priceCurrency: "CLP",
          unitCode: "KGM",
        },
        availability: "https://schema.org/InStock",
        eligibleQuantity: {
          "@type": "QuantitativeValue",
          minValue: 20,
          unitText: "unidades",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Ajo Negro Austral",
  description:
    "Ajo negro artesanal de la Patagonia Chilena. Proveedor mayorista para restaurantes y tiendas de productos naturales.",
  publisher: { "@id": `${BASE_URL}/#org` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${playfair.variable} antialiased`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FBJQXDEKBT" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-FBJQXDEKBT');`,
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
