import { createContext } from "react";

type MobileMenuContextProps = {
  toggleMobileMenu: VoidFunction;
};

export const MobileMenuContext = createContext<MobileMenuContextProps>(
  {} as MobileMenuContextProps
);
