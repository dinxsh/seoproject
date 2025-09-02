// Product interface based on the olivepower_products_flat.json structure
export interface OlivePowerProduct {
  id: string
  brand: string
  series: string
  name: string
  image: string
  url: string
  keywords: string
}

// Grouped products structure
export interface GroupedProducts {
  [brand: string]: {
    [series: string]: OlivePowerProduct[]
  }
}

// Series color mapping
export interface SeriesColor {
  [key: string]: string
}

// Legacy Product interface (keeping for backward compatibility)
export interface Product {
  id: string
  brand: string
  series: string
  name: string
  description: string
  capacity: string
  voltage: string
  features: string[]
}
