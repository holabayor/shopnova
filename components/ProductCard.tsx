import React from 'react';
import Image from 'next/image';
import gamepad from '@/public/products/gamepad.png';

const ProductCard = () => {
  return (
    <div className="flex">
      <Image src={gamepad} objectFit="cover" alt="gamepad" />
      <h6 className="text-black font-semibold ">HAVIT HV-G92 Gamepad</h6>
      <p className="flex">
        <span className="text-[#DB4444]">$120</span>
        <span className="text-gray-500 line-through">$160</span>
      </p>
    </div>
  );
};

export default ProductCard;
