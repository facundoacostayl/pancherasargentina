import { useMobileMenu } from "../mobileMenuContext/MobileMenuProvider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faShop,
  faPhone,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { Overlay } from "../ui/overlay";

export const MobileMenu = () => {
  const { mobileMenuState, toggleMobileMenu } = useMobileMenu();

  return (
    <div className="">
      <div
        className={`${
          mobileMenuState ? "top-0 left-0" : "top-0 -left-full"
        } lg:hidden fixed w-4/5 h-screen bg-white transition-all duration-[400ms] z-50`}
      >
        <div className="">
          <span
            onClick={() => toggleMobileMenu()}
            className="absolute right-7 top-7 text-2xl text-gray-600 font-semibold cursor-pointer transition ease-in-out duration-200 hover:text-gray-400"
          >
            X
          </span>
          <div className="py-14">
            <h3 className="p-2 mb-5 text-2xl text-gray-800 font-medium">
              Menú
            </h3>
            <ul onClick={() => toggleMobileMenu()} className="text-lg">
              <li className="flex items-center gap-2 border-t border-gray-200 px-3 py-5">
                <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                <Link to="/">Inicio</Link>
              </li>
              <li className="flex items-center gap-2 border-t border-gray-200 px-3 py-5">
                <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>

                <Link to="/shop">Tienda</Link>
              </li>
              <li className="flex items-center gap-2 border-t border-gray-200 px-3 py-5">
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>

                <Link to="/contacto">Contacto</Link>
              </li>
              <li className="flex items-center gap-2 border-t border-gray-200 px-3 py-5">
                <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>

                <Link to="/sobre-nosotros">Sobre Nosotros</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Overlay
        shoppingCartState={mobileMenuState}
        onDisplayCart={() => toggleMobileMenu()}
      ></Overlay>
    </div>
  );
};
