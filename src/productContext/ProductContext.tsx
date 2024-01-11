import { createContext } from "react";
import { Product } from "../types/product.type";

type ProductContextProps = {
  getProducts: VoidFunction;
  productList: Product[];
};

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);
