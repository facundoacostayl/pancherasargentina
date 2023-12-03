import { ShoppingCart } from "./components/ShoppingCart";
import { Overlay } from "./ui/overlay";
import { Top } from "../src/components/Top";
import { Hero } from "../src/components/Hero";
import { Preview } from "../src/components/Preview";
import { Shipping } from "../src/components/Shipping";
import { Footer } from "../src/components/Footer";

function App() {
  return (
    <div className="">
      <Overlay></Overlay>
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
}

export default App;
