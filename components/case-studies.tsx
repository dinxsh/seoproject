"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Users, Zap } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "Residential Complex in Anna Nagar",
    description: "Complete power backup solution for a 50-unit residential complex with 24/7 monitoring.",
    location: "Anna Nagar, Chennai",
    capacity: "25KW System",
    customerType: "Residential",
    results: ["Zero downtime during power cuts", "30% reduction in electricity bills", "5-year warranty coverage"],
    rating: 5,
    testimonial: "Excellent service and reliable power backup. Highly recommended!"
  },
  {
    id: 2,
    title: "IT Company in T Nagar",
    description: "Hybrid inverter system for a growing IT company with solar integration capabilities.",
    location: "T Nagar, Chennai",
    capacity: "40KW System",
    customerType: "Commercial",
    results: ["Seamless power backup", "Solar integration ready", "Remote monitoring system"],
    rating: 5,
    testimonial: "Professional installation and outstanding support team."
  },
  {
    id: 3,
    title: "Hospital in Adyar",
    description: "Critical power backup system ensuring uninterrupted medical services and patient care.",
    location: "Adyar, Chennai",
    capacity: "100KW System",
    customerType: "Healthcare",
    results: ["100% uptime guarantee", "Emergency backup systems", "Regular maintenance"],
    rating: 5,
    testimonial: "Reliable power backup is crucial for healthcare. Apex delivered perfectly."
  }
]

export function CaseStudies() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-in slide-in-from-top duration-700">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Customer Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real installations and satisfied customers across Chennai. See how we've transformed power backup for businesses and homes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={study.id}
              className="hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {study.customerType}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    {[...Array(study.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                  {study.title}
                </CardTitle>
                
                <CardDescription className="text-base">
                  {study.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{study.location}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Zap className="h-4 w-4" />
                  <span>{study.capacity}</span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-xs text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/5 rounded-lg p-3">
                  <p className="text-sm italic text-muted-foreground">
                    "{study.testimonial}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Join thousands of satisfied customers across Chennai
          </p>
          <a
            href="tel:+919962861772"
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Users className="mr-2 h-4 w-4" />
            Start Your Success Story
          </a>
        </div>
      </div>
    </section>
  )
}
