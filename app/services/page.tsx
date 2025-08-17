import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Zap, Shield, Users, Clock, Settings } from "lucide-react"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />

      {/* Services Hero */}
      <section className="pt-16 pb-8 px-4 animate-in fade-in duration-1000">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in slide-in-from-bottom duration-700">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-700 delay-300">
            Complete power backup solutions from consultation to maintenance, ensuring your investment delivers maximum
            returns.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pt-8 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Site Assessment",
                desc: "Free professional site evaluation and power requirement analysis to recommend the perfect inverter solution.",
              },
              {
                icon: Users,
                title: "Expert Installation",
                desc: "Certified technicians ensure perfect installation and optimal performance of your power backup system.",
              },
              {
                icon: Settings,
                title: "Maintenance",
                desc: "Regular maintenance and performance optimization to ensure your inverter operates at peak efficiency.",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                desc: "Round-the-clock customer support and emergency service across India for all your power backup needs.",
              },
              {
                icon: Shield,
                title: "Warranty Service",
                desc: "Comprehensive warranty coverage and service support for all our inverter products and installations.",
              },
              {
                icon: Users,
                title: "Consultation",
                desc: "Expert consultation to help you choose the right inverter solution based on your specific requirements.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  <CardTitle className="group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <a href="tel:+919962861772">
                    <Button
                      variant="outline"
                      className="w-full bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-primary/5 group/btn"
                    >
                      <Phone className="mr-2 h-4 w-4 transition-transform duration-200 group-hover/btn:rotate-12" />
                      Contact Us
                    </Button>
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
