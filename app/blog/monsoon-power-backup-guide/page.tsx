import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, CloudRain, Shield, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Monsoon Power Backup Guide | Waterproofing, Surge Protection, Safety",
  description:
    "Protect your inverter during the monsoon: waterproofing, surge protection, earthing, wiring safety, and maintenance checklist.",
  alternates: { canonical: "/blog/monsoon-power-backup-guide" },
}

export default function MonsoonGuidePage() {
  return (
    <article className="py-20 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl md:max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-8 md:mb-10">
          <a href="/" className="hover:text-primary">Home</a> / <a href="/blog" className="hover:text-primary">Blog</a> / <span className="text-foreground">Monsoon Power Backup Guide</span>
        </nav>
        <header className="mb-10 md:mb-12">
          <div className="flex items-center justify-between mb-3">
            <Badge className="bg-primary/10 text-primary border-primary/20">Seasonal</Badge>
            <CloudRain className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Monsoon Power Backup Guide</h1>
          <p className="text-muted-foreground mb-4">
            Ensure uninterrupted power during monsoon with proper protection and maintenance.
          </p>
          <div className="flex items-center text-sm text-muted-foreground gap-4">
            <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> July 2024</span>
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> 7 min read</span>
          </div>
        </header>

        <section className="prose prose-neutral max-w-none space-y-6 md:space-y-8">
          <h2>Key takeaways</h2>
          <ul>
            <li>Seal and elevate to prevent water ingress</li>
            <li>Install surge protection and confirm earthing</li>
            <li>Weekly moisture checks and post-rain runtime test</li>
          </ul>

          <h2>1. Waterproofing and Enclosures</h2>
          <p>Use IP-rated enclosures and weatherproof covers. Seal cable entry points to prevent water ingress.</p>

          <h2>2. Surge Protection</h2>
          <p>Install surge protection devices (SPDs) and ensure proper earthing to protect sensitive electronics.</p>

          <h2>3. Safe Wiring Practices</h2>
          <p>Route cables away from water-prone areas, elevate battery banks, and tighten all terminals.</p>

          <h2>4. Regular Inspection Checklist</h2>
          <ul>
            <li>Check for moisture, rust, and corrosion weekly</li>
            <li>Test backup runtime after heavy rain</li>
            <li>Verify earthing resistance values</li>
          </ul>

          <div className="bg-primary/5 p-4 rounded-lg mt-6">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <p className="m-0">Pro tip: Keep a spare set of fuses and a moisture absorber near the enclosure.</p>
            </div>
          </div>

          <h2>Quick monsoon checklist</h2>
          <ul>
            <li>Elevate batteries; seal all entry points</li>
            <li>Confirm SPD installed and earthing within spec</li>
            <li>Dry and re‑grease terminals after storms</li>
          </ul>

          <h2>FAQ</h2>
          <p><strong>Do I need an enclosure?</strong><br/>Yes, IP‑rated housing is recommended for exposed areas.</p>
          <p><strong>How do I know earthing is okay?</strong><br/>Ask a technician to measure earth resistance within spec.</p>
          <p><strong>Can I run the inverter during heavy rain?</strong><br/>Yes, if properly sealed, grounded, and protected by SPDs.</p>
        </section>

        <footer className="mt-12 md:mt-14">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <a href="/services" className="text-primary font-medium">Book Waterproofing</a>
            <a href="/offers" className="text-primary font-medium">Seasonal Offer</a>
            <a href="tel:+919962861772" className="inline-flex items-center bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90">Call Now: +91 9962861772</a>
          </div>
          <div className="mt-4">
            <a href="/blog" className="text-primary font-medium">← Back to Blog</a>
          </div>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Monsoon Power Backup Guide",
              datePublished: "2024-07-01",
              dateModified: "2024-07-01",
              author: { "@type": "Organization", name: "Apex Inverter India" },
              publisher: { "@type": "Organization", name: "Apex Inverter India" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://your-domain.com/blog/monsoon-power-backup-guide" }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Do I need an enclosure?", acceptedAnswer: { "@type": "Answer", text: "Yes, IP‑rated housing is recommended for exposed areas." } },
                { "@type": "Question", name: "How do I know earthing is okay?", acceptedAnswer: { "@type": "Answer", text: "Ask a technician to measure earth resistance within spec." } },
                { "@type": "Question", name: "Can I run the inverter during heavy rain?", acceptedAnswer: { "@type": "Answer", text: "Yes, if properly sealed, grounded, and protected by SPDs." } }
              ]
            })
          }}
        />
      </div>
    </article>
  )
}
