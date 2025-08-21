import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, TrendingUp, CheckCircle, ListChecks } from "lucide-react"

export const metadata: Metadata = {
  title: "Ultimate Inverter Buying Guide 2025 (Free Checklist)",
  description:
    "Compare MPPT vs PWM, hybrid features, capacities, batteries, and pricing. Free printable checklist included.",
  alternates: { canonical: "/blog/inverter-buying-guide-2025" },
}

export default function InverterBuyingGuide2025Page() {
  return (
    <article className="py-20 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl md:max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-8 md:mb-10">
          <a href="/" className="hover:text-primary">Home</a> / <a href="/blog" className="hover:text-primary">Blog</a> / <span className="text-foreground">Inverter Buying Guide 2025</span>
        </nav>
        <header className="mb-10 md:mb-12">
          <div className="flex items-center justify-between mb-3">
            <Badge className="bg-primary/10 text-primary border-primary/20">Buyer Guide</Badge>
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Ultimate Inverter Buying Guide 2025 (Free Checklist)</h1>
          <p className="text-muted-foreground mb-4">
            Everything you need to make a confident purchase—features, capacity, batteries, and costs.
          </p>
          <div className="flex items-center text-sm text-muted-foreground gap-4">
            <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> January 2025</span>
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> 9 min read</span>
          </div>
        </header>

        <section className="prose prose-neutral max-w-none space-y-6 md:space-y-8">
          <h2>Key takeaways</h2>
          <ul>
            <li>Size for peak + surge; plan for future loads</li>
            <li>Hybrid + MPPT = efficient, solar‑ready systems</li>
            <li>Battery warranty and service network matter</li>
          </ul>

          <h2>What to Look For</h2>
          <ul>
            <li>Capacity sizing (current + future loads)</li>
            <li>MPPT vs PWM controllers</li>
            <li>Hybrid readiness and solar integration</li>
            <li>Battery type (tubular, lithium) and warranty</li>
            <li>Monitoring, safety, and service network</li>
          </ul>

          <h2>Free Checklist</h2>
          <p>Download a printable checklist to compare 2–3 models side-by-side.</p>
          <div className="bg-primary/5 p-4 rounded-lg mt-2">
            <div className="flex items-start gap-2">
              <ListChecks className="h-5 w-5 text-primary mt-0.5" />
              <p className="m-0">Checklist includes: load planner, must-have features, warranty notes, and pricing.</p>
            </div>
          </div>
        </section>

        <footer className="mt-12 md:mt-14">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <a href="/products" className="text-primary font-medium">Compare Models</a>
            <span className="text-muted-foreground">Call for current deals</span>
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
              headline: "Ultimate Inverter Buying Guide 2025 (Free Checklist)",
              datePublished: "2025-01-01",
              dateModified: "2025-01-01",
              author: { "@type": "Organization", name: "Apex Inverter India" },
              publisher: { "@type": "Organization", name: "Apex Inverter India" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://apexpowerbatteries.in/blog/inverter-buying-guide-2025" }
            })
          }}
        />
      </div>
    </article>
  )
}
