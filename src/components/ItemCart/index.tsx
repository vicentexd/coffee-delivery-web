import { Minus, Plus, Trash } from "phosphor-react";
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

export function ItemCart({ coffee }: Props) {
  const { addItemToCart, removeItemFromCart } = useCart();
  const [item, setItem] = useState(coffee);

  const handleAddItem = () => {
    const response = addItemToCart({ ...item, amount: 1 });

    console.log("response", JSON.stringify(response, null, 2));

    setItem(response);
  };

  const handleSubItem = () => {
    if (item.amount === 1) {
      return;
    }
    const response = addItemToCart({ ...item, amount: -1 });

    setItem(response);
  };

  const handleDeleteItem = () => {
    removeItemFromCart(item.id);
  };

  const totalPrice = useMemo(() => item.amount * item.price, [item.amount]);

  return (
    <li className="flex h-20 gap-12">
      <div className="flex  w-4/5 ">
        <div className="w-16 h-16 items-center mr-5">
          <img className="w-16 h-16" src={item.image} />
        </div>
        <div className="flex flex-1 flex-col">
          <p className="text-regularM text-subtitle font-roboto">{item.name}</p>
          <div className="flex  gap-2 justify-between">
            <div className="flex w-3/5 h-8  justify-evenly bg-button rounded-md  items-center">
              <button onClick={handleSubItem}>
                <Minus className="text-purple" />
              </button>
              <p className="text-regularM font-roboto text-title">
                {item.amount}
              </p>
              <button onClick={handleAddItem}>
                <Plus className="text-purple" />
              </button>
            </div>
            <button
              onClick={handleDeleteItem}
              className="flex justify-center items-center bg-button rounded-md p-2 "
            >
              <Trash className="text-purple" size={16} />
              <p className="text-buttonS text-text">REMOVER</p>
            </button>
          </div>
        </div>
      </div>

      <p className="text-boldM font-roboto text-text">
        {totalPrice.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </li>
  );
}
