import { ShoppingCart } from "../components/ShoppingCart";
import { Top } from "../components/Top";
import { Footer } from "../components/Footer";

export const Shop = () => {
  return (
    <div className="">
      <ShoppingCart></ShoppingCart>
      <div className="app">
        <Top></Top>
      </div>
      <Footer></Footer>
    </div>
  );
};
