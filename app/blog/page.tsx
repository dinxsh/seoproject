import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Sun, CloudRain, Zap, ArrowRight, TrendingUp, Flame, Heart } from "lucide-react"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"

export const metadata: Metadata = {
  title: "Inverter Tips & Guides | Seasonal Care, Maintenance, Performance",
  description:
    "Expert inverter tips and guides for summer, monsoon, and winter. Learn maintenance best practices, protection steps, and performance optimization.",
  keywords: [
    "inverter tips", "inverter guides", "inverter maintenance", "seasonal inverter care",
    "summer inverter tips", "monsoon inverter care", "winter inverter maintenance",
    "inverter performance", "battery care", "inverter troubleshooting", "power backup tips"
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Inverter Tips & Guides | Seasonal Care, Maintenance, Performance",
    description: "Expert inverter tips and guides for summer, monsoon, and winter. Learn maintenance best practices and performance optimization.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inverter Tips & Guides | Seasonal Care, Maintenance, Performance",
    description: "Expert inverter tips and guides for summer, monsoon, and winter. Learn maintenance best practices and performance optimization.",
  },
}

const posts = [
  {
    title: "Summer Inverter Maintenance Tips",
    excerpt:
      "Keep your inverter running efficiently during hot summer months with practical maintenance steps and cooling best practices.",
    date: "June 2024",
    readTime: "5 min read",
    icon: Sun,
    href: "/blog/summer-inverter-maintenance-tips",
    category: "Maintenance",
    tags: ["Summer", "Maintenance", "Efficiency"],
  },
  {
    title: "Monsoon Power Backup Guide",
    excerpt:
      "Ensure uninterrupted power during monsoon: waterproofing, surge protection, and wiring safety checklist.",
    date: "July 2024",
    readTime: "7 min read",
    icon: CloudRain,
    href: "/blog/monsoon-power-backup-guide",
    category: "Seasonal",
    tags: ["Monsoon", "Protection", "Setup"],
  },
  {
    title: "Winter Inverter Performance",
    excerpt:
      "Optimize inverter performance in cold weather: battery care, charging strategies, and monitoring.",
    date: "December 2024",
    readTime: "6 min read",
    icon: Zap,
    href: "/blog/winter-inverter-performance",
    category: "Performance",
    tags: ["Winter", "Performance", "Optimization"],
  },
  {
    title: "10 Inverter Mistakes Homeowners Make (And How To Avoid Them)",
    excerpt:
      "From wrong sizing to poor ventilation, avoid these costly inverter mistakes with our checklist.",
    date: "May 2024",
    readTime: "6 min read",
    icon: TrendingUp,
    href: "/blog/inverter-mistakes-to-avoid",
    category: "Guides",
    tags: ["Checklist", "Mistakes", "Guide"],
  },
  {
    title: "Ultimate Inverter Buying Guide 2025 (Free Checklist)",
    excerpt:
      "Capacity, battery types, MPPT vs PWM, hybrid choices everything you need to buy confidently.",
    date: "January 2025",
    readTime: "9 min read",
    icon: TrendingUp,
    href: "/blog/inverter-buying-guide-2025",
    category: "Buyer Guide",
    tags: ["Buying Guide", "2025", "Checklist"],
  },
  {
    title: "Viral Case Study: Chennai Family Cut Power Costs by 32%",
    excerpt:
      "Real story: how a simple setup change + maintenance routine boosted backup and reduced bills.",
    date: "August 2024",
    readTime: "5 min read",
    icon: Flame,
    href: "/blog/chennai-family-power-costs-case-study",
    category: "Case Study",
    tags: ["Chennai", "Savings", "Story"],
  },
  {
    title: "Battery Care Myths That Kill Your Backup (Debunked)",
    excerpt:
      "Charging to 100% daily? Topping up randomly? We bust myths that silently destroy battery life.",
    date: "September 2024",
    readTime: "6 min read",
    icon: Zap,
    href: "/blog/battery-care-myths-debunked",
    category: "Maintenance",
    tags: ["Battery", "Myths", "Longevity"],
  },
]

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />

      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Inverter Tips & Guides</h1>
            <p className="text-xl text-muted-foreground max-w-3xl md:max-w-4xl mx-auto leading-relaxed">
              Seasonal care, protection, and optimization to help you choose and maintain the right inverter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {posts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-primary/10 text-primary border-primary/20">{post.category}</Badge>
                    <post.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={post.href} className="inline-flex items-center text-primary font-medium">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
