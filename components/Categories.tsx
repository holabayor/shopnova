import CategoryCard from './CategoryCard';
import SectionWrapper from '@/components/SectionWrapper';
import { products } from '@/constants';

export default function CategorySection() {
  return (
    <SectionWrapper
      title="Browse By Category"
      subtitle="This Month"
      products={false}
    >
      {products.map((product) => (
        <CategoryCard
          key={product.id}
          title={product.title}
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
