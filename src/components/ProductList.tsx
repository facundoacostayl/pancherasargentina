import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

export const ProductList = () => {
  const currentUrl = useLocation().pathname;

  return (
    <div className="bg-white border">
      <h2 className="pt-5 pb-3 ml-2 text-4xl font-semibold text-gray-500">
        {currentUrl == "/pancheras" && "Nuestras Pancheras"}
        {currentUrl == "/carros-pancheros" && "Nuestros Carros Pancheros"}
      </h2>
      <div className="p-2">
        <ul className="lg:grid lg:grid-cols-4 gap-2">
          <li className="p-2 border">
            <Link to="/">
              <div className="text-center">
                <div className="mx-5 mb-2 pb-4 border-b">
                  <img
                    src="https://i.ibb.co/SPSCpFJ/glpanchera5.webp"
                    alt="product"
                  />
                  <h4 className="text-xl text-blue-900">
                    Panchera SP16 Simple Electrica
                  </h4>
                </div>
                <p className="text-2xl text-orange-500 font-medium">$5000,00</p>
                <div className="inline-block border rounded-xl p-3 mt-2 mb-1 text-gray-800 hover:bg-gray-700 hover:text-white transition-all duration-200">
                  <FontAwesomeIcon
                    className="text-3xl"
                    icon={faBagShopping}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </Link>
          </li>
          <li className="p-2 border">
            <Link to="/">
              <div className="text-center">
                <div className="mx-5 mb-2 pb-4 border-b">
                  <img
                    src="https://i.ibb.co/SPSCpFJ/glpanchera5.webp"
                    alt="product"
                  />
                  <h4 className="text-xl text-blue-900">
                    Panchera SP16 Simple Electrica
                  </h4>
                </div>
                <p className="text-2xl text-orange-500 font-medium">$5000,00</p>
                <div className="inline-block border rounded-xl p-3 mt-2 mb-1 text-gray-800 hover:bg-gray-700 hover:text-white transition-all duration-200">
                  <FontAwesomeIcon
                    className="text-3xl"
                    icon={faBagShopping}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </Link>
          </li>
          <li className="p-2 border">
            <Link to="/">
              <div className="text-center">
                <div className="mx-5 mb-2 pb-4 border-b">
                  <img
                    src="https://i.ibb.co/SPSCpFJ/glpanchera5.webp"
                    alt="product"
                  />
                  <h4 className="text-xl text-blue-900">
                    Panchera SP16 Simple Electrica
                  </h4>
                </div>
                <p className="text-2xl text-orange-500 font-medium">$5000,00</p>
                <div className="inline-block border rounded-xl p-3 mt-2 mb-1 text-gray-800 hover:bg-gray-700 hover:text-white transition-all duration-200">
                  <FontAwesomeIcon
                    className="text-3xl"
                    icon={faBagShopping}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </Link>
          </li>
          <li className="p-2 border">
            <Link to="/">
              <div className="text-center">
                <div className="mx-5 mb-2 pb-4 border-b">
                  <img
                    src="https://i.ibb.co/SPSCpFJ/glpanchera5.webp"
                    alt="product"
                  />
                  <h4 className="text-xl text-blue-900">
                    Panchera SP16 Simple Electrica
                  </h4>
                </div>
                <p className="text-2xl text-orange-500 font-medium">$5000,00</p>
                <div className="inline-block border rounded-xl p-3 mt-2 mb-1 text-gray-800 hover:bg-gray-700 hover:text-white transition-all duration-200">
                  <FontAwesomeIcon
                    className="text-3xl"
                    icon={faBagShopping}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </Link>
          </li>
          <li className="p-2 border">
            <Link to="/">
              <div className="text-center">
                <div className="mx-5 mb-2 pb-4 border-b">
                  <img
                    src="https://i.ibb.co/SPSCpFJ/glpanchera5.webp"
                    alt="product"
                  />
                  <h4 className="text-xl text-blue-900">
                    Panchera SP16 Simple Electrica
                  </h4>
                </div>
                <p className="text-2xl text-orange-500 font-medium">$5000,00</p>
                <div className="inline-block border rounded-xl p-3 mt-2 mb-1 text-gray-800 hover:bg-gray-700 hover:text-white transition-all duration-200">
                  <FontAwesomeIcon
                    className="text-3xl"
                    icon={faBagShopping}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
