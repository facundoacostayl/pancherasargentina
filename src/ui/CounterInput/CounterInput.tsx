export const CounterInput = () => {
  return (
    <form className="w-full mx-auto">
      <label
        htmlFor="quantity-input"
        className="block mb-2 text-sm font-medium text-gray-500"
      >
        Cantidad:
      </label>
      <div className="relative flex items-center w-full">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="text"
          id="quantity-input"
          data-input-counter
          aria-describedby="helper-text-explanation"
          className="border-y border-gray-300 h-11 text-center text-gray-900 text-base block w-full py-2.5 outline-none"
          placeholder="1"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
      <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500">
        Por favor, seleccione un número de unidades de entre 1 y 5.
      </p>
    </form>
  );
};
