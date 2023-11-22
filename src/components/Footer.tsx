import { Logo } from "../ui/logo";

export const Footer: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center py-3 bg-slate-100 border-y border-slate-300">
        <Logo></Logo>
      </div>
      <div className="bg-slate-200">
        <div className="">
          <ul className="flex flex-col gap-3 py-5 text-center text-lg border-b border-gray-950">
            <li>Inicio</li>
            <li>Pancheras</li>
            <li>Carros Pancheros</li>
            <li>Contacto</li>
            <li>Quienes Somos</li>
          </ul>
          <div className="py-5 text-gray-800 text-md font-medium flex flex-col items-center gap-3">
            <p>+541133434342</p>
            <p>mggastronomia@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
