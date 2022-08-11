import { createContext, ReactNode, useContext, useState } from "react";
import { Coffee } from "../components/CoffeeCard";

interface CartContextProps {
  addItemToCart: (item: Coffee) => void;
  removeItemFromCart: (itemId: number) => void;
  cartItems: Coffee[];
  cleanCart: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextProps);

function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Coffee[]>([]);

  const handleAddItemToCart = (item: Coffee) => {
    const indexExistItem = cartItems.findIndex((x) => x.id === item.id);

    if (indexExistItem < 0) {
      setCartItems((state) => [...state, item]);
      return;
    }

    setCartItems((state) => {
      state[indexExistItem].amount += item.amount;

      return state;
    });
  };

  const handleRemoveItemFromCart = (itemId: number) => {
    setCartItems((state) => state.filter((item) => item.id !== itemId));
  };

  const handleCleanCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart: handleAddItemToCart,
        removeItemFromCart: handleRemoveItemFromCart,
        cleanCart: handleCleanCart,
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
