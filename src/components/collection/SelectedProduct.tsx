import React, { useState } from 'react';

import GoToTop from '../globals/GoToTop';

const SelectedProduct = () => {
  const [color, setColor] = useState('firstPage');

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
          <button type="button" className="buttonCart">
            AJOUTER
          </button>
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default SelectedProduct;
