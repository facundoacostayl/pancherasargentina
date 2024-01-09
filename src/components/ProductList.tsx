import { ProductCard } from "../ui/productCard";

export const ProductList = () => {
  return (
    <div className="bg-white border">
      <div className="p-2">
        <ul className="lg:grid lg:grid-cols-4 gap-2">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </ul>
      </div>
    </div>
  );
};
