//COMPONENTS
import { ShoppingCart } from "../components/ShoppingCart";
import { Top } from "../components/Top";
import { Hero } from "../components/Hero";
import { Preview } from "../components/Preview";
import { Shipping } from "../components/Shipping";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="">
      <ShoppingCart></ShoppingCart>
      <div className="app">
        <Top></Top>
        <div className="border border-gray-100 rounded-md">
          <Hero></Hero>
        </div>
        <Preview></Preview>
        <Shipping></Shipping>
      </div>
      <Footer></Footer>
    </div>
  );
};
