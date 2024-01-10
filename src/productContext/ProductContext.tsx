import { createContext } from "react";
//import { Product } from "./types";

type ProductContextProps = {
  getProducts: VoidFunction;
};

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);
