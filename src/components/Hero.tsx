export const Hero: React.FC = () => {
  return (
    <>
      <div className="lg:max-w-[1920px] lg:h-auto">
        <img
          className="hidden lg:block"
          src="https://i.ibb.co/DLDgZ5y/hero-image.webp"
          alt="hero-image"
        />
        <img
          className="lg:hidden"
          src="https://i.ibb.co/N7GtrSz/hero-mobile-1.webp"
          alt="hero-image"
        />
      </div>
    </>
  );
};
