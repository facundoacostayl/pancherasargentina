import { useShoppingCart } from "../../shoppingCartContext/ShoppingCartProvider";

type props = {
  currentProductQuantity: number;
};

export const CounterInput: React.FC<props> = ({
  currentProductQuantity,
}: props) => {
  const { modifyProductQuantity } = useShoppingCart();

  return (
    <form className="w-full lg:w-1/4 mx-auto lg:mx-0">
      <label
        htmlFor="quantity-input"
        className="block mb-2 text-sm font-medium text-gray-500"
      >
        Cantidad:
      </label>
      <div className="relative flex items-center w-3/4">
        <button
          type="button"
          id="decrement-button"
          data-input-counter-decrement="quantity-input"
          className=" border border-r-0 border-gray-300 rounded-s-lg p-3 h-11"
        >
          <svg
            className="w-3 h-3 text-gray-900 "
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
          className="w-7 h-11 text-center border-y border-gray-300 text-gray-900 text-base block py-2.5 outline-none"
          value={currentProductQuantity}
          readOnly={true}
          required
        ></input>
        <button
          type="button"
          id="increment-button"
          data-input-counter-increment="quantity-input"
          className="border border-l-0 border-gray-300 rounded-e-lg p-3 h-11"
        >
          <svg
            className="w-3 h-3 text-gray-900"
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
