import React from 'react';
import iphone14 from '@/public/hero/iphone_14_hero.png';
import Image from 'next/image';
import Icon from './ui/icon';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/constants';

const Banner = () => {
  return (
    <section className="w-full flex">
      <ul className="hidden lg:block pt-10 w-[250px] border-r">
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      <div className="w-full">
        <div className="flex justify-between bg-black items-center ml-0 lg:ml-10 mt-10 px-4 py-2">
          <div className=" w-1/2 text-white pl-4 lg:pl-12">
            <p className="text-xs my-2">iPhone 14 Series</p>
            <h2 className="text-md xs:text-lg sm:text-3xl md:text-5xl font-semibold">
              Up to 10% off Voucher
            </h2>
            <div className="group flex items-center">
              <span className="border-b text-xs md:text-sm cursor-pointer">
                Shop Now
              </span>{' '}
              <Icon
                Shape={ArrowRight}
                color="#ffffff"
                className="group-hover:translate-x-1"
              />
            </div>
          </div>
          <div>
            <Image
              src={iphone14}
              object-fit="cover"
              alt="iphone deals"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
