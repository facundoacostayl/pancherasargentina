import { createContext } from "react";

type ShoppingCartContextProps = {
  toggleShoppingCart: boolean;
  loadProducts: VoidFunction;
};

export const ShoppingCartContext = createContext<ShoppingCartContextProps>(
  {} as ShoppingCartContextProps
);
