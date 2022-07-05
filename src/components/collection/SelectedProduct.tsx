import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react';
// import de toastify
import { toast, ToastContainer } from 'react-toastify';

import GoToTop from '../globals/GoToTop';

const SelectedProduct = () => {
  const [color, setColor] = useState('firstPage');
  //ajouter la notif avec le message souhaité
  const notify = () => toast('Produit ajouté au panier!');

  return (
    <div className="Page">
      <div className={color}>
        <img id="selectedbag" src="/assets/images/bluebag.png" alt="product" />
      </div>

      {/* ICI ON PEUT SE FAIRE UN MAP NON LA TEAM ? */}
      <div className="secondPage">
        <div className="description">
          <h4 className="title">Le sac Océan</h4>
          <p className="type">Sac en pépin de pomme</p>
          <p className="price">200 EUR</p>
          <div className="buttonColored">
            <button
              type="button"
              className="pinkButton"
              onClick={() => setColor('firstPagePink')}
            />
            <button
              type="button"
              className="blueButton"
              onClick={() => setColor('firstPage')}
            />
            <button
              type="button"
              className="yellowButton"
              onClick={() => setColor('firstPageSand')}
            />
          </div>
          {/* ici ajout de toasty en onclick */}
          <button onClick={notify} type="button" className="buttonCart">
            AJOUTER
          </button>
          {/* ici import du composant  */}
          <ToastContainer />
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default SelectedProduct;
