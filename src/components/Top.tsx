import { Logo } from "../ui/logo";
import { ShoppingCartIcon } from "../ui/ShoppingCartIcon";
import { MenuIcon } from "../ui/MenuIcon";

export const Top: React.FC = () => {
  return (
    <div className="py-4">
      <div className="flex items-center justify-around lg:justify-between">
        <MenuIcon></MenuIcon>
        <Logo></Logo>
        <ShoppingCartIcon></ShoppingCartIcon>
      </div>
    </div>
  );
};
