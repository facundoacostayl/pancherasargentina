type props = {
  price: number;
  location: string;
};

export const ShippingPriceComponent: React.FC<props> = ({
  price,
  location,
}: props) => {
  return (
    <div className="w-full lg:w-full mx-auto lg:mx-0">
      <div className="p-2 border rounded-lg bg-gray-700 border-orange-100 text-white text-base block w-full lg:p-4 outline-none">
        <h4 className="mb-1 text-lg font-semibold">${price}</h4>
        <p className="font-thin text-sm">Envíos {location}</p>
      </div>
    </div>
  );
};
