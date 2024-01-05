import { useState } from "react";

import { ShoppingCart } from "../components/ShoppingCart";
import { MobileMenu } from "../components/MobileMenu";
import { Top } from "../components/Top";
import { NavBar } from "../ui/NavBar";
import { Footer } from "../components/Footer";

export const Checkout = () => {
  const [readyToPayState, setReadyToPay] = useState<boolean>(false);

  const getReadyToPay = () => {
    setReadyToPay(!readyToPayState);
  };

  return (
    <div className="">
      <ShoppingCart></ShoppingCart>
      <MobileMenu></MobileMenu>
      <div className="app">
        <Top></Top>
        <NavBar></NavBar>

        <div className="max-w-full flex flex-col items-center border-b rounded-b-md bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
          <div className="hidden lg:block lg:w-[120px]">
            <img
              src="https://i.ibb.co/V3t8ccM/mercadopagologo.webp"
              alt="mercadopago"
            />
          </div>
          <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
            <div className="relative">
              <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </a>
                  <span className="font-semibold text-gray-900">Tienda</span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    className={`${
                      readyToPayState && "hidden"
                    } flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2`}
                    href="#"
                  >
                    2
                  </a>
                  <a
                    className={`${
                      !readyToPayState && "hidden"
                    } flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700`}
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </a>
                  <span className="font-semibold text-gray-900">Envío</span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                    href="#"
                  >
                    3
                  </a>
                  <span className="font-semibold text-gray-500">Pago</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <div className="px-4 pt-8">
            <p className="text-xl text-gray-700 font-medium">
              Detalles de compra
            </p>
            <p className="text-gray-400">
              Revisá tus productos. Por favor, completa el formulario de compra
              para continuar.
            </p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src="https://i.ibb.co/SPSCpFJ/glpanchera5.webp"
                  alt=""
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold text-gray-600">
                    Panchera SP16 Simple Eléctrica
                  </span>
                  <p className="text-lg text-gray-700 font-bold">$138.99</p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src="https://i.ibb.co/SPSCpFJ/glpanchera5.webp"
                  alt=""
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold text-gray-600">
                    Panchera SP25 Simple a Gas
                  </span>
                  <p className="text-lg text-gray-700 font-bold">$240.99</p>
                </div>
              </div>
            </div>

            <div
              className={`${
                readyToPayState && "opacity-25 pointer-events-none"
              } transition-all duration-300`}
            >
              <p className="mt-8 text-lg text-gray-700 font-medium">
                Tipo de entrega
              </p>
              <form className="mt-5 grid gap-6">
                <div className="relative">
                  <input
                    className="peer hidden"
                    id="radio_1"
                    type="radio"
                    name="radio"
                    checked
                  />
                  <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                  <label
                    className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                    htmlFor="radio_1"
                  >
                    <img
                      className="w-14 object-contain"
                      src="/images/naorrAeygcJzX0SyNI4Y0.png"
                      alt=""
                    />
                    <div className="ml-5">
                      <span className="mt-2 text-gray-700 font-semibold">
                        Envío por Correo
                      </span>
                      <p className="text-slate-500 text-sm leading-6">
                        Entrega: 2-4 Days
                      </p>
                    </div>
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="peer hidden"
                    id="radio_2"
                    type="radio"
                    name="radio"
                    checked
                  />
                  <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                  <label
                    className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                    htmlFor="radio_2"
                  >
                    <img
                      className="w-14 object-contain"
                      src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                      alt=""
                    />
                    <div className="ml-5">
                      <span className="mt-2 text-gray-700 font-semibold">
                        Retiro en Fábrica (Castelar, GBA)
                      </span>
                      <p className="text-slate-500 text-sm leading-6">
                        Entrega: 2-4 Days
                      </p>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div
            className={`${
              readyToPayState && "hidden"
            } mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 transition-all duration-300`}
          >
            <p className="text-xl text-gray-700 font-medium">
              Información del Cliente
            </p>
            <p className="text-gray-400">
              Finalizá la orden completando los siguientes datos.
            </p>
            <div className="">
              <label
                htmlFor="email"
                className="mt-4 mb-2 block text-sm text-gray-700 font-medium"
              >
                Tu E-mail
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="tucorreo@gmail.com"
                />
              </div>
              <label
                htmlFor="card-holder"
                className="mt-4 mb-2 block text-sm text-gray-700 font-medium"
              >
                Tu Nombre
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="card-holder"
                  name="card-holder"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Tu nombre completo"
                />
              </div>
              <label
                htmlFor="card-no"
                className="mt-4 mb-2 block text-sm text-gray-700 font-medium"
              >
                Teléfono de Contacto
              </label>
              <div className="flex">
                <div className="relative w-7/12 flex-shrink-0">
                  <input
                    type="text"
                    id="card-no"
                    name="card-no"
                    className="w-full rounded-md border border-gray-200 px-2 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="01175872145"
                  />
                </div>
              </div>
              <label
                htmlFor="billing-address"
                className="mt-4 mb-2 block text-sm text-gray-700 font-medium"
              >
                A dónde lo enviamos?
              </label>
              <div className="flex flex-col sm:flex-row">
                <div className="relative flex-shrink-0 sm:w-7/12">
                  <input
                    type="text"
                    id="billing-address"
                    name="billing-address"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Tu Dirección"
                  />
                </div>
                <input
                  type="text"
                  name="billing-zip"
                  className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Timbre"
                />
                <select
                  itemType="text"
                  name="billing-state"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="Localidad">-- Localidad --</option>
                  <option value="Localidad">CABA</option>
                  <option value="Localidad">GBA</option>
                  <option value="Localidad">Buenos Aires</option>
                  <option value="Localidad">Interior</option>
                </select>
              </div>

              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700">Subtotal</p>
                  <p className="font-semibold text-gray-700">$399.00</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700">Envío</p>
                  <p className="font-semibold text-gray-700">$8.00</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-700">Total</p>
                <p className="text-2xl font-semibold text-gray-700">$408.00</p>
              </div>
            </div>
            <button
              onClick={() => getReadyToPay()}
              className={`${
                readyToPayState && "hidden"
              } mt-4 mb-8 w-full rounded-md px-6 py-3 font-medium bg-gray-500 text-white border border-gray-300 hover:text-white hover:bg-gray-400 duration-200`}
            >
              Continuar para el Pago
            </button>
            <button
              className={`${
                readyToPayState ? "block" : "hidden"
              } mt-4 mb-8 w-full rounded-md px-6 py-3 font-medium bg-gray-700 text-white border border-gray-300 hover:text-white hover:bg-gray-400 duration-200`}
            >
              Realizar pedido
            </button>
          </div>
          <div
            className={`${
              !readyToPayState ? "hidden" : "block"
            } mt-10 bg-gray-50 px-4 pt-8 lg:mt-0`}
          >
            <p className="text-xl text-gray-700 font-medium">
              Confirmación del pedido
            </p>
            <p className="text-gray-400">
              Por favor revisa que los datos sean correctos.
            </p>
            <div className="">
              <label
                htmlFor="email"
                className="mt-4 mb-2 block text-sm text-gray-700 font-medium"
              >
                Tu E-mail
              </label>
              <div className="relative">
                <p className="w-full border-y border-gray-5 px-4 py-3 pl-5 text-base font-medium text-gray-700 shadow-sm outline-none">
                  facundoacostayl@gmail.com
                </p>
              </div>
              <label
                htmlFor="card-holder"
                className="mt-4 mb-2 block text-sm text-gray-700 font-medium"
              >
                Tu Nombre
              </label>
              <div className="relative">
                <p className="w-full border-y border-gray-5 px-4 py-3 pl-5 text-base font-medium text-gray-700 shadow-sm outline-none">
                  Facundo Acosta
                </p>
              </div>
              <label
                htmlFor="card-no"
                className="mt-4 mb-2 block text-sm text-gray-700 font-medium"
              >
                Teléfono de Contacto
              </label>
              <div className="flex">
                <div className="relative w-full flex-shrink-0">
                  <p className="w-full border-y border-gray-5 px-4 py-3 pl-5 text-base font-medium text-gray-700 shadow-sm outline-none">
                    +541133436143
                  </p>
                </div>
              </div>
              <label
                htmlFor="billing-address"
                className="mt-4 mb-2 block text-sm text-gray-700 font-medium"
              >
                A dónde lo enviamos?
              </label>
              <div className="flex flex-col sm:flex-row">
                <div className="relative flex-shrink-0 sm:w-7/12">
                  <p className="w-full border-y border-gray-5 px-4 py-3 pl-5 text-base font-medium text-gray-700 shadow-sm outline-none">
                    Avenida Siempre Viva 1234
                  </p>
                </div>
                <p className="border-y border-gray-5 px-4 py-3 pl-5 text-base font-medium text-gray-700 shadow-sm outline-none sm:w-1/6">
                  Casa
                </p>
                <p className="w-full border-y border-gray-5 px-4 py-3 pl-5 text-base font-medium text-gray-700 shadow-sm outline-none">
                  CABA
                </p>
              </div>

              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700">Subtotal</p>
                  <p className="font-semibold text-gray-700">$399.00</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700">Envío</p>
                  <p className="font-semibold text-gray-700">$8.00</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-700">Total</p>
                <p className="text-2xl font-semibold text-gray-700">$408.00</p>
              </div>
            </div>
            <button
              onClick={() => getReadyToPay()}
              className={`${
                readyToPayState && "hidden"
              } mt-4 mb-8 w-full rounded-md px-6 py-3 font-medium bg-gray-500 text-white border border-gray-300 hover:text-white hover:bg-gray-400 duration-200`}
            >
              Continuar para el Pago
            </button>
            <button
              className={`${
                readyToPayState ? "block" : "hidden"
              } mt-4 mb-8 w-full rounded-md px-6 py-3 font-medium bg-gray-700 text-white border border-gray-300 hover:text-white hover:bg-gray-400 duration-200`}
            >
              Realizar pedido
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
