import type { Metadata } from "next";
import { Rajdhani, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";


const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
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
    icon: "/images/vf-favicon.png",
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
    <html lang="en" className={`${rajdhani.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: "var(--font-rajdhani), sans-serif" }} suppressHydrationWarning>

        <Navbar />
        <main className="container-cyber main-layout">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
