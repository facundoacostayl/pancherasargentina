export const Preview: React.FC = () => {
  return (
    <div>
      <h2 className="py-8 text-center text-gray-700 text-3xl font-bold">
        - Nuestros Productos (Envíos AMBA e interior) -
      </h2>
      <div className="flex gap-4 justify-between w-full">
        <div className="w-1/4 h-full border border-gray-300 rounded-md">
          <img
            className="h-full w-full rounded-tl-md rounded-tr-md"
            src="https://i.ibb.co/2KyFhHV/panchera-SP16.webp"
            alt="panchera"
          />
        </div>
        <div className="w-1/4 h-full border border-gray-300 rounded-md">
          <img
            className="h-full w-full rounded-tl-md rounded-tr-md"
            src="https://i.ibb.co/Yy9tcNz/panchera-SP25.webp"
            alt="panchera"
          />
        </div>
        <div className="w-1/4 h-full border border-gray-300 rounded-md">
          <img
            className="h-full w-full rounded-tl-md rounded-tr-md"
            src="https://i.ibb.co/n3Y0GLL/pancherasp2002t.webp"
            alt="panchera"
          />
        </div>
        <div className="w-1/4 h-full border border-gray-300 rounded-md">
          <img
            className="h-full w-full rounded-tl-md rounded-tr-md"
            src="https://i.ibb.co/3czhfwt/pancherasp2014.webp"
            alt="panchera"
          />
        </div>
      </div>
      <div className="py-7">
        <div className="m-auto w-[150px] cursor-pointer transition-[.2s] hover:bg-blue-800 bg-blue-500 rounded-md text-center font-medium text-white text-xl">
          <div className="">Ver Todo</div>
        </div>
      </div>
    </div>
  );
};
