import Link from 'next/link';
import ps5 from '@/public/arrivals/ps5-slim.png';
import amazonecho from '@/public/arrivals/amazon-echo.png';
import woman from '@/public/arrivals/woman-wearing-hat.png';
import SectionHeader from './SectionHeader';
import Image from 'next/image';

export default function NewArrivals() {
  return (
    <div>
      <SectionHeader title="New Arrival" subtitle="Featured" />
      <div className="flex overflow-x-auto sm:overflow-x-visible gap-4 py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {/* Each child div now uses flex-shrink-0 for mobile and adjusts to grid layout on larger screens */}
        <div className="relative flex-shrink-0 sm:flex-shrink w-full h-48 sm:h-96 sm:w-auto bg-black bg-opacity-50 overflow-hidden px-8">
          <Image
            src={ps5}
            alt={'PS5 Slim Console'}
            fill
            style={{
              objectFit: 'contain',
              objectPosition: 'center center',
            }}
          />
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h4 className="font-semibold">Play Station</h4>
            <p className="text-xs">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link href="/shop-now">Shop Now</Link>
          </div>
        </div>

        {/* Example repeated item */}
        {/* <div className="grid grid-rows-2 gap-4"> */}
        <div className="grid grid-rows-2 gap-4 h-96">
          <div className="relative flex-shrink-0 sm:flex-shrink w-full h-full sm:w-auto bg-black bg-opacity-50 overflow-hidden px-8">
            <Image
              src={amazonecho}
              alt={'PS5 Slim Console'}
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'center center',
              }}
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h4 className="font-semibold">Play Station</h4>
              <p className="text-xs">
                Black and White version of the PS5 coming out on sale.
              </p>
              <Link href="/shop-now">Shop Now</Link>
            </div>
          </div>
          <div className="relative flex-shrink-0 sm:flex-shrink w-full h-full sm:w-auto bg-black bg-opacity-50 overflow-hidden px-8">
            <Image
              src={woman}
              alt={'Woman wearing hat'}
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'center center',
              }}
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h4 className="font-semibold">Play Station</h4>
              <p className="text-xs">
                Black and White version of the PS5 coming out on sale.
              </p>
              <Link href="/shop-now">Shop Now</Link>
            </div>
          </div>
        </div>

        {/* Additional items would go here */}
      </div>
      {/* <div className="w-full flex gap-4 h-[600px]">
        <div className="relative w-full bg-black bg-opacity-50 overflow-hidden px-8">
          <Image
            src={ps5}
            alt={'PS5 Slim Console'}
            fill
            style={{
              objectFit: 'contain',

              objectPosition: 'center center',
            }}
          />
          <div className="bg-black h-full text-white">
            <h4 className="text-semibold">Play Station</h4>
            <p className="text-xs">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link href={''}>Shop Now</Link>
            Im
          </div>
        </div>
        <div className="bg-slate-600 w-full flex flex-col gap-4 p-2">
          <div className="relative w-full bg-black bg-opacity-50 overflow-hidden">
            <Image
              src={ps5}
              alt={'PS5 Slim Console'}
              fill
              style={{
                objectFit: 'contain',

                objectPosition: 'center center',
              }}
            />
            <div className="bg-black h-full text-white">
              <h4 className="text-semibold">Play Station</h4>
              <p className="text-xs">
                Black and White version of the PS5 coming out on sale.
              </p>
              <Link href={''}>Shop Now</Link>
              Im
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-slate-300 w-full p-2">Speakers</div>
            <div className="bg-slate-300 w-full p-2">Perfume</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
