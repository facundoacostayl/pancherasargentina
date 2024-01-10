import { ProductContext } from "./ProductContext";
import { useContext, useState, useEffect } from "react";

import { Product } from "../types/product.type";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }: Props) => {
  const [productList, setProductList] = useState<Product[]>();

  useEffect(() => {
    console.log(productList);
  }, [productList]);

  const getProducts = async () => {
    const response = await fetch("localhost:8080/api/v1/product");
    const parseRes = await response.json();

    setProductList(parseRes);
  };

  const values = { getProducts };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};
