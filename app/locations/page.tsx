import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"

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
]

export default function LocationsIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Service Locations in Chennai</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide expert inverter installation and service across these localities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {localities.map((loc) => (
              <a
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="block p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
              >
                {loc.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
