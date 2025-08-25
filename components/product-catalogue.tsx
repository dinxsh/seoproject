'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Star, 
  Truck, 
  Wrench, 
  Zap,
  Battery,
  Power,
  Package,
  Menu,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Image from 'next/image';
import { 
  processProductData, 
  getBrands, 
  getCategories, 
  filterProducts,
  type Product,
  type Brand,
  type Category
} from '@/lib/products-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ProductCatalogue() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    brand: 'all',
    category: 'all',
    search: ''
  });

  useEffect(() => {
    console.log('Loading products...');
    setIsLoading(true);
    const loadData = async () => {
      try {
        const allProducts = await processProductData();
        const allBrands = await getBrands();
        const allCategories = await getCategories();
        
        console.log('Products loaded:', allProducts.length);
        console.log('Sample product:', allProducts[0]);
        console.log('Brands loaded:', allBrands);
        console.log('Categories loaded:', allCategories);
        console.log('Category names:', allCategories.map(c => c.name));
        console.log('Product categories:', [...new Set(allProducts.map(p => p.category))]);
        
        setProducts(allProducts);
        setFilteredProducts(allProducts);
        setBrands(allBrands);
        setCategories(allCategories);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading products:', error);
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);

  useEffect(() => {
    if (!isLoading && products.length > 0) {
      const updateFilteredProducts = async () => {
        try {
          const filtered = await filterProducts(filters);
          setFilteredProducts(filtered);
        } catch (error) {
          console.error('Error filtering products:', error);
        }
      };
      
      updateFilteredProducts();
    }
  }, [filters, isLoading, products.length]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ brand: 'all', category: 'all', search: '' });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'inverter':
        return <Power className="w-4 h-4" />;
      case 'battery':
        return <Battery className="w-4 h-4" />;
      case 'combo':
        return <Package className="w-4 h-4" />;
      default:
        return <Zap className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'inverter':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'battery':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'combo':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleQuoteRequest = (product: Product) => {
    // You can implement quote request functionality here
    alert(`Quote requested for ${product.name}`);
  };

  return (
    <div className="py-8">{/* ProductCatalogue Content Only */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Solution</h2>
            <p className="text-gray-600">Filter and search through our extensive product range</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search products..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="pl-12 h-12 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
              />
            </div>

            {/* Category Filter */}
            <Select value={filters.category} onValueChange={(value) => handleFilterChange('category', value)}>
              <SelectTrigger className="w-48 h-12 border-2 border-gray-200 focus:border-blue-500 rounded-xl">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.name} value={category.name}>
                    {category.name.charAt(0).toUpperCase() + category.name.slice(1)} ({category.count})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Brand Filter */}
            <Select value={filters.brand} onValueChange={(value) => handleFilterChange('brand', value)}>
              <SelectTrigger className="w-48 h-12 border-2 border-gray-200 focus:border-blue-500 rounded-xl">
                <SelectValue placeholder="All Brands" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                {brands.map((brand) => (
                  <SelectItem key={brand.name} value={brand.name}>
                    {brand.name} ({brand.count})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-white text-blue-600 shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list' 
                    ? 'bg-white text-blue-600 shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Clear Filters */}
            {(filters.brand !== 'all' || filters.category !== 'all' || filters.search) && (
              <Button variant="outline" size="sm" onClick={clearFilters} className="h-12 px-6 rounded-xl">
                Clear Filters
              </Button>
            )}
          </div>

          {/* Active Filters Display */}
          {(filters.brand !== 'all' || filters.category !== 'all' || filters.search) && (
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-200">
              <span className="text-sm text-gray-600 font-medium">Active filters:</span>
              {filters.brand !== 'all' && (
                <Badge variant="secondary" className="gap-1 bg-blue-100 text-blue-700 border-blue-200">
                  Brand: {filters.brand}
                  <button
                    onClick={() => handleFilterChange('brand', 'all')}
                    className="ml-1 hover:text-red-600"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {filters.category !== 'all' && (
                <Badge variant="secondary" className="gap-1 bg-green-100 text-green-700 border-green-200">
                  Category: {filters.category}
                  <button
                    onClick={() => handleFilterChange('category', 'all')}
                    className="ml-1 hover:text-red-600"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {filters.search && (
                <Badge variant="secondary" className="gap-1 bg-purple-100 text-purple-700 border-purple-200">
                  Search: "{filters.search}"
                  <button
                    onClick={() => handleFilterChange('search', '')}
                    className="ml-1 hover:text-red-600"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-lg text-gray-700 font-medium">
            Showing <span className="text-blue-600 font-bold">{filteredProducts.length}</span> of <span className="text-gray-900 font-bold">{products.length}</span> products
          </div>
          <div className="text-sm text-gray-600">
            {filters.brand !== 'all' && `Brand: ${filters.brand}`}
            {filters.category !== 'all' && ` • Category: ${filters.category}`}
          </div>
        </div>

        {/* Products Grid/List */}
        {isLoading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Loading products...</h3>
            <p className="text-gray-600">Please wait while we fetch the latest products.</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <Package className="w-20 h-20 text-gray-400 mx-auto mb-6" />
            <h3 className="text-2xl font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or search terms.</p>
            <Button onClick={clearFilters} className="bg-blue-600 hover:bg-blue-700">
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' : 'space-y-6'}>
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden transform hover:-translate-y-2">
                <CardHeader className="pb-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={`${getCategoryColor(product.category)} border shadow-sm font-medium`}>
                      {getCategoryIcon(product.category)}
                      <span className="ml-2 capitalize">{product.category}</span>
                    </Badge>
                    <Badge variant="outline" className="text-xs bg-white shadow-sm border-gray-200">
                      {product.brand}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors font-bold text-gray-900">
                    {product.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pb-4">
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-sm enhanced-shadow mb-4">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-full w-full object-cover object-center image-scale product-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.jpg';
                      }}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                    
                    {/* Image quality indicator */}
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="text-xs bg-white/95 text-gray-700 shadow-sm font-medium">
                        HD
                      </Badge>
                    </div>
                  </div>

                  {/* Product Description */}
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Product Specifications */}
                  <div className="space-y-3 mb-4">
                    {product.capacity && (
                      <div className="flex items-center text-sm text-gray-700 bg-blue-50 p-2 rounded-lg">
                        <Power className="w-4 h-4 mr-2 text-blue-600" />
                        <span className="font-medium">Capacity:</span>
                        <span className="ml-1 text-gray-600">{product.capacity}</span>
                      </div>
                    )}
                    {product.batteryCapacity && (
                      <div className="flex items-center text-sm text-gray-700 bg-green-50 p-2 rounded-lg">
                        <Battery className="w-4 h-4 mr-2 text-green-600" />
                        <span className="font-medium">Battery:</span>
                        <span className="ml-1 text-gray-600">{product.batteryCapacity}</span>
                      </div>
                    )}
                    {product.warranty && (
                      <div className="flex items-center text-sm text-gray-700 bg-yellow-50 p-2 rounded-lg">
                        <Star className="w-4 h-4 mr-2 text-yellow-600" />
                        <span className="font-medium">Warranty:</span>
                        <span className="ml-1 text-gray-600">{product.warranty}</span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.delivery && (
                      <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                        <Truck className="w-3 h-3 mr-1" />
                        Free Delivery
                      </Badge>
                    )}
                    {product.installation && (
                      <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                        <Wrench className="w-3 h-3 mr-1" />
                        Free Installation
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="pt-4 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex gap-2 w-full">
                    <Button 
                      onClick={() => handleQuoteRequest(product)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-12 rounded-xl"
                    >
                      <Zap className="w-5 h-5 mr-2" />
                      Get Quote
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* Statistics Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">{products.filter(p => p.category === 'inverter').length}</div>
            <div className="text-gray-600 font-medium">Inverters Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">{products.filter(p => p.category === 'battery').length}</div>
            <div className="text-gray-600 font-medium">Batteries Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">{products.filter(p => p.category === 'combo').length}</div>
            <div className="text-gray-600 font-medium">Combo Solutions</div>
          </div>
        </div>
      </div>
    </div>
  );
}
