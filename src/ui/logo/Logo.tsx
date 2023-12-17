import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <div className="flex font-bold text-xl justify-center lg:text-3xl cursor-pointer">
        <h1 className="text-orange-500">PANCHERAS</h1>
        <h1 className="text-gray-700">ARGENTINA</h1>
      </div>
    </Link>
  );
};
