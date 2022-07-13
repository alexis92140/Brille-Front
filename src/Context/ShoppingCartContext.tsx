import React, { createContext, useState } from 'react';
import { useContext } from 'react';

interface ShoppingCart {
  addItem: (id: number) => void;
  deleteItem: (id: number) => void;
  modifyItem: (id: number, newQuantity: number) => void;
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
  modifyItem: (id) => {},
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
    // on ajoute au panier (cartItems) une nouvelle case qui va contenir
    //{
    // id: idItem,
    // quantity: 1
    //}
    setCartItems([{ id: idItem, quantity: 1 }, ...cartItems]);
  };
  // fonction pour supprimer un objet du panier, à partir de son ID
  const deleteItem = (idItem: number) => {
    setCartItems(cartItems.filter((item) => item.id !== idItem));
  };

  //fonction modify quantity, en paramétre quantity et IDitem

  const modifyItem = (idItem: number, newQuantity: number) => {
    // ce positioner sur le bon objet (id == idItem),
    const myItemToModify = cartItems.find((item) => item.id == idItem) || {
      id: 0,
      quantity: 0,
    };

    // modifier sa quantity en newQuantity

    myItemToModify.quantity = newQuantity;

    // le set dans cartItems
    setCartItems([myItemToModify, ...cartItems.filter((item) => item.id !== idItem)]);
  };

  console.log(cartItems);

  return (
    <ShoppingCartContext.Provider value={{ addItem, deleteItem, modifyItem, cartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
export default ShoppingCartContext;
ShoppingCartProvider;
