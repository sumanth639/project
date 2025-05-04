import Image from "next/image";
import { Metadata } from "next";
import { AuthForm } from "@/components/auth/auth-form";
import { PaymitraLogo } from "@/components/paymitra-logo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login - Paymitra",
  description: "Login to your Paymitra account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left side - form */}
      <div className="flex flex-col justify-center items-center p-6 md:p-10">
        <div className="w-full max-w-md mb-8">
          <Link href="/" className="inline-block mb-10">
            <PaymitraLogo size="lg" />
          </Link>
          
          <AuthForm type="login" />
        </div>
      </div>
      
      {/* Right side - image */}
      <div className="hidden md:block relative bg-gradient-to-br from-[#122B5F] to-[#395C93]">
        <div className="absolute inset-0 bg-pattern opacity-10" 
             style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")" }}>
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-10">
          <div className="w-full max-w-md text-white">
            <h2 className="text-3xl font-bold mb-6">Welcome Back to Paymitra</h2>
            <p className="mb-8 opacity-90">
              Login to access your account, track orders, manage your profile, and continue shopping with Paymitra.
            </p>
            
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[#F4A826]/20 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-[#F4A826]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Shop with Confidence</h3>
                  <p className="text-sm opacity-80">Secure shopping experience</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-[#F4A826]/20 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-[#F4A826]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">100% Secure Checkout</h3>
                  <p className="text-sm opacity-80">Protected payment system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}