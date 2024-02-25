import ProductCard from '@/components/ProductCard';
import SectionWrapper from '@/components/SectionWrapper';
import { products } from '@/constants';

export default function BestSellingCategory() {
  return (
    <SectionWrapper title="Best Selling Products" subtitle="This Month">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          name={product.name}
          image={product.image}
          price={product.price}
          originalPrice={product.originalPrice}
          discount={product.discount}
          rating={product.rating}
          numOfRatings={product.numOfRatings}
        />
      ))}
    </SectionWrapper>
  );
}
