import React from 'react';
import iphonei4 from '@/public/hero/iphone_14_hero.png';
import Image from 'next/image';
import Icon from './ui/icon';
import { ArrowRight } from 'lucide-react';

const Banner = () => {
  return (
    <section className="w-full flex">
      <menu className="hidden lg:block p-8 w-[250px] border-r">
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
          <div className=" w-1/2 text-white">
            <p className="text-xs my-2">iPhone 14 Series</p>
            <h2 className="text-md xs:text-lg sm:text-3xl md:text-5xl">
              Up to 10% off Voucher
            </h2>
            <div className="group flex items-center">
              <span className="border-b">Shop Now</span>{' '}
              <Icon
                Shape={ArrowRight}
                color="#ffffff"
                className="group-hover:translate-x-1"
              />
            </div>
          </div>
          <div>
            <Image src={iphonei4} object-fit="cover" alt="iphone deals" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
