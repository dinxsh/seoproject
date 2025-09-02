import type { Metadata } from "next"
import ProductCatalogue from '@/components/product-catalogue';
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { ExitIntentPopup } from "@/components/exit-intent-popup"

export const metadata: Metadata = {
  title: "Inverter Products & Batteries | Premium Power Backup Solutions",
  description: "Browse our comprehensive range of premium inverter products and batteries. From home inverters to commercial UPS systems, find the perfect power backup solution for your needs.",
  keywords: [
    "inverter products", "battery backup", "UPS systems", "home inverter", 
    "commercial inverter", "inverter battery", "power backup products",
    "Apex inverter", "inverter brands", "battery brands", "power solutions"
  ],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Inverter Products & Batteries | Premium Power Backup Solutions",
    description: "Browse our comprehensive range of premium inverter products and batteries. From home inverters to commercial UPS systems.",
    url: "/products",
    type: "website",
  },
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />
      
      <ProductCatalogue />
      
      <SharedFooter />
      
      {/* SEO Components */}
      <ExitIntentPopup />
    </div>
  );
}
