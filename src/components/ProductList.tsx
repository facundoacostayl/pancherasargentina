import { useEffect } from "react";

import { useProduct } from "../productContext/ProductProvider";

import { ProductCard } from "../ui/productCard";

export const ProductList = () => {
  const { getProducts, productList } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-white border">
      <div className="p-2">
        <ul className="lg:grid lg:grid-cols-4 gap-2">
          {productList.map((p) => {
            return <ProductCard></ProductCard>;
          })}
        </ul>
      </div>
    </div>
  );
};
