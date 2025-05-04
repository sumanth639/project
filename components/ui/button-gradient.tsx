import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonGradientProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "blue" | "yellow" | "default";
  size?: "sm" | "md" | "lg";
}

const ButtonGradient = React.forwardRef<HTMLButtonElement, ButtonGradientProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const variantClasses = {
      default: "bg-gradient-to-r from-[#122B5F] to-[#395C93] text-white hover:from-[#0f234d] hover:to-[#2e4a7a]",
      blue: "bg-gradient-to-r from-[#122B5F] to-[#395C93] text-white hover:from-[#0f234d] hover:to-[#2e4a7a]",
      yellow: "bg-gradient-to-r from-[#F4A826] to-[#F9C253] text-white hover:from-[#e39b20] hover:to-[#f0b640]",
    };
    
    const sizeClasses = {
      sm: "text-sm px-4 py-1.5 rounded-md",
      md: "text-base px-5 py-2 rounded-lg",
      lg: "text-lg px-6 py-2.5 rounded-lg",
    };

    return (
      <button
        className={cn(
          "font-medium transition-all transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 shadow-md",
          variantClasses[variant],
          sizeClasses[size],
          variant === "blue" ? "focus:ring-blue-300" : "focus:ring-yellow-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
ButtonGradient.displayName = "ButtonGradient";

export { ButtonGradient };