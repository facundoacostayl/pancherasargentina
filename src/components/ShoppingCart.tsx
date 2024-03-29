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
    shoppingCartTotal,
  } = useShoppingCart();

  return (
    <div>
      <div
        className={`${
          shoppingCartState ? "top-0 right-0" : "top-0 -right-full"
        } fixed w-4/5 lg:w-2/5 xl:w-3/12 h-screen z-50 bg-white border border-gray-500 transition-all duration-[400ms]`}
      >
        <div className="relative w-full h-2/4 py-12 lg:py-16 px-3">
          <span
            onClick={() => toggleShoppingCart()}
            className="absolute right-7 top-7 text-2xl text-gray-600 font-semibold cursor-pointer transition ease-in-out duration-200 hover:text-gray-400"
          >
            X
          </span>
          <h2 className="border-b border-gray-200 py-5 text-center text-3xl text-gray-600 lg:text-4xl font-semibold">
            Tus Productos
          </h2>
          <ul className="h-full overflow-y-scroll py-8 border-b-4">
            {shoppingCartProductList ? (
              shoppingCartProductList.map((p) => {
                return (
                  <li key={p.id} className="lg:px-2 pb-7">
                    <div className="flex justify-between">
                      <div className="w-3/4 flex items-center gap-2">
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
                            currentProductId={p.id}
                          ></CounterInput>
                        </div>
                      </div>

                      <p className="text-gray-400 text-lg font-semibold mt-auto lg:ml-0">
                        ${p.price * p.quantity!}
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
              ${shoppingCartTotal}
            </p>
          </div>
          <div className="py-10 flex flex-col items-center justify-center gap-5">
            <Link
              to="/shop"
              onClick={() => toggleShoppingCart()}
              className="text-gray-600 lg:text-lg cursor-pointer transition ease-in-out duration-200 hover:text-gray-400"
            >
              Volver a la tienda
            </Link>
            <Link
              to="/checkout"
              onClick={() => toggleShoppingCart()}
              className="w-full py-2 px-3 font-medium text-center lg:text-md text-white border-2 border-blue-900 bg-blue-900 cursor-pointer hover:bg-blue-950 transition ease-in-out duration-100 "
            >
              INICIAR COMPRA
            </Link>
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
