type Props = {
  onDisplayCart: VoidFunction;
};

export const Overlay: React.FC<Props> = ({ onDisplayCart }) => {
  return (
    <div
      onClick={onDisplayCart}
      className="w-[200vw] h-[200vh] fixed top-0 left-0 bottom-0 right-0 m-auto z-40 transition opacity duration-100 delay-[0.2s] bg-black/25"
    ></div>
  );
};
