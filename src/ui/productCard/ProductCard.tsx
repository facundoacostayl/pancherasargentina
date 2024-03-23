import { Product } from "../../types/product.type";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

import { useShoppingCart } from "../../shoppingCartContext/ShoppingCartProvider";

interface props extends Product {}

export const ProductCard: React.FC<props> = ({
  id,
  name,
  image,
  price,
}: props) => {
  const { addProductToShoppingCart } = useShoppingCart();

  return (
    <li className="p-2 border">
      <div className="text-center">
        <Link to={`/producto/${id}`}>
          <div className="mx-5 mb-2 pb-4 border-b">
            <img src={image} alt="product.image en src" />
            <h4 className="text-xl text-gray-900">{name}</h4>
          </div>
        </Link>
        <p className="text-2xl text-gray-900 font-normal">${price}</p>
        <div
          onClick={() => addProductToShoppingCart(id, name, price, image)}
          className="flex items-center justify-center gap-3 cursor-pointer border p-3 mt-3 mb-1 text-white bg-gray-800 hover:bg-gray-900 transition-all duration-100"
        >
          <FontAwesomeIcon
            className="text-2xl"
            icon={faBagShopping}
          ></FontAwesomeIcon>
          <p>Agregar al Carrito</p>
        </div>
      </div>
    </li>
  );
};
