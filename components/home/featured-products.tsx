'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Heart, ShoppingCart, Star } from 'lucide-react';

import { FEATURED_PRODUCTS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ButtonGradient } from '@/components/ui/button-gradient';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

const ProductCard = ({
  product,
}: {
  product: (typeof FEATURED_PRODUCTS)[0];
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success(`${product.name} added to cart`);
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success(`${product.name} added to wishlist`);
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        {/* Product image */}
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className={cn(
            'transition-transform duration-500',
            isHovering ? 'scale-110' : 'scale-100'
          )}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-[#122B5F] text-white text-xs font-medium px-2 py-1 rounded">
              NEW
            </span>
          )}
          {product.discountPrice && (
            <span className="bg-[#F4A826] text-white text-xs font-medium px-2 py-1 rounded">
              SALE
            </span>
          )}
        </div>

        {/* Quick actions */}
        <div
          className={cn(
            'absolute bottom-3 left-3 right-3 flex items-center justify-between transition-all duration-300',
            isHovering ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full bg-white/90 hover:bg-white"
            onClick={handleAddToWishlist}
          >
            <Heart className="h-4 w-4" />
          </Button>

          <Button
            className="flex-1 mx-2 bg-white/90 hover:bg-white text-[#122B5F] font-medium"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm text-gray-500">{product.category}</span>
          <div className="flex items-center">
            <Star className="h-3.5 w-3.5 fill-[#F4A826] text-[#F4A826]" />
            <span className="text-sm font-medium ml-1">{product.rating}</span>
          </div>
        </div>

        <h3 className="font-medium text-gray-900 group-hover:text-[#122B5F] transition-colors mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center">
          {product.discountPrice ? (
            <>
              <span className="text-[#122B5F] font-bold">
                ${product.discountPrice}
              </span>
              <span className="text-gray-400 line-through text-sm ml-2">
                ${product.price}
              </span>
            </>
          ) : (
            <span className="text-[#122B5F] font-bold">${product.price}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-[#122B5F] mb-3">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our handpicked selection of top products from trusted
              vendors
            </p>
          </div>
          <Link href="/shop" className="mt-4 md:mt-0">
            <ButtonGradient variant="blue" className="group">
              View All
              <ChevronRight className="ml-1 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
            </ButtonGradient>
          </Link>
        </div>

        <Tabs defaultValue="featured" className="mb-8">
          <TabsList className="mb-8">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="new-arrivals">New Arrivals</TabsTrigger>
            <TabsTrigger value="best-sellers">Best Sellers</TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURED_PRODUCTS.filter((p) => p.isFeatured)
                .slice(0, 8)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="new-arrivals" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURED_PRODUCTS.filter((p) => p.isNew)
                .slice(0, 8)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="best-sellers" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURED_PRODUCTS.sort((a, b) => b.rating - a.rating)
                .slice(0, 8)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
