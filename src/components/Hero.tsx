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
      <div className="lg:max-w-[1920px] lg:h-auto">
        <img
          className="hidden lg:block"
          src="https://i.ibb.co/DLDgZ5y/hero-image.webp"
          alt="hero-image"
        />
        <img
          className="lg:hidden"
          src="https://i.ibb.co/gSBCxCT/hero-mobile.webp"
          alt="hero-image"
        />
      </div>
    </>
  );
};
