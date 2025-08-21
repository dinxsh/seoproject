import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Sun, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Summer Inverter Maintenance Tips | Keep Your Inverter Cool & Efficient",
  description:
    "Learn how to maintain your inverter during summer: cooling tips, battery care, ventilation, dust cleaning, and load management.",
  alternates: { canonical: "/blog/summer-inverter-maintenance-tips" },
}

export default function SummerMaintenancePage() {
  return (
    <article className="py-20 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl md:max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-8 md:mb-10">
          <a href="/" className="hover:text-primary">Home</a> / <a href="/blog" className="hover:text-primary">Blog</a> / <span className="text-foreground">Summer Inverter Maintenance Tips</span>
        </nav>
        <header className="mb-10 md:mb-12">
          <div className="flex items-center justify-between mb-3">
            <Badge className="bg-primary/10 text-primary border-primary/20">Maintenance</Badge>
            <Sun className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Summer Inverter Maintenance Tips</h1>
          <p className="text-muted-foreground mb-4">
            Keep your inverter running efficiently during hot summer months with practical steps.
          </p>
          <div className="flex items-center text-sm text-muted-foreground gap-4">
            <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> June 2024</span>
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> 5 min read</span>
          </div>
        </header>

        <section className="prose prose-neutral max-w-none space-y-6 md:space-y-8">
          <h2>Key takeaways</h2>
          <ul>
            <li>Keep the inverter cool with ventilation and regular dust cleaning</li>
            <li>Protect battery health in heat; inspect terminals and fluid levels</li>
            <li>Balance loads to reduce heat stress and extend runtime</li>
          </ul>

          <h2>1. Ensure Proper Ventilation</h2>
          <p>Place the inverter in a cool, well-ventilated area. Avoid direct sunlight and enclosed cabinets that trap heat.</p>
          <ul>
            <li>Maintain at least 6–8 inches of clearance around vents</li>
            <li>Use an external fan if ambient temperatures exceed 35°C</li>
          </ul>

          <h2>2. Clean Dust and Debris</h2>
          <p>Dust accumulation reduces cooling efficiency. Gently clean vents and filters with a soft brush every 2–4 weeks.</p>

          <h2>3. Battery Health Checks</h2>
          <p>High temperatures accelerate battery wear. Inspect terminals for corrosion and verify electrolyte levels (for tubular batteries).</p>

          <h2>4. Load Management</h2>
          <p>Avoid running heat-generating appliances simultaneously on backup. Balance loads to reduce thermal stress.</p>

          <h2>5. Monitor with Smart Apps</h2>
          <p>Use monitoring features to track temperature, load, and runtime. Set alerts for overheating events.</p>

          <div className="bg-primary/5 p-4 rounded-lg mt-6">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <p className="m-0">Pro tip: Schedule a professional service before peak summer to optimize performance.</p>
            </div>
          </div>

          <h2>Quick summer checklist</h2>
          <ul>
            <li>Wipe vents and filters (2–4 weeks)</li>
            <li>Tighten all terminals</li>
            <li>Move heat-heavy loads off backup</li>
          </ul>

          <h2>FAQ</h2>
          <p><strong>How often should I clean my inverter in summer?</strong><br/>Every 2–4 weeks depending on dust levels.</p>
          <p><strong>Is a fan safe near the inverter?</strong><br/>Yes—use a stable fan that doesn’t block vents.</p>
          <p><strong>Do I need a service visit?</strong><br/>A pre-summer tune‑up prevents heat-related failures.</p>
        </section>

        <footer className="mt-12 md:mt-14">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <a href="/services" className="text-primary font-medium">Explore Services</a>
            <a href="/offers" className="text-primary font-medium">See Seasonal Offers</a>
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
              headline: "Summer Inverter Maintenance Tips",
              datePublished: "2024-06-01",
              dateModified: "2024-06-01",
              author: { "@type": "Organization", name: "Apex Inverter India" },
              publisher: { "@type": "Organization", name: "Apex Inverter India" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://apexpowerbatteries.in/blog/summer-inverter-maintenance-tips" }
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
                { "@type": "Question", name: "How often should I clean my inverter in summer?", acceptedAnswer: { "@type": "Answer", text: "Every 2–4 weeks depending on dust levels." } },
                { "@type": "Question", name: "Is a fan safe near the inverter?", acceptedAnswer: { "@type": "Answer", text: "Yes—use a stable fan that doesn’t block vents." } },
                { "@type": "Question", name: "Do I need a service visit?", acceptedAnswer: { "@type": "Answer", text: "A pre-summer tune‑up prevents heat-related failures." } }
              ]
            })
          }}
        />
      </div>
    </article>
  )
}
