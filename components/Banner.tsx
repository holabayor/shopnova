import React from 'react';
import iphonei4 from '@/public/hero/iphone_14_hero.png';
import Image from 'next/image';
import Icon from './ui/icon';
import { ArrowRight } from 'lucide-react';

const Banner = () => {
  return (
    <section className="w-full flex">
      <menu className="hidden md:block w-[250px] border-r">
        <ol>Woman's Fashion</ol>
        <ol>Men's Fashion</ol>
        <ol>Electronics</ol>
        <ol>Home & Lifestyle</ol>
        <ol>Medicine</ol>
        <ol>Sport & Outdoor</ol>
        <ol>Baby's & Toys</ol>
        <ol>Groceries & Pets</ol>
        <ol>Health & Beauty</ol>
      </menu>
      <div className="w-full">
        <div className="flex justify-between bg-black items-center px-4 py-2">
          <div className="text-white">
            <h2 className="text-2xl md:text-5xl">Up to 10% off Voucher</h2>
            <p>
              Shop Now <Icon Shape={ArrowRight} color="#ffffff" />
            </p>
          </div>
          <Image src={iphonei4} object-fit="cover" alt="iphone deals" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
