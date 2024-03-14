import React from 'react';

interface MobileMenuProps {
  isMenuOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, onClose }) => {
  return (
    <div
      className={`md:hidden fixed top-85 left-0 w-full h-full bg-white z-50 transform transition-transform ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex flex-col mt-4">Menu goes here</div>
    </div>
  );
};

export default MobileMenu;
