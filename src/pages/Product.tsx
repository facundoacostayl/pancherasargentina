import { ShoppingCart } from "../components/ShoppingCart";
import { MobileMenu } from "../components/MobileMenu";
import { Top } from "../components/Top";
import { NavBar } from "../ui/NavBar";
import { Footer } from "../components/Footer";
import { CounterInput } from "../ui/CounterInput";

export const Product = () => {
  return (
    <div className="">
      <ShoppingCart></ShoppingCart>
      <MobileMenu></MobileMenu>
      <div className="app">
        <Top></Top>
        <NavBar></NavBar>
      </div>
      <div className="">
        <div className="">
          <img src="https://i.ibb.co/SPSCpFJ/glpanchera5.webp" alt="product" />
          <div className="">
            <h2>Panchera Hot Doggie</h2>
            <p>$54.000</p>
            <CounterInput></CounterInput>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
