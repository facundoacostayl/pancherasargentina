export const Preview: React.FC = () => {
  return (
    <div className="p-2">
      <h2 className="py-8 text-center text-gray-800 text-3xl font-bold">
        - Nuestros Productos (Envíos AMBA e interior) -
      </h2>
      <div className="flex w-full h-[400px]">
        <div className="w-1/3 h-full bg-gray-100 border border-gray-300 rounded-md">
          <div className="w-full h-5/6">
            <div className="h-full object-contain">
              <img
                className="h-full w-full rounded-tl-md rounded-tr-md"
                src="https://i.ibb.co/SPSCpFJ/glpanchera5.webp"
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
        <div className="w-1/3 h-full bg-gray-100 border border-gray-300 rounded-md">
          <div className="w-full h-5/6">
            <div className="h-full object-contain">
              <img
                className="h-full w-full rounded-tl-md rounded-tr-md"
                src="https://i.ibb.co/yP1ttJs/glpanchera4-1.webp"
                alt="panchera"
              />
            </div>
            <h4>Panchera 35 super con calienta pan SP35 GAS</h4>
            <p>$37900</p>
          </div>
        </div>
        <div className="w-1/3 h-full bg-gray-100 border border-gray-300 rounded-md">
          <div className="w-full h-5/6">
            <div className="h-full object-contain">
              <img
                className="h-full w-full rounded-tl-md rounded-tr-md"
                src="https://i.ibb.co/WHjx0cH/glpanchera3-1.webp"
                alt="panchera"
              />
            </div>
            <h4>Mueble y/o Carro panchero categoría II / Con toldo</h4>
            <p>$250000</p>
          </div>
        </div>
        <div className="w-1/3 h-full bg-gray-100 border border-gray-300 rounded-md">
          <div className="w-full h-5/6">
            <div className="h-full object-contain">
              <img
                className="h-full w-full rounded-tl-md rounded-tr-md"
                src="https://i.ibb.co/yQwkv85/glpanchera2.webp"
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
      </div>
    </div>
  );
};
