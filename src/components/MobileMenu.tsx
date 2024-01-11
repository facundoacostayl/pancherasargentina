import { useMobileMenu } from "../mobileMenuContext/MobileMenuProvider";

import { Logo } from "../ui/logo";
import { Link } from "react-router-dom";

export const MobileMenu = () => {
  const { mobileMenuState, toggleMobileMenu } = useMobileMenu();

  return (
    <div
      className={`${
        mobileMenuState ? "top-0 left-0" : "top-0 -left-full"
      } lg:hidden fixed w-full h-full bg-white transition-all duration-[400ms] z-50`}
    >
      <div className="">
        <span
          onClick={() => toggleMobileMenu()}
          className="absolute right-7 top-7 text-2xl text-gray-600 font-semibold cursor-pointer transition ease-in-out duration-200 hover:text-gray-400"
        >
          X
        </span>
        <div className="py-14">
          <h3 className="p-2 mb-5 text-2xl text-gray-800 font-medium">Menú</h3>
          <ul onClick={() => toggleMobileMenu()} className="text-lg">
            <li className="border-t border-gray-200 p-3">
              <Link to="/">Inicio</Link>
            </li>
            <li className="border-t border-gray-200 p-3">
              <Link to="/shop">Tienda</Link>
            </li>
            <li className="border-t border-gray-200 p-3">
              <Link to="/contacto">Contacto</Link>
            </li>
            <li className="border-y border-gray-200 p-3">
              <Link to="/sobre-nosotros">Sobre Nosotros</Link>
            </li>
          </ul>
        </div>
        <div className="w-full mx-auto absolute bottom-5">
          <Logo></Logo>
        </div>
      </div>
    </div>
  );
};
