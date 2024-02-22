import React from 'react';
import Image from 'next/image';
import gamepad from '@/public/products/gamepad.png';

const ProductCard = () => {
  return (
    <div className="bg-gray">
      <div className="flex w-full justify-center">
        <Image src={gamepad} object-fit="cover" alt="gamepad" />
      </div>

      <h6 className="text-black font-semibold ">HAVIT HV-G92 Gamepad</h6>
      <p className="flex gap-4">
        <span className="text-[#DB4444]">$120</span>
        <span className="text-gray-400 line-through">$160</span>
      </p>
    </div>
  );
};

export default ProductCard;
