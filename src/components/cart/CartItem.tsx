import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ShoppingCartContext from '../../Context/ShoppingCartContext';
import IProduct from '../../interfaces/IProduct';

const CartItem = () => {
  // >> STATES

  const [selectedItem, setSelectedItem] = useState<IProduct>();
  const [quantity, setQuantity] = useState<number>(1);

  // >> USE PARAMS
  const { id } = useParams();

  // >> ALL THE "SHOPPINGCARTCONTEXT" FUNCTIONS

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
  } = useContext(ShoppingCartContext);

  const increaseQuantity = () => {
    setQuantity((prevNum) => prevNum + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevNum) => prevNum - 1);
    quantity === 1 && setQuantity(1);
  };

  // >> VARIABLES
  // from the shoppingcartcontext to get the items
  const ItemSelected = cartItems.length;
  const shippingPrice = 2.99;
  const doubleShipping = shippingPrice * 2;
  const bagPrice = 200;
  const bagStock = 12 - quantity + 1;
  const subTotal = bagPrice * quantity;
  const Total = quantity < 3 ? subTotal + shippingPrice : subTotal + doubleShipping;

  // >> AXIOS

  useEffect(() => {
    const getAddedItem = async () => {
      let url: string = `${import.meta.env.VITE_API_URL}/api/products/${id}`;

      const { data } = await axios.get<IProduct>(url, {
        withCredentials: true,
      });
      setSelectedItem(data);
      console.log(data);
    };
    getAddedItem();
  }, [id]);

  return (
    <div className="cartItem">
      {!ItemSelected ? (
        <>
          {/* ----- CARD ITEM ----- */}
          <div className="cartItem__wrapper">
            <Paper
              elevation={3}
              sx={{
                bgcolor: '#f2d2a9',
              }}>
              <div className="cartItem__productInfos">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/brille-handbags.appspot.com/o/bluebag.png?alt=media&token=fffcb6a1-3d32-49c4-90c2-1d11b5dedbff"
                  alt=""
                />

                <div>
                  <h4>CANCUN</h4>
                  <p>Sac en pépin de pomme</p>
                  <p>{bagPrice} €</p>
                  <p>Stock: {bagStock}</p>
                </div>

                {/* Increase & Decrease quantity buttons */}
                <div className="cartItem__productInfos__icons">
                  <Fab size="small" aria-label="remove" onClick={decreaseQuantity}>
                    <RemoveIcon />
                  </Fab>
                  <p>{quantity}</p>
                  <Fab size="small" aria-label="add" onClick={increaseQuantity}>
                    <AddIcon />
                  </Fab>
                </div>
              </div>
              <div className="cartItem__productInfos__icons__bin">
                <i>
                  <DeleteIcon />
                </i>
              </div>
            </Paper>
            <hr />
          </div>

          {/* ----- ALL THE PRICES ----- */}
          <div className="cartItem__productInfos__amountInfos">
            <p>Sous-total</p>
            <p>{subTotal} €</p>
          </div>

          <div className="cartItem__productInfos__amountInfos">
            <p>Frais de Livraison</p>
            <p>{quantity >= 3 ? doubleShipping : shippingPrice} €</p>
          </div>

          <div className="cartItem__productInfos__amountInfos">
            <p>TOTAL</p>
            <p>{Total}€</p>
          </div>
        </>
      ) : (
        <div className="cartItem__productInfos__emptyCart">
          <h4>Votre panier est actuellement vide.</h4>
          <Link to="/collection">
            <Button variant="outlined" sx={{ width: 300, padding: 1, margin: 2 }}>
              Continuer mes achats
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartItem;
