import DeleteIcon from '@mui/icons-material/Delete';
import PaymentsIcon from '@mui/icons-material/Payments';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import IconButton from '@mui/material/IconButton';
// ----- MUI Components -----
import Stack from '@mui/material/Stack';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// ---------------------------------------------------------------

const RightSide = () => {
  return (
    <div className="right">
      {/* Right part of the Cart component */}
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
              <p>Quantité : 1</p>

              {/* ---- Product final price ---- */}
              <p className="right__wrapper__secondPart__container__firstWrapper__secondParagraph__textContent">
                200€
              </p>
            </div>
          </div>
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton aria-label="delete" size="small">
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Stack>
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
    </div>
  );
};

export default RightSide;
