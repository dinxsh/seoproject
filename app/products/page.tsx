import type { Metadata } from "next"
import ProductCatalogue from '@/components/product-catalogue';
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { ExitIntentPopup } from "@/components/exit-intent-popup"

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
