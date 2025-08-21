import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Flame, TrendingUp, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Viral Case Study: Chennai Family Cut Power Costs by 32%",
  description:
    "Real story: how a Chennai family reduced power costs by 32% with a smarter inverter setup, load planning, and maintenance.",
  alternates: { canonical: "/blog/chennai-family-power-costs-case-study" },
}

export default function ChennaiCaseStudyPage() {
  return (
    <article className="py-20 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl md:max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-8 md:mb-10">
          <a href="/" className="hover:text-primary">Home</a> / <a href="/blog" className="hover:text-primary">Blog</a> / <span className="text-foreground">Chennai Case Study</span>
        </nav>
        <header className="mb-10 md:mb-12">
          <div className="flex items-center justify-between mb-3">
            <Badge className="bg-primary/10 text-primary border-primary/20">Case Study</Badge>
            <Flame className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">How a Chennai Family Cut Power Costs by 32%</h1>
          <p className="text-muted-foreground mb-4">
            A practical breakdown of what they changed—and how you can do it too.
          </p>
          <div className="flex items-center text-sm text-muted-foreground gap-4">
            <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> August 2024</span>
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> 5 min read</span>
          </div>
        </header>

        <section className="prose prose-neutral max-w-none space-y-6 md:space-y-8">
          <h2>Key takeaways</h2>
          <ul>
            <li>Load scheduling + maintenance = fewer outages</li>
            <li>Smart monitoring reveals hidden inefficiencies</li>
            <li>Simple tweaks compound into big savings</li>
          </ul>

          <h2>The Setup</h2>
          <p>2.5KW hybrid inverter with smart monitoring, two 150Ah tubular batteries, and surge protection.</p>

          <h2>What Changed</h2>
          <ul>
            <li>Optimized load schedule for heavy appliances</li>
            <li>Quarterly maintenance and dust cleaning routine</li>
            <li>Enabled energy-saving features in the app</li>
          </ul>

          <h2>Results</h2>
          <p>Average monthly savings of 32% over 90 days; zero unexpected shutdowns.</p>

          <div className="bg-primary/5 p-4 rounded-lg mt-6">
            <div className="flex items-start gap-2">
              <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
              <p className="m-0">Try it: create a 7-day load plan and track usage. Small changes stack up fast.</p>
            </div>
          </div>
        </section>

        <footer className="mt-12 md:mt-14">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <a href="/services" className="text-primary font-medium">Optimize My Setup</a>
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
              headline: "Viral Case Study: Chennai Family Cut Power Costs by 32%",
              datePublished: "2024-08-01",
              dateModified: "2024-08-01",
              author: { "@type": "Organization", name: "Apex Inverter India" },
              publisher: { "@type": "Organization", name: "Apex Inverter India" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://apexpowerbatteries.in/blog/chennai-family-power-costs-case-study" }
            })
          }}
        />
      </div>
    </article>
  )
}
