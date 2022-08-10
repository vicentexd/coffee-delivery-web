import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <div className="flex flex-row justify-between items-center h-28 mx-40 py-8">
      <div>
        <img src="../../../src/assets/Logo.png" />
      </div>

      <div className="flex gap-3">
        <button className="flex flex-row p-2 gap-1 bg-purpleLight rounded-md items-center h-10">
          <MapPin weight="fill" color="#8047F8" size={20} />
          <p className="text-regularS text-purpleDark font-roboto ">
            Rio Claro - SP
          </p>
        </button>

        <button className="flex justify-center items-center bg-yellowLight h-10 w-10 rounded-md ">
          <ShoppingCart color="#C47F17" size={20} weight="fill" />
        </button>
      </div>
    </div>
  );
}
