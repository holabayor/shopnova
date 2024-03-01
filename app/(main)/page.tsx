import Banner from '@/components/Banner';
import BestSelling from '@/components/BestSellers';
import CategorySection from '@/components/Categories';
import FlashSales from '@/components/FlashSales';
import NewArrivals from '@/components/NewArrivals';
import Services from '@/components/Services';
// import ProductCard from '@/components/ProductCard';
// import SectionWrapper from '@/components/SectionWrapper';

export default function Home() {
  return (
    <>
      <Banner />
      <FlashSales />
      <CategorySection />
      <BestSelling />
      <NewArrivals />
      <Services />
    </>
  );
}
