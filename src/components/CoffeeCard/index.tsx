import { Minus, Plus } from "phosphor-react";

type Coffee = {
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
  handleQuantity: (id: number) => void;
  handleAddToCart: (id: number) => void;
};

export function CoffeeCard({ coffee, handleAddToCart, handleQuantity }: Props) {
  const { description, id, name, price, types, image, amount } = coffee;

  const totalPrice = amount * price;

  const formattedPrice = totalPrice.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div key={id}>
      <div>
        <img src={image} alt={name} />

        <div>
          {types.map((type) => (
            <div key={`${id} - ${type}`}>
              <p>{type}</p>
            </div>
          ))}
        </div>

        <h4>{name}</h4>

        <p>{description}</p>

        <div>
          <h3>{formattedPrice}</h3>

          <div>
            <div>
              <button>
                <Minus />
              </button>
              <p>{amount}</p>
              <button>
                <Plus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
