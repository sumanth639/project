import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { FEATURED_PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products?: typeof FEATURED_PRODUCTS;
  showLoadMore?: boolean;
  onLoadMore?: () => void;
  isLoading?: boolean;
  className?: string;
  columns?: 2 | 3 | 4;
}

export function ProductGrid({
  products = FEATURED_PRODUCTS,
  showLoadMore = false,
  onLoadMore,
  isLoading = false,
  className,
  columns = 4,
}: ProductGridProps) {
  const columnClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("space-y-8", className)}>
      <div className={cn("grid gap-6", columnClasses[columns])}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {showLoadMore && (
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={onLoadMore}
            disabled={isLoading}
            className="min-w-[200px]"
          >
            {isLoading ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
}