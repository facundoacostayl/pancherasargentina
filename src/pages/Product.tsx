import { useProduct } from "../productContext/ProductProvider";
import { useShoppingCart } from "../shoppingCartContext/ShoppingCartProvider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ShoppingCart } from "../components/ShoppingCart";
import { MobileMenu } from "../components/MobileMenu";
import { Top } from "../components/Top";
import { NavBar } from "../ui/NavBar";
import { Footer } from "../components/Footer";
import { CounterInput } from "../ui/CounterInput";
import { AddButton } from "../ui/button";
import { ShippingPriceComponent } from "../ui/shippingPriceComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

import { ShippingLocation } from "../types/shipping.location";

export const Product = () => {
  const { getProduct, currentProduct } = useProduct();
  const { getProductQuantity, productQuantity } = useShoppingCart();
  const { id } = useParams();
  const [shippingLocations, setShippingLocations] = useState<
    ShippingLocation[]
  >([
    {
      locationName: "",
      shippingPrice: 0,
    },
  ]);

  const getShippingPrices = async () => {
    const response = await fetch(
      "http://localhost:8080/api/v1/shippingLocation"
    );
    const parseRes = await response.json();
    setShippingLocations(parseRes);
  };

  useEffect(() => {
    getProduct(parseInt(id!));
  }, []);

  useEffect(() => {
    getProductQuantity(parseInt(id!));
  }, []);

  useEffect(() => {
    getShippingPrices();
  }, []);

  return (
    <div className="">
      <ShoppingCart></ShoppingCart>
      <MobileMenu></MobileMenu>
      <div className="app">
        <Top></Top>
        <NavBar></NavBar>

        <div className="relative lg:py-9 bg-white">
          <div className="mx-auto lg:flex lg:justify-center lg:items-center gap-5 px-4 mb-5 lg:mb-0">
            <img className="" src={currentProduct.image} alt="product" />
            <div className="lg:w-3/4 px-4">
              <div className="mb-5">
                <h2 className="mb-1 text-3xl lg:text-4xl text-gray-700 font-bold">
                  {currentProduct.name}
                </h2>
                <p className="text-xl lg:text-2xl text-gray-600">
                  ${currentProduct.price}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <CounterInput
                  currentProductQuantity={productQuantity!}
                ></CounterInput>
                <AddButton></AddButton>
              </div>
              <div className="py-5 lg:w-2/4">
                <p className="text-gray-500 font-thin">
                  {currentProduct.description}
                </p>
              </div>
            </div>
            <div className="px-4 py-6 lg:absolute lg:top-auto lg:right-0 lg:w-1/4 lg:flex lg:flex-col lg:justify-start lg:px-5 lg:py-7 bg-gray-700">
              <div className="">
                <h2 className="mb-4 text-2xl font-semibold text-white">
                  Costos de envío
                </h2>
                <FontAwesomeIcon
                  className="absolute top-1 right-1 text-xl lg:top-4 lg:right-4 text-white lg:text-3xl"
                  icon={faTruck}
                ></FontAwesomeIcon>
                <div className="flex flex-col gap-3">
                  {shippingLocations.map((item) => {
                    return (
                      <ShippingPriceComponent
                        price={item.shippingPrice}
                        location={item.locationName}
                      ></ShippingPriceComponent>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
