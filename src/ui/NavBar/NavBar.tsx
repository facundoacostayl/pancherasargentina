type Props = {
  children: React.ReactNode;
};

export const NavBar: React.FC<Props> = ({ children }) => {
  return (
    <nav className="hidden lg:block w-full z-50 p-2 bg-orange-500 rounded-t-md">
      <div className="md:w-[90%] lg:w-80% mx-auto flex justify-between items-center">
        {children}
      </div>
    </nav>
  );
};
