import React from 'react';
import Icon from './ui/icon';
import { Headset, ShieldCheck, Truck } from 'lucide-react';

const Services = () => {
  return (
    <section className="flex flex-wrap justify-around items-center text-xs">
      <div className="flex flex-col items-center">
        <Icon Shape={Truck} size={18} color="#ffffff" className="bg-black" />
        <p className="font-semibold uppercase mt-2">free and fast delivery</p>
        <p className="">Free delivery for all orders above $140</p>
      </div>
      <div className="flex flex-col items-center">
        <Icon Shape={Headset} size={18} color="#ffffff" className="bg-black" />
        <p className="font-semibold uppercase mt-2">24/7 customer service</p>
        <p className="">Friendly 24/7 customer support</p>
      </div>
      <div className="flex flex-col items-center">
        <Icon
          Shape={ShieldCheck}
          size={18}
          color="#ffffff"
          className="bg-black"
        />
        <p className="font-semibold uppercase mt-2">free and fast delivery</p>
        <p className="">Free delivery for all orders above $140</p>
      </div>
    </section>
  );
};

export default Services;
