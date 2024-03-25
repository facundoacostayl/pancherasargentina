//COMPONENTS
import { ShoppingCart } from "../components/ShoppingCart";
import { MobileMenu } from "../components/MobileMenu";
import { Top } from "../components/Top";
import { Hero } from "../components/Hero";
import { Preview } from "../components/Preview";
import { Shipping } from "../components/Shipping";
import { Footer } from "../components/Footer";
import { NavBar } from "../ui/NavBar";

export const Home = () => {
  return (
    <div>
      <ShoppingCart></ShoppingCart>
      <MobileMenu></MobileMenu>
      <div className="app main">
        <Top></Top>
        <div className="border border-gray-100 rounded-md">
          <NavBar></NavBar>
          <Hero></Hero>
        </div>
        <Preview></Preview>
        <Shipping></Shipping>
      </div>
      <Footer></Footer>
    </div>
  );
};
