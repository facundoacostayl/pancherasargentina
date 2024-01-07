import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useMobileMenu } from "../../mobileMenuContext/MobileMenuProvider";

export const MenuIcon: React.FC = () => {
  const { toggleMobileMenu } = useMobileMenu();

  return (
    <div className="lg:hidden" onClick={() => toggleMobileMenu()}>
      <FontAwesomeIcon
        className="text-2xl text-gray-700"
        icon={faBars}
      ></FontAwesomeIcon>
    </div>
  );
};
