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
  metadataBase: new URL("https://apexpowerbatteries.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Apex Inverter India | Best Inverter Solutions | Call +91 9962861772",
    description:
      "Leading inverter supplier in India. Premium quality power backup inverters for home & commercial use. Expert installation & 24/7 support.",
    url: "https://apexpowerbatteries.in",
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
              url: "https://apexpowerbatteries.in",
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
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "1250",
                bestRating: "5",
                worstRating: "1"
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5"
                  },
                  author: {
                    "@type": "Person",
                    name: "Rajesh Kumar"
                  },
                  reviewBody: "Excellent service and quality products. Installation was professional and quick."
                },
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5"
                  },
                  author: {
                    "@type": "Person",
                    name: "Priya Sharma"
                  },
                  reviewBody: "Best inverter solutions in Chennai. Highly recommended for their expertise and support."
                }
              ]
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
      <body>
        {children}
        
        {/* Global SEO Components */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // WhatsApp Chat Button
              if (typeof window !== 'undefined') {
                const whatsappBtn = document.createElement('div');
                whatsappBtn.innerHTML = \`
                  <div style="position: fixed; bottom: 24px; right: 24px; z-index: 50;">
                    <a href="https://wa.me/919962861772?text=Hi! I'm interested in your inverter solutions. Can you provide more information?" 
                       target="_blank" 
                       style="display: block; width: 60px; height: 60px; background: #25D366; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: all 0.3s ease;">
                      <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      </svg>
                    </a>
                  </div>
                \`;
                document.body.appendChild(whatsappBtn);
              }
            `
          }}
        />
      </body>
    </html>
  )
}
