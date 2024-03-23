import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <div className="lg:w-[300px] cursor-pointer">
        <img
          className="w-[200px] lg:w-[300px] h-[25px] lg:h-full object-fill"
          src="https://ik.imagekit.io/7qey5t4qq/PancherasArgentina%20Web/logopancheras.webp?updatedAt=1711231522870"
          alt="logo"
        />
      </div>
    </Link>
  );
};
