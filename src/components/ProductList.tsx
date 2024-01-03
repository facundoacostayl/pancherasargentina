import { useLocation } from "react-router-dom";

import { ProductCard } from "../ui/productCard";

export const ProductList = () => {
  const currentUrl = useLocation().pathname;

  return (
    <div className="bg-white border">
      <h2 className="pt-5 pb-3 ml-2 text-4xl font-semibold text-gray-500">
        {currentUrl == "/pancheras" && "Nuestras Pancheras"}
        {currentUrl == "/carros-pancheros" && "Nuestros Carros Pancheros"}
      </h2>
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
