import React from 'react';
import { Link } from 'react-router-dom';

import allProducts from '../../data/allProducts';
import GoToTop from '../components/globals/GoToTop';

const Collection = () => {
  return (
    <div className="collection">
      <div className="collection__grid">
        {/* map du tableau de data de allProducts */}
        {allProducts &&
          allProducts.map(({ id, image, title, desc, price, color }) => (
            // condition ternaire pour le choix des backgrounds-colors des cards
            <div
              className={`${color} == "firstCard" ? "firstCard": "secondCard"`}
              key={id}>
              <Link to="/selectedProduct">
                <img id="collectionBags" src={image} alt="Sacs de la marque Brille" />
              </Link>
              <div className="paragraph">
                <p> {title}</p>
                <p className="price">{price}</p>
                <p> {desc}</p>
              </div>
            </div>
          ))}
      </div>
      <GoToTop />
    </div>
  );
};

export default Collection;
