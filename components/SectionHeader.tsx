import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';
import Icon from './ui/icon';

const SectionHeader = () => {
  return (
    <section className="w-full flex flex-col gap-2 md:gap-3 lg:gap-5">
      <div className="flex gap-2 md:gap-4 items-center">
        <span className="block w-5 h-10 bg-red rounded-sm"></span>
        <span className="text-red font-semibold">Our Products</span>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
          Explore Our Products
        </h2>
        <div className="flex items-center gap-2">
          <Icon Shape={ArrowLeft} className="bg-gray" />
          <Icon Shape={ArrowRight} className="bg-gray" />
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
