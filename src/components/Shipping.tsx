export const Shipping: React.FC = () => {
  return (
    <div>
      <h2 className="py-8 text-center text-gray-700 text-3xl font-bold">
        - Comprá con seguridad -
      </h2>
      <div className="w-full flex justify-between gap-5">
        <div className="rounded-md h-52 w-full relative background-">
          <img
            className="h-full w-full rounded-md"
            src="https://i.ibb.co/tZ5fQYV/mercadopagocard.jpg"
            alt="mercadopagocard"
          />
          <div className="w-full text-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
            <h3 className="mb-3 text-white font-bold text-4xl">
              Compras seguras
            </h3>
            <ul className="ml-4 text-left text-white text-lg font-medium">
              <li> - Aboná mediante MercadoPago</li>
              <li> - Tarjetas de débito y crédito</li>
              <li> - Efectivo en locales seleccionados</li>
            </ul>
          </div>
        </div>
        <div className="rounded-md h-52 w-full relative background-">
          <img
            className="h-full w-full rounded-md"
            src="https://i.ibb.co/V9f6fd5/shippingcard-2.webp"
            alt="shippingcard"
          />
          <div className="w-full text-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
            <h3 className="mb-3 text-white font-bold text-4xl">
              Envíos a todo el país
            </h3>
            <h3 className="mb-3 text-white font-semibold text-xl">
              O retirá en nuestra fábrica en Castelar, GBA
            </h3>
          </div>
        </div>
        <div className="rounded-md h-52 w-full relative background-">
          <img
            className="h-full w-full rounded-md"
            src="https://i.ibb.co/n0m6Kwn/guaranteecard-1.webp"
            alt="guaranteecard"
          />
          <div className="w-full text-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
            <h3 className="mb-3 text-white font-bold text-4xl">
              Garantía directa
            </h3>
            <h3 className="mb-3 text-white font-semibold text-xl">
              con Pancheras Argentina
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
