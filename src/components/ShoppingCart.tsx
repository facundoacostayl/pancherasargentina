import { useShoppingCart } from "../shoppingCartContext/ShoppingCartProvider";

import { Link } from "react-router-dom";

//UI
import { Overlay } from "../ui/overlay";
import { CounterInput } from "../ui/CounterInput";

export const ShoppingCart = () => {
  const {
    shoppingCartState,
    toggleShoppingCart,
    shoppingCartProductList,
    removeProductFromShoppingCart,
  } = useShoppingCart();

  return (
    <div>
      <div
        className={`${
          shoppingCartState ? "top-0 right-0" : "top-0 -right-full"
        } fixed w-4/5 lg:w-3/12 h-full z-50 bg-white border border-gray-500 transition-all duration-[400ms]`}
      >
        <div className="relative w-full py-16 px-3">
          <span
            onClick={() => toggleShoppingCart()}
            className="absolute right-7 top-7 text-2xl text-gray-600 font-semibold cursor-pointer transition ease-in-out duration-200 hover:text-gray-400"
          >
            X
          </span>
          <h2 className="border-b border-gray-200 py-5 text-center text-3xl text-gray-600 lg:text-4xl font-semibold">
            Tus Productos
          </h2>
          <ul className="overflow-y-scroll py-8 border-b-8 border-blue-300">
            {shoppingCartProductList ? (
              shoppingCartProductList.map((p) => {
                return (
                  <li key={p.id} className="lg:px-2 pb-7">
                    <div className="flex justify-between">
                      <div className="w-full flex items-center gap-2">
                        <div className="relative ">
                          <img
                            className="max-w-[80px] max-h-[70px] lg:max-w-[100px] lg:max-h-[90px] rounded-lg"
                            src={p.image}
                            alt="producto"
                          />
                          <span
                            onClick={() => removeProductFromShoppingCart(p.id)}
                            className="absolute top-0 left-0 h-[25px] px-1 m-[0.5] text-center border border-black rounded-full bg-white cursor-pointer transition ease-in-out duration-200 hover:text-white hover:bg-black"
                          >
                            X
                          </span>
                        </div>

                        <div className="">
                          <h4 className="text-base text-gray-600 lg:text-xl whitespace-nowrap">
                            {p.name}
                          </h4>
                          <CounterInput
                            currentProductQuantity={p.quantity!}
                          ></CounterInput>
                        </div>
                      </div>

                      <p className="text-gray-400 text-lg font-semibold mt-auto ml-[-15px] lg:ml-0">
                        ${p.price}
                      </p>
                    </div>
                  </li>
                );
              })
            ) : (
              <p className="text-center text-base text-gray-600">
                No hay productos en el carrito
              </p>
            )}
          </ul>
          <div className="py-2 flex justify-evenly items-center">
            <p className="text-base text-gray-600 lg:text-lg font-semibold">
              Subtotal:
            </p>
            <p className="text-xl lg:text-2xl text-gray-400 font-semibold">
              $45000.00
            </p>
          </div>
          <div className="py-10 flex flex-col items-center justify-center gap-5">
            <Link
              to="/shop"
              onClick={() => toggleShoppingCart()}
              className="font-semibold text-base text-gray-600 lg:text-lg cursor-pointer transition ease-in-out duration-200 hover:text-gray-400"
            >
              VOLVER A LA TIENDA
            </Link>
            <p className="p-3 font-semibold text-base lg:text-lg text-white border-2 border-blue-300 rounded-full bg-blue-300 cursor-pointer transition ease-in-out duration-200 hover:text-blue-300 hover:bg-white">
              Finalizar Compra
            </p>
          </div>
        </div>
      </div>
      <Overlay
        shoppingCartState={shoppingCartState}
        onDisplayCart={() => toggleShoppingCart()}
      ></Overlay>
    </div>
  );
};
