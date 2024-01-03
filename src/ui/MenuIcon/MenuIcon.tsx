import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useMobileMenu } from "../../mobileMenuContext/MobileMenuProvider";

export const MenuIcon: React.FC = () => {
  const { toggleMobileMenu } = useMobileMenu();

  return (
    <div onClick={() => toggleMobileMenu()}>
      <FontAwesomeIcon
        className="lg:hidden text-2xl text-gray-700"
        icon={faBars}
      ></FontAwesomeIcon>
    </div>
  );
};
