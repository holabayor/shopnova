import { footerLinks } from '@/constants';
import Logo from './Logo';
import { Input } from './ui/input';
import {
  Facebook,
  Instagram,
  Linkedin,
  SendHorizontal,
  Twitter,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="container mx-auto bg-black text-dimWhite">
      <div className="w-full flex flex-row gap-4 justify-between flex-wrap md:mt-0 mt-10">
        <div className="flex gap-4 flex-col ss:my-0 my-4 max-w-[180px]">
          <Logo />
          <p className="font-normal">Subscribe</p>
          <p className="text-xs">Get 10% off your first order</p>
          <div className="relative">
            <Input
              className="h-8 text-xs bg-black pr-8 rounded-sm placeholder:text-offWhite"
              placeholder="Enter your email"
            />
            <SendHorizontal
              strokeWidth={1.5}
              size={20}
              className="absolute right-2 top-1"
            />
          </div>
        </div>
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.title}
            className="flex-grow flex-col ss:my-0 my-4 max-w-[180px]"
          >
            <h5 className="font-medium mb-4">{footerLink.title}</h5>
            <ul className="list-none">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`text-xs hover:text-secondary cursor-pointer ${
                    index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex-grow flex-col ss:my-0 my-4 max-w-[180px]">
          <h5 className="font-medium mb-4">Download App</h5>
          <p className="text-xs text-offWhite">
            Save $3 with App New User Only
          </p>
          <div>
            <div></div>
            <div></div>
          </div>
          <div className="flex gap-6">
            <Facebook size={20} strokeWidth={1} />
            <Twitter size={20} strokeWidth={1} />
            <Instagram size={20} strokeWidth={1} />
            <Linkedin size={20} strokeWidth={1} />
          </div>
        </div>
      </div>
      <p className="text-xs text-center text-offWhite py-4 border-t border-offWhite">
        &copy; Copyright ShopNova 2024. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
