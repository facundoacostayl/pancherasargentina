import { createContext } from "react";
import { Product } from "./types";

type ShoppingCartContextProps = {
  toggleShoppingCart: VoidFunction;
  productList: Product[];
};

export const ShoppingCartContext = createContext<ShoppingCartContextProps>(
  {} as ShoppingCartContextProps
);
