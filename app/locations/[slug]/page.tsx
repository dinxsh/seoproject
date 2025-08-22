import type { Metadata } from "next"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { Badge } from "@/components/ui/badge"
import { useEffect } from "react"

const LOCATIONS: Record<string, { name: string; intro: string; description: string; keywords: string }> = {
  "anna-nagar": { 
    name: "Anna Nagar", 
    intro: "Premium inverter installation and service in Anna Nagar.",
    description: "Expert inverter installation, repair, and maintenance services in Anna Nagar, Chennai. Get reliable backup power solutions for homes and businesses.",
    keywords: "inverter installation Anna Nagar, inverter service Anna Nagar, backup power Anna Nagar, inverter repair Anna Nagar"
  },
  "t-nagar": { 
    name: "T Nagar", 
    intro: "Fast, reliable inverter solutions for homes and shops in T Nagar.",
    description: "Professional inverter services in T Nagar, Chennai. Commercial and residential inverter installation with 24/7 support.",
    keywords: "inverter installation T Nagar, inverter service T Nagar, commercial inverter T Nagar, inverter repair T Nagar"
  },
  adyar: { 
    name: "Adyar", 
    intro: "Expert inverter setup with maintenance support in Adyar.",
    description: "Complete inverter solutions in Adyar, Chennai. Installation, maintenance, and emergency repair services for uninterrupted power backup.",
    keywords: "inverter installation Adyar, inverter service Adyar, inverter maintenance Adyar, backup power Adyar"
  },
  velachery: { 
    name: "Velachery", 
    intro: "Trusted inverter services for apartments and offices in Velachery.",
    description: "Reliable inverter installation and service in Velachery, Chennai. Specialized solutions for apartments, offices, and commercial spaces.",
    keywords: "inverter installation Velachery, inverter service Velachery, apartment inverter Velachery, commercial inverter Velachery"
  },
  tambaram: { 
    name: "Tambaram", 
    intro: "Affordable inverter installation and repair in Tambaram.",
    description: "Cost-effective inverter solutions in Tambaram, Chennai. Quality installation and repair services for homes and small businesses.",
    keywords: "inverter installation Tambaram, inverter service Tambaram, affordable inverter Tambaram, inverter repair Tambaram"
  },
  omr: { 
    name: "OMR", 
    intro: "Commercial-grade inverter solutions along OMR IT corridor.",
    description: "High-performance inverter systems for IT companies and businesses along OMR, Chennai. Industrial-grade backup power solutions.",
    keywords: "inverter installation OMR, commercial inverter OMR, IT corridor inverter, industrial inverter OMR"
  },
  porur: { 
    name: "Porur", 
    intro: "Home and commercial inverter services in Porur.",
    description: "Comprehensive inverter services in Porur, Chennai. From residential installation to commercial maintenance, we cover all your power backup needs.",
    keywords: "inverter installation Porur, inverter service Porur, residential inverter Porur, commercial inverter Porur"
  },
  poonamallee: { 
    name: "Poonamallee", 
    intro: "End-to-end inverter solutions in Poonamallee.",
    description: "Complete inverter solutions in Poonamallee, Chennai. Installation, maintenance, and repair services for reliable power backup.",
    keywords: "inverter installation Poonamallee, inverter service Poonamallee, complete inverter solutions Poonamallee"
  },
  avadi: { 
    name: "Avadi", 
    intro: "Reliable backup power systems in Avadi.",
    description: "Trusted inverter services in Avadi, Chennai. Professional installation and maintenance for uninterrupted power supply.",
    keywords: "inverter installation Avadi, inverter service Avadi, backup power Avadi, reliable inverter Avadi"
  },
  ambattur: { 
    name: "Ambattur", 
    intro: "Industrial and home inverter services in Ambattur.",
    description: "Specialized inverter solutions in Ambattur, Chennai. Industrial-grade systems and residential backup power solutions.",
    keywords: "inverter installation Ambattur, industrial inverter Ambattur, residential inverter Ambattur, inverter service Ambattur"
  },
  "red-hills": { 
    name: "Red Hills", 
    intro: "Inverter setup and battery services in Red Hills.",
    description: "Expert inverter and battery services in Red Hills, Chennai. Complete power backup solutions with professional installation.",
    keywords: "inverter installation Red Hills, battery service Red Hills, power backup Red Hills, inverter setup Red Hills"
  },
  ennore: { 
    name: "Ennore", 
    intro: "Seaside inverter protection and services in Ennore.",
    description: "Specialized inverter services in Ennore, Chennai. Coastal area power backup solutions with weather-resistant protection.",
    keywords: "inverter installation Ennore, seaside inverter Ennore, coastal power backup Ennore, weather-resistant inverter Ennore"
  },
  madhanakuppam: { 
    name: "Madhanakuppam", 
    intro: "Professional inverter services in Madhanakuppam.",
    description: "Expert inverter installation and maintenance in Madhanakuppam, Chennai. Reliable backup power solutions for your home or business.",
    keywords: "inverter installation Madhanakuppam, inverter service Madhanakuppam, backup power Madhanakuppam"
  },
  thiruvallur: { 
    name: "Thiruvallur", 
    intro: "Trusted inverter solutions in Thiruvallur.",
    description: "Quality inverter services in Thiruvallur, Chennai. Professional installation and maintenance for uninterrupted power supply.",
    keywords: "inverter installation Thiruvallur, inverter service Thiruvallur, reliable inverter Thiruvallur"
  },
  ayyapakkam: { 
    name: "Ayyapakkam", 
    intro: "Complete inverter services in Ayyapakkam.",
    description: "Full-service inverter solutions in Ayyapakkam, Chennai. Installation, repair, and maintenance for all your power backup needs.",
    keywords: "inverter installation Ayyapakkam, inverter service Ayyapakkam, complete inverter solutions Ayyapakkam"
  },
  thiruverkadu: { 
    name: "Thiruverkadu", 
    intro: "Expert inverter installation in Thiruverkadu.",
    description: "Professional inverter services in Thiruverkadu, Chennai. Reliable backup power solutions with certified technicians.",
    keywords: "inverter installation Thiruverkadu, inverter service Thiruverkadu, certified inverter Thiruverkadu"
  },
  nerkudram: { 
    name: "Nerkudram", 
    intro: "Quality inverter solutions in Nerkudram.",
    description: "Premium inverter services in Nerkudram, Chennai. Professional installation and maintenance for reliable power backup.",
    keywords: "inverter installation Nerkudram, inverter service Nerkudram, quality inverter Nerkudram"
  },
  mugapair: { 
    name: "Mugapair", 
    intro: "Reliable inverter services in Mugapair.",
    description: "Trusted inverter solutions in Mugapair, Chennai. Expert installation and maintenance for uninterrupted power supply.",
    keywords: "inverter installation Mugapair, inverter service Mugapair, reliable inverter Mugapair"
  },
  iyyappanthagal: { 
    name: "Iyyappanthagal", 
    intro: "Professional inverter installation in Iyyappanthagal.",
    description: "Expert inverter services in Iyyappanthagal, Chennai. Complete power backup solutions with professional installation.",
    keywords: "inverter installation Iyyappanthagal, inverter service Iyyappanthagal, professional inverter Iyyappanthagal"
  },
  mangadu: { 
    name: "Mangadu", 
    intro: "Complete inverter solutions in Mangadu.",
    description: "Full-service inverter solutions in Mangadu, Chennai. Installation, repair, and maintenance for all your power backup needs.",
    keywords: "inverter installation Mangadu, inverter service Mangadu, complete inverter solutions Mangadu"
  },
  kundrathur: { 
    name: "Kundrathur", 
    intro: "Expert inverter services in Kundrathur.",
    description: "Professional inverter solutions in Kundrathur, Chennai. Reliable backup power with certified installation and maintenance.",
    keywords: "inverter installation Kundrathur, inverter service Kundrathur, expert inverter Kundrathur"
  },
  guindy: { 
    name: "Guindy", 
    intro: "Premium inverter solutions in Guindy.",
    description: "High-quality inverter services in Guindy, Chennai. Professional installation and maintenance for reliable power backup.",
    keywords: "inverter installation Guindy, inverter service Guindy, premium inverter Guindy"
  },
  nanthapakkam: { 
    name: "Nanthapakkam", 
    intro: "Trusted inverter installation in Nanthapakkam.",
    description: "Reliable inverter services in Nanthapakkam, Chennai. Expert installation and maintenance for uninterrupted power supply.",
    keywords: "inverter installation Nanthapakkam, inverter service Nanthapakkam, trusted inverter Nanthapakkam"
  },
  nanganallur: { 
    name: "Nanganallur", 
    intro: "Professional inverter services in Nanganallur.",
    description: "Expert inverter solutions in Nanganallur, Chennai. Complete power backup solutions with professional installation.",
    keywords: "inverter installation Nanganallur, inverter service Nanganallur, professional inverter Nanganallur"
  },
  cromppet: { 
    name: "Cromppet", 
    intro: "Quality inverter solutions in Cromppet.",
    description: "Premium inverter services in Cromppet, Chennai. Professional installation and maintenance for reliable power backup.",
    keywords: "inverter installation Cromppet, inverter service Cromppet, quality inverter Cromppet"
  },
  selaiyur: { 
    name: "Selaiyur", 
    intro: "Reliable inverter installation in Selaiyur.",
    description: "Trusted inverter services in Selaiyur, Chennai. Expert installation and maintenance for uninterrupted power supply.",
    keywords: "inverter installation Selaiyur, inverter service Selaiyur, reliable inverter Selaiyur"
  },
  perungolathur: { 
    name: "Perungolathur", 
    intro: "Expert inverter services in Perungolathur.",
    description: "Professional inverter solutions in Perungolathur, Chennai. Complete power backup solutions with professional installation.",
    keywords: "inverter installation Perungolathur, inverter service Perungolathur, expert inverter Perungolathur"
  },
  urappakkam: { 
    name: "Urappakkam", 
    intro: "Complete inverter solutions in Urappakkam.",
    description: "Full-service inverter solutions in Urappakkam, Chennai. Installation, repair, and maintenance for all your power backup needs.",
    keywords: "inverter installation Urappakkam, inverter service Urappakkam, complete inverter solutions Urappakkam"
  },
  padi: { 
    name: "Padi", 
    intro: "Professional inverter installation in Padi.",
    description: "Expert inverter services in Padi, Chennai. Reliable backup power solutions with certified technicians.",
    keywords: "inverter installation Padi, inverter service Padi, professional inverter Padi"
  },
  icf: { 
    name: "ICF", 
    intro: "Industrial inverter solutions in ICF.",
    description: "Specialized industrial inverter services in ICF, Chennai. High-performance backup power solutions for manufacturing units.",
    keywords: "inverter installation ICF, industrial inverter ICF, manufacturing inverter ICF, backup power ICF"
  },
  villivakkam: { 
    name: "Villivakkam", 
    intro: "Trusted inverter services in Villivakkam.",
    description: "Reliable inverter solutions in Villivakkam, Chennai. Professional installation and maintenance for uninterrupted power supply.",
    keywords: "inverter installation Villivakkam, inverter service Villivakkam, trusted inverter Villivakkam"
  },
  ayanavaram: { 
    name: "Ayanavaram", 
    intro: "Quality inverter solutions in Ayanavaram.",
    description: "Premium inverter services in Ayanavaram, Chennai. Professional installation and maintenance for reliable power backup.",
    keywords: "inverter installation Ayanavaram, inverter service Ayanavaram, quality inverter Ayanavaram"
  },
  mint: { 
    name: "Mint", 
    intro: "Expert inverter installation in Mint.",
    description: "Professional inverter services in Mint, Chennai. Complete power backup solutions with professional installation.",
    keywords: "inverter installation Mint, inverter service Mint, expert inverter Mint"
  },
  central: { 
    name: "Central", 
    intro: "Premium inverter solutions in Central Chennai.",
    description: "High-quality inverter services in Central Chennai. Professional installation and maintenance for reliable power backup.",
    keywords: "inverter installation Central Chennai, inverter service Central Chennai, premium inverter Central Chennai"
  },
  parrys: { 
    name: "Parrys", 
    intro: "Commercial inverter services in Parrys.",
    description: "Professional inverter solutions in Parrys, Chennai. Specialized services for commercial establishments and offices.",
    keywords: "inverter installation Parrys, commercial inverter Parrys, office inverter Parrys, inverter service Parrys"
  },
  "moola-kadai": { 
    name: "Moola Kadai", 
    intro: "Reliable inverter installation in Moola Kadai.",
    description: "Trusted inverter services in Moola Kadai, Chennai. Expert installation and maintenance for uninterrupted power supply.",
    keywords: "inverter installation Moola Kadai, inverter service Moola Kadai, reliable inverter Moola Kadai"
  },
  madhavaram: { 
    name: "Madhavaram", 
    intro: "Professional inverter services in Madhavaram.",
    description: "Expert inverter solutions in Madhavaram, Chennai. Complete power backup solutions with professional installation.",
    keywords: "inverter installation Madhavaram, inverter service Madhavaram, professional inverter Madhavaram"
  },
  minjur: { 
    name: "Minjur", 
    intro: "Quality inverter solutions in Minjur.",
    description: "Premium inverter services in Minjur, Chennai. Professional installation and maintenance for reliable power backup.",
    keywords: "inverter installation Minjur, inverter service Minjur, quality inverter Minjur"
  },
  manali: { 
    name: "Manali", 
    intro: "Trusted inverter installation in Manali.",
    description: "Reliable inverter services in Manali, Chennai. Expert installation and maintenance for uninterrupted power supply.",
    keywords: "inverter installation Manali, inverter service Manali, trusted inverter Manali"
  },
  redhils: { 
    name: "Redhils", 
    intro: "Expert inverter services in Redhils.",
    description: "Professional inverter solutions in Redhils, Chennai. Complete power backup solutions with professional installation.",
    keywords: "inverter installation Redhils, inverter service Redhils, expert inverter Redhils"
  },
  padiyanallur: { 
    name: "Padiyanallur", 
    intro: "Complete inverter solutions in Padiyanallur.",
    description: "Full-service inverter solutions in Padiyanallur, Chennai. Installation, repair, and maintenance for all your power backup needs.",
    keywords: "inverter installation Padiyanallur, inverter service Padiyanallur, complete inverter solutions Padiyanallur"
  },
  vadakarai: { 
    name: "Vadakarai", 
    intro: "Professional inverter installation in Vadakarai.",
    description: "Expert inverter services in Vadakarai, Chennai. Reliable backup power solutions with certified technicians.",
    keywords: "inverter installation Vadakarai, inverter service Vadakarai, professional inverter Vadakarai"
  },
  perambur: { 
    name: "Perambur", 
    intro: "Quality inverter solutions in Perambur.",
    description: "Premium inverter services in Perambur, Chennai. Professional installation and maintenance for reliable power backup.",
    keywords: "inverter installation Perambur, inverter service Perambur, quality inverter Perambur"
  },
  thandayarpet: { 
    name: "Thandayarpet", 
    intro: "Trusted inverter services in Thandayarpet.",
    description: "Reliable inverter solutions in Thandayarpet, Chennai. Professional installation and maintenance for uninterrupted power supply.",
    keywords: "inverter installation Thandayarpet, inverter service Thandayarpet, trusted inverter Thandayarpet"
  },
  washermanpet: { 
    name: "Washermanpet", 
    intro: "Expert inverter installation in Washermanpet.",
    description: "Professional inverter services in Washermanpet, Chennai. Complete power backup solutions with professional installation.",
    keywords: "inverter installation Washermanpet, inverter service Washermanpet, expert inverter Washermanpet"
  },
  mylapore: { 
    name: "Mylapore", 
    intro: "Premium inverter solutions in Mylapore.",
    description: "High-quality inverter services in Mylapore, Chennai. Professional installation and maintenance for reliable power backup.",
    keywords: "inverter installation Mylapore, inverter service Mylapore, premium inverter Mylapore"
  },
  nungambakkam: { 
    name: "Nungambakkam", 
    intro: "Professional inverter services in Nungambakkam.",
    description: "Expert inverter solutions in Nungambakkam, Chennai. Complete power backup solutions with professional installation.",
    keywords: "inverter installation Nungambakkam, inverter service Nungambakkam, professional inverter Nungambakkam"
  },
  kellys: { 
    name: "Kellys", 
    intro: "Quality inverter solutions in Kellys.",
    description: "Premium inverter services in Kellys, Chennai. Professional installation and maintenance for reliable power backup.",
    keywords: "inverter installation Kellys, inverter service Kellys, quality inverter Kellys"
  },
  kilpauk: { 
    name: "Kilpauk", 
    intro: "Trusted inverter installation in Kilpauk.",
    description: "Reliable inverter services in Kilpauk, Chennai. Expert installation and maintenance for uninterrupted power supply.",
    keywords: "inverter installation Kilpauk, inverter service Kilpauk, trusted inverter Kilpauk"
  },
  chetpet: { 
    name: "Chetpet", 
    intro: "Expert inverter services in Chetpet.",
    description: "Professional inverter solutions in Chetpet, Chennai. Complete power backup solutions with professional installation.",
    keywords: "inverter installation Chetpet, inverter service Chetpet, expert inverter Chetpet"
  },
  ashoknagar: { 
    name: "Ashoknagar", 
    intro: "Complete inverter solutions in Ashoknagar.",
    description: "Full-service inverter solutions in Ashoknagar, Chennai. Installation, repair, and maintenance for all your power backup needs.",
    keywords: "inverter installation Ashoknagar, inverter service Ashoknagar, complete inverter solutions Ashoknagar"
  },
  arumbakkam: { 
    name: "Arumbakkam", 
    intro: "Professional inverter installation in Arumbakkam.",
    description: "Expert inverter services in Arumbakkam, Chennai. Reliable backup power solutions with certified technicians.",
    keywords: "inverter installation Arumbakkam, inverter service Arumbakkam, professional inverter Arumbakkam"
  },
  koyambedu: { 
    name: "Koyambedu", 
    intro: "Quality inverter solutions in Koyambedu.",
    description: "Premium inverter services in Koyambedu, Chennai. Professional installation and maintenance for reliable power backup.",
    keywords: "inverter installation Koyambedu, inverter service Koyambedu, quality inverter Koyambedu"
  },
  madhuravayal: { 
    name: "Madhuravayal", 
    intro: "Trusted inverter services in Madhuravayal.",
    description: "Reliable inverter solutions in Madhuravayal, Chennai. Professional installation and maintenance for uninterrupted power supply.",
    keywords: "inverter installation Madhuravayal, inverter service Madhuravayal, trusted inverter Madhuravayal"
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const loc = LOCATIONS[params.slug]
  const name = loc?.name ?? "Location"
  return {
    title: `${name} Inverter Installation & Service | Apex Inverter India`,
    description: loc?.description ?? `Professional inverter installation and service in ${name}, Chennai. Get reliable backup power solutions.`,
    keywords: loc?.keywords ?? `inverter installation ${name}, inverter service ${name}, backup power ${name}`,
    alternates: { canonical: `/locations/${params.slug}` },
    openGraph: {
      title: `${name} Inverter Installation & Service | Apex Inverter India`,
      description: loc?.description ?? `Professional inverter installation and service in ${name}, Chennai.`,
      url: `/locations/${params.slug}`,
      type: "website",
    },
  }
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const loc = LOCATIONS[params.slug]
  if (!loc) return null

  useEffect(() => {
    // Add structured data for location page
    const locationSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Apex Inverter India - ${loc.name}`,
      "description": loc.description,
      "url": `https://apexinverterindia.com/locations/${params.slug}`,
      "telephone": "+919962861772",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": loc.name,
        "addressRegion": "Chennai",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "addressLocality": loc.name,
        "addressRegion": "Chennai"
      },
      "serviceArea": {
        "@type": "City",
        "name": loc.name
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Inverter Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Inverter Installation",
              "description": "Professional inverter installation service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Inverter Maintenance",
              "description": "Regular inverter maintenance and repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Battery Replacement",
              "description": "Battery replacement and maintenance service"
            }
          }
        ]
      },
      "sameAs": [
        "https://apexinverterindia.com"
      ]
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(locationSchema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [loc, params.slug])

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <nav className="text-sm text-muted-foreground mb-3">
              <a href="/" className="hover:text-primary">Home</a> / <a href="/locations" className="hover:text-primary">Locations</a> / <span className="text-foreground">{loc.name}</span>
            </nav>
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-3">Service Area</Badge>
            <h1 className="text-3xl md:text-4xl font-bold">{loc.name} Inverter Installation & Service</h1>
            <p className="text-muted-foreground mt-3">{loc.intro}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-xl font-semibold">What we offer in {loc.name}</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>Home and commercial inverter installation</li>
                <li>Battery replacement and maintenance</li>
                <li>Surge protection and earthing checks</li>
                <li>24/7 emergency support</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">Why choose us</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>Certified technicians</li>
                <li>Pan-Chennai coverage</li>
                <li>Warranty-backed service</li>
              </ul>

              <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Service Coverage in {loc.name}</h3>
                <p className="text-muted-foreground mb-4">
                  We provide comprehensive inverter services throughout {loc.name} and surrounding areas. Our local technicians are familiar with the power infrastructure and common issues in your locality.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Residential Areas:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Apartments & Flats</li>
                      <li>• Independent Houses</li>
                      <li>• Gated Communities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Commercial Areas:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Offices & Shops</li>
                      <li>• Restaurants & Hotels</li>
                      <li>• Industrial Units</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <aside className="space-y-3">
              <a href="tel:+919962861772" className="block w-full text-center bg-primary text-primary-foreground px-4 py-3 rounded-lg hover:bg-primary/90">Call Now: +91 9962861772</a>
              
              <a href="/contact" className="block w-full text-center border px-4 py-3 rounded-lg hover:border-primary hover:bg-primary/5">Get Free Quote</a>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Quick Service Info</h4>
                <div className="text-sm text-muted-foreground space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Same-day service available
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Free site inspection
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Warranty on all work
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
