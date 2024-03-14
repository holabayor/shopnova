import React from 'react';
import Icon from './ui/icon';
import { Ban, LogOut, ShoppingBag, Star, User } from 'lucide-react';

interface AccountMenuProps {
  isMenuOpen: boolean;
  //   onClose: () => void;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ isMenuOpen }) => {
  return (
    <div className="relative">
      <div
        className={`absolute w-44 md:w-[250px] bg-red text-white top-10 right-0 rounded-md p-2 md:p-4 transform transition-transform text-xs md:text-sm  ${
          isMenuOpen ? 'translate-x-0' : 'hidden'
        }`}
        //   onClick={onClick}
      >
        <ul className="*:flex *:items-center *:gap-2 *:cursor-pointer">
          <li>
            <Icon
              Shape={User}
              color="#ffffff"
              className="group-hover:scale-110"
            />
            My Account
          </li>
          <li>
            <Icon
              Shape={ShoppingBag}
              className="group-hover:scale-110"
              color="#ffffff"
            />
            My Orders
          </li>
          {/* <li>
            <Icon
              Shape={Ban}
              className="group-hover:scale-110"
              color="#ffffff"
            />
            My Cancellations
          </li> */}
          <li>
            <Icon
              Shape={Star}
              className="group-hover:scale-110"
              color="#ffffff"
            />
            My Reviews
          </li>
          <li>
            <Icon
              Shape={LogOut}
              className="group-hover:scale-110"
              color="#ffffff"
            />
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountMenu;
