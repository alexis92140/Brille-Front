import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartContext from '../../Context/ShoppingCartContext';
import IProduct from '../../interfaces/IProduct';
import axios from 'axios';

const CartItem = () => {
  // >> USE PARAMS
  const { id } = useParams();

  // >> STATES

  const [selectedItem, setSelectedItem] = useState<IProduct>();

  // >> ALL THE "SHOPPINGCARTCONTEXT" FUNCTIONS

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
  } = useContext(ShoppingCartContext);

  // >> AXIOS

  useEffect(() => {
    const getAddedItem = async () => {
      let url: string = `${import.meta.env.VITE_API_URL}/api/products/${id}`;

      const { data } = await axios.get<IProduct>(url, {
        withCredentials: true,
      });
      setSelectedItem(data);
    };
    getAddedItem();
  }, [id]);

  // >> VARIABLES
  // from the shoppingcartcontext to get the items
  const quantity = cartItems.length;

  const shippingPrice = 3;

  return (
    <div className="cartItem">
      <Paper elevation={3}>
        <div className="cartItem__productInfos">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/brille-handbags.appspot.com/o/bluebag.png?alt=media&token=fffcb6a1-3d32-49c4-90c2-1d11b5dedbff"
            alt=""
          />
          <div>
            <h4>CANCUN</h4>
            <p>Sac en pépin de pomme</p>
            <p>200 €</p>
            <p>Stock: 2</p>
          </div>
          <div className="cartItem__productInfos__icons">
            <Fab size="small" aria-label="add">
              <RemoveIcon />
            </Fab>
            {quantity ? quantity : 0}
            <Fab size="small" aria-label="add">
              <AddIcon />
            </Fab>
          </div>
        </div>
      </Paper>
      <hr />
      <div>
        <p>Sous-total</p>
        <p>200 €</p>
      </div>
      <div>
        <p>Frais de Livraison</p>
        <p>{shippingPrice} €</p>
      </div>
    </div>
  );
};

export default CartItem;
