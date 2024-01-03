import { ShoppingCart } from "../components/ShoppingCart";
import { MobileMenu } from "../components/MobileMenu";
import { Top } from "../components/Top";
import { NavBar } from "../ui/NavBar";
import { Footer } from "../components/Footer";
import { CounterInput } from "../ui/CounterInput";
import { AddButton } from "../ui/button";

export const Product = () => {
  return (
    <div className="">
      <ShoppingCart></ShoppingCart>
      <MobileMenu></MobileMenu>
      <div className="app">
        <Top></Top>
        <NavBar></NavBar>

        <div className="lg:py-9 bg-white">
          <div className="mx-auto lg:flex lg:justify-center lg:items-center gap-5">
            <img
              className=""
              src="https://i.ibb.co/SPSCpFJ/glpanchera5.webp"
              alt="product"
            />
            <div className="lg:w-3/4 px-4">
              <div className="mb-5">
                <h2 className="mb-1 text-3xl lg:text-4xl text-gray-700 font-bold">
                  Panchera Hot Doggie
                </h2>
                <p className="text-xl lg:text-2xl text-gray-600">$54.000</p>
              </div>
              <div className="flex flex-col gap-4">
                <CounterInput></CounterInput>
                <AddButton></AddButton>
              </div>
              <div className="py-5 lg:w-2/4">
                <p className="text-gray-500 font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  explicabo praesentium sint laborum alias placeat cupiditate
                  tempore dolorum suscipit dolor magnam, natus quidem nihil
                  atque facilis itaque consequatur illum pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
