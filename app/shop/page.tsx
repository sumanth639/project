import { Metadata } from 'next';
import { Filter, Grid3X3, Menu, Search } from 'lucide-react';

import { ProductGrid } from '@/components/product/product-grid';
import { FEATURED_PRODUCTS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

export const metadata: Metadata = {
  title: 'Shop - Paymitra',
  description: 'Browse and shop for products on Paymitra',
};

export default function ShopPage() {
  // Get unique categories - fixed for TypeScript compatibility
  const categorySet = new Set<string>();
  FEATURED_PRODUCTS.forEach((product) => categorySet.add(product.category));
  const categories = Array.from(categorySet);

  // Get unique vendors - fixed for TypeScript compatibility
  const vendorSet = new Set<string>();
  FEATURED_PRODUCTS.forEach((product) => vendorSet.add(product.vendor));
  const vendors = Array.from(vendorSet);

  return (
    <div className="bg-gray-50 py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-[#122B5F] mb-4 md:mb-0">
            Shop
          </h1>

          <div className="flex w-full md:w-auto space-x-3">
            <div className="relative flex-grow md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search products..." className="pl-10" />
            </div>

            <Select defaultValue="featured">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="rating">Best Rating</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon" className="md:hidden">
              <Filter className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="icon" className="hidden md:flex">
              <Grid3X3 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar filters - hidden on mobile */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox id={`category-${category}`} />
                      <Label
                        htmlFor={`category-${category}`}
                        className="ml-2 text-sm font-normal cursor-pointer"
                      >
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              <div className="mb-6">
                <h3 className="font-medium text-lg mb-4">Price Range</h3>
                <div className="px-2">
                  <Slider defaultValue={[0, 200]} min={0} max={500} step={10} />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>$0</span>
                    <span>$500</span>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="mb-6">
                <h3 className="font-medium text-lg mb-4">Vendors</h3>
                <div className="space-y-2">
                  {vendors.map((vendor) => (
                    <div key={vendor} className="flex items-center">
                      <Checkbox id={`vendor-${vendor}`} />
                      <Label
                        htmlFor={`vendor-${vendor}`}
                        className="ml-2 text-sm font-normal cursor-pointer"
                      >
                        {vendor}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h3 className="font-medium text-lg mb-4">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <Checkbox id={`rating-${rating}`} />
                      <Label
                        htmlFor={`rating-${rating}`}
                        className="ml-2 text-sm font-normal cursor-pointer flex items-center"
                      >
                        {Array(rating)
                          .fill(0)
                          .map((_, i) => (
                            <svg
                              key={i}
                              className="h-4 w-4 text-[#F4A826] fill-[#F4A826]"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        {Array(5 - rating)
                          .fill(0)
                          .map((_, i) => (
                            <svg
                              key={i}
                              className="h-4 w-4 text-gray-300"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        <span className="ml-1">& Up</span>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full mt-6">Apply Filters</Button>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing{' '}
                  <span className="font-medium">
                    {FEATURED_PRODUCTS.length}
                  </span>{' '}
                  products
                </p>

                <Button variant="ghost" size="sm" className="md:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>

              <ProductGrid showLoadMore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
