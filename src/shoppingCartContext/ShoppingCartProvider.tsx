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
  const [shoppingCartTotal, setShoppingCartTotal] = useState<number>(0);

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

  useEffect(() => {
    let total = 0;
    shoppingCartProductList.forEach((p) => {
      total += p.price * p.quantity!;
    });
    setShoppingCartTotal(total);
  }, [shoppingCartProductList]);

  const toggleShoppingCart = () => {
    setShoppingCartState(!shoppingCartState);
  };

  const getProductQuantity = (id: Product["id"]) => {
    const product = shoppingCartProductList.find((p) => p.id === id);
    if (product) setProductQuantity(product.quantity);
  };

  const modifyProductQuantity = (id: Product["id"], action: boolean) => {
    const modify = (p: Product["quantity"]) => {
      if (action) {
        return p! + 1;
      } else {
        return p! - 1;
      }
    };
    setShoppingCartProductList((currentProductList) =>
      currentProductList.map((p) => {
        if (p.id === id) {
          return { ...p, quantity: modify(p.quantity) };
        }
        return p;
      })
    );
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
      modifyProductQuantity(product.id, true);
    } else {
      setShoppingCartProductList((currentProductList) => [
        ...currentProductList,
        product,
      ]);
    }
    toggleShoppingCart();
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
    modifyProductQuantity,
    shoppingCartProductList,
    addProductToShoppingCart,
    removeProductFromShoppingCart,
    shoppingCartProductsQuantity,
    shoppingCartTotal,
  };

  return (
    <ShoppingCartContext.Provider value={values}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
