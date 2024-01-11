import { ProductContext } from "./ProductContext";
import { useContext, useState, useEffect } from "react";

import { Product } from "../types/product.type";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }: Props) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product>({
    id: "",
    name: "",
    description: "",
    image: "",
    price: 0,
  });

  useEffect(() => {
    console.log(productList);
  }, [productList]);

  const getProducts = async () => {
    const response = await fetch("http://localhost:8080/api/v1/product");
    const parseRes = await response.json();

    setProductList(parseRes);
  };

  const getProduct = async (id: Product["id"]) => {
    const response = await fetch(`http://localhost:8080/api/v1/product/${id}`);
    const parseRes = await response.json();
    setCurrentProduct(parseRes);
  };

  const values = { getProducts, productList, getProduct, currentProduct };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};
