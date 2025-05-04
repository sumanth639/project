import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AuthForm } from "@/components/auth/auth-form";
import { PaymitraLogo } from "@/components/paymitra-logo";

export const metadata: Metadata = {
  title: "Register - Paymitra",
  description: "Create a new Paymitra account",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left side - image */}
      <div className="hidden md:block relative bg-gradient-to-br from-[#F4A826] to-[#F9C253]">
        <div className="absolute inset-0 bg-pattern opacity-10" 
             style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")" }}>
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-10">
          <div className="w-full max-w-md text-white">
            <h2 className="text-3xl font-bold mb-6">Join Paymitra Today</h2>
            <p className="mb-8 opacity-90">
              Create an account to get access to exclusive offers, easy order tracking, and a personalized shopping experience.
            </p>
            
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Order History</h3>
                  <p className="text-sm opacity-80">Easily track all your orders</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Exclusive Offers</h3>
                  <p className="text-sm opacity-80">Get personalized deals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - form */}
      <div className="flex flex-col justify-center items-center p-6 md:p-10">
        <div className="w-full max-w-md mb-8">
          <Link href="/" className="inline-block mb-10">
            <PaymitraLogo size="lg" />
          </Link>
          
          <AuthForm type="register" />
        </div>
      </div>
    </div>
  );
}