import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { Coffee } from "../components/CoffeeCard";

interface CartContextProps {
  addItemToCart: (item: Coffee) => Coffee;
  removeItemFromCart: (itemId: number) => void;
  cartItems: Coffee[];
  cleanCart: () => void;
  total: number;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextProps);

function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Coffee[]>([]);

  const handleAddItemToCart = (item: Coffee): Coffee => {
    const indexExistItem = cartItems.findIndex((x) => x.id === item.id);

    if (indexExistItem < 0) {
      setCartItems((state) => [...state, item]);
      return item;
    }

    setCartItems((state) => {
      state[indexExistItem].amount += item.amount;

      return state;
    });
    return { ...item, amount: cartItems[indexExistItem].amount };
  };

  const handleRemoveItemFromCart = (itemId: number) => {
    setCartItems((state) => state.filter((item) => item.id !== itemId));
  };

  const handleCleanCart = () => {
    setCartItems([]);
  };

  const total = useMemo(
    () => cartItems.reduce((acc, curr) => acc + curr.amount * curr.price, 0),
    [cartItems]
  );

  console.log("total", JSON.stringify(total, null, 2));

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart: handleAddItemToCart,
        removeItemFromCart: handleRemoveItemFromCart,
        cleanCart: handleCleanCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };
