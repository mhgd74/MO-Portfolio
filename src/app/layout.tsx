import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import "./globals.css";
import "@/styles/enhanced-design.css";
import "@/styles/animations.css";
import { Inter } from 'next/font/google';

// استيراد الخط بشكل محسن للأداء
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Mostafa Hamdy Portfolio | Professional Graphic Designer",
  description: "Professional graphic designer specializing in brand identity, UI/UX design, print media, and digital marketing solutions. View my portfolio of creative work.",
  keywords: "graphic design, UI/UX design, brand identity, print design, web design, portfolio, Mostafa Hamdy",
  authors: [{ name: "Mostafa Hamdy" }],
  creator: "Mostafa Hamdy",
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: "Mostafa Hamdy Portfolio | Professional Graphic Designer",
    description: "Professional graphic designer specializing in brand identity, UI/UX design, print media, and digital marketing solutions.",
    images: ['/img/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mostafa Hamdy Portfolio | Professional Graphic Designer",
    description: "Professional graphic designer specializing in brand identity, UI/UX design, print media, and digital marketing solutions.",
    images: ['/img/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/img/Logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/Logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/img/Logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" className={`h-full ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/img/Logo.png" />
        <link rel="apple-touch-icon" href="/img/Logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased h-full flex flex-col bg-gradient-to-br from-gray-900 to-black text-white selection:bg-[#00ff9d]/20 selection:text-[#00ff9d] motion-safe:scroll-smooth`}>
        {/* Background patterns and decorative elements */}
        <div className="fixed inset-0 bg-pattern-enhanced opacity-5 pointer-events-none"></div>
        <div className="fixed top-[20%] left-[10%] w-[30vw] h-[30vw] bg-glow-enhanced bg-[#00ff9d]/5 animate-pulse-slow"></div>
        <div className="fixed bottom-[20%] right-[10%] w-[25vw] h-[25vw] bg-glow-enhanced bg-[#00ff9d]/5 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        <Navigation />
        <main className="flex-1 flex flex-col pt-16 relative z-10">
          {children}
        </main>
        
        {/* Accessibility skip link */}
        <a href="#main-content" className="visually-hidden focus:not-sr-only focus:absolute focus:p-4 focus:bg-black focus:text-[#00ff9d] focus:z-50">
          Skip to main content
        </a>
      </body>
    </html>
  );
}
