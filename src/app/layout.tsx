import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
  title: "Adiabatic Technologies — Industrial Battery Packs for Robotics, Defence, Marine & MHE",
  description:
    "Adiabatic Technologies designs and manufactures high-performance lithium battery packs for industrial applications — MHE, Robotics, Defence, Marine, Power Tools, Drones, EV, BESS, and more. Built in India.",
  keywords: [
    "industrial battery pack India",
    "MHE forklift battery",
    "robotics battery pack",
    "defence battery",
    "marine lithium battery",
    "AMR AGV battery",
    "BESS energy storage",
    "drone battery",
    "LFP NMC battery manufacturer",
    "Adiabatic Technologies",
    "IIT Hyderabad battery startup",
  ],
  openGraph: {
    title: "Adiabatic Technologies — Industrial Battery Systems",
    description: "High-performance lithium battery packs for industrial electrification — Robotics, MHE, Defence, Marine, BESS, and more.",
    type: "website",
    url: "https://www.adiabatic.co.in",
    siteName: "Adiabatic Technologies",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Adiabatic Technologies Pvt. Ltd.",
  url: "https://www.adiabatic.co.in",
  logo: "https://www.adiabatic.co.in/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9521611518",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: "en",
  },
  sameAs: [
    "https://www.linkedin.com/company/85656436/adiabatic",
    "https://twitter.com/Adiabatic_IN",
    "https://www.instagram.com/adiabatic.technologies",
  ],
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
