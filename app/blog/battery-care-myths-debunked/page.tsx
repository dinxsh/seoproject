import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Zap, CheckCircle, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Battery Care Myths That Kill Your Backup (Debunked)",
  description:
    "We bust common battery myths: full charges daily, random top-ups, deep discharges, and more—what actually extends life.",
  alternates: { canonical: "/blog/battery-care-myths-debunked" },
}

export default function BatteryCareMythsPage() {
  return (
    <article className="py-20 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl md:max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-8 md:mb-10">
          <a href="/" className="hover:text-primary">Home</a> / <a href="/blog" className="hover:text-primary">Blog</a> / <span className="text-foreground">Battery Care Myths Debunked</span>
        </nav>
        <header className="mb-10 md:mb-12">
          <div className="flex items-center justify-between mb-3">
            <Badge className="bg-primary/10 text-primary border-primary/20">Maintenance</Badge>
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Battery Care Myths That Kill Your Backup (Debunked)</h1>
          <p className="text-muted-foreground mb-4">
            Simple changes to charging and maintenance can dramatically extend your battery life.
          </p>
          <div className="flex items-center text-sm text-muted-foreground gap-4">
            <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> September 2024</span>
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> 6 min read</span>
          </div>
        </header>

        <section className="prose prose-neutral max-w-none space-y-6 md:space-y-8">
          <h2>Key takeaways</h2>
          <ul>
            <li>Avoid unnecessary full cycles; use float charging</li>
            <li>Stay within safe depth‑of‑discharge levels</li>
            <li>Use distilled water and proper cables</li>
          </ul>

          <h2>Myth vs Reality</h2>
          <ul>
            <li><strong>Myth:</strong> Charge to 100% daily. <strong>Reality:</strong> Float charge and avoid unnecessary cycles.</li>
            <li><strong>Myth:</strong> Deep discharge is fine. <strong>Reality:</strong> Keep above recommended depth-of-discharge.</li>
            <li><strong>Myth:</strong> Any water will do. <strong>Reality:</strong> Only use distilled water for tubular batteries.</li>
            <li><strong>Myth:</strong> Cables don't matter. <strong>Reality:</strong> Poor cables increase heat and losses.</li>
          </ul>

          <div className="bg-primary/5 p-4 rounded-lg mt-6">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-primary mt-0.5" />
              <p className="m-0">Tip: Schedule a quarterly battery health check—terminals, electrolyte, and firmware.</p>
            </div>
          </div>

          <h2>FAQ</h2>
          <p><strong>How often should I top up water?</strong><br/>Only when the indicator shows low—use distilled water.</p>
          <p><strong>What depth‑of‑discharge is safe?</strong><br/>Follow battery spec; typically avoid deep discharges.</p>
          <p><strong>Do thicker cables help?</strong><br/>Yes, correct gauge lowers heat and voltage drop.</p>
        </section>

        <footer className="mt-12 md:mt-14">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <a href="/services" className="text-primary font-medium">Battery Service</a>
            <a href="/offers" className="text-primary font-medium">Latest Offers</a>
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
              headline: "Battery Care Myths That Kill Your Backup (Debunked)",
              datePublished: "2024-09-01",
              dateModified: "2024-09-01",
              author: { "@type": "Organization", name: "Apex Inverter India" },
              publisher: { "@type": "Organization", name: "Apex Inverter India" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://your-domain.com/blog/battery-care-myths-debunked" }
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
                { "@type": "Question", name: "How often should I top up water?", acceptedAnswer: { "@type": "Answer", text: "Only when the indicator shows low—use distilled water." } },
                { "@type": "Question", name: "What depth‑of‑discharge is safe?", acceptedAnswer: { "@type": "Answer", text: "Follow battery spec; typically avoid deep discharges." } },
                { "@type": "Question", name: "Do thicker cables help?", acceptedAnswer: { "@type": "Answer", text: "Yes, correct gauge lowers heat and voltage drop." } }
              ]
            })
          }}
        />
      </div>
    </article>
  )
}
