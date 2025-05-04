import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center space-x-1">
      <div className="h-8 w-8 flex items-center justify-center rounded-md bg-gradient-to-br from-[#122B5F] to-[#395C93]">
        <span className="font-bold text-white text-xl">P</span>
      </div>
      <span className="font-bold text-xl">
        <span className="text-[#122B5F]">PAY</span>
        <span className="text-[#F4A826]">MITRA</span>
      </span>
    </div>
  );
}