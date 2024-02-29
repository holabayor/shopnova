import ProductCard from '@/components/ProductCard';
import SectionWrapper from '@/components/SectionWrapper';
import { products } from '@/constants';

export default function FlashSales() {
  return (
    <SectionWrapper title="Flash Sales" subtitle="Today's">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          thumbnail={product.thumbnail}
          price={product.price}
          // originalPrice={product.originalPrice}
          discountPercentage={product.discountPercentage}
          rating={product.rating}
          // numOfRatings={product.numOfRatings}
        />
      ))}
    </SectionWrapper>
  );
}
