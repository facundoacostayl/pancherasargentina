import { ShoppingCart } from "../components/ShoppingCart";
import { MobileMenu } from "../components/MobileMenu";
import { Top } from "../components/Top";
import { NavBar } from "../ui/NavBar";
import { Footer } from "../components/Footer";
import { ProductList } from "../components/ProductList";

export const Shop = () => {
  return (
    <div className="">
      <ShoppingCart></ShoppingCart>
      <MobileMenu></MobileMenu>
      <div className="app">
        <Top></Top>
        <NavBar></NavBar>
        <ProductList></ProductList>
      </div>
      <Footer></Footer>
    </div>
  );
};
