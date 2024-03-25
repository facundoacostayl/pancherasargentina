import { Logo } from "../ui/logo";
import { ShoppingCartIcon } from "../ui/ShoppingCartIcon";
import { MenuIcon } from "../ui/MenuIcon";

export const Top: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[60px] lg:h-[70px] bg-white border-b z-30 flex items-center">
      <div className="w-full max-w-screen-md lg:max-w-screen-lg xl:max-w-[1600px] 2xl:max-w-[1600px] m-auto px-[10px] md:px-[20px] 2xl:px-0 flex items-center justify-between">
        <MenuIcon></MenuIcon>
        <Logo></Logo>
        <ShoppingCartIcon></ShoppingCartIcon>
      </div>
    </div>
  );
};
