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
  const [productList, setProductList] = useState<Product[]>([
    { id: "", name: "", description: "", price: 0 },
  ]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")!);
    if (products) {
      setProductList(products);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList));
  }, [productList]);

  const toggleShoppingCart = () => {
    setShoppingCartState(!shoppingCartState);
  };

  const addProductToShoppingCart = (
    id: Product["id"],
    name: Product["name"],
    price: Product["price"],
    image: Product["image"]
  ) => {
    const product = { id, name, price, image };
    setProductList((current) => [...current, product]);
  };

  const values = {
    shoppingCartState,
    toggleShoppingCart,
    productList,
    addProductToShoppingCart,
  };

  return (
    <ShoppingCartContext.Provider value={values}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
