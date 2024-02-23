import React from 'react';
import Image, { StaticImageData } from 'next/image';
import gamepad from '@/public/products/gamepad.png';
import Icon from './ui/icon';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
import { number } from 'zod';

interface ProductCardProps {
  name: string;
  image: StaticImageData | string;
  price: string | number;
  originalPrice: string | number;
  discount: string;
  rating: number;
  numOfRatings: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  price,
  originalPrice,
  discount,
  rating,
  numOfRatings,
}) => {
  return (
    <div className="inline-block w-[250px] rounded-t-sm">
      <div className="relative group bg-gray overflow-hidden">
        <div className="flex justify-center p-4 mt-4">
          <Image
            src={image}
            layout="fill"
            alt={name}
            className="object-cover group-hover:scale-110 transition-all duration-500"
          />
        </div>

        <div className="absolute top-0 right-0 flex flex-col items-center gap-2 p-2 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in">
          <Icon
            Shape={Heart}
            size={18}
            className="bg-white p-1 hover:scale-125 "
          />
          <Icon
            Shape={Eye}
            size={18}
            className="bg-white p-1 hover:scale-125"
          />
        </div>
        <div className="w-full flex items-center justify-center gap-2 bg-black text-xs text-white py-2  translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out cursor-pointer">
          <ShoppingCart color="#ffffff" size={18} /> Add to Cart
        </div>
      </div>
      <h6 className="text-black font-semibold">{name}</h6>
      <div className="flex flex-row md:flex-col justify-between">
        <p className="flex gap-4 font-semibold">
          <span className="text-[#DB4444]">{price}</span>
          <span className="text-slate-500 line-through">{originalPrice}</span>
        </p>
        {numOfRatings} Ratings
      </div>
    </div>
  );
};

export default ProductCard;
