import { useShoppingCart } from "../../shoppingCartContext/ShoppingCartProvider";

type props = {
  currentProductQuantity: number;
  currentProductId: number;
};

export const CounterInput: React.FC<props> = ({
  currentProductQuantity,
  currentProductId,
}: props) => {
  const { modifyProductQuantity } = useShoppingCart();

  return (
    <form className="w-full lg:w-1/4 mx-auto lg:mx-0">
      <label
        htmlFor="quantity-input"
        className="block mb-1 text-sm font-medium text-gray-500"
      >
        Cantidad:
      </label>
      <div className="relative flex items-center w-3/4">
        <button
          onClick={() => modifyProductQuantity(currentProductId, false)}
          type="button"
          id="decrement-button"
          data-input-counter-decrement="quantity-input"
          className="p-3 lg:h-9 border border-r-0 border-gray-300 rounded-s-lg"
        >
          <svg
            className="w-2 h-2 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="text"
          id="quantity-input"
          data-input-counter
          aria-describedby="helper-text-explanation"
          className="w-7 lg:h-9 text-center border-y border-gray-300 text-gray-800 text-base block py-1 lg:py-2.5 outline-none"
          value={currentProductQuantity}
          readOnly={true}
          required
        ></input>
        <button
          onClick={() => modifyProductQuantity(currentProductId, true)}
          type="button"
          id="increment-button"
          data-input-counter-increment="quantity-input"
          className="p-3 lg:h-9 border border-l-0 border-gray-300 rounded-e-lg"
        >
          <svg
            className="w-2 h-2 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
