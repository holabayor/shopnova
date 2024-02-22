import Banner from '@/components/Banner';
import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import ProductSection from '@/components/SectionHeader';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1>Homepage</h1>
      <Banner />
      {/* <ProductSection /> */}
      <SectionHeader />
      <ProductCard />
    </>
  );
}
