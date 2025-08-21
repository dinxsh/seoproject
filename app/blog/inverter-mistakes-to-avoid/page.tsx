import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, TrendingUp, CheckCircle, XCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "10 Inverter Mistakes Homeowners Make (And How To Avoid Them)",
  description:
    "Avoid these common inverter mistakes: wrong sizing, poor ventilation, bad wiring, ignoring battery maintenance, and more.",
  alternates: { canonical: "/blog/inverter-mistakes-to-avoid" },
}

export default function InverterMistakesPage() {
  return (
    <article className="py-20 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl md:max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-8 md:mb-10">
          <a href="/" className="hover:text-primary">Home</a> / <a href="/blog" className="hover:text-primary">Blog</a> / <span className="text-foreground">Inverter Mistakes To Avoid</span>
        </nav>
        <header className="mb-10 md:mb-12">
          <div className="flex items-center justify-between mb-3">
            <Badge className="bg-primary/10 text-primary border-primary/20">Guides</Badge>
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">10 Inverter Mistakes Homeowners Make (And How To Avoid Them)</h1>
          <p className="text-muted-foreground mb-4">
            From wrong sizing to bad wiring—fix these mistakes to boost backup, safety, and battery life.
          </p>
          <div className="flex items-center text-sm text-muted-foreground gap-4">
            <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> May 2024</span>
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> 6 min read</span>
          </div>
        </header>

        <section className="prose prose-neutral max-w-none space-y-6 md:space-y-8">
          <h2>Key takeaways</h2>
          <ul>
            <li>Right size + proper cables = cooler, safer system</li>
            <li>Surge protection and earthing protect electronics</li>
            <li>Maintenance extends backup and battery life</li>
          </ul>

          <h2>Top Mistakes (And Fixes)</h2>
          <ol>
            <li><strong>Wrong Sizing:</strong> Always calculate peak load + surge. Add 20% headroom.</li>
            <li><strong>Poor Ventilation:</strong> Keep 6–8 inches clearance and ensure airflow.</li>
            <li><strong>Cheap Cables:</strong> Use proper gauge; avoid heat loss and voltage drop.</li>
            <li><strong>No Surge Protection:</strong> Install SPDs and ensure proper earthing.</li>
            <li><strong>Ignoring Battery Care:</strong> Regularly check terminals and electrolyte levels.</li>
            <li><strong>Overloading Backup:</strong> Don’t run heat-heavy appliances together.</li>
            <li><strong>Skipping Maintenance:</strong> Quarterly inspections extend lifespan.</li>
            <li><strong>Bad Placement:</strong> Avoid damp, dusty, or sealed enclosures.</li>
            <li><strong>No Monitoring:</strong> Use apps to track temperature, load, runtime.</li>
            <li><strong>DIY Wiring:</strong> Hire certified professionals for safety.</li>
          </ol>

          <div className="bg-primary/5 p-4 rounded-lg mt-6">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <p className="m-0">Download our free sizing checklist to pick the right inverter the first time.</p>
            </div>
          </div>

          <h2>FAQ</h2>
          <p><strong>How do I size my inverter?</strong><br/>Add all running loads + surge, then add 20% buffer.</p>
          <p><strong>Which cable should I use?</strong><br/>Follow manufacturer gauge charts based on length and current.</p>
          <p><strong>Do I need SPDs?</strong><br/>Yes, to protect from grid surges and lightning.</p>
        </section>

        <footer className="mt-12 md:mt-14">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <a href="/services" className="text-primary font-medium">Get Sizing Help</a>
            <a href="/offers" className="text-primary font-medium">Current Deals</a>
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
              headline: "10 Inverter Mistakes Homeowners Make (And How To Avoid Them)",
              datePublished: "2024-05-01",
              dateModified: "2024-05-01",
              author: { "@type": "Organization", name: "Apex Inverter India" },
              publisher: { "@type": "Organization", name: "Apex Inverter India" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://your-domain.com/blog/inverter-mistakes-to-avoid" }
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
                { "@type": "Question", name: "How do I size my inverter?", acceptedAnswer: { "@type": "Answer", text: "Add all running loads + surge, then add 20% buffer." } },
                { "@type": "Question", name: "Which cable should I use?", acceptedAnswer: { "@type": "Answer", text: "Follow manufacturer gauge charts based on length and current." } },
                { "@type": "Question", name: "Do I need SPDs?", acceptedAnswer: { "@type": "Answer", text: "Yes, to protect from grid surges and lightning." } }
              ]
            })
          }}
        />
      </div>
    </article>
  )
}
