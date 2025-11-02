import type { Metadata } from "next";

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