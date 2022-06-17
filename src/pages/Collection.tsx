import '../sass/collection/_collection.scss';

import React from 'react';

import allProducts from '../../data/allProducts';

const Collection = () => {
  return (
    <div>
      <div className="Grid">
        {/* map du tableau de data de allProducts */}
        {allProducts &&
          allProducts.map(({ id, image, title, desc, price, color }) => (
            // condition ternaire pour le choix des backgrounds-colors des cards
            <div className={`${color} == "card1" ? "card1": "card2"`} key={id}>
              <img className="img" src={image} alt="lv" />
              <div className="paragraph">
                <p> {title}</p>
                <p className="price">{price}</p>
                <p> {desc}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Collection;
