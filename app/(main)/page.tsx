import Banner from '@/components/Banner';
import BestSellingCategory from '@/components/BestSellers';
import ProductCard from '@/components/ProductCard';
import SectionWrapper from '@/components/SectionWrapper';

export default function Home() {
  return (
    <>
      <Banner />
      {/* <ProductSection /> */}
      <BestSellingCategory />
    </>
  );
}
