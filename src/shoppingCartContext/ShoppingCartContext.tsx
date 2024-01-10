import { createContext } from "react";
import { Product } from "../types/product.type";

type ShoppingCartContextProps = {
  shoppingCartState: boolean;
  toggleShoppingCart: VoidFunction;
  productList: Product[];
  addProductToShoppingCart: (
    id: Product["id"],
    name: Product["name"],
    price: Product["price"],
    image: Product["image"]
  ) => void;
};

export const ShoppingCartContext = createContext<ShoppingCartContextProps>(
  {} as ShoppingCartContextProps
);
