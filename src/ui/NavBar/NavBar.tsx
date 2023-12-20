import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <nav className="hidden lg:block w-full z-50 p-2 bg-orange-500 rounded-t-md">
      <div className="md:w-[90%] lg:w-80% mx-auto flex justify-between items-center">
        <ul className="w-full flex justify-between text-lg text-white font-semibold">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/pancheras">Pancheras</Link>
          </li>
          <li>
            <Link to="/carros-pancheros">Carros Pancheros</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/about">Sobre Nosotros</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
