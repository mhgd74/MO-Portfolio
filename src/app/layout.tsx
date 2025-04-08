import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import "./globals.css";
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
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/img/Logo.png" />
        <link rel="apple-touch-icon" href="/img/Logo.png" />
      </head>
      <body className={`${inter.className} antialiased h-full flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white selection:bg-blue-600/20 selection:text-blue-600 dark:selection:bg-blue-500/20 dark:selection:text-blue-400 motion-safe:scroll-smooth`}>
        <Navigation />
        <main className="flex-1 flex flex-col pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
