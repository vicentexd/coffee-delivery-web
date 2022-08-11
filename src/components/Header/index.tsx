import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/useCart";

export function Header() {
  const { cartItems } = useCart();

  console.log("cartItems", JSON.stringify(cartItems, null, 2));

  return (
    <div className="flex flex-row justify-between items-center h-28 px-40 py-8">
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

        <div className="relative">
          {cartItems.length > 0 && (
            <div className="flex absolute -right-2 -top-2 justify-center items-center w-5 h-5 bg-yellowDark rounded-full">
              <p className="text-boldS text-white">{cartItems.length}</p>
            </div>
          )}
          <Link to={"/checkout"}>
            <button className="flex justify-center items-center bg-yellowLight h-10 w-10 rounded-md ">
              <ShoppingCart color="#C47F17" size={20} weight="fill" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
