import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

import { FOOTER_LINKS, SITE_NAME } from '@/lib/constants';
import { PaymitraLogo } from '@/components/paymitra-logo';
import { ButtonGradient } from '@/components/ui/button-gradient';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-[#F8F9FA] pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <PaymitraLogo className="mb-4" />
            <p className="text-gray-600 mb-6 max-w-md">
              Paymitra is your trusted marketplace connecting vendors and
              customers for a seamless e-commerce experience with secure
              payments and reliable delivery.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-[#122B5F] text-white p-2 rounded-full hover:bg-[#0f234d] transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="bg-[#122B5F] text-white p-2 rounded-full hover:bg-[#0f234d] transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="bg-[#122B5F] text-white p-2 rounded-full hover:bg-[#0f234d] transition-colors"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                className="bg-[#122B5F] text-white p-2 rounded-full hover:bg-[#0f234d] transition-colors"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#122B5F]">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#F4A826] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#122B5F]">
              Support
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#F4A826] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#122B5F]">
              For Vendors
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.forVendors.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#F4A826] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold text-[#122B5F] mb-2">
                Subscribe to our Newsletter
              </h3>
              <p className="text-gray-600">
                Stay updated with the latest products, offers and news
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow"
              />
              <ButtonGradient variant="blue">Subscribe</ButtonGradient>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 text-sm hover:text-[#F4A826] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
