import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

//import { useShoppingCart } from "../../shoppingCartContext/ShoppingCartProvider";

export const ProductCard: React.FC = () => {
  //const { addProductToShoppingCart } = useShoppingCart();

  return (
    <li key={1} className="p-2 border">
      <Link to="/producto">
        <div className="text-center">
          <div className="mx-5 mb-2 pb-4 border-b">
            <img
              src="https://i.ibb.co/SPSCpFJ/glpanchera5.webp"
              alt="product.image en src"
            />
            <h4 className="text-xl text-blue-900">Panchera Pancheraza</h4>
          </div>
          <p className="text-2xl text-orange-500 font-medium">$45.000</p>
          <div className="inline-block border rounded-xl p-3 mt-2 mb-1 text-gray-800 hover:bg-gray-700 hover:text-white transition-all duration-200">
            <FontAwesomeIcon
              className="text-3xl"
              icon={faBagShopping}
            ></FontAwesomeIcon>
          </div>
        </div>
      </Link>
    </li>
  );
};
