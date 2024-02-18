import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../shoppingCartContext/ShoppingCartProvider";

import { SpinnerCircularFixed } from "spinners-react";

import { ShoppingCart } from "../components/ShoppingCart";
import { MobileMenu } from "../components/MobileMenu";
import { Top } from "../components/Top";
import { NavBar } from "../ui/NavBar";
import { Footer } from "../components/Footer";

import { Shipping } from "../types/shipping.type";
import { ShippingLocation } from "../types/shipping.location";

export const Checkout = () => {
  const [shippingData, setShippingData] = useState<Shipping>({
    clientName: "",
    email: "",
    phone: "",
    shippingType: "",
  });
  const [readyToPayState, setReadyToPayState] = useState<boolean>(false);
  const [payWithShippingState, setPayWithShippingState] =
    useState<boolean>(false);
  const [formWithErrorsState, setFormWithErrorsState] =
    useState<boolean>(false);
  const [formWithShippingTypeErrorState, setFormWithShippingTypeErrorState] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [shippingLocation, setShippingLocation] = useState<ShippingLocation>({
    locationName: "",
    shippingPrice: 0,
  });

  const { shoppingCartProductList, shoppingCartTotal } = useShoppingCart();

  const errorsDisplayRef = useRef<null | HTMLDivElement>(null);
  const shippingErrorsDisplayRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!payWithShippingState) {
      setShippingData((data) => ({
        ...data,
        ["city"]: "",
      }));

      setShippingLocation({ locationName: "", shippingPrice: 0 });
    }
  }, [payWithShippingState]);

  useEffect(() => {
    setLoading(false);
  }, [readyToPayState]);

  const sanitizeValue = (value: string, name: string) => {
    let newValue = "";

    if (name === "clientName") {
      newValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    if (name === "email") {
      newValue = value.replace(
        /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
        ""
      );
    }

    if (newValue.length > 0) return newValue;
    return value;
  };

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const cleanValue = sanitizeValue(
      e.currentTarget.value,
      e.currentTarget.name
    );

    if (e.currentTarget.name === "city") {
      getShippingLocation(e.currentTarget.value);
    }

    setShippingData({
      ...shippingData,
      [e.currentTarget.name]: cleanValue,
    });
  };

  const onSubmitShippingData = () => {
    const clientName = shippingData.clientName;
    const email = shippingData.email;
    const phone = shippingData.phone;
    const shippingType = shippingData.shippingType;

    const address = shippingData.address;
    const door = shippingData.door;
    const city = shippingData.city;

    if (
      !clientName ||
      !email ||
      !phone ||
      !shippingType ||
      (payWithShippingState && !address) ||
      (payWithShippingState && !door) ||
      (payWithShippingState && !city)
    ) {
      //toast.error("Hay campos incompletos o incorrectos");

      if (!shippingType) {
        setFormWithShippingTypeErrorState(true);
        shippingErrorsDisplayRef.current!.scrollIntoView({
          behavior: "smooth",
        });
        return;
      }

      setFormWithShippingTypeErrorState(false);

      setFormWithErrorsState(true);
      errorsDisplayRef.current!.scrollIntoView({ behavior: "smooth" });
      return;
    }

    getReadyToPay();
  };

  const getReadyToPay = () => {
    setFormWithErrorsState(false);
    setLoading(true);
    setTimeout(() => {
      setReadyToPayState(!readyToPayState);
    }, 2000);
  };

  const togglePayWithShipping = (bool: boolean) => {
    setPayWithShippingState(bool);
  };

  const getShippingLocation = async (location: string) => {
    if (location === "") {
      setShippingLocation({ locationName: "", shippingPrice: 0 });
      return;
    }
    const response = await fetch(
      "http://localhost:8080/api/v1/shippingLocation"
    );
    const parseRes: ShippingLocation[] = await response.json();
    const locationItem = parseRes.find((l) => l.locationName === location);

    if (locationItem) {
      const locationItemName = locationItem.locationName;
      const locationItemPrice = locationItem.shippingPrice;
      setShippingLocation({
        locationName: locationItemName,
        shippingPrice: locationItemPrice,
      });
    }
  };

  return (
    <div className="">
      <ShoppingCart></ShoppingCart>
      <MobileMenu></MobileMenu>
      <div className="app">
        <Top></Top>
        <NavBar></NavBar>

        <div
          key="name"
          className="max-w-full flex flex-col items-center border-b rounded-b-md bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32"
        >
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
                  <Link
                    to="/shop"
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </Link>
                  <span className="font-semibold text-gray-900">Tienda</span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                    onClick={() => readyToPayState && setReadyToPayState(false)}
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
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
          <div className="relative px-4 pt-6">
            <p className="text-xl text-gray-700 font-medium">
              Detalles de compra
            </p>
            <p className="text-gray-400">
              Revisá tus productos. Por favor, completá el formulario de compra
              para continuar.
            </p>
            <div className="max-h-[300px] overflow-scroll mt-8 space-y-3 rounded-lg border bg-white px-2 py-3 sm:px-6">
              {shoppingCartProductList.length ? (
                shoppingCartProductList.map((p) => {
                  return (
                    <div
                      key={p.id}
                      className="w-full flex flex-row flex-between px-2 lg:px-0"
                    >
                      <div className="w-full flex flex-row rounded-lg bg-white">
                        <img
                          className="h-14 w-16 lg:h-20 lg:w-24 lg:m-2 rounded-md border object-cover object-center"
                          src="https://i.ibb.co/SPSCpFJ/glpanchera5.webp"
                          alt=""
                        />
                        <div className="flex w-full flex-col px-4 py-4">
                          <span className="text-gray-600">{p.name}</span>
                          <p className="text-lg text-gray-700 font-semibold">
                            ${p.price * p.quantity!}
                          </p>
                        </div>
                      </div>
                      <div className="my-auto">
                        <p className="text-gray-400">x{p.quantity}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-gray-500">No hay productos en el carrito</p>
              )}
            </div>

            <div
              className={`${
                readyToPayState && "opacity-25 pointer-events-none"
              } ${
                loading && "opacity-25 pointer-events-none"
              } transition-all duration-300`}
            >
              <p
                ref={shippingErrorsDisplayRef}
                className={`${
                  !formWithShippingTypeErrorState
                    ? "text-gray-700"
                    : "py-2 pl-2 text-white bg-red-400"
                } mt-8 text-lg text-gray-700 font-medium`}
              >
                {!formWithShippingTypeErrorState
                  ? "Tipo de Entrega"
                  : "Por favor, seleccione un tipo de entrega"}
              </p>
              <form className="mt-5 grid gap-3">
                <div className="relative">
                  <input
                    onClick={() => togglePayWithShipping(true)}
                    onChange={(e) => onChangeHandler(e)}
                    value="Envío por Correo"
                    className="peer hidden"
                    id="correo"
                    type="radio"
                    name="shippingType"
                  />
                  <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                  <label
                    className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                    htmlFor="correo"
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
                    onClick={() => togglePayWithShipping(false)}
                    onChange={(e) => onChangeHandler(e)}
                    value="Retiro en Fábrica"
                    className="peer hidden"
                    id="retiro"
                    type="radio"
                    name="shippingType"
                  />
                  <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                  <label
                    className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                    htmlFor="retiro"
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
            ref={errorsDisplayRef}
            className="mt-10 bg-gray-50 px-4 pt-6 lg:mt-0"
          >
            {formWithErrorsState && (
              <div className="py-2 pl-2 mb-2 bg-red-400 text-white font-medium">
                <p>Hay campos incompletos o incorrectos</p>
              </div>
            )}
            <div
              className={`${readyToPayState && "hidden"} ${
                loading && "opacity-25"
              } transition-all duration-300`}
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
                  className="mt-4 mb-2 block text-sm text-gray-500 font-medium"
                >
                  Tu E-mail
                </label>
                <div className="relative">
                  <input
                    onChange={(e) => onChangeHandler(e)}
                    value={shippingData.email}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="tucorreo@gmail.com"
                    maxLength={50}
                  />
                </div>
                <label
                  htmlFor="clientName"
                  className="mt-4 mb-2 block text-sm text-gray-500 font-medium"
                >
                  Tu Nombre
                </label>
                <div className="relative">
                  <input
                    onChange={(e) => onChangeHandler(e)}
                    value={shippingData.clientName}
                    type="text"
                    id="clientName"
                    name="clientName"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Tu nombre completo"
                    maxLength={50}
                  />
                </div>
                <label
                  htmlFor="phone"
                  className="mt-4 mb-2 block text-sm text-gray-500 font-medium"
                >
                  Teléfono de Contacto
                </label>
                <div className="flex">
                  <div className="relative w-full lg:w-7/12 flex-shrink-0">
                    <input
                      onChange={(e) => onChangeHandler(e)}
                      value={shippingData.phone}
                      type="text"
                      id="phone"
                      name="phone"
                      className="w-full rounded-md border border-gray-200 px-2 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="01175872145"
                      maxLength={20}
                    />
                  </div>
                </div>
                <div
                  className={`${
                    payWithShippingState
                      ? "opacity-100"
                      : "opacity-25 pointer-events-none"
                  } transition-all duration-300`}
                >
                  <label
                    htmlFor="address"
                    className="mt-4 mb-2 block text-sm text-gray-500 font-medium"
                  >
                    A dónde lo enviamos?
                  </label>

                  <div className="flex flex-col gap-3 lg:gap-0 sm:flex-row">
                    <div className="relative flex-shrink-0 sm:w-7/12">
                      <input
                        onChange={(e) => onChangeHandler(e)}
                        value={shippingData.address}
                        type="text"
                        id="address"
                        name="address"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Tu Dirección"
                        maxLength={100}
                      />
                    </div>
                    <input
                      onChange={(e) => onChangeHandler(e)}
                      value={shippingData.door}
                      type="text"
                      name="door"
                      id="door"
                      className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Timbre"
                      maxLength={10}
                    />
                    <select
                      onChange={(e) => onChangeHandler(e)}
                      value={shippingLocation.locationName}
                      itemType="text"
                      name="city"
                      id="city"
                      className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">-- Localidad --</option>
                      <option value="CABA">CABA</option>
                      <option value="GBA">GBA</option>
                      <option value="Buenos Aires Interior">
                        Buenos Aires
                      </option>
                      <option value="Interior">Interior</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6 border-t border-b py-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-700">
                      Subtotal
                    </p>
                    <p className="font-semibold text-gray-700">
                      ${shoppingCartTotal}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-700">Envío</p>
                    <p className="font-semibold text-gray-700">
                      ${shippingLocation.shippingPrice}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700">Total</p>
                  <p className="text-2xl font-semibold text-gray-700">
                    ${shoppingCartTotal + shippingLocation.shippingPrice}
                  </p>
                </div>
              </div>
            </div>

            <div className={`${!readyToPayState ? "hidden" : "block"} `}>
              <p className="text-xl text-gray-700 font-medium">
                Confirmación del pedido
              </p>
              <p className="text-gray-400">
                Por favor revisa que los datos sean correctos.
              </p>
              <div className="">
                <label className="mt-4 mb-2 block text-sm text-gray-500 font-medium">
                  Tu E-mail
                </label>
                <div className="relative">
                  <p className="w-full border-y border-gray-5 px-4 py-3 pl-5 text-base font-medium text-gray-700 shadow-sm outline-none">
                    {shippingData.email}
                  </p>
                </div>
                <label className="mt-4 mb-2 block text-sm text-gray-500 font-medium">
                  Tu Nombre
                </label>
                <div className="relative">
                  <p className="w-full border-y border-gray-5 px-4 py-3 pl-5 text-base font-medium text-gray-700 shadow-sm outline-none">
                    {shippingData.clientName}
                  </p>
                </div>
                <label className="mt-4 mb-2 block text-sm text-gray-500 font-medium">
                  Teléfono de Contacto
                </label>
                <div className="flex">
                  <div className="relative w-full flex-shrink-0">
                    <p className="w-full border-y border-gray-5 px-4 py-3 pl-5 text-base font-medium text-gray-700 shadow-sm outline-none">
                      {shippingData.phone}
                    </p>
                  </div>
                </div>
                <label className="mt-4 mb-2 block text-sm text-gray-500 font-medium">
                  A dónde lo enviamos?
                </label>
                {payWithShippingState ? (
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative flex-shrink-0 sm:w-7/12">
                      <p className="w-full border-y border-gray-5 px-4 py-3 pl-5 text-base font-medium text-gray-700 shadow-sm outline-none">
                        {shippingData.address}
                      </p>
                    </div>
                    <p className="border-y border-gray-5 px-4 py-3 pl-5 text-base font-medium text-gray-700 shadow-sm outline-none sm:w-1/6">
                      {shippingData.door}
                    </p>
                    <p className="w-full border-y border-gray-5 px-4 py-3 pl-5 text-base font-medium text-gray-700 shadow-sm outline-none">
                      {shippingData.city}
                    </p>
                  </div>
                ) : (
                  <div className="relative w-full flex-shrink-0">
                    <p className="w-full border-y border-gray-5 px-4 py-3 pl-5 text-base font-medium text-gray-700 shadow-sm outline-none">
                      {shippingData.shippingType}
                    </p>
                  </div>
                )}

                <div className="mt-6 border-t border-b py-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-700">
                      Subtotal
                    </p>
                    <p className="font-semibold text-gray-700">$399.00</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-700">Envío</p>
                    <p className="font-semibold text-gray-700">$8.00</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700">Total</p>
                  <p className="text-2xl font-semibold text-gray-700">
                    $408.00
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => onSubmitShippingData()}
              className={`${
                readyToPayState && "hidden"
              } mt-4 mb-8 w-full rounded-md px-6 py-3 font-medium bg-gray-500 text-white border border-gray-300 hover:text-white hover:bg-gray-400 duration-200`}
            >
              {loading && (
                <SpinnerCircularFixed
                  className="inline-block w-full mr-2"
                  size={30}
                  thickness={170}
                  color="white"
                ></SpinnerCircularFixed>
              )}
              Continuar para el pago
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
