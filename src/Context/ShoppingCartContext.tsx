import React, { createContext, useState } from 'react';
import { useContext } from 'react';

interface ShoppingCart {
  addItem: (id: number) => void;
  deleteItem: (id: number) => void;
  cartItems: CartItem[];
}

type CartItem = {
  id: number;
  quantity: number;
};

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

const ShoppingCartContext = createContext<ShoppingCart>({
  addItem: (id) => {},
  deleteItem: (id) => {},
  cartItems: [],
});

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  // variable d'état contenant un tableau d'objet de mon panier
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  // fonction pour ajouter un objet au panier, à partir de son ID
  const addItem = (idItem: number) => {
    // je met dans mon cartItem mon nouvel objet et tout ce qu'il ya déja dans cartItems
    setCartItems([{ id: idItem, quantity: 1 }, ...cartItems]);

    // on ajoute au panier (cartItems) une nouvelle case qui va contenir
    //{
    // id: idItem,
    // quantity: 1
    //}
  };
  // fonction pour supprimer un objet du panier, à partir de son ID
  const deleteItem = (idItem: number) => {
    // on va supprimer l'objet qui a id:idItem
    // find sur cet id
    // slice
  };

  console.log(cartItems);

  return (
    <ShoppingCartContext.Provider value={{ addItem, deleteItem, cartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
ShoppingCartProvider;
