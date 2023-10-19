export const Preview: React.FC = () => {
  return (
    <div className="p-2">
      <h2 className="py-8 text-center text-gray-800 text-3xl font-bold">
        - Nuestros Productos (Envíos AMBA e interior) -
      </h2>
      <div className="flex">
        <div className="w-1/3 border border-gray-200 ">
          <div className="w-full p-4 ">
            <div className="object-contain h-2/3">
              <img
                className="h-full w-full"
                src="https://i.ibb.co/x7z1m2r/33627cbc-06de-41fd-9293-974d5bf238d1-1.jpg"
                alt="panchera"
              />
            </div>
            <h4>
              Panchera con bandeja calienta pan SP20 ELECTRICA 20 superpanchos
              Bajo consumo
            </h4>
            <p>$37900</p>
          </div>
        </div>
        <div className="w-1/3 border border-gray-200 ">
          <div className="w-full p-4">
            <div className="object-contain h-2/3">
              <img
                className="h-full w-full"
                src="https://i.ibb.co/MMBBYf3/carro-ambulante-para-perritos-calientes-2194761z0-00000067.jpg"
                alt="panchera"
              />
            </div>
            <h4>Panchera 35 super con calienta pan SP35 GAS</h4>
            <p>$37900</p>
          </div>
        </div>
        <div className="w-1/3 border border-gray-200 ">
          <div className="w-full p-4">
            <div className="object-contain h-2/3">
              <img
                className="h-full w-full"
                src="https://i.ibb.co/cYJ1fNx/panchera2.jpg"
                alt="panchera"
              />
            </div>
            <h4>Mueble y/o Carro panchero categoría II / Con toldo</h4>
            <p>$250000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
