import { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";
import { useEffect, useState } from "react";
import { Product } from "../types/product.type";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }: Props) => {
  const [shoppingCartState, setShoppingCartState] = useState<boolean>(false);
  const [shoppingCartProductList, setShoppingCartProductList] = useState<
    Product[]
  >(JSON.parse(localStorage.getItem("shoppingCartProductList")!) || []);
  const [productQuantity, setProductQuantity] = useState<number>();
  const [shoppingCartProductsQuantity, setShoppingCartProductsQuantity] =
    useState<number>(0);

  useEffect(() => {
    localStorage.setItem(
      "shoppingCartProductList",
      JSON.stringify(shoppingCartProductList)
    );
  }, [shoppingCartProductList]);

  useEffect(() => {
    let totalOfProducts = 0;
    shoppingCartProductList.forEach((p) => {
      totalOfProducts += p.quantity!;
    });
    setShoppingCartProductsQuantity(totalOfProducts);
  }, [shoppingCartProductList]);

  const toggleShoppingCart = () => {
    setShoppingCartState(!shoppingCartState);
  };

  const getProductQuantity = (id: Product["id"]) => {
    const product = shoppingCartProductList.find((p) => p.id === id);
    if (product) setProductQuantity(product.quantity);
  };

  const addProductToShoppingCart = (
    id: Product["id"],
    name: Product["name"],
    price: Product["price"],
    image: Product["image"]
  ) => {
    const product = { id, name, price, image, quantity: 1 };
    const repeatedProduct = shoppingCartProductList.find(
      (p) => p.id === product.id
    );
    if (repeatedProduct) {
      setShoppingCartProductList((currentProductList) =>
        currentProductList.map((p) => {
          if (p.id === product.id) {
            return { ...p, quantity: p.quantity! + 1 };
          }
          return p;
        })
      );
    } else {
      setShoppingCartProductList((currentProductList) => [
        ...currentProductList,
        product,
      ]);
    }
  };

  const removeProductFromShoppingCart = (id: Product["id"]) => {
    setShoppingCartProductList((shoppingCartProductList) =>
      shoppingCartProductList.filter((p) => p.id !== id)
    );
  };

  const values = {
    shoppingCartState,
    toggleShoppingCart,
    productQuantity,
    getProductQuantity,
    shoppingCartProductList,
    addProductToShoppingCart,
    removeProductFromShoppingCart,
    shoppingCartProductsQuantity,
  };

  return (
    <ShoppingCartContext.Provider value={values}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
