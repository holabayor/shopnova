'use client';

import { Heart, Search, ShoppingCart, Menu } from 'lucide-react';
import { Input } from './ui/input';
import Logo from './Logo';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import Icon from './ui/icon';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="container border-b py-4">
      <div className="flex justify-between items-center">
        <Logo />

        <div className="w-2/4 items-center">
          <label htmlFor="search" className="sr-only"></label>
          <div className="hidden md:block relative">
            <Input
              placeholder="What are you looking for? "
              className="flex w-full border-none bg-[#f5f5f5] outline-none"
            />
            <Search className="flex md:absolute right-2 top-2" />
          </div>
        </div>

        <div className="flex gap-2 md:gap-4 items-center">
          <Icon Shape={Heart} />
          <Icon Shape={ShoppingCart} />

          <Menu className="md:hidden" onClick={toggleMenu} />
        </div>
      </div>
      <MobileMenu isMenuOpen={isMobileMenuOpen} onClose={closeMenu} />
    </nav>
  );
};

export default Header;
