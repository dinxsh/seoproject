import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, CheckCircle } from "lucide-react"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />

      {/* Products Hero */}
      <section className="pt-16 pb-8 px-4 animate-in fade-in duration-1000">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in slide-in-from-bottom duration-700">
            Our Inverter Range
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-700 delay-300">
            From residential to industrial applications, we have the perfect inverter solution for every power backup
            need.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pt-8 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20 hover:scale-105 hover:-translate-y-2 group animate-in slide-in-from-left duration-700">
              <div className="h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                <img
                  src="/placeholder-re65o.png"
                  alt="Home Inverter"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                  Residential
                </Badge>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-200">
                  Home Inverters
                </CardTitle>
                <CardDescription>Perfect for residential power backup</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-primary">₹15,000 - ₹45,000</div>
                <ul className="space-y-2">
                  {["1KW to 10KW capacity", "Pure sine wave output", "5-year warranty", "LCD display"].map(
                    (feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 transition-transform duration-200 group-hover:scale-110" />
                        {feature}
                      </li>
                    ),
                  )}
                </ul>
                <a href="tel:+919962861772">
                  <Button className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn">
                    <Phone className="mr-2 h-4 w-4 transition-transform duration-200 group-hover/btn:rotate-12" />
                    Contact Us
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20 relative hover:scale-105 hover:-translate-y-2 group animate-in slide-in-from-bottom duration-700 delay-200">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground animate-pulse">
                Most Popular
              </Badge>
              <div className="h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                <img
                  src="/placeholder-2vrz9.png"
                  alt="Business Inverter"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                  Commercial
                </Badge>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-200">
                  Business Inverters
                </CardTitle>
                <CardDescription>Ideal for offices and small businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-primary">₹50,000 - ₹1,50,000</div>
                <ul className="space-y-2">
                  {["10KW to 50KW capacity", "Advanced monitoring", "5-year warranty", "Remote monitoring"].map(
                    (feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 transition-transform duration-200 group-hover:scale-110" />
                        {feature}
                      </li>
                    ),
                  )}
                </ul>
                <a href="tel:+919962861772">
                  <Button className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn">
                    <Phone className="mr-2 h-4 w-4 transition-transform duration-200 group-hover/btn:rotate-12" />
                    Contact Us
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20 hover:scale-105 hover:-translate-y-2 group animate-in slide-in-from-right duration-700 delay-400">
              <div className="h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                <img
                  src="/industrial-power-inverter.png"
                  alt="Industrial Inverter"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                  Industrial
                </Badge>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-200">
                  Industrial Inverters
                </CardTitle>
                <CardDescription>Heavy-duty solutions for large installations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-primary">₹2,00,000+</div>
                <ul className="space-y-2">
                  {["50KW+ capacity", "Grid-tie capability", "10-year warranty", "24/7 monitoring"].map(
                    (feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 transition-transform duration-200 group-hover:scale-110" />
                        {feature}
                      </li>
                    ),
                  )}
                </ul>
                <a href="tel:+919962861772">
                  <Button className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn">
                    <Phone className="mr-2 h-4 w-4 transition-transform duration-200 group-hover/btn:rotate-12" />
                    Contact Us
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
