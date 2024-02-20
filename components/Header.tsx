import { Heart, Search, ShoppingCart } from 'lucide-react';
import { Input } from './ui/input';
import Logo from './Logo';

const Header = () => {
  return (
    <nav className="border-b py-4">
      <div className="flex justify-between items-center">
        <Logo />
        <div className="flex gap-4">
          <div>Home</div>
          <div>Contact</div>
          <div>About</div>
          <div>Sign up</div>
        </div>
        <div className="flex gap-4 md:gap-6 items-center">
          <div className="items-center">
            <label htmlFor="search" className="sr-only"></label>
            <div className="relative">
              <Input
                placeholder="What are you looking for? "
                className="hidden md:flex min-w-[240px] border-none bg-[#f5f5f5]"
              />
              <Search className="flex md:absolute right-2 top-2" />
            </div>
          </div>
          <span>
            <ShoppingCart />
          </span>
          <span>
            <Heart />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
