"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What size inverter do I need for my home?",
    answer: "The inverter size depends on your power consumption. For a typical 2-3 bedroom home, a 1.5KW to 3KW inverter is usually sufficient. We provide free site assessment to determine the exact size you need.",
    category: "Installation"
  },
  {
    question: "How long do inverter batteries last?",
    answer: "Quality inverter batteries typically last 3-5 years with proper maintenance. Our premium batteries come with 5-year warranty and we offer maintenance packages to extend their lifespan.",
    category: "Maintenance"
  },
  {
    question: "Can I install an inverter myself?",
    answer: "While basic installation is possible, we strongly recommend professional installation for safety and optimal performance. Our certified technicians ensure proper setup and compliance with safety standards.",
    category: "Installation"
  },
  {
    question: "What's the difference between UPS and inverter?",
    answer: "UPS provides instant backup during power cuts, while inverters convert DC to AC power. Modern hybrid inverters combine both functions, offering seamless power backup with solar integration capabilities.",
    category: "Technical"
  },
  {
    question: "How much does inverter installation cost?",
    answer: "Installation costs vary based on system complexity and location. We offer competitive pricing starting from ₹2,000 for basic installations. Contact us for a free quote based on your specific requirements.",
    category: "Pricing"
  },
  {
    question: "Do you provide after-sales support?",
    answer: "Yes, we provide comprehensive after-sales support including 24/7 customer service, regular maintenance, emergency repairs, and warranty claims. Our service network covers all major cities in India.",
    category: "Support"
  }
]

export function QASection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  // Add structured data for FAQ
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(faqSchema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-in slide-in-from-top duration-700">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Common Questions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about inverters, installation, and maintenance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary"
            >
              <CardHeader 
                className="cursor-pointer pb-4"
                onClick={() => toggleItem(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggleItem(index)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <CardTitle 
                      id={`faq-question-${index}`}
                      className="text-lg text-left hover:text-primary transition-colors duration-200"
                    >
                      {faq.question}
                    </CardTitle>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                      {faq.category}
                    </Badge>
                    <span>
                      {openItems.includes(index) ? (
                        <ChevronUp className="h-5 w-5 text-primary hover:text-primary/80 transition-colors duration-200" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-primary hover:text-primary/80 transition-colors duration-200" />
                      )}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              {openItems.includes(index) && (
                <CardContent 
                  className="pt-0 pb-6 animate-in slide-in-from-top duration-200"
                  id={`faq-answer-${index}`}
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div className="ml-8 pl-4 border-l-2 border-primary/20">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? Our experts are here to help!
          </p>
          <a
            href="tel:+919962861772"
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Call Our Experts
          </a>
        </div>
      </div>
    </section>
  )
}
