import ProductCard from '@/components/ProductCard';
import SectionWrapper from '@/components/SectionWrapper';
import { products } from '@/constants';

export default function BestSellingCategory() {
  return (
    <SectionWrapper>
      {products.map((product) => (
        <ProductCard
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
