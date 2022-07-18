import DeleteIcon from '@mui/icons-material/Delete';
import PaymentsIcon from '@mui/icons-material/Payments';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ShoppingCartContext from '../../Context/ShoppingCartContext';
import IProduct from '../../interfaces/IProduct';
import GoToTop from '../globals/GoToTop';
import CartItem from './CartItem';

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

      <div className="right__wrapper">
        {/* First part of the Cart component */}
        <CartItem />
      </div>

      <GoToTop />
    </div>
  );
};

export default RightSide;

// {/* ---- Call to action buttons ---- */}
//           <Link to="/collection">
//             <button
//               className="right__wrapper__secondPart__secondWrapper__buttons"
//               type="button">
//               <span>CONTINUER MES ACHATS</span>

//               <span>
//                 <ShoppingBagIcon />
//               </span>
//             </button>
//           </Link>

//           <button
//             className="right__wrapper__secondPart__secondWrapper__buttons"
//             type="button">
//             <span>FINALISER MA COMMANDE</span>
//             <span>
//               <PaymentsIcon />
//             </span>
//           </button>
