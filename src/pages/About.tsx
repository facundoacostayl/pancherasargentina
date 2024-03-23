import { ShoppingCart } from "../components/ShoppingCart";
import { MobileMenu } from "../components/MobileMenu";
import { Top } from "../components/Top";
import { NavBar } from "../ui/NavBar";
import { Footer } from "../components/Footer";

export const About = () => {
  return (
    <div className="">
      <ShoppingCart></ShoppingCart>
      <MobileMenu></MobileMenu>
      <div className="app">
        <Top></Top>
        <NavBar></NavBar>
      </div>
      <div className="py-12">
        <div className="lg:w-2/4 m-auto flex flex-col items-center justify-center text-center">
          <p className="font-medium text-xl text-blue-900 mb-1">
            Sobre Nosotros
          </p>
          <h1 className="font-semibold text-6xl text-gray-700 mb-5">
            Nuestra Marca
          </h1>
          <p className="font-light text-center text-gray-600 sm:text-xl px-2 lg:px-44">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            tenetur libero recusandae ipsam, illum quod exercitationem, tempora
            quos iste, quas eveniet. Libero reprehenderit consequatur inventore
            suscipit, possimus non assumenda eum!
          </p>

          <div className="lg:w-[700px] py-5">
            <img
              className="object-fill"
              src="https://i.ibb.co/C2fq9Tj/castelar.webp"
              alt="castelar"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
