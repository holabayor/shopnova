import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';
import Icon from './ui/icon';

interface SectionWrapperProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <section className="w-full my-4 md:my-8 flex flex-col gap-2 md:gap-3 lg:gap-5">
      <div className="flex gap-2 md:gap-4 items-center">
        <span className="block w-2.5 md:w-5 h-5 md:h-10 bg-red rounded-sm"></span>
        <span className="text-red font-semibold">{subtitle}</span>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-lg md:text-3xl lg:text-5xl font-semibold">
          {title}
        </h2>
        <div className="hidden md:flex items-center gap-2">
          <Icon Shape={ArrowLeft} className="bg-gray" />
          <Icon Shape={ArrowRight} className="bg-gray" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
