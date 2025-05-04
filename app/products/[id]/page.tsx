"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronRight, Heart, Minus, Plus, Share2, ShoppingCart, Star, Truck } from "lucide-react";

import { FEATURED_PRODUCTS } from "@/lib/constants";
import { CustomerLayout } from "@/components/layout/customer-layout";
import { Button } from "@/components/ui/button";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductGrid } from "@/components/product/product-grid";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  return FEATURED_PRODUCTS.map(product => ({
    id: product.id.toString(),
  }));
}
export default function ProductPage() {
  const params = useParams();
  const product = FEATURED_PRODUCTS.find(p => p.id.toString() === params.id);
  
  
  // Get related products
  const relatedProducts = product 
    ? FEATURED_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];
  
  // States
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Dummy product images - would come from the product in a real app
  const productImages = [
    product?.image,
    "https://images.pexels.com/photos/4526413/pexels-photo-4526413.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=600",
  ].filter(Boolean) as string[];

  const handleAddToCart = () => {
    toast.success(`${product?.name} added to cart`);
  };

  const handleAddToWishlist = () => {
    toast.success(`${product?.name} added to wishlist`);
  };

  if (!product) {
    return (
      <CustomerLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you are looking for does not exist or has been removed.</p>
          <Link href="/shop">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </CustomerLayout>
    );
  }

  return (
    <CustomerLayout>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#122B5F]">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/shop" className="hover:text-[#122B5F]">Shop</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href={`/categories/${product.category.toLowerCase()}`} className="hover:text-[#122B5F]">{product.category}</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product details */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product images */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={productImages[selectedImage]}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-500 hover:scale-105"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-[#122B5F] text-white text-xs font-medium px-2 py-1 rounded">
                  NEW
                </span>
              )}
              {product.discountPrice && (
                <span className="absolute top-4 right-4 bg-[#F4A826] text-white text-xs font-medium px-2 py-1 rounded">
                  SALE
                </span>
              )}
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-md overflow-hidden border ${
                    selectedImage === index ? "border-[#122B5F] ring-2 ring-[#122B5F]/20" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product info */}
          <div>
            <div className="mb-2">
              <Link 
                href={`/vendor/${product.vendor.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm text-[#122B5F] hover:text-[#F4A826]"
              >
                {product.vendor}
              </Link>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-[#F4A826] fill-[#F4A826]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">{product.rating} (120 reviews)</span>
            </div>
            
            <div className="mb-6">
              {product.discountPrice ? (
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-[#122B5F]">${product.discountPrice}</span>
                  <span className="text-xl text-gray-400 line-through ml-3">${product.price}</span>
                  <Badge className="ml-3 bg-[#F4A826]">
                    {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                  </Badge>
                </div>
              ) : (
                <span className="text-3xl font-bold text-[#122B5F]">${product.price}</span>
              )}
            </div>
            
            <Separator className="my-6" />
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              {/* Quantity selector */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <ButtonGradient 
                  variant="blue" 
                  size="lg"
                  className="flex-1"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </ButtonGradient>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleAddToWishlist}
                >
                  <Heart className="h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Shipping info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <Truck className="h-5 w-5 text-[#122B5F] mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Free Shipping</p>
                    <p className="text-sm text-gray-600">Free standard shipping on orders over $100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product tabs */}
      <div className="container mx-auto px-4 py-10">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start border-b rounded-none mb-6">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews (120)</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="pt-4">
            <div className="prose max-w-none">
              <h3>Product Description</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h3>Features</h3>
              <ul>
                <li>High-quality materials</li>
                <li>Durable construction</li>
                <li>Versatile design</li>
                <li>Easy to use</li>
                <li>Modern aesthetics</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="specifications" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 text-gray-600">Brand</td>
                      <td className="py-3 font-medium">{product.vendor}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-600">Model</td>
                      <td className="py-3 font-medium">XYZ-123</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-600">Material</td>
                      <td className="py-3 font-medium">Premium Quality</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-600">Dimensions</td>
                      <td className="py-3 font-medium">10 x 5 x 3 inches</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-600">Weight</td>
                      <td className="py-3 font-medium">0.5 kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Package Contents</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-[#F4A826] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>1 x {product.name}</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-[#F4A826] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>User Manual</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-[#F4A826] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Warranty Card</span>
                  </li>
                </ul>
                
                <h3 className="text-lg font-semibold mt-6 mb-4">Warranty Information</h3>
                <p className="text-gray-600">
                  This product comes with a 1-year manufacturer warranty that covers defects in materials and workmanship.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="pt-4">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.rating}</h3>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? "text-[#F4A826] fill-[#F4A826]"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6">Based on 120 reviews</p>
                    <Button className="w-full">Write a Review</Button>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                  
                  {/* Sample reviews */}
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="border-b pb-6 mb-6 last:border-0 last:mb-0 last:pb-0">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">John Doe</h4>
                        <span className="text-gray-500 text-sm">2 weeks ago</span>
                      </div>
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < 4 + index % 2
                                ? "text-[#F4A826] fill-[#F4A826]"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-2">
                        Great product! I am very satisfied with the quality and performance.
                        Would definitely recommend to others looking for a similar product.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="outline">Verified Purchase</Badge>
                        {index === 0 && <Badge className="bg-[#122B5F]">Top Reviewer</Badge>}
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="mt-4 w-full">Load More Reviews</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Related products */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#122B5F] mb-8">Related Products</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </CustomerLayout>
  );
}