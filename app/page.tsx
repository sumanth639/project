import { HeroSection } from '@/components/home/hero-section';
import { BillCategories } from '@/components/home/bill-categories';
import { FeaturedProducts } from '@/components/home/featured-products';
import { PromoBanners } from '@/components/home/promo-banners';
import { TrustIndicators } from '@/components/home/trust-indicators';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BillCategories />
      <FeaturedProducts />
      <PromoBanners />
      <TrustIndicators />
    </div>
  );
}