import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaymitraLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function PaymitraLogo({ className, size = "md" }: PaymitraLogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <ShoppingBag className={cn("text-[#F4A826]", sizeClasses[size])} />
      <span className={cn("font-bold tracking-tight", sizeClasses[size])}>
        <span className="text-[#122B5F]">PAY</span>
        <span className="text-[#F4A826]">MITRA</span>
      </span>
    </div>
  );
}