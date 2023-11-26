import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const MenuIcon: React.FC = () => {
  return (
    <>
      <FontAwesomeIcon
        className="lg:hidden text-2xl text-gray-700"
        icon={faBars}
      ></FontAwesomeIcon>
    </>
  );
};
