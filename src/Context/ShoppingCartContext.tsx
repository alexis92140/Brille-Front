import React, { createContext, ReactNode, useContext, useState } from 'react';

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
  getItemQuantity: (id: number) => {},
  increaseCartQuantity: (id: number) => {},
  decreaseCartQuantity: (id: number) => {},
  removeFromCart: (id: number) => {},
  cartItems: [],
});

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

// >> MAIN SHOPPING CART PROVIDER FUNCTION
export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  // -- STATES --
  //contient le tableau d'objet de mon panier
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  console.log(cartItems);
  // >> All the functions

  // ? Pour récuperer la quantité de produits
  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  // ? fonction pour ajouter un objet au panier, à partir de son ID
  const increaseCartQuantity = (id: number) => {
    // Pour actualiser le cartItem
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 0 }];
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

  // ? fonction pour ajouter un objet au panier, à partir de son ID
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

  // ? fonction pour supprimer un objet du panier, à partir de son ID
  const removeFromCart = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
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
