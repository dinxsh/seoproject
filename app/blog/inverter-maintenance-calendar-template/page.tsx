import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Calendar as CalIcon, Clock, Heart, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Free Template: Inverter Maintenance Calendar (Printable)",
  description:
    "Download a printable inverter maintenance calendar to keep your system reliable year-round.",
  alternates: { canonical: "/blog/inverter-maintenance-calendar-template" },
}

export default function MaintenanceCalendarTemplatePage() {
  return (
    <article className="py-20 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl md:max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-8 md:mb-10">
          <a href="/" className="hover:text-primary">Home</a> / <a href="/blog" className="hover:text-primary">Blog</a> / <span className="text-foreground">Inverter Maintenance Calendar</span>
        </nav>
        <header className="mb-10 md:mb-12">
          <div className="flex items-center justify-between mb-3">
            <Badge className="bg-primary/10 text-primary border-primary/20">Templates</Badge>
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Free Template: Inverter Maintenance Calendar (Printable)</h1>
          <p className="text-muted-foreground mb-4">
            Month-by-month maintenance tasks for reliable backup and longer battery life.
          </p>
          <div className="flex items-center text-sm text-muted-foreground gap-4">
            <span className="inline-flex items-center gap-2"><CalIcon className="h-4 w-4" /> February 2025</span>
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> 4 min read</span>
          </div>
        </header>

        <section className="prose prose-neutral max-w-none space-y-6 md:space-y-8">
          <h2>Key takeaways</h2>
          <ul>
            <li>Short monthly tasks prevent big failures</li>
            <li>Seasonal checks improve reliability</li>
            <li>Printable calendar keeps you on track</li>
          </ul>

          <h2>What’s Inside</h2>
          <ul>
            <li>Monthly checklist with reminders</li>
            <li>Battery care essentials</li>
            <li>Seasonal tips (Summer/Monsoon/Winter)</li>
          </ul>

          <div className="bg-primary/5 p-4 rounded-lg mt-6">
            <p className="m-0">Download and print the calendar. Stick it near your inverter for quick reference.</p>
          </div>

          <div className="mt-6">
            <Button className="bg-primary hover:bg-primary/90">
              <Download className="mr-2 h-4 w-4" /> Download Calendar (PDF)
            </Button>
          </div>
        </section>

        <footer className="mt-12 md:mt-14">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <a href="/services" className="text-primary font-medium">Book Maintenance</a>
            <a href="/offers" className="text-primary font-medium">Seasonal Discounts</a>
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
              headline: "Free Template: Inverter Maintenance Calendar (Printable)",
              datePublished: "2025-02-01",
              dateModified: "2025-02-01",
              author: { "@type": "Organization", name: "Apex Inverter India" },
              publisher: { "@type": "Organization", name: "Apex Inverter India" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://your-domain.com/blog/inverter-maintenance-calendar-template" }
            })
          }}
        />
      </div>
    </article>
  )
}
