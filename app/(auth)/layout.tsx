import Image from 'next/image';
import shopping_cart from '@/public/shopping_cart.png';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-4 md:gap-10 my-4 sm:my-8 md:my-12">
      <div className="hidden md:flex w-1/2">
        <Image
          src={shopping_cart}
          // fill
          style={{ objectFit: 'contain' }}
          alt="shopping cart"
          priority
        />
      </div>
      <div className="flex flex-col w-full md:w-1/2 max-w-[400px] m-auto">
        {children}
      </div>
    </div>
  );
}
