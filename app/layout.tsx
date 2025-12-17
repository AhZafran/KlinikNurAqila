import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { BRAND_CONFIG, CLINIC_INFO } from "@/lib/config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleTagManagerBody, GoogleTagManagerHead } from "@/components/GoogleTagManager";
import { StructuredData } from "@/components/StructuredData";

const poppins = Poppins({
  weight: ["100", "300", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  weight: ["100", "400"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: BRAND_CONFIG.primaryColor,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://kliniknuraqilaserendah.com"),
  title: {
    default: BRAND_CONFIG.name,
    template: `%s | ${BRAND_CONFIG.name}`,
  },
  description: `${BRAND_CONFIG.name} - Klinik kesihatan yang mesra di Serendah, Selangor. Menawarkan perkhidmatan perundingan am, vaksinasi, pemeriksaan kehamilan, dan ujian darah. Buka setiap hari 9 pagi - 9 malam.`,
  keywords: [
    "klinik serendah",
    "klinik kesihatan serendah",
    "klinik nur aqila",
    "doktor serendah",
    "vaksinasi serendah",
    "klinik batang kali",
    "klinik selangor",
    "klinik rawat jalan",
    "pemeriksaan kesihatan",
  ],
  authors: [{ name: BRAND_CONFIG.name }],
  creator: BRAND_CONFIG.name,
  publisher: BRAND_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: BRAND_CONFIG.name,
    description: "Klinik kesihatan yang mesra di Serendah, Selangor. Perkhidmatan kesihatan berkualiti untuk keluarga anda.",
    type: "website",
    locale: "ms_MY",
    siteName: BRAND_CONFIG.name,
    images: [
      {
        url: BRAND_CONFIG.logo,
        width: 200,
        height: 200,
        alt: BRAND_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: BRAND_CONFIG.name,
    description: "Klinik kesihatan yang mesra di Serendah, Selangor",
    images: [BRAND_CONFIG.logo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <head>
        <GoogleTagManagerHead />
        <StructuredData />
      </head>
      <body className={`${poppins.variable} ${inter.variable}`}>
        <GoogleTagManagerBody />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
