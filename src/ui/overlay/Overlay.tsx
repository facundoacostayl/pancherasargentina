type Props = {
  onDisplayCart: VoidFunction;
  shoppingCartState: boolean;
};

export const Overlay: React.FC<Props> = ({
  onDisplayCart,
  shoppingCartState,
}) => {
  return (
    <div
      onClick={onDisplayCart}
      className={`${
        shoppingCartState ? "fixed" : "hidden"
      } w-[200vw] h-[200vh] top-0 left-0 bottom-0 right-0 m-auto z-40 bg-black/25`}
    ></div>
  );
};
