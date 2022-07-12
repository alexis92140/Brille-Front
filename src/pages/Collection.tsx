import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import GoToTop from '../components/globals/GoToTop';
import IProduct from '../interfaces/IProduct';

// ----------------------------------------------------------------

const Collection = () => {
  const [allProducts, setAllProducts] = useState<IProduct[]>();

  useEffect(() => {
    const getAllProducts = async () => {
      // indispensable quand on veut utiliser async/await dans un useEffect
      let url: string = `${import.meta.env.VITE_API_URL}/api/products/`;
      const { data } = await axios.get<IProduct[]>(url, {
        withCredentials: true,
      });
      setAllProducts(data);
      console.log(data);
    };

    getAllProducts();
  }, []);

  return (
    <div className="collection">
      <div className="collection__grid">
        {/* map de la base de données */}
        {allProducts &&
          allProducts.map(
            ({ id, productImage, productName, productPrice, productDesc }) => (
              // condition ternaire pour le choix des backgrounds-colors des cards
              // className={${color} == "firstCard" ? "firstCard": "secondCard"}
              <div className="collection__grid__firstCard" key={id}>
                {/* link vers la page détaillé du produit sélectionné */}
                <Link to={`/selectedProduct/${id}`}>
                  <div>
                    <img
                      className="collection__grid__firstCard__collectionBags"
                      src={productImage}
                      alt="Sacs de la marque Brille"
                    />
                  </div>
                </Link>
                <div className="collection__grid__firstCard__paragraph">
                  <p> {productName}</p>
                  <p> {productDesc}</p>
                  <p className="collection__grid__firstCard__paragraph__price">
                    {productPrice}€
                  </p>
                </div>
              </div>
            ),
          )}
      </div>
      <GoToTop />
    </div>
  );
};

export default Collection;
