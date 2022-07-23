import React, { createContext, ReactNode, useContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

// >> INTERFACES
interface ShoppingCartProviderProps {
  children: ReactNode;
}
interface ShoppingCart {
  getItemQuantity: (id: number) => void;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: CartItem[];
}

// >> TYPE
type CartItem = {
  id: number;
  quantity: number;
};

// >> Create context of ShoppingCart
const ShoppingCartContext = createContext<ShoppingCart>({
  getItemQuantity: (_id: number) => {},
  increaseCartQuantity: (_id: number) => {},
  decreaseCartQuantity: (_id: number) => {},
  removeFromCart: (_id: number) => {},
  cartItems: [],
});

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

// >> MAIN SHOPPING CART PROVIDER FUNCTION

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  // >> -- States --

  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shoppingCart', []);

  // >> FUNCTIONS

  // ? --- Get the items quantity ---
  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  // ? --- Increase an item quantity from the cart ---
  const increaseCartQuantity = (id: number) => {
    // Pour actualiser le cartItem
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  // ? --- Deacrease an item quantity from the cart ---
  const decreaseCartQuantity = (id: number) => {
    // Pour actualiser le cartItem
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  // ? --- REMOVE AN ITEM ---
  const removeFromCart = (id: number) => {
    console.log("delete de l'id" + id);
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
export default ShoppingCartContext;
ShoppingCartProvider;
