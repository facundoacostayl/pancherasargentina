import { ShoppingCartContext } from "./ShoppingCartContext";
import { useContext, useEffect, useState } from "react";
import { Product } from "../types/product.type";

export const useShoppingCart = () => useContext(ShoppingCartContext);

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const ShoppingCartProvider = ({ children }: Props) => {
  const [shoppingCartState, setShoppingCartState] = useState<boolean>(false);
  const [shoppingCartProductList, setshoppingCartProductList] = useState<
    Product[]
  >(JSON.parse(localStorage.getItem("shoppingCartProductList")!));

  useEffect(() => {
    localStorage.setItem(
      "shoppingCartProductList",
      JSON.stringify(shoppingCartProductList)
    );
  }, [shoppingCartProductList]);

  useEffect(() => {
    localStorage.setItem(
      "shoppingCartProductList",
      JSON.stringify(shoppingCartProductList)
    );
  }, [shoppingCartProductList]);

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
    setshoppingCartProductList((current) => [...current, product]);
  };

  const values = {
    shoppingCartState,
    toggleShoppingCart,
    shoppingCartProductList,
    addProductToShoppingCart,
  };

  return (
    <ShoppingCartContext.Provider value={values}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
