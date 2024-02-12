import { createContext } from "react";
import { Product } from "../types/product.type";

type ShoppingCartContextProps = {
  shoppingCartState: boolean;
  toggleShoppingCart: VoidFunction;
  productQuantity: Product["quantity"];
  getProductQuantity: (id: Product["id"]) => void;
  shoppingCartProductList: Product[];
  addProductToShoppingCart: (
    id: Product["id"],
    name: Product["name"],
    price: Product["price"],
    image: Product["image"]
  ) => void;
  removeProductFromShoppingCart: (id: Product["id"]) => void;
  shoppingCartProductsQuantity: number;
};

export const ShoppingCartContext = createContext<ShoppingCartContextProps>(
  {} as ShoppingCartContextProps
);
