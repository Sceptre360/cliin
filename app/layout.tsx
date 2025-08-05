import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Added weights for flexibility
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"], // Limited weights for mono font
});

export const metadata: Metadata = {
  title: "Kliin Fashions - Trendy Clothing & Accessories",
  description: "Discover the latest fashion trends with Kliin Fashions. Shop stylish clothing and accessories for men, women, kids, and more.",
  keywords: ["fashion", "clothing", "e-commerce", "Kliin Fashions", "trendy outfits"],
  openGraph: {
    title: "Kliin Fashions - Your Style Destination",
    description: "Explore our curated collection of fashionable clothing and accessories at Kliin Fashions.",
    url: "https://www.kliinfashions.com", // Replace with your actual domain
    siteName: "Kliin Fashions",
    images: [
      {
        url: "/images/og-image.jpg", // Replace with your Open Graph image
        width: 1200,
        height: 630,
        alt: "Kliin Fashions Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kliin Fashions",
    description: "Shop the latest in fashion at Kliin Fashions.",
    images: ["/images/twitter-image.jpg"], // Replace with your Twitter image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" /> {/* Add favicon */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}