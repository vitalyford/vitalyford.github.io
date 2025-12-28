import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CyberBackground from "@/components/CyberBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vitaly Ford | Cybersecurity Researcher & Educator",
  description: "Associate Professor, WiCyS Global Chapter Coordinator, and CTO specializing in Smart Grid Security, Machine Learning, and CS Education",
  authors: [{ name: "Vitaly Ford" }],
  keywords: ["cybersecurity", "WiCyS", "smart grid", "machine learning", "computer science", "education", "researcher"],
  icons: {
    icon: "/assets/images/favicon.gif",
  },
  openGraph: {
    title: "Vitaly Ford | Cybersecurity Researcher & Educator",
    description: "Associate Professor, Cybersecurity Researcher, and Educator",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <CyberBackground />
        <Navbar />
        <main className="container-cyber" style={{ paddingTop: "88px", paddingBottom: "4rem", minHeight: "100vh" }}>
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
