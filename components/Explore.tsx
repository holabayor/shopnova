import ProductCard from '@/components/ProductCard';
import SectionWrapper from '@/components/SectionWrapper';
import { products } from '@/constants';

export default function Explore() {
  return (
    <SectionWrapper title="Best Selling Products" subtitle="Categories">
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
