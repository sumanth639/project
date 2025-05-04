import React from 'react';
import { Shield, Zap, Users } from 'lucide-react';

interface TrustIndicatorProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TrustIndicator = ({ icon, title, description }: TrustIndicatorProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="text-[#122B5F] dark:text-blue-400 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export function TrustIndicators() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <TrustIndicator
            icon={<Shield size={40} />}
            title="Secure Payments"
            description="Your transactions are protected with bank-grade security"
          />
          <TrustIndicator
            icon={<Zap size={40} />}
            title="Fast Checkout"
            description="Quick and easy payment process, saving you time"
          />
          <TrustIndicator
            icon={<Users size={40} />}
            title="Trusted by 1 Million + Users"
            description="Join our growing community of satisfied customers"
          />
        </div>
      </div>
    </section>
  );
}
