"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertTriangle, Info, Wrench, Shield } from "lucide-react"

const installationSteps = [
  {
    step: 1,
    title: "Site Assessment",
    description: "Professional evaluation of your power requirements and installation location",
    duration: "1-2 hours",
    tools: ["Power meter", "Site survey tools"],
    safetyNotes: ["Ensure power is turned off", "Check for proper ventilation"],
    icon: Wrench
  },
  {
    step: 2,
    title: "System Design",
    description: "Custom design based on your specific power needs and site conditions",
    duration: "2-4 hours",
    tools: ["Design software", "Load calculation tools"],
    safetyNotes: ["Verify electrical codes compliance", "Check load capacity"],
    icon: Info
  },
  {
    step: 3,
    title: "Installation",
    description: "Professional installation by certified technicians with quality assurance",
    duration: "4-8 hours",
    tools: ["Professional tools", "Safety equipment"],
    safetyNotes: ["Use proper PPE", "Follow safety protocols"],
    icon: Shield
  },
  {
    step: 4,
    title: "Testing & Commissioning",
    description: "Comprehensive testing to ensure optimal performance and safety",
    duration: "1-2 hours",
    tools: ["Testing equipment", "Performance meters"],
    safetyNotes: ["Verify all connections", "Test emergency shutdown"],
    icon: CheckCircle
  }
]

const safetyGuidelines = [
  "Always hire certified professionals for installation",
  "Ensure proper grounding and earthing",
  "Follow local electrical codes and regulations",
  "Install in well-ventilated areas",
  "Keep away from flammable materials",
  "Regular maintenance and inspection required"
]

export function InstallationGuide() {
  // Add structured data for installation guide
  useEffect(() => {
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Inverter Installation Guide",
      "description": "Professional guide for safe and proper inverter installation",
      "step": installationSteps.map(step => ({
        "@type": "HowToStep",
        "name": step.title,
        "text": step.description,
        "url": `#step-${step.step}`
      })),
      "totalTime": "PT8H",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": "2000"
      },
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Professional Installation Service"
        }
      ],
      "tool": [
        {
          "@type": "HowToTool",
          "name": "Certified Technician"
        }
      ]
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(howToSchema)
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
            Installation Guide
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Installation Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our certified technicians follow a systematic approach to ensure safe, efficient, and long-lasting inverter installations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {installationSteps.map((step, index) => { const Icon = step.icon; return (
            <Card
              key={step.step}
              id={`step-${step.step}`}
              className="hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex items-center justify-center mb-2">
                  <Badge className="bg-primary text-primary-foreground">
                    Step {step.step}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                  {step.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground text-center">
                  {step.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{step.duration}</span>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-xs font-medium text-muted-foreground">Tools Required:</span>
                    <ul className="text-xs text-muted-foreground">
                      {step.tools.map((tool, toolIndex) => (
                        <li key={toolIndex} className="flex items-center">
                          <span className="text-primary mr-1">•</span>
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-xs font-medium text-muted-foreground">Safety Notes:</span>
                    <ul className="text-xs text-muted-foreground">
                      {step.safetyNotes.map((note, noteIndex) => (
                        <li key={noteIndex} className="flex items-center">
                          <AlertTriangle className="h-3 w-3 text-yellow-500 mr-1" />
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )})}
        </div>

        {/* Safety Guidelines */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-800">
                <Shield className="h-5 w-5 mr-2" />
                Safety Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {safetyGuidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-yellow-800">{guideline}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't risk DIY installation. Trust our certified professionals for safe and reliable setup.
          </p>
          <a href="tel:+919962861772">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule Professional Installation
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
