import { Logo } from "../ui/logo";

export const MobileMenu = () => {
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-white">
      <div className="">
        <span className="absolute right-7 top-7 text-2xl text-gray-600 font-semibold cursor-pointer transition ease-in-out duration-200 hover:text-gray-400">
          X
        </span>
        <div className="py-14">
          <h3 className="p-2 mb-5 text-2xl text-gray-800 font-medium">Menú</h3>
          <ul className="text-lg">
            <li className="border-t border-gray-200 p-3">Inicio</li>
            <li className="border-t border-gray-200 p-3">Pancheras</li>
            <li className="border-t border-gray-200 p-3">Carros Pancheros</li>
            <li className="border-t border-gray-200 p-3">Contacto</li>
            <li className="border-y border-gray-200 p-3">Sobre Nosotros</li>
          </ul>
        </div>
        <div className="w-full mx-auto absolute bottom-5">
          <Logo></Logo>
        </div>
      </div>
    </div>
  );
};
