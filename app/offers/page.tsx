"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Gift, Clock, Star, CheckCircle, Zap } from "lucide-react"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { ExitIntentPopup } from "@/components/exit-intent-popup"

const offers = [
  {
    id: 1,
    title: "Summer Special Package",
    description: "Beat the heat with our summer inverter package including free installation and extended warranty.",
    originalPrice: "₹45,000",
    discountedPrice: "₹38,000",
    discount: "15% OFF",
    validUntil: "July 31, 2024",
    features: [
      "3KW Hybrid Inverter",
      "Free Installation",
      "Extended 7-year warranty",
      "Free maintenance for 1 year",
      "Priority customer support"
    ],
    badge: "Limited Time",
    icon: Zap
  },
  {
    id: 2,
    title: "Monsoon Protection Bundle",
    description: "Protect your electronics during monsoon with our weather-resistant inverter solutions.",
    originalPrice: "₹35,000",
    discountedPrice: "₹29,750",
    discount: "15% OFF",
    validUntil: "August 31, 2024",
    features: [
      "2.5KW Inverter with UPS",
      "Weather-resistant casing",
      "Surge protection",
      "Free site assessment",
      "Emergency service priority"
    ],
    badge: "Seasonal",
    icon: Gift
  },
  {
    id: 3,
    title: "New Customer Welcome",
    description: "Special welcome offer for first-time customers with additional benefits and support.",
    originalPrice: "₹40,000",
    discountedPrice: "₹32,000",
    discount: "20% OFF",
    validUntil: "December 31, 2024",
    features: [
      "Any inverter up to 5KW",
      "Free consultation",
      "Installation included",
      "Training session",
      "24/7 support access"
    ],
    badge: "New Customer",
    icon: Star
  }
]

const bundleDeals = [
  {
    title: "Home Office Bundle",
    description: "Complete power solution for home offices and small businesses",
    price: "₹75,000",
    savings: "Save ₹15,000",
    includes: ["5KW Inverter", "2 Batteries", "Installation", "1 Year Maintenance"]
  },
  {
    title: "Solar Ready Package",
    description: "Future-proof your investment with solar-ready inverter technology",
    price: "₹95,000",
    savings: "Save ₹20,000",
    includes: ["Hybrid Inverter", "Battery Bank", "Solar Wiring", "Smart Monitoring"]
  }
]

export default function OffersPage() {
  // Add structured data for offers
  useEffect(() => {
    const offersSchema = {
      "@context": "https://schema.org",
      "@type": "Offer",
      "name": "Apex Inverter Special Offers",
      "description": "Special deals and discounts on inverter solutions",
      "offers": offers.map(offer => ({
        "@type": "Offer",
        "name": offer.title,
        "description": offer.description,
        "price": offer.discountedPrice.replace('₹', ''),
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01",
        "validThrough": offer.validUntil
      }))
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(offersSchema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Exclusive Offers
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Special Deals & Discounts
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get the best inverter solutions at unbeatable prices. Limited time offers with premium features and extended warranties.
          </p>
        </div>
      </section>

      {/* Current Offers */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Offers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't miss these limited-time deals designed to save you money while providing premium quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <Card
                key={offer.id}
                className="relative hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group border-2 hover:border-primary/30"
              >
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground animate-pulse">
                  {offer.badge}
                </Badge>
                
                <CardHeader className="text-center">
                  <offer.icon className="h-12 w-12 text-primary mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-200">
                    {offer.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {offer.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      <span className="text-2xl line-through text-muted-foreground">
                        {offer.originalPrice}
                      </span>
                      <Badge className="bg-green-500 text-white text-lg px-3 py-1">
                        {offer.discount}
                      </Badge>
                    </div>
                    <div className="text-4xl font-bold text-primary">
                      {offer.discountedPrice}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Valid until: {offer.validUntil}</span>
                    </div>
                    
                    <div className="space-y-2">
                      {offer.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a href="tel:+919962861772">
                    <Button className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                      <Phone className="mr-2 h-4 w-4" />
                      Claim This Offer
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Deals */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bundle Deals</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete solutions that give you more value for your investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bundleDeals.map((bundle, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group"
              >
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-200">
                    {bundle.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {bundle.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {bundle.price}
                    </div>
                    <Badge className="bg-green-500 text-white">
                      {bundle.savings}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Package Includes:</h4>
                    {bundle.includes.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a href="tel:+919962861772">
                    <Button className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                      <Phone className="mr-2 h-4 w-4" />
                      Get Bundle Quote
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Save on Your Inverter?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Call us now to discuss your requirements and get the best possible deal. Our experts will help you choose the perfect offer for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919962861772">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91 9962861772
                </Button>
              </a>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
      
      {/* SEO Components */}
      <ExitIntentPopup />
    </div>
  )
}
