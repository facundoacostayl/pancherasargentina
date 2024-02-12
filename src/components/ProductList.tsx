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
            return (
              <ProductCard
                id={p.id}
                key={p.id}
                name={p.name}
                image={p.image || "https://i.ibb.co/SPSCpFJ/glpanchera5.webp"}
                price={p.price}
              ></ProductCard>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
