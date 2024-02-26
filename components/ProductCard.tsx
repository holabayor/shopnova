'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Icon from './ui/icon';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
import ReactStars from 'react-rating-stars-component';

interface ProductCardProps {
  title: string;
  thumbnail: StaticImageData | string;
  price: string | number;
  originalPrice?: string | number;
  discountPercentage: number;
  rating: number;
  numOfRatings?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  thumbnail,
  price,
  discountPercentage,
  rating,
  numOfRatings,
}) => {
  return (
    <div className="hover:shadow-lg">
      <div className="relative group bg-slate-100 overflow-hidden rounded-md">
        <div className="relative h-[170px] w-full mt-4 p-2 md:p-4">
          <Image
            src={thumbnail}
            alt={title}
            fill
            style={{ objectFit: 'contain' }}
            className="m-auto group-hover:scale-110 transition-all duration-500"
          />
        </div>
        {discountPercentage && (
          <div className="absolute top-3 left-3 bg-[#DB4444] text-sm text-white py-1 px-2 rounded-sm">
            -{discountPercentage}
          </div>
        )}
        <div className="absolute top-0 right-0 flex flex-col items-center gap-2 p-2 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in">
          <Icon
            Shape={Heart}
            size={18}
            className="bg-white p-1 hover:scale-125"
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
      <div className="p-2">
        <h6 className="text-black font-semibold">{title}</h6>
        <div className="flex flex-row md:flex-col justify-between">
          <p className="flex gap-4 font-semibold">
            <span className="text-[#DB4444]">${price}</span>
            {discountPercentage && (
              <span className="text-slate-400 line-through">${price}</span>
            )}
          </p>
          <div className="flex gap-2 items-center text-slate-400 font-medium">
            <ReactStars
              count={5}
              value={rating}
              size={20}
              color2={'#ffd700'}
              edit={false}
            />
            ({numOfRatings})
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
