import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const ShoppingCartIcon: React.FC = () => {
  return (
    <div className="w-[65px] h-[45px]">
      <div className="border w-full h-full flex justify-center items-center gap-4 rounded-md">
        <div className="flex items-center justify-center bg-orange-500 w-full h-full">
          <FontAwesomeIcon
            className="text-xl text-white"
            icon={faShoppingCart}
          ></FontAwesomeIcon>
        </div>
        <div className="">
          <p className="text-center text-lg font-medium">{0}</p>
        </div>
      </div>
    </div>
  );
};
