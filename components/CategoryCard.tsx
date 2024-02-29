'use client';

import React from 'react';
import { Eye, Heart, ShoppingCart, Smartphone } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  price: string | number;
  originalPrice?: string | number;
  discountPercentage: number;
  rating: number;
  numOfRatings?: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  price,
  discountPercentage,
  rating,
  numOfRatings,
}) => {
  return (
    <div className="border rounded-sm w-32 h-32 shrink-0 items-center">
      <Smartphone
        size={32}
        strokeWidth={1}
        className="mx-auto mt-[40px] mb-2"
      />
      <p className="text-center text-xs">{title}</p>
    </div>
  );
};

export default CategoryCard;
