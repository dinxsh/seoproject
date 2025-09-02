import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { Star } from "lucide-react"
import type { Metadata } from "next"

const localities = [
  { name: "Anna Nagar", slug: "anna-nagar" },
  { name: "T Nagar", slug: "t-nagar" },
  { name: "Adyar", slug: "adyar" },
  { name: "Velachery", slug: "velachery" },
  { name: "Tambaram", slug: "tambaram" },
  { name: "OMR", slug: "omr" },
  { name: "Porur", slug: "porur" },
  { name: "Poonamallee", slug: "poonamallee" },
  { name: "Avadi", slug: "avadi" },
  { name: "Ambattur", slug: "ambattur" },
  { name: "Red Hills", slug: "red-hills" },
  { name: "Ennore", slug: "ennore" },
  { name: "Madhanakuppam", slug: "madhanakuppam" },
  { name: "Thiruvallur", slug: "thiruvallur" },
  { name: "Ayyapakkam", slug: "ayyapakkam" },
  { name: "Thiruverkadu", slug: "thiruverkadu" },
  { name: "Nerkudram", slug: "nerkudram" },
  { name: "Mugapair", slug: "mugapair" },
  { name: "Iyyappanthagal", slug: "iyyappanthagal" },
  { name: "Mangadu", slug: "mangadu" },
  { name: "Kundrathur", slug: "kundrathur" },
  { name: "Guindy", slug: "guindy" },
  { name: "Nanthapakkam", slug: "nanthapakkam" },
  { name: "Nanganallur", slug: "nanganallur" },
  { name: "Cromppet", slug: "cromppet" },
  { name: "Selaiyur", slug: "selaiyur" },
  { name: "Perungolathur", slug: "perungolathur" },
  { name: "Urappakkam", slug: "urappakkam" },
  { name: "Padi", slug: "padi" },
  { name: "ICF", slug: "icf" },
  { name: "Villivakkam", slug: "villivakkam" },
  { name: "Ayanavaram", slug: "ayanavaram" },
  { name: "Mint", slug: "mint" },
  { name: "Central", slug: "central" },
  { name: "Parrys", slug: "parrys" },
  { name: "Moola Kadai", slug: "moola-kadai" },
  { name: "Madhavaram", slug: "madhavaram" },
  { name: "Minjur", slug: "minjur" },
  { name: "Manali", slug: "manali" },
  { name: "Redhils", slug: "redhils" },
  { name: "Padiyanallur", slug: "padiyanallur" },
  { name: "Vadakarai", slug: "vadakarai" },
  { name: "Perambur", slug: "perambur" },
  { name: "Thandayarpet", slug: "thandayarpet" },
  { name: "Washermanpet", slug: "washermanpet" },
  { name: "Mylapore", slug: "mylapore" },
  { name: "Nungambakkam", slug: "nungambakkam" },
  { name: "Kellys", slug: "kellys" },
  { name: "Kilpauk", slug: "kilpauk" },
  { name: "Chetpet", slug: "chetpet" },
  { name: "Ashoknagar", slug: "ashoknagar" },
  { name: "Arumbakkam", slug: "arumbakkam" },
  { name: "Koyambedu", slug: "koyambedu" },
  { name: "Madhuravayal", slug: "madhuravayal" },
  { name: "Kadhirvedu", slug: "kadhirvedu" },
  { name: "Kavangarai", slug: "kavangarai" },
  { name: "Thiruniruyur", slug: "thiruniruyur" },
  { name: "Thiruvanmiyur", slug: "thiruvanmiyur" },
  { name: "Tharamani", slug: "tharamani" },
  { name: "Sholinganallur", slug: "sholinganallur" },
  { name: "Thuraipakkam", slug: "thuraipakkam" },
  { name: "Alapakkam", slug: "alapakkam" },
  { name: "Valasaravakkam", slug: "valasaravakkam" },
  { name: "Virugampakkam", slug: "virugampakkam" },
  { name: "Mathur", slug: "mathur" },
  { name: "Angaputhur", slug: "angaputhur" },
  { name: "Ramapuram", slug: "ramapuram" },
  { name: "Kolathur", slug: "kolathur" },
  { name: "Periyarnagar", slug: "periyarnagar" },
  { name: "GKM Colony", slug: "gkm-colony" },
  { name: "Vysarpadi", slug: "vysarpadi" },
  { name: "Thiruvettriyur", slug: "thiruvettriyur" },
  { name: "Veppampattu", slug: "veppampattu" },
  { name: "Nemilichery", slug: "nemilichery" },
  { name: "Palavanthangal", slug: "palavanthangal" },
  { name: "Besennagar", slug: "besennagar" },
  { name: "Adayar", slug: "adayar" },
  { name: "Adhampakkam", slug: "adhampakkam" },
  { name: "Nandhanam", slug: "nandhanam" },
]

export const metadata: Metadata = {
  title: "Chennai Inverter Service Locations | Apex Inverter India",
  description: "Professional inverter installation and service across 50+ locations in Chennai including Anna Nagar, T Nagar, Adyar, Velachery, Porur, Poonamallee, Avadi, and more. Get expert backup power solutions.",
  keywords: "inverter installation Chennai, inverter service Chennai, backup power Chennai, inverter repair Chennai, inverter maintenance Chennai, Chennai locations, Anna Nagar, T Nagar, Adyar, Velachery, Porur, Poonamallee, Avadi, Thiruvallur, Guindy, Nanganallur, Mylapore, Nungambakkam, Kilpauk, Chetpet, Koyambedu, Kolathur, inverter installation shop in kolathur, inverter sales and service in kolathur",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Chennai Inverter Service Locations | Apex Inverter India",
    description: "Professional inverter installation and service across 50+ locations in Chennai. Expert backup power solutions near you.",
    url: "/locations",
    type: "website",
  },
}

export default function LocationsIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Inverter Service Locations in Chennai</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide expert inverter installation and service across {localities.length}+ localities in Chennai and surrounding areas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {localities.map((loc) => (
              <a
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="flex items-center justify-center space-x-2 p-3 bg-black/5 hover:bg-black/10 rounded-lg hover:scale-105 transition-all duration-200"
              >
                <Star className="h-4 w-4 text-green-700" />
                <span className="text-sm font-medium">{loc.name}</span>
              </a>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Our Pan-Chennai Service?</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Wide Coverage</h3>
                <p className="text-muted-foreground">Service available across all major areas of Chennai</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Quick Response</h3>
                <p className="text-muted-foreground">Same-day service in most locations</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Local Expertise</h3>
                <p className="text-muted-foreground">Technicians familiar with your area's power issues</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
