export const ShoppingCart = () => {
  return (
    <div className="w-3/12 h-full z-50 fixed top-0 right-0 bg-white border border-gray-500">
      <div className="relative w-full py-16 px-3">
        <span className="fixed right-7 top-7 text-2xl font-semibold cursor-pointer transition ease-in-out duration-200 hover:text-gray-400">
          X
        </span>
        <h2 className="border-b border-gray-200 py-5 text-center text-4xl font-semibold">
          Tus Productos
        </h2>
        <ul className="overflow-y-scroll py-8 border-b-8 border-black">
          <li className="px-2 pb-7">
            <div className="flex justify-between">
              <div className="w-full flex items-center gap-2">
                <div className="relative ">
                  <img
                    className="max-w-[80px] max-h-[70px] lg:max-w-[100px] lg:max-h-[90px] rounded-lg"
                    src="https://proviamoalmacengourmet.com/img/IMG-20210304-WA0004.jpg"
                    alt="producto"
                  />
                  <span className="absolute top-0 left-0 h-[25px] px-1 m-[0.5] text-center border border-black rounded-full bg-white cursor-pointer transition ease-in-out duration-200 hover:text-white hover:bg-black">
                    X
                  </span>
                </div>

                <div className="">
                  <h4 className="text-xl">Nombre Producto</h4>
                  <p className="text-gray-500 text-lg">Cantidad</p>
                  <input className="w-1/4 border rounded-lg" type="number" />
                </div>
              </div>

              <p className="text-gray-400 text-lg font-semibold mt-auto">
                $45000
              </p>
            </div>
          </li>
          <li className="px-2 pb-7">
            <div className="flex justify-between">
              <div className="w-full flex items-center gap-2">
                <div className="relative ">
                  <img
                    className="max-w-[80px] max-h-[70px] lg:max-w-[100px] lg:max-h-[90px] rounded-lg"
                    src="https://proviamoalmacengourmet.com/img/IMG-20210304-WA0004.jpg"
                    alt="producto"
                  />
                  <span className="absolute top-0 left-0 h-[25px] px-1 m-[0.5] text-center border border-black rounded-full bg-white cursor-pointer transition ease-in-out duration-200 hover:text-white hover:bg-black">
                    X
                  </span>
                </div>

                <div className="">
                  <h4 className="text-xl">Nombre Producto</h4>
                  <p className="text-gray-500 text-lg">Cantidad</p>
                  <input className="w-1/4 border rounded-lg" type="number" />
                </div>
              </div>

              <p className="text-gray-400 text-lg font-semibold mt-auto">
                $45000
              </p>
            </div>
          </li>
        </ul>
        <div className="py-2 flex justify-evenly items-center">
          <p className="text-lg font-semibold">Subtotal:</p>
          <p className="text-2xl text-gray-500 font-semibold">$45000.00</p>
        </div>
        <div className="py-10 flex flex-col items-center justify-center gap-5">
          <p className="font-semibold text-lg cursor-pointer transition ease-in-out duration-200 hover:text-gray-400">
            VOLVER A LA TIENDA
          </p>
          <p className="p-3 font-semibold text-lg text-white border-2 border-black rounded-full bg-black cursor-pointer transition ease-in-out duration-200 hover:text-black hover:bg-white">
            Finalizar Compra
          </p>
        </div>
      </div>
    </div>
  );
};
