import DeleteIcon from '@mui/icons-material/Delete';
import PaymentsIcon from '@mui/icons-material/Payments';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import IconButton from '@mui/material/IconButton';
// ----- MUI Components -----
import Stack from '@mui/material/Stack';
import React from 'react';

// ! ----- Props typing -----
// interface IProps {
//   firstname: string;
//   setFirstname: (active: string) => void;
//   lastname: string;
//   setLastname: (active: string) => void;
//   email: string;
//   setEmail: (active: string) => void;
//   handleFirstname: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleLastname: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

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
            <p>200 €</p>
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
            <p>Le sac poudré</p>

            <div className="right__wrapper__secondPart__container__firstWrapper__secondParagraph">
              <p>Quantité : 1</p>

              {/* ---- Product final price ---- */}
              <p className="right__wrapper__secondPart__container__firstWrapper__secondParagraph__textContent">
                200 Eur
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

          <button
            className="right__wrapper__secondPart__secondWrapper__buttons"
            type="button">
            <span>CONTINUER MES ACHATS</span>
            <span>
              <ShoppingBagIcon />
            </span>
          </button>

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
