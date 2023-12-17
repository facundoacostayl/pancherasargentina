import { ShoppingCartContext } from "./ShoppingCartContext";
import { useContext, useEffect, useState } from "react";
import { Product } from "./types";

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const ShoppingCartProvider = ({ children }: Props) => {
  const [shoppingCartState, setShoppingCartState] = useState<boolean>(false);
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")!);
    if (products) {
      setProductList(products);
    }
  }, []);

  const toggleShoppingCart = () => {
    setShoppingCartState(!shoppingCartState);
  };

  const values = {
    toggleShoppingCart,
    productList,
  };

  return (
    <ShoppingCartContext.Provider value={values}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
