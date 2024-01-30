import { ShoppingCartContext } from "./ShoppingCartContext";
import { useContext } from "react";
export const useShoppingCart = () => useContext(ShoppingCartContext);
