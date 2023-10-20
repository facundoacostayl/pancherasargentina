import { NavBar } from "../ui/NavBar";

export const Hero: React.FC = () => {
  return (
    <>
      <NavBar>
        <ul className="w-full flex justify-between text-lg text-white font-semibold">
          <li>Inicio</li>
          <li>Pancheras</li>
          <li>Carros Pancheros</li>
          <li>Contacto</li>
          <li>Quienes Somos</li>
        </ul>
      </NavBar>
      <div className="lg:max-w-[1920px]">
        <img src="https://i.ibb.co/DLDgZ5y/hero-image.webp" alt="hero-image" />
      </div>
    </>
  );
};
