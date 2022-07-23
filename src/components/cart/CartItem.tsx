import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import ShoppingCartContext from '../../Context/ShoppingCartContext';
import IProduct from '../../interfaces/IProduct';

const CartItem = () => {
  // >> STATES

  const [products, setProducts] = useState<IProduct[]>([]);

  // >> ALL THE "SHOPPINGCARTCONTEXT" FUNCTIONS

  const { cartItems, removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useContext(ShoppingCartContext);

  // >> VARIABLES

  // ? from the shoppingcartcontext to get the items
  const shippingPrice = 2.99;
  const shippingPriceDoubled = shippingPrice * 2;
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

  return (
    <div className="cartItem">
      {products.length && (
        <>
          {cartItems.length > 0 ? (
            <>
              {/* ----- CARD ITEM ----- */}
              <div className="cartItem__wrapper">
                {cartItems.map((cartItem, id) => (
                  <>
                    <Paper elevation={3} key={id}>
                      <div className="cartItem__productInfos">
                        <img
                          src={
                            products.find((product) => product.id === cartItem.id)
                              ?.productImage
                          }
                          alt=""
                        />

                        <div>
                          <h4>
                            {
                              products.find((product) => product.id === cartItem.id)
                                ?.productName
                            }
                          </h4>
                          <p>
                            {
                              products.find((product) => product.id === cartItem.id)
                                ?.productDesc
                            }
                          </p>
                          <p>
                            {
                              products.find((product) => product.id === cartItem.id)
                                ?.productPrice
                            }{' '}
                            €
                          </p>
                          <p>
                            Stock:
                            {
                              products.find((product) => product.id === cartItem.id)
                                ?.productStock
                            }
                          </p>
                        </div>

                        {/* --- Increase & Decrease items quantity buttons --- */}
                        <div className="cartItem__productInfos__icons">
                          <Fab
                            size="small"
                            aria-label="remove"
                            onClick={() => decreaseCartQuantity(cartItem.id)}>
                            <RemoveIcon />
                          </Fab>
                          <p>{cartItem.quantity}</p>
                          <Fab
                            size="small"
                            aria-label="add"
                            onClick={() => increaseCartQuantity(cartItem.id)}>
                            <AddIcon />
                          </Fab>
                        </div>
                      </div>

                      <div
                        className="cartItem__productInfos__icons__bin"
                        onClick={() => removeFromCart(cartItem.id)}>
                        <i>
                          <DeleteIcon />
                        </i>
                      </div>
                    </Paper>
                    <hr />
                  </>
                ))}
              </div>

              {/* ----- ALL THE PRICES ----- */}
              <div className="cartItem__productInfos__amountInfos">
                <p>Sous-Total:</p>
              </div>

              <div className="cartItem__productInfos__amountInfos">
                <p>Frais de Livraison</p>
                <p>{cartItems.length > 3 ? shippingPriceDoubled : shippingPrice} €</p>
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
