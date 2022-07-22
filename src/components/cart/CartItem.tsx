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

  // const [selectedItem, setSelectedItem] = useState<IProduct>();
  const [products, setProducts] = useState<IProduct[]>([]);

  // >> USE PARAMS
  // const { id } = useParams();

  // >> ALL THE "SHOPPINGCARTCONTEXT" FUNCTIONS

  const { cartItems, removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useContext(ShoppingCartContext);

  // const increaseQuantity = () => {
  //   setQuantity((prevNum) => prevNum + 1);
  // };

  // const decreaseQuantity = () => {
  //   setQuantity((prevNum) => prevNum - 1);
  //   quantity === 1 && setQuantity(1);
  // };

  // >> VARIABLES
  // from the shoppingcartcontext to get the items
  const shippingPrice = 2.99;
  const doubleShipping = shippingPrice * 2;
  // const bagStock = 12 - quantity + 1;
  // const subTotal = bagPrice * quantity;
  // const Total = quantity < 3 ? subTotal + shippingPrice : subTotal + doubleShipping;

  // >> AXIOS

  useEffect(() => {
    // We'll get all items from the database
    const getAllProducts = async () => {
      let url: string = `${import.meta.env.VITE_API_URL}/api/products`;

      const { data } = await axios.get<IProduct[]>(url, {
        withCredentials: true,
      });
      setProducts(data);
    };
    getAllProducts();
  }, []);

  console.log(products);
  return (
    <div className="cartItem">
      {products && (
        <>
          {cartItems.length > 0 ? (
            <>
              {/* ----- CARD ITEM ----- */}
              <div className="cartItem__wrapper">
                <Paper elevation={3}>
                  <div className="cartItem__productInfos">
                    {/* <img src={} alt="" /> */}

                    <div>
                      {/* <h4>{products[0].id}</h4> */}
                      {/* <p>Sac en pépin de pomme</p> */}
                      <p>{cartItems[0].id} €</p>
                      {/* <p>Stock: {bagStock}</p> */}
                    </div>

                    {/* Increase & Decrease quantity buttons */}
                    <div className="cartItem__productInfos__icons">
                      <Fab
                        size="small"
                        aria-label="remove"
                        onClick={() => decreaseCartQuantity(cartItems[0].id)}>
                        <RemoveIcon />
                      </Fab>
                      <p>{cartItems[0].quantity}</p>
                      <Fab
                        size="small"
                        aria-label="add"
                        onClick={() => increaseCartQuantity(cartItems[0].id)}>
                        <AddIcon />
                      </Fab>
                    </div>
                  </div>
                  <div
                    className="cartItem__productInfos__icons__bin"
                    onClick={() => removeFromCart(cartItems[0].id)}>
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
                {/* <p>{subTotal} €</p> */}
              </div>

              <div className="cartItem__productInfos__amountInfos">
                <p>Frais de Livraison</p>
                {/* <p>{quantity >= 3 ? doubleShipping : shippingPrice} €</p> */}
              </div>

              <div className="cartItem__productInfos__amountInfos">
                <p>TOTAL</p>
                {/* <p>{Total}€</p> */}
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
        </>
      )}
    </div>
  );
};

export default CartItem;
