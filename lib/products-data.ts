// Remove direct imports and use async functions instead
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'inverter' | 'battery' | 'combo';
  description: string;
  imageUrl: string;
  productUrl: string;
  capacity?: string;
  batteryCapacity?: string;
  inverterType?: string;
  batteryType?: string;
  warranty?: string;
  delivery?: boolean;
  installation?: boolean;
  price?: string;
}

export interface Brand {
  name: string;
  count: number;
}

export interface Category {
  name: string;
  count: number;
}

// Process and merge data from both JSON files
export async function processProductData(): Promise<Product[]> {
  try {
    // Fetch data from JSON files
    const [olivepowerResponse, olivepowerFlatResponse] = await Promise.all([
      fetch('/api/products/olivepower-2'),
      fetch('/api/products/olivepower-flat')
    ]);

    if (!olivepowerResponse.ok || !olivepowerFlatResponse.ok) {
      throw new Error('Failed to fetch product data');
    }

    const olivepowerData = await olivepowerResponse.json();
    const olivepowerFlatData = await olivepowerFlatResponse.json();

    const products: Product[] = [];
    const seenProducts = new Set<string>();

    // Process olivepower_2.json data
    olivepowerData.forEach((item: any) => {
      if (!item.productName || !item.imageUrl) return;

      // Determine category based on type field (not category field)
      let category: 'inverter' | 'battery' | 'combo' = 'inverter';
      
      // Check the type field for category information
      if (item.type?.includes('Battery') || item.type?.includes('SMF battery')) {
        category = 'battery';
      } else if (item.type?.includes('Combo')) {
        category = 'combo';
      } else if (item.type?.includes('Inverter') || item.type?.includes('UPS')) {
        category = 'inverter';
      } else if (item.type?.includes('Truck DG Genset Battery')) {
        category = 'battery';
      } else if (item.type?.includes('Amaron') && !item.type?.includes('Combo')) {
        // Amaron items without "Combo" are usually batteries
        category = 'battery';
      } else if (item.type?.includes('V Guard') && !item.type?.includes('Combo')) {
        // V Guard items without "Combo" are usually batteries
        category = 'battery';
      } else if (item.type?.includes('SF Sonic')) {
        category = 'battery';
      } else if (item.type?.includes('Eastman') && item.type?.includes('Lithium')) {
        category = 'combo';
      } else if (item.type?.includes('Hykon') && item.type?.includes('Lithium')) {
        category = 'combo';
      }

      // Extract brand from type field
      let brand = 'Unknown';
      if (item.type?.includes('Luminous')) brand = 'Luminous';
      else if (item.type?.includes('Microtek')) brand = 'Microtek';
      else if (item.type?.includes('Exide')) brand = 'Exide';
      else if (item.type?.includes('Amaron')) brand = 'Amaron';
      else if (item.type?.includes('V Guard')) brand = 'V Guard';
      else if (item.type?.includes('Amaze')) brand = 'Amaze';
      else if (item.type?.includes('Livfast')) brand = 'Livfast';
      else if (item.type?.includes('SF Sonic')) brand = 'SF Sonic';
      else if (item.type?.includes('Eastman')) brand = 'Eastman';
      else if (item.type?.includes('Hykon')) brand = 'Hykon';

      // Extract capacity information
      const capacityMatch = item.description?.match(/(\d+(?:\.\d+)?)\s*(?:VA|KVA)/i);
      const batteryCapacityMatch = item.description?.match(/(\d+)\s*AH/i);
      const inverterTypeMatch = item.description?.match(/Inverter Type\s*([^,]+)/i);
      const batteryTypeMatch = item.description?.match(/Battery Type\s*([^,]+)/i);
      const warrantyMatch = item.description?.match(/(\d+)\s*(?:Months|Months|Year|Years)/i);

      const product: Product = {
        id: item.productName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        name: item.productName,
        brand,
        category,
        description: item.description || 'No description available',
        imageUrl: item.imageUrl,
        productUrl: item.productUrl,
        capacity: capacityMatch ? `${capacityMatch[1]} VA` : undefined,
        batteryCapacity: batteryCapacityMatch ? `${batteryCapacityMatch[1]} AH` : undefined,
        inverterType: inverterTypeMatch ? inverterTypeMatch[1].trim() : undefined,
        batteryType: batteryTypeMatch ? batteryTypeMatch[1].trim() : undefined,
        warranty: warrantyMatch ? `${warrantyMatch[1]} Months` : undefined,
        delivery: item.description?.includes('Delivery Free'),
        installation: item.description?.includes('Installation Free'),
      };

      // Debug logging for category detection
      console.log(`Product: ${item.productName}`);
      console.log(`Type: ${item.type}`);
      console.log(`Detected Category: ${category}`);
      console.log(`Detected Brand: ${brand}`);
      console.log('---');

      // Create unique identifier to avoid duplicates
      const uniqueId = `${brand}-${category}-${item.productName}`;
      if (!seenProducts.has(uniqueId)) {
        seenProducts.add(uniqueId);
        products.push(product);
      }
    });

    // Process olivepower_products_flat.json data (these are mostly inverters)
    olivepowerFlatData.forEach((item: any) => {
      if (!item.name || !item.image) return;

      // Create unique identifier
      const uniqueId = `${item.brand}-inverter-${item.name}`;
      if (!seenProducts.has(uniqueId)) {
        seenProducts.add(uniqueId);

        // Extract capacity from name
        const capacityMatch = item.name.match(/(\d+(?:\.\d+)?)\s*(?:VA|KVA)/i);
        
        const product: Product = {
          id: item.id || item.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
          name: item.name,
          brand: item.brand,
          category: 'inverter',
          description: `High-quality ${item.brand} inverter with advanced technology and reliable performance.`,
          imageUrl: item.image,
          productUrl: item.url,
          capacity: capacityMatch ? `${capacityMatch[1]} VA` : undefined,
          inverterType: 'Sinewave',
          delivery: true,
          installation: true,
        };

        products.push(product);
      }
    });

    console.log('Total products processed:', products.length);
    return products;
  } catch (error) {
    console.error('Error processing product data:', error);
    return [];
  }
}

// Get unique brands
export async function getBrands(): Promise<Brand[]> {
  const products = await processProductData();
  const brandMap = new Map<string, number>();

  products.forEach(product => {
    const count = brandMap.get(product.brand) || 0;
    brandMap.set(product.brand, count + 1);
  });

  return Array.from(brandMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

// Get categories
export async function getCategories(): Promise<Category[]> {
  const products = await processProductData();
  const categoryMap = new Map<string, number>();

  products.forEach(product => {
    const count = categoryMap.get(product.category) || 0;
    categoryMap.set(product.category, count + 1);
  });

  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

// Filter products
export async function filterProducts(filters: {
  brand?: string;
  category?: string;
  search?: string;
}): Promise<Product[]> {
  let products = await processProductData();

  if (filters.brand && filters.brand !== 'all') {
    products = products.filter(product => product.brand === filters.brand);
  }

  if (filters.category && filters.category !== 'all') {
    products = products.filter(product => product.category === filters.category);
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    products = products.filter(product =>
      product.name.toLowerCase().includes(searchLower) ||
      product.brand.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower)
    );
  }

  return products;
}

// Get products by category
export async function getProductsByCategory(category: string): Promise<Product[]> {
  const products = await processProductData();
  return products.filter(product => product.category === category);
}

// Get products by brand
export async function getProductsByBrand(brand: string): Promise<Product[]> {
  const products = await processProductData();
  return products.filter(product => product.brand === brand);
}
