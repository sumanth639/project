import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Zap, ShoppingBag, ArrowRight } from 'lucide-react';

export function PromoBanners() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-slate-50 dark:to-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Electricity Bill Promo Banner */}
          <div className="bg-gradient-to-r from-[#122B5F] to-[#193a7a] text-white p-10 rounded-2xl flex flex-col justify-between h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <div className="mb-8">
                <Zap size={48} className="mb-6 text-amber-400" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Pay Electricity Bills
                </h3>
                <div className="space-y-2">
                  <p className="text-xl md:text-2xl font-semibold text-amber-400">
                    Get 5% Cashback!
                  </p>
                  <p className="text-lg opacity-90">
                    Pay your electricity bills on time and earn rewards. Limited
                    time offer.
                  </p>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-xl"
              >
                <Link
                  href="/pay-bills/electricity"
                  className="flex items-center gap-2"
                >
                  Pay Now
                  <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Shop Essentials Promo Banner */}
          <div className="bg-gradient-to-r from-amber-200 to-amber-100 dark:from-amber-900/80 dark:to-amber-800/80 p-10 rounded-2xl flex flex-col justify-between h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <div className="mb-8">
                <ShoppingBag
                  size={48}
                  className="mb-6 text-[#122B5F] dark:text-amber-400"
                />
                <h3 className="text-2xl md:text-3xl font-bold text-[#122B5F] dark:text-amber-100 mb-4">
                  Shop Essentials
                </h3>
                <div className="space-y-2">
                  <p className="text-xl md:text-2xl font-semibold text-[#122B5F] dark:text-amber-400">
                    Upto 40% Off
                  </p>
                  <p className="text-lg text-slate-700 dark:text-amber-200/90">
                    Discover amazing deals on daily essentials and electronics.
                  </p>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="group bg-[#122B5F] hover:bg-[#193a7a] text-white rounded-xl"
              >
                <Link
                  href="/shop/essentials"
                  className="flex items-center gap-2"
                >
                  Shop Now
                  <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
