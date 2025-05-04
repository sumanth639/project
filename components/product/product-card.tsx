"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    discountPrice: number | null;
    rating: number;
    image: string;
    category: string;
    vendor: string;
    isFeatured?: boolean;
    isNew?: boolean;
  };
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
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
      className={cn(
        "group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl",
        className
      )}
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
            "transition-transform duration-500",
            isHovering ? "scale-110" : "scale-100"
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
            "absolute bottom-3 left-3 right-3 flex items-center justify-between transition-all duration-300",
            isHovering ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
              <span className="text-[#122B5F] font-bold">${product.discountPrice}</span>
              <span className="text-gray-400 line-through text-sm ml-2">${product.price}</span>
            </>
          ) : (
            <span className="text-[#122B5F] font-bold">${product.price}</span>
          )}
        </div>
      </div>
    </Link>
  );
}