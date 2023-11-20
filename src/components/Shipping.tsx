export const Shipping: React.FC = () => {
  return (
    <div>
      <h2 className="py-8 text-center text-gray-700 text-3xl font-bold">
        - Comprá Tranquilo -
      </h2>
      <div className="w-full flex justify-between gap-5">
        <div className="rounded-md h-52 w-full relative background-">
          <img
            className="h-full w-full rounded-md"
            src="https://i.ibb.co/tZ5fQYV/mercadopagocard.jpg"
            alt="mercadopagocard"
          />
          <div className="w-full text-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
            <h3 className="mb-3 text-white font-bold text-3xl">
              Compras seguras con MercadoPago
            </h3>
            <ul className="ml-1 text-left text-white text-lg font-medium">
              <li> - Tarjetas de débito y crédito</li>
              <li> - Efectivo en locales seleccionados</li>
            </ul>
          </div>
        </div>
        <div className="border border-blue-400 h-52 w-full"></div>
        <div className="border border-blue-400 h-52 w-full"></div>
      </div>
    </div>
  );
};
