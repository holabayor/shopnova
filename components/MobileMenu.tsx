import React from 'react';

interface MobileMenuProps {
  isMenuOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, onClose }) => {
  return (
    <div>
      {/* Transparent backdrop */}
      {isMenuOpen && (
        <div
          //   className="md:hidden fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={onClose} // Close menu when clicking on the backdrop
        >
          Close
        </div>
      )}

      {/* Responsive navigation menu for mobile screens */}
      <div
        className={`md:hidden fixed top-85 left-0 w-full h-full bg-white z-50 transform transition-transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col mt-4">Menu goes here</div>
      </div>
    </div>
  );
};

export default MobileMenu;
