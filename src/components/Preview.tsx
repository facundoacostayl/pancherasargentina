import { Link } from "react-router-dom";

export const Preview: React.FC = () => {
  return (
    <div>
      <h2 className="py-8 px-2 lg:px-0 text-center text-gray-700 text-2xl lg:text-3xl font-bold">
        - Nuestros Productos (Envíos AMBA e interior) -
      </h2>
      <div className="w-full grid grid-cols-2 gap-2 px-2 lg:px-0 lg:flex lg:gap-4 lg:justify-between">
        <div className="lg:w-1/4 h-full border border-gray-300 rounded-md">
          <Link to="/producto">
            <img
              className="h-full w-full rounded-tl-md rounded-tr-md"
              src="https://i.ibb.co/2KyFhHV/panchera-SP16.webp"
              alt="panchera"
            />
          </Link>
        </div>
        <div className="lg:w-1/4 h-full border border-gray-300 rounded-md">
          <Link to="/producto">
            <img
              className="h-full w-full rounded-tl-md rounded-tr-md"
              src="https://i.ibb.co/Yy9tcNz/panchera-SP25.webp"
              alt="panchera"
            />
          </Link>
        </div>
        <div className="lg:w-1/4 h-full border border-gray-300 rounded-md">
          <Link to="/producto">
            <img
              className="h-full w-full rounded-tl-md rounded-tr-md"
              src="https://i.ibb.co/n3Y0GLL/pancherasp2002t.webp"
              alt="panchera"
            />
          </Link>
        </div>
        <div className="lg:w-1/4 h-full border border-gray-300 rounded-md">
          <Link to="/producto">
            <img
              className="h-full w-full rounded-tl-md rounded-tr-md"
              src="https://i.ibb.co/3czhfwt/pancherasp2014.webp"
              alt="panchera"
            />
          </Link>
        </div>
      </div>
      <div className="py-7">
        <div className="m-auto w-[150px] cursor-pointer transition-[.2s] hover:bg-blue-800 bg-blue-500 rounded-md text-center font-medium text-white text-xl">
          <div className="">
            <Link to="/shop">Ver Todo</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
