import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const ShoppingCartIcon: React.FC = () => {
  return (
    <div className="w-[65px] h-[45px]">
      <div className="w-full h-full flex justify-center items-center rounded-md">
        <div className="flex items-center justify-center w-full h-full bg-orange-500 rounded-l-md">
          <FontAwesomeIcon
            className="text-xl text-white"
            icon={faShoppingCart}
          ></FontAwesomeIcon>
        </div>
        <div className="w-3/4 h-full flex items-center justify-center border rounded-r-md ">
          <p className="text-lg font-medium">{0}</p>
        </div>
      </div>
    </div>
  );
};
