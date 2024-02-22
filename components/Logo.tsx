import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="font-bold text-xl md:text-3xl">
      <Link href={'/'}>ShopNova</Link>
    </div>
  );
};

export default Logo;
