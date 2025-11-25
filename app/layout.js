"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Destinations from "./components/Destinations";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import { usePathname } from "next/navigation";
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html data-theme="light" lang="en" className="p-6">
      <body className={inter.className}>
        <Navbar />
        {pathname === "/" && (
          <>
            <Hero />
            <Features />
            <Destinations />
            <Testimonial/>
            <CTA />
          </>
        )}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
