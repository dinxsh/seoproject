
import { Phone, Mail, MapPin, Star } from "lucide-react"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />

      {/* Contact Hero */}
      <section className="pt-16 pb-8 px-4 animate-in fade-in duration-1000">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in slide-in-from-bottom duration-700">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-700 delay-300">
            Ready for reliable power backup? Contact our experts for personalized consultation and competitive pricing.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pt-8 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 animate-in slide-in-from-bottom duration-700">
              <div>

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
    </div>
  )
}
