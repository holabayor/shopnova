'use client';

import { Heart, Search, ShoppingCart, Menu, User } from 'lucide-react';
import { Input } from './ui/input';
import Logo from './Logo';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import Icon from './ui/icon';
import AccountMenu from './AccountMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleProfileMenu = () => {
    console.log('Toggle profile menu');
    setIsProfileMenuOpen(!isProfileMenuOpen);
    console.log('Toggle profile value', isProfileMenuOpen);
  };

  const closeProfileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="container border-b py-4 z-10">
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
            <Icon
              Shape={User}
              className="bg-red"
              color="#ffffff"
              onClick={toggleProfileMenu}
            />
            <Menu className="md:hidden" onClick={toggleMenu} />
            <AccountMenu isMenuOpen={isProfileMenuOpen} />
          </div>
        </div>
        <MobileMenu isMenuOpen={isMobileMenuOpen} onClose={closeMenu} />
      </nav>
    </>
  );
};

export default Header;
