import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <div className="w-[200px] lg:w-[300px] cursor-pointer">
        <img
          src="https://ik.imagekit.io/7qey5t4qq/PancherasArgentina%20Web/logopancheras.webp?updatedAt=1711231522870"
          alt="logo"
        />
      </div>
    </Link>
  );
};
