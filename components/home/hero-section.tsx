import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-amber-50 to-amber-100/50 dark:from-slate-900 dark:to-slate-900/50 overflow-hidden min-h-[85vh] flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#122B5F] dark:text-white leading-tight">
                Pay Bills & Shop Smarter with{' '}
                <span className="text-[#F4A826]">Paymitra</span>
              </h1>
              <p className="text-xl text-slate-700 dark:text-slate-300">
                Electricity, Water, Broadband, Mobile + Shop Essentials
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#122B5F] hover:bg-[#193a7a] text-white text-lg px-8 py-6 rounded-xl"
              >
                <Link href="/pay-bills">Pay Bills Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#122B5F] text-[#122B5F] hover:bg-[#122B5F]/10 dark:border-slate-500 dark:text-white dark:hover:bg-slate-800 text-lg px-8 py-6 rounded-xl"
              >
                <Link href="/shop">Shop Deals</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/hero.png"
              alt="My Photo"
              width={500}
              height={300}
              className="object-contain max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-[#F4A826]/30 to-[#F9C253]/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-bl from-[#122B5F]/20 to-[#395C93]/5 rounded-full blur-3xl"></div>
    </section>
  );
}
