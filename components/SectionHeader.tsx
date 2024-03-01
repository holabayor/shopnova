import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';
import Icon from './ui/icon';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  products?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <section className="w-full my-5 md:my-12 flex flex-col gap-2 lg:gap-5">
      <div className="flex gap-2 lg:gap-4 items-center">
        <span className="block w-2.5 md:w-5 h-5 md:h-10 bg-red rounded-sm"></span>
        <span className="text-red font-semibold">{subtitle}</span>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold">
          {title}
        </h2>
        <div className="hidden md:flex items-center gap-2">
          <Icon Shape={ArrowLeft} className="bg-gray" />
          <Icon Shape={ArrowRight} className="bg-gray" />
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
