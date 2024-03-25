import { useState } from "react";

import { ShoppingCart } from "../components/ShoppingCart";
import { MobileMenu } from "../components/MobileMenu";
import { Top } from "../components/Top";
import { NavBar } from "../ui/NavBar";
import { Footer } from "../components/Footer";
import { ProductList } from "../components/ProductList";

export const Shop = () => {
  const [productTypeState, setProductTypeState] = useState<string>();

  const changeProductTypeState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductTypeState(e.target.value);
  };

  return (
    <div className="">
      <ShoppingCart></ShoppingCart>
      <MobileMenu></MobileMenu>
      <div className="app main">
        <Top></Top>
        <NavBar></NavBar>
        <div className="py-3 lg:py-5 px-2 lg:px-0 flex flex-col lg:flex-row justify-between">
          <h1 className="mb-5 lg:mb-0 text-4xl text-gray-600 font-medium">
            Tienda
          </h1>

          <div className="mb-2 lg:mb-0 flex gap-2 lg:gap-5">
            <div className="w-full flex items-center">
              <label
                className="w-full block text-center text-xs lg:text-sm text-gray-500 font-medium"
                htmlFor="productType-select"
              >
                Ordenar por
              </label>
              <select
                className="rounded-md border border-gray-200 p-2 lg:px-4 lg:py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                name="price-select"
                id="price-select"
              >
                <option value="best-sellers">Más Vendidos</option>
                <option value="cheaper">Menor Precio</option>
                <option value="expensive">Mayor Precio</option>
                {productTypeState != "carro" && (
                  <>
                    <option value="electric">Eléctricas</option>
                    <option value="gas">A Gas</option>
                  </>
                )}
              </select>
            </div>
            <div className="w-2/3 lg:w-full flex items-center">
              <label
                className="hidden lg:block text-center text-xs lg:text-sm text-gray-500 font-medium"
                htmlFor="productType-select"
              >
                Tipo de Producto
              </label>
              <select
                className="lg:w-full rounded-md border border-gray-200 p-2 lg:px-4 lg:py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                name="productType-select"
                id="productType-select"
                onChange={(e) => changeProductTypeState(e)}
              >
                <option value="">Mostrar Todo</option>
                <option value="panchera">Pancheras</option>
                <option value="carro">Carros Pancheros</option>
              </select>
            </div>
          </div>
        </div>

        <ProductList></ProductList>
      </div>
      <Footer></Footer>
    </div>
  );
};
