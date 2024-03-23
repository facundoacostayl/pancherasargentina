import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faShop,
  faPhone,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

export const NavBar: React.FC = () => {
  return (
    <nav className="hidden lg:block w-full z-50 p-2 bg-blue-950">
      <div className="md:w-[90%] lg:w-80% mx-auto flex justify-between items-center">
        <ul className="w-full flex justify-between text-lg text-white font-medium">
          <li>
            <Link
              className="flex items-center gap-3 hover:text-gray-200 transition-all duration-100"
              to="/"
            >
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
              <p>Inicio</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-3 hover:text-gray-200 transition-all duration-100"
              to="/shop"
            >
              <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
              <p>Tienda</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-3 hover:text-gray-200 transition-all duration-100"
              to="/contacto"
            >
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              <p>Contacto</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-3 hover:text-gray-200 transition-all duration-100"
              to="/sobre-nosotros"
            >
              <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
              <p>Sobre Nosotros</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
