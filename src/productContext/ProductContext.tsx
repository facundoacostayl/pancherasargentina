import { createContext } from "react";
import { Product } from "../types/product.type";

type ProductContextProps = {
  getProducts: VoidFunction;
  productList: Product[];
  getProduct: (id: Product["id"]) => void;
  currentProduct: Product;
};

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);
