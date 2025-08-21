import type { Metadata } from "next"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { Badge } from "@/components/ui/badge"

const LOCATIONS: Record<string, { name: string; intro: string }> = {
  "anna-nagar": { name: "Anna Nagar", intro: "Premium inverter installation and service in Anna Nagar." },
  "t-nagar": { name: "T Nagar", intro: "Fast, reliable inverter solutions for homes and shops in T Nagar." },
  adyar: { name: "Adyar", intro: "Expert inverter setup with maintenance support in Adyar." },
  velachery: { name: "Velachery", intro: "Trusted inverter services for apartments and offices in Velachery." },
  tambaram: { name: "Tambaram", intro: "Affordable inverter installation and repair in Tambaram." },
  omr: { name: "OMR", intro: "Commercial-grade inverter solutions along OMR IT corridor." },
  porur: { name: "Porur", intro: "Home and commercial inverter services in Porur." },
  poonamallee: { name: "Poonamallee", intro: "End-to-end inverter solutions in Poonamallee." },
  avadi: { name: "Avadi", intro: "Reliable backup power systems in Avadi." },
  ambattur: { name: "Ambattur", intro: "Industrial and home inverter services in Ambattur." },
  "red-hills": { name: "Red Hills", intro: "Inverter setup and battery services in Red Hills." },
  ennore: { name: "Ennore", intro: "Seaside inverter protection and services in Ennore." },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const loc = LOCATIONS[params.slug]
  const name = loc?.name ?? "Location"
  return {
    title: `${name} Inverter Installation & Service | Apex Inverter India`,
    description: loc?.intro ?? `Inverter installation and service in ${name}.`,
    alternates: { canonical: `/locations/${params.slug}` },
  }
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const loc = LOCATIONS[params.slug]
  if (!loc) return null

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
            </div>
            <aside className="space-y-3">
              <a href="tel:+919962861772" className="block w-full text-center bg-primary text-primary-foreground px-4 py-3 rounded-lg hover:bg-primary/90">Call Now: +91 9962861772</a>
              <a href="/offers" className="block w-full text-center border px-4 py-3 rounded-lg hover:border-primary hover:bg-primary/5">See Offers</a>
              <a href="/contact" className="block w-full text-center border px-4 py-3 rounded-lg hover:border-primary hover:bg-primary/5">Get Free Quote</a>
            </aside>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
