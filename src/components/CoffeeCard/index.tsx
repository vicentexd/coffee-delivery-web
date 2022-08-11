import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useMemo, useState } from "react";
import { useCart } from "../../contexts/useCart";

export type Coffee = {
  id: number;
  name: string;
  description: string;
  price: number;
  types: string[];
  image: string;
  amount: number;
};

type Props = {
  coffee: Coffee;
};

export function CoffeeCard({ coffee }: Props) {
  const { addItemToCart } = useCart();
  const [amount, setAmount] = useState(1);

  const { description, id, name, price, types, image } = coffee;

  const handleAddItem = () => {
    setAmount((state) => state + 1);
  };

  const handleSubItem = () => {
    if (amount === 1) {
      return;
    }
    setAmount((state) => state - 1);
  };

  const handleAddItemToCart = () => {
    addItemToCart({ ...coffee, amount });
    setAmount(1);
  };

  const totalPrice = useMemo(() => amount * price, [amount]);

  return (
    <div
      key={id}
      className="flex flex-col bg-card w-64 justify-center rounded-tl-md rounded-tr-4xl rounded-bl-4xl rounded-br-md"
    >
      <div className="flex flex-col justify-center items-center">
        <img src={image} alt={name} className="w-32 h-38  -mt-5 " />

        <div className="flex justify-between items-center pt-3 gap-1">
          {types.map((type) => (
            <div
              key={`${id} - ${type}`}
              className="flex py-1 px-2  bg-yellowLight rounded-full h-5 items-center "
            >
              <p className="text-tag font-roboto text-yellowDark ">
                {type.toUpperCase()}
              </p>
            </div>
          ))}
        </div>

        <h4 className="text-titleS font-baloo2 text-subtitle mx-5 mt-4">
          {name}
        </h4>

        <p className="text-regularS font-roboto text-label text-center mt-2 mx-5">
          {description}
        </p>

        <div className="flex w-full justify-between px-6 mt-8 mb-6 gap-3">
          <div className="w-2/5">
            <p className="font-roboto text-regularS text-text">
              R$
              <span className="font-baloo2 text-titleM text-text ml-1">
                {totalPrice.toFixed(2).replace(".", ",")}
              </span>
            </p>
          </div>

          <div className="flex w-3/5 justify-between gap-2  ">
            <div className="flex w-full justify-evenly bg-button rounded-md  items-center">
              <button onClick={handleSubItem}>
                <Minus className="text-purple" />
              </button>
              <p className="text-regularM font-roboto text-title">{amount}</p>
              <button onClick={handleAddItem}>
                <Plus className="text-purple" />
              </button>
            </div>
            <button
              onClick={handleAddItemToCart}
              className="flex justify-center items-center transition-colors rounded-md bg-purpleDark hover:bg-purple w-9 h-9 p-2 "
            >
              <ShoppingCart weight="fill" size={20} color={"#F3F2F2"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
