import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Apex Inverter India | Best Inverter Solutions | Call +91 9962861772",
  description:
    "Leading inverter supplier in India. Premium quality power backup inverters for home & commercial use. Expert installation & 24/7 support. Call +91 9962861772 for best prices.",
  keywords:
    "inverters India, best inverters, power backup solutions, inverter installation, UPS systems, +91 9962861772, Apex Inverter",
  authors: [{ name: "Apex Inverter India" }],
  creator: "Apex Inverter India",
  publisher: "Apex Inverter India",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://your-domain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Apex Inverter India | Best Inverter Solutions | Call +91 9962861772",
    description:
      "Leading inverter supplier in India. Premium quality power backup inverters for home & commercial use. Expert installation & 24/7 support.",
    url: "https://your-domain.com",
    siteName: "Apex Inverter India",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Inverter India | Best Inverter Solutions | Call +91 9962861772",
    description:
      "Leading inverter supplier in India. Premium quality power backup inverters for home & commercial use.",
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Apex Inverter India",
              description:
                "Leading inverter supplier in India with premium quality power backup products and expert installation services.",
              telephone: "+91-9962861772",
              url: "https://your-domain.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              openingHours: "Mo-Su 09:00-18:00",
              priceRange: "$$",
              serviceArea: {
                "@type": "Country",
                name: "India",
              },
            }),
          }}
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
