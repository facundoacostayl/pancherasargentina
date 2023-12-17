import { Logo } from "../ui/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center py-3 bg-slate-100 border-y border-slate-300">
        <Logo></Logo>
      </div>
      <div className="bg-slate-200">
        <div className="">
          <ul className="flex flex-col gap-3 py-5 text-center text-lg border-b border-gray-950">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/shop">Pancheras</Link>
            </li>
            <li>
              <Link to="/shop">Carros Pancheros</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/about">Sobre Nosotros</Link>
            </li>
          </ul>
          <div className="py-5 text-gray-800 text-md font-medium flex flex-col items-center gap-3">
            <p>
              <FontAwesomeIcon className="mr-1" icon={faWhatsapp} />
              +541133434342
            </p>
            <p>
              <FontAwesomeIcon className="mr-1" icon={faEnvelope} />
              mggastronomia@gmail.com
            </p>
          </div>
          <div className="mx-auto w-1/6 pt-2 pb-5 flex justify-evenly items-center">
            <img
              className="w-[50px] h-auto"
              src="https://i.ibb.co/5GsdbBg/Mercadopago-logo-1.webp"
              alt="mercadopagologo"
            />
            <img
              className="w-[50px] h-auto"
              src="https://i.ibb.co/d5MW82P/visa-logo-1.webp"
              alt="visalogo"
            />
            <img
              className="w-[50px] h-auto"
              src="https://i.ibb.co/6sknS77/mastercard-logo-7.webp"
              alt="mastercardlogo"
            />
            <img
              className="w-[50px] h-auto"
              src="https://i.ibb.co/rx3Yzd4/amex.webp"
              alt="amexlogo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
