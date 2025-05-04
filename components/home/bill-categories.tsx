'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import {
  Zap,
  Droplet,
  Flame,
  Wifi,
  Tv,
  Smartphone,
  CreditCard,
  Building2,
  Landmark,
} from 'lucide-react';

interface CategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Category = ({ icon, title, description }: CategoryProps) => {
  return (
    <Card className="p-8 flex flex-col items-center justify-center gap-4 cursor-pointer hover:shadow-lg transition-all bg-white dark:bg-slate-800 border-0 shadow-md hover:translate-y-[-4px] rounded-xl group">
      <div className="text-[#122B5F] dark:text-blue-400 transform transition-transform group-hover:scale-110">
        {icon}
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>
    </Card>
  );
};

export function BillCategories() {
  const categories = [
    {
      icon: <Zap size={36} />,
      title: 'Electricity',
      description: 'Pay electricity bills instantly',
    },
    {
      icon: <Droplet size={36} />,
      title: 'Water',
      description: 'Clear water bills hassle-free',
    },
    {
      icon: <Flame size={36} />,
      title: 'Gas',
      description: 'Pay gas bills securely',
    },
    {
      icon: <Wifi size={36} />,
      title: 'Broadband',
      description: 'Recharge internet plans',
    },
    {
      icon: <Tv size={36} />,
      title: 'DTH',
      description: 'Recharge TV subscriptions',
    },
    {
      icon: <Smartphone size={36} />,
      title: 'Mobile',
      description: 'Mobile recharge & bills',
    },
    {
      icon: <CreditCard size={36} />,
      title: 'Credit Card',
      description: 'Pay card bills easily',
    },
    {
      icon: <Building2 size={36} />,
      title: 'Rent',
      description: 'Pay rent securely',
    },
    {
      icon: <Landmark size={36} />,
      title: 'Insurance',
      description: 'Pay insurance premiums',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-slate-50 dark:to-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#122B5F] dark:text-white mb-4">
            Pay All Your Bills in One Place
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Quick, secure, and convenient bill payments for all your utilities
            and services
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Category
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
