import { createContext } from "react";

type MobileMenuContextProps = {
  toggleMobileMenu: VoidFunction;
  mobileMenuState: boolean;
};

export const MobileMenuContext = createContext<MobileMenuContextProps>(
  {} as MobileMenuContextProps
);
