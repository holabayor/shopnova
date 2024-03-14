import React from 'react';
import Icon from './ui/icon';
import { CircleOff, LogOut, ShoppingBag, Star, User } from 'lucide-react';

interface AccountMenuProps {
  isMenuOpen: boolean;
  //   onClose: () => void;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ isMenuOpen }) => {
  return (
    <div
      className={`absolute bg-red text-white top-20 right-0 rounded-md p-4 transform transition-transform  ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
          Manage My Account
        </li>
        <li>
          <Icon
            Shape={ShoppingBag}
            className="group-hover:scale-110"
            color="#ffffff"
          />
          My Orders
        </li>
        <li>
          <Icon
            Shape={CircleOff}
            className="group-hover:scale-110"
            color="#ffffff"
          />
          My Cancellations
        </li>
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
  );
};

export default AccountMenu;
