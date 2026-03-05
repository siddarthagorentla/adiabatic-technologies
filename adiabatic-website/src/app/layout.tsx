import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Adiabatic Technologies — India's 1st Battery Pack with 10x Lower Degradation",
  description:
    "Adiabatic Technologies builds high-performance lithium-ion battery packs for EVs, drones, agriculture, and energy storage. India's 1st battery pack with 10x lower life degradation. IIT Hyderabad incubated.",
  keywords: [
    "lithium-ion battery",
    "EV battery India",
    "battery pack manufacturer",
    "electric vehicle battery",
    "energy storage",
    "BESS",
    "drone battery",
    "agriculture battery",
    "Adiabatic Technologies",
  ],
  openGraph: {
    title: "Adiabatic Technologies — 10x Lower Degradation Battery Packs",
    description: "India's 1st lithium-ion battery pack with 10x lower life degradation. Powering EVs, drones, agriculture, and energy storage.",
    type: "website",
    url: "https://www.adiabatic.co.in",
    siteName: "Adiabatic Technologies",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Adiabatic Technologies",
  "url": "https://www.adiabatic.co.in",
  "logo": "https://www.adiabatic.co.in/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9521611518",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.linkedin.com/company/85656436/adiabatic",
    "https://twitter.com/Adiabatic_IN",
    "https://www.instagram.com/adiabatic.technologies?igshid=OGQ5ZDc2ODk2ZA%3D%3D",
    "https://www.youtube.com/channel/UCX8MWMNTcEB39wrA_zdJ-hQ"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-primary-dark text-neutral-200`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
