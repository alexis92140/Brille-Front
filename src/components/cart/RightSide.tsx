import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ShoppingCartContext from '../../Context/ShoppingCartContext';
import IProduct from '../../interfaces/IProduct';
import GoToTop from '../globals/GoToTop';
import CartItem from './CartItem';

// ---------------------------------------------------------------

const RightSide = () => {
  // >> USE PARAMS
  return (
    <div className="right">
      {/* Right part of the Cart component */}
      <h1>Mon Panier</h1>
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
