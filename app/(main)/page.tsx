import Banner from '@/components/Banner';
import BestSellingCategory from '@/components/BestSellers';
import ProductCard from '@/components/ProductCard';
import SectionWrapper from '@/components/SectionWrapper';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <Banner />
      {/* <ProductSection /> */}
      <BestSellingCategory />
      <Services />
    </>
  );
}
