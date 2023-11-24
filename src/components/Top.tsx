import { Logo } from "../ui/logo";
import { ShoppingCartIcon } from "../ui/ShoppingCartIcon";

export const Top: React.FC = () => {
  return (
    <div className="py-4">
      <div className="flex justify-between items-center">
        <Logo></Logo>
        <ShoppingCartIcon></ShoppingCartIcon>
      </div>
    </div>
  );
};
