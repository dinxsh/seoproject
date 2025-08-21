import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Zap, Shield, Clock, Users, Star, CheckCircle } from "lucide-react"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { BlogSection } from "@/components/blog-section"
import { QASection } from "@/components/qa-section"
import { CaseStudies } from "@/components/case-studies"
import { ExitIntentPopup } from "@/components/exit-intent-popup"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 animate-in fade-in duration-1000">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 animate-in slide-in-from-top duration-700 delay-200">
            India's #1 Inverter Solutions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-in slide-in-from-bottom duration-700 delay-300">
            Premium Inverters for Every Need
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-in slide-in-from-bottom duration-700 delay-500">
            Transform your power backup needs with our cutting-edge inverter solutions. Expert installation, 24/7
            support, and unmatched reliability across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-in slide-in-from-bottom duration-700 delay-700">
            <a href="tel:+919962861772" className="block sm:hidden">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg group w-full"
              >
                <Phone className="mr-2 h-5 w-5 transition-transform duration-200 group-hover:rotate-12" />
                Call Now
              </Button>
            </a>
            <a href="tel:+919962861772" className="hidden sm:block">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <Phone className="mr-2 h-5 w-5 transition-transform duration-200 group-hover:rotate-12" />
                Contact Us
              </Button>
            </a>
            <a href="tel:+919962861772">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-primary/5"
              >
                Get Free Quote
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-in slide-in-from-bottom duration-700 delay-1000">
            {[
              { number: "10,000+", label: "Happy Customers", ariaLabel: "Over ten thousand happy customers" },
              { number: "5 Years", label: "Warranty", ariaLabel: "Five years warranty on all products" },
              { number: "24/7", label: "Support", ariaLabel: "Twenty four seven customer support" },
              { number: "Pan India", label: "Service", ariaLabel: "Service available across India" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-transform duration-300"
                role="region"
                aria-label={item.ariaLabel}
              >
                <div className="text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-200">
                  {item.number}
                </div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-top duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Inverters?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over a decade of experience, we're India's trusted partner for reliable power backup solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Premium Quality",
                desc: "ISI certified inverters with advanced MPPT technology for maximum efficiency and durability.",
              },
              {
                icon: Users,
                title: "Expert Installation",
                desc: "Certified technicians ensure perfect installation and optimal performance of your power system.",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                desc: "Round-the-clock customer support and maintenance services across India.",
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

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-top duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Inverter Range</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From residential to commercial applications, we have the perfect inverter solution for every requirement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20 hover:scale-105 hover:-translate-y-2 group animate-in slide-in-from-left duration-700">
              <div className="h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                <img
                  src="/placeholder-re65o.png"
                  alt="Home Inverter - வீட்டு இன்வர்டர்"
                  title="வீட்டு பயன்பாட்டிற்கான இன்வர்டர் - Home Inverter for residential use"
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
                  {["1KW to 10KW capacity", "MPPT technology", "5-year warranty", "LCD display"].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 transition-transform duration-200 group-hover:scale-110" />
                      {feature}
                    </li>
                  ))}
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
                  alt="Business Inverter - வணிக இன்வர்டர்"
                  title="வணிக பயன்பாட்டிற்கான இன்வர்டர் - Business Inverter for commercial use"
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
                  alt="Industrial Inverter - தொழிற்சாலை இன்வர்டர்"
                  title="தொழிற்சாலை பயன்பாட்டிற்கான இன்வர்டர் - Industrial Inverter for heavy-duty use"
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

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-top duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Power Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end services from consultation to maintenance, ensuring your power backup investment delivers
              maximum returns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Site Assessment", desc: "Free professional site evaluation and system design" },
              { icon: Users, title: "Expert Installation", desc: "Certified technicians ensure perfect installation" },
              { icon: Shield, title: "Maintenance", desc: "Regular maintenance and performance optimization" },
              { icon: Clock, title: "24/7 Support", desc: "Round-the-clock customer support and emergency service" },
            ].map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mx-auto mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Q&A Section */}
      <QASection />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-top duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Quote Today</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to switch to power backup? Contact our experts for a personalized consultation and competitive
              pricing.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 animate-in slide-in-from-bottom duration-700">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg border border-primary/20 hover:bg-primary/10 transition-all duration-300 hover:scale-105 group">
                    <Phone className="h-6 w-6 text-primary transition-transform duration-200 group-hover:rotate-12" />
                    <div>
                      <div className="font-semibold">Call Us Now</div>
                      <a
                        href="tel:+919962861772"
                        className="text-2xl font-bold text-primary hover:underline transition-all duration-200"
                      >
                        +91 9962861772
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">
                        <a
                          href="mailto:info@apexinverter.in"
                          className="hover:text-primary transition-colors duration-200"
                        >
                          info@apexinverter.in
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Service Area</div>
                      <div className="text-muted-foreground">Pan India Service Available</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Why Call Us?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Instant price quotes", "Free site assessment", "Expert consultation", "Customized solutions"].map(
                    (benefit, i) => (
                      <div key={i} className="flex items-center justify-center space-x-2 p-3 bg-primary/5 rounded-lg hover:scale-105 transition-transform duration-200">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{benefit}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
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
