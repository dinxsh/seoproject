import { Zap } from "lucide-react"

export function SharedFooter() {
  return (
    <footer className="bg-green-700 py-12 px-4 border-t border-green-600">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-green-300 transition-transform hover:scale-110" />
              <span className="text-lg font-bold text-white">Apex Inverter</span>
            </div>
            <p className="text-sm text-green-100 leading-relaxed">
              India's leading inverter supplier with premium quality products and expert services.
            </p>

          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-2 text-sm text-green-100">
              <li>
                <a href="/products" className="hover:text-green-300 transition-colors duration-200">
                  Home Inverters
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-green-300 transition-colors duration-200">
                  Commercial Inverters
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-green-300 transition-colors duration-200">
                  Industrial Inverters
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-green-300 transition-colors duration-200">
                  UPS Systems
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-green-100">
              <li>
                <a href="/services" className="hover:text-green-300 transition-colors duration-200">
                  Site Assessment
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-green-300 transition-colors duration-200">
                  Installation
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-green-300 transition-colors duration-200">
                  Maintenance
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-green-300 transition-colors duration-200">
                  24/7 Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-sm text-green-100">
              <div>Pan India Service</div>
              <div>
                <a href="mailto:info@apexinverter.in" className="hover:text-green-300 transition-colors duration-200">
                  info@apexinverter.in
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="border-t border-green-600 mt-8 pt-8 text-center text-sm text-green-100">
          <p>&copy; 2025 Apex Inverter India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
