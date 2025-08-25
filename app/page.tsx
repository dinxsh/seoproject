"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Zap, Shield, Clock, Users, Star, CheckCircle, ChevronLeft, ChevronRight, Battery } from "lucide-react"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { BlogSection } from "@/components/blog-section"
import { QASection } from "@/components/qa-section"
import { CaseStudies } from "@/components/case-studies"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { useState, useEffect } from "react"

// Hero slider data with local images and Apex branding

// Hero Slider Component
function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Hero slides with Apex Inverter branding
  const heroSlides = [
    {
      id: 1,
      image: "/products/homepage/istockphoto-2154527171-612x612.jpg",
      title: "Uninterrupted Power, Unlimited Possibilities",
      subtitle: "Apex Inverter Solutions",
      description: "Experience seamless power backup with our advanced inverter technology designed for modern homes and businesses."
    },
    {
      id: 2,
      image: "/products/homepage/istockphoto-1474252728-612x612.jpg", 
      title: "Power Your Life Seamlessly",
      subtitle: "Advanced Energy Solutions",
      description: "Transform your energy backup experience with intelligent power management and cutting-edge technology."
    },
    {
      id: 3,
      image: "/products/homepage/istockphoto-1620576275-612x612.jpg",
      title: "Where Power Meets Perfection", 
      subtitle: "Premium Inverter Technology",
      description: "Discover reliable power solutions that deliver consistent performance when you need it most."
    },
    {
      id: 4,
      image: "/products/homepage/istockphoto-1035493040-612x612.jpg",
      title: "Beyond Backup, Pure Performance",
      subtitle: "Next-Gen Power Systems", 
      description: "Engineered for excellence, our inverters provide unmatched reliability and efficiency for every application."
    }
  ]
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    
    return () => clearInterval(timer)
  }, [heroSlides.length])
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }
  
  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }
  
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }
  
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Slider Container */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image with improved quality */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
                style={{
                  imageRendering: 'auto'
                }}
              />
              {/* Enhanced overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
            </div>
            
            {/* Content Overlay with Apex branding */}
            <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
              <div className="max-w-5xl">
                <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm px-6 py-3 text-lg font-medium">
                  {slide.subtitle}
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                  {slide.description}
                </p>
                <div className="flex justify-center">
                  <a href="tel:+919962861772">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-xl px-10 py-4 hover:scale-105 transition-all duration-300 shadow-2xl">
                      <Phone className="mr-3 h-6 w-6" />
                      Get Quote Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Enhanced Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-white/30"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
      
      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
              index === currentSlide 
                ? 'bg-white scale-125 border-white' 
                : 'bg-white/30 border-white/50 hover:bg-white/50 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-linear"
          style={{ width: `${((currentSlide + 1) / heroSlides.length) * 100}%` }}
        />
      </div>
    </section>
  )
}

const SERVICES = [
  {
    icon: Zap,
    title: "Site Assessment",
    desc: "Free professional site evaluation and system design",
  },
  {
    icon: Users,
    title: "Expert Installation",
    desc: "Certified technicians ensure perfect installation",
  },
  {
    icon: Shield,
    title: "Maintenance",
    desc: "Regular maintenance and performance optimization",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Round-the-clock customer support and emergency service",
  },
]

const SERVICE_BENEFITS = [
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
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />

      {/* Hero Slider */}
      <HeroSlider />

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

      {/* Services Section - PRIORITIZED */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-top duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Power Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end services from consultation to maintenance, ensuring your power backup investment delivers
              maximum returns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
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

      {/* Service Benefits Section (formerly About Us, now focused on service strengths) */}
      <section id="service-benefits" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-top duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over a decade of experience, we're India's trusted partner for reliable power backup solutions and service excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICE_BENEFITS.map((item, index) => (
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

      {/* Products Section - moved below services */}
      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-top duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our most popular inverter solutions, handpicked for reliability and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20 hover:scale-105 hover:-translate-y-2 group animate-in slide-in-from-left duration-700">
              <div className="h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                <img
                  src="/products/homeproducts/228_Luminous eco volt + 1050.png"
                  alt="LUMINOUS Zelio 1100 - 900VA pure sine wave smart display inverter - வீட்டு இன்வர்டர்"
                  title="வீட்டு பயன்பாட்டிற்கான இன்வர்டர் - Home Inverter for residential use"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                  LUMINOUS
                </Badge>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                  Zelio 1100
                </CardTitle>
                <CardDescription>900VA, pure sine wave, smart display</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {["900VA capacity", "Pure sine wave", "Smart display", "Home automation ready"].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 transition-transform duration-200 group-hover:scale-110" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-4">
                  <Link href="/products?brand=LUMINOUS">
                    <Button className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      View Details
                    </Button>
                  </Link>
                  <a href="tel:+919962861772">
                    <Button variant="outline" className="w-full transition-all duration-300">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20 relative hover:scale-105 hover:-translate-y-2 group animate-in slide-in-from-bottom duration-700 delay-200">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground animate-pulse">
                Most Popular
              </Badge>
              <div className="h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                <img
                  src="/products/homeproducts/microtek-mtktu1k5s-mtktu1k5s-pure-sine-wave-inverter-detail-1722619600668.webp"
                  alt="MICROTEK Online UPS 2kVA - High Frequency Online UPS IGBT Based 72V"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                  MICROTEK
                </Badge>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                  Online UPS 2kVA
                </CardTitle>
                <CardDescription>High Frequency Online UPS, IGBT Based, 72V</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {["2kVA capacity", "IGBT technology", "72V system", "Commercial grade"].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 transition-transform duration-200 group-hover:scale-110" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-4">
                  <Link href="/products?brand=MICROTEK">
                    <Button className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      View Details
                    </Button>
                  </Link>
                  <a href="tel:+919962861772">
                    <Button variant="outline" className="w-full transition-all duration-300">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20 hover:scale-105 hover:-translate-y-2 group animate-in slide-in-from-right duration-700 delay-400">
              <div className="h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                <img
                  src="/products/homeproducts/2A1915524B_1554010274_combo-5_sm1000.jpg"
                  alt="SF SONIC Solar Hybrid Inverter 2 - Advanced solar hybrid backup optimization"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                  SF SONIC
                </Badge>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                  Solar Hybrid Inverter 2
                </CardTitle>
                <CardDescription>Advanced solar hybrid, backup optimization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {["Solar hybrid", "Backup optimization", "Eco-friendly", "Advanced features"].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 transition-transform duration-200 group-hover:scale-110" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-4">
                  <Link href="/products?brand=SF SONIC">
                    <Button className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      View Details
                    </Button>
                  </Link>
                  <a href="tel:+919962861772">
                    <Button variant="outline" className="w-full transition-all duration-300">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12 animate-in slide-in-from-bottom duration-700 delay-600">
            <Link href="/products">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300">
                Browse All Products
                <span className="ml-2">→</span>
              </Button>
            </Link>
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
