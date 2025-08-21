"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Zap, Sun, CloudRain } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "Summer Inverter Maintenance Tips",
    excerpt: "Keep your inverter running efficiently during hot summer months with these essential maintenance tips.",
    category: "Maintenance",
    readTime: "5 min read",
    date: "June 2024",
    icon: Sun,
    tags: ["Summer", "Maintenance", "Efficiency"],
    slug: "summer-inverter-maintenance-tips"
  },
  {
    id: 2,
    title: "Monsoon Power Backup Guide",
    excerpt: "Ensure uninterrupted power during monsoon season with proper inverter setup and protection.",
    category: "Seasonal",
    readTime: "7 min read",
    date: "July 2024",
    icon: CloudRain,
    tags: ["Monsoon", "Protection", "Setup"],
    slug: "monsoon-power-backup-guide"
  },
  {
    id: 3,
    title: "Winter Inverter Performance",
    excerpt: "Optimize your inverter performance in cold weather conditions for maximum efficiency.",
    category: "Performance",
    readTime: "6 min read",
    date: "December 2024",
    icon: Zap,
    tags: ["Winter", "Performance", "Optimization"],
    slug: "winter-inverter-performance"
  }
]

export function BlogSection() {
  // Add structured data for blog posts
  useEffect(() => {
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Apex Inverter Blog",
      "description": "Expert tips and guides on inverter maintenance, seasonal care, and performance optimization",
      "blogPost": blogPosts.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "author": {
          "@type": "Organization",
          "name": "Apex Inverter India"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Apex Inverter India"
        }
      }))
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(blogSchema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-in slide-in-from-top duration-700">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Expert Tips & Guides
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seasonal Inverter Care & Tips
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with our expert guides on inverter maintenance, seasonal care, and performance optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {post.category}
                  </Badge>
                  <post.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
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
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={`/blog/${post.slug}`}>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/blog">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
