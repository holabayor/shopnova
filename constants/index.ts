export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'features',
    title: 'Features',
  },
  {
    id: 'product',
    title: 'Product',
  },
  {
    id: 'clients',
    title: 'Clients',
  },
];

export const stats = [
  {
    id: 'stats-1',
    title: 'User Active',
    value: '3800+',
  },
  {
    id: 'stats-2',
    title: 'Trusted by Company',
    value: '230+',
  },
  {
    id: 'stats-3',
    title: 'Transaction',
    value: '$230M+',
  },
];

export const footerLinks = [
  {
    title: 'Support',
    links: [
      {
        name: '111 Bijay sarani, Dhaka, DH 1515, Bangladesh',
        link: 'https://www.hoobank.com/content/',
      },
      {
        name: 'liasu.olabayo@gmail.com',
        link: '/',
      },
      {
        name: '+234 8104 055 5831',
        link: '/',
      },
    ],
  },
  {
    title: 'Account',
    links: [
      {
        name: 'My Account',
        link: '#',
      },
      {
        name: 'Login/Register',
        link: '#',
      },
      {
        name: 'Cart',
        link: '#',
      },
      {
        name: 'Wishlist',
        link: '#',
      },
      {
        name: 'Shop',
        link: '#',
      },
    ],
  },
  {
    title: 'Quick Link',
    links: [
      {
        name: 'Privacy Policy',
        link: '#',
      },
      {
        name: 'Terms of Use',
        link: '#',
      },
      {
        name: 'FAQ',
        link: '#',
      },
      {
        name: 'Contact',
        link: '#',
      },
    ],
  },
];

import gamepad from '@/public/products/gamepad.png';
import chair from '@/public/products/chair.png';
import keyboard from '@/public/products/keyboard.png';
import monitor from '@/public/products/monitor.png';

export const products = [
  {
    name: 'HAVIT HV-G92 Gamepad',
    image: gamepad,
    price: 120,
    originalPrice: 160,
    discount: '-40%',
    rating: 1,
    numOfRatings: 88,
  },
  {
    name: 'S-Series Comfort Chair',
    image: chair,
    price: 375,
    originalPrice: 400,
    discount: '-25%',
    rating: 1,
    numOfRatings: 88,
  },
  {
    name: 'AK-900 Wired Keyboard',
    image: keyboard,
    price: 120,
    originalPrice: 160,
    discount: '-40%',
    rating: 1,
    numOfRatings: 88,
  },
  {
    name: 'IPS LCD Gaming Monitor',
    image: monitor,
    price: 370,
    originalPrice: 400,
    discount: '-30%',
    rating: 1,
    numOfRatings: 88,
  },
];
