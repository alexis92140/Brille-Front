import DeleteIcon from '@mui/icons-material/Delete';
import PaymentsIcon from '@mui/icons-material/Payments';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import ShoppingCartContext from '../../Context/ShoppingCartContext';
import IProduct from '../../interfaces/IProduct';
import GoToTop from '../globals/GoToTop';

// ---------------------------------------------------------------

const RightSide = () => {
  // >> USE PARAMS
  const { id } = useParams();

  // >> STATES
  const [cartProduct, setCartProduct] = useState<IProduct>();
  const [quantity, setQuantity] = useState<string>('1');

  // >> FUNCTIONS
  const handleChange = (e: SelectChangeEvent) => {
    setQuantity(e.target.value || '1');
  };

  // >> VARIABLES
  const { cartItems } = useContext(ShoppingCartContext);
  console.log(cartItems);

  // >> AXIOS

  useEffect(() => {
    const getCartItem = async () => {
      let url: string = `${import.meta.env.VITE_API_URL}/api/products/${id}`;

      const { data } = await axios.get<IProduct>(url, {
        withCredentials: true,
      });
      setCartProduct(data);
      console.log(data);
    };
    getCartItem();
    console.log(cartProduct);
  }, [id]);

  return (
    <div className="right">
      {/* Right part of the Cart component */}
      {cartItems.length > 0 && (
        <>
          <div className="right__wrapper">
            {/* First part of the Cart component */}
            <div className="right__wrapper__firstPart">
              <div className="right__wrapper__firstPart__firstContainer">
                <h4 className="right__wrapper__firstPart__firstContainer__title">
                  Résumé de la commande
                </h4>
              </div>
              <div className="right__wrapper__firstPart__firstContainer">
                <p className="right__wrapper__firstPart__firstContainer__article">
                  1 article
                </p>

                <p className="right__wrapper__firstPart__firstContainer__price">200 €</p>
              </div>
              <div className="right__wrapper__firstPart__secondContainer">
                <p>TOTAL</p>
                <p>€</p>
              </div>
              <div className="separator"> </div>
            </div>
          </div>

          {/* ---- Second part of the Cart component ---- */}
          <div className="right__wrapper__secondPart__container">
            <div className="right__wrapper__secondPart__container__firstWrapper">
              {/* ---- Product image ---- */}
              <img
                src="/assets/images/bluebag.png"
                alt="Sac à main de la marque BRILLE"
                className="right__wrapper__secondPart__container__firstWrapper__bagImage"
              />
              {/* ---- Product description and quantity ---- */}
              <div className="right__wrapper__secondPart__container__firstWrapper__textContent">
                <p>Sac ocean</p>

                <div className="right__wrapper__secondPart__container__firstWrapper__secondParagraph">
                  <p>Quantité : {quantity}</p>

                  {/* ---- Product final price ---- */}
                  <div>
                    <p className="right__wrapper__secondPart__container__firstWrapper__secondParagraph__textContent">
                      200€
                    </p>
                  </div>
                </div>
              </div>
              <div className="right__wrapper__secondPart__container__firstWrapper__secondParagraph__wrapper">
                <>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    sx={{
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <FormControl sx={{ m: 3, width: '100%' }} size="small">
                      <InputLabel id="demo-select-small">N°</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={quantity}
                        label="Number"
                        onChange={handleChange}>
                        <MenuItem value="">
                          <em>1</em>
                        </MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                      </Select>
                    </FormControl>
                  </IconButton>
                  <div className="right__wrapper__secondPart__container__firstWrapper__trash">
                    <DeleteIcon id="trash" fontSize="inherit" />
                  </div>
                </>
              </div>
            </div>

            <div className="right__wrapper__secondPart__secondWrapper">
              {/* ---- Call to action buttons ---- */}
              <Link to="/collection">
                <button
                  className="right__wrapper__secondPart__secondWrapper__buttons"
                  type="button">
                  <span>CONTINUER MES ACHATS</span>

                  <span>
                    <ShoppingBagIcon />
                  </span>
                </button>
              </Link>

              <button
                className="right__wrapper__secondPart__secondWrapper__buttons"
                type="button">
                <span>FINALISER MA COMMANDE</span>
                <span>
                  <PaymentsIcon />
                </span>
              </button>
            </div>
          </div>
        </>
      )}
      <GoToTop />
    </div>
  );
};

export default RightSide;
