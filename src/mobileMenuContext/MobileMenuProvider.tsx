import { MobileMenuContext } from "./MobileMenuContext";
import { useContext, useState } from "react";

export const useMobileMenu = () => {
  return useContext(MobileMenuContext);
};

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const MobileMenuProvider = ({ children }: Props) => {
  const [mobileMenuState, setmobileMenuState] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setmobileMenuState(!mobileMenuState);
  };

  const values = {
    mobileMenuState,
    toggleMobileMenu,
  };

  return (
    <MobileMenuContext.Provider value={values}>
      {children}
    </MobileMenuContext.Provider>
  );
};
