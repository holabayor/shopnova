import ProductCard from '@/components/ProductCard';
import SectionWrapper from '@/components/SectionWrapper';
import { products } from '@/constants';

export default function BestSellingCategory() {
  return (
    <SectionWrapper title="Best Selling Products" subtitle="This Month">
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
