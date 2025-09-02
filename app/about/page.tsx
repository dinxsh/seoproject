import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Shield, Users, Award } from "lucide-react"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { ExitIntentPopup } from "@/components/exit-intent-popup"

export const metadata: Metadata = {
  title: "About Apex Inverter India | Leading Power Backup Solutions",
  description: "Learn about Apex Inverter India's journey in revolutionizing power backup solutions. With years of expertise, we provide premium inverter products and exceptional service across India.",
  keywords: [
    "about apex inverter", "inverter company", "power backup company", "inverter manufacturer",
    "inverter supplier", "Apex Inverter history", "inverter expertise", "power solutions company",
    "Chennai inverter company", "Tamil Nadu inverter", "inverter business"
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Apex Inverter India | Leading Power Backup Solutions",
    description: "Learn about Apex Inverter India's journey in revolutionizing power backup solutions. With years of expertise, we provide premium inverter products.",
    url: "/about",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />

      {/* About Hero */}
      <section className="pt-16 pb-8 px-4 animate-in fade-in duration-1000">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in slide-in-from-bottom duration-700">
            About Apex Inverter
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-700 delay-300">
            Leading India's power backup revolution with premium inverter solutions and unmatched customer service.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="pt-8 pb-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-in slide-in-from-left duration-700">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded with a vision to provide reliable power backup solutions across India, Apex Inverter has grown
                to become one of the most trusted names in the inverter industry.
              </p>
              <p className="text-muted-foreground mb-6">
                With over 10,000 satisfied customers and a commitment to excellence, we continue to innovate and deliver
                cutting-edge inverter technology that powers homes and businesses nationwide.
              </p>
              <a href="tel:+919962861772">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                  <Phone className="mr-2 h-5 w-5 transition-transform duration-200 group-hover:rotate-12" />
                  Contact Us
                </Button>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-right duration-700">
              {[
                { number: "10,000+", label: "Happy Customers" },
                { number: "10+", label: "Years Experience" },
                { number: "24/7", label: "Support" },
                { number: "Pan India", label: "Service" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-200">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-in slide-in-from-top duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Apex Inverter?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to providing the best inverter solutions with unmatched quality and service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Premium Quality",
                desc: "ISI certified inverters with advanced technology for maximum efficiency and durability.",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Certified technicians and engineers with years of experience in power backup solutions.",
              },
              {
                icon: Award,
                title: "Proven Track Record",
                desc: "Thousands of successful installations and satisfied customers across India.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  <CardTitle className="group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SharedFooter />
      
      {/* SEO Components */}
      <ExitIntentPopup />
    </div>
  )
}
