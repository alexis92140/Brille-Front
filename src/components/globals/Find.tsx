import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import SearchBar from 'material-ui-search-bar';
// ---- react-animated-css package  -----
import { Animated } from 'react-animated-css';

// ---- @mui components -----
import Button from '@mui/material/Button';

// ---- Imported components -----
import IProduct from '../../interfaces/IProduct';
import GoToTop from '../globals/GoToTop';

// -------------------- COMPONENT ---------------------------------
const Find = () => {
  // ---- States -----
  const [allProducts, setAllProducts] = useState<IProduct[]>();
  const [userChoice, setUserChoice] = useState<string>('');

  // ---- Function to handle the button click -----
  const showCollection = () => {
    setUserChoice('');
  };

  // >> Axios to get all Products
  useEffect(() => {
    const getAllProducts = async () => {
      let url: string = 'http://localhost:8000/api/products';

      const { data } = await axios.get<IProduct[]>(url, {
        withCredentials: true,
      });
      setAllProducts(data);
      console.log(data);
    };

    getAllProducts();
  }, []);
  return (
    <div>
      {/* --- SEARCH BAR --- */}
      <div className="searchContainer">
        <div className="searchContainer__inputContainer">
          <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
            <SearchBar
              className="searchContainer__inputContainer__input"
              value={userChoice}
              placeholder="Recherche"
              onChange={(newValue) => setUserChoice(newValue)}
            />
          </Animated>
          {console.log(userChoice)}
        </div>

        {/* --- PRODUCT ITEMS FILTER & MAPPING --- */}
        <div className="searchContainer__displayAll">
          <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={true}>
            {userChoice !== '' && (
              <Button
                variant="text"
                className="searchContainer__displayAll__button"
                onClick={showCollection}>
                VOIR TOUTE LA COLLECTION
              </Button>
            )}
          </Animated>
        </div>
        <div className="searchContainer__collectionWrapper">
          {allProducts &&
            allProducts
              .filter(
                ({ productName, productDesc }) =>
                  productName.toLowerCase().includes(userChoice.toLowerCase()) ||
                  productDesc.toLowerCase().includes(userChoice.toLowerCase()) ||
                  !userChoice,
              )
              .map(
                ({
                  id,
                  productImage,
                  productName,
                  productDesc,
                  productPrice,
                  productStock,
                }) => (
                  <Animated
                    key={id}
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    isVisible={true}>
                    <div className="searchContainer__collectionWrapper__container">
                      <Link to="/selectedProduct">
                        <img
                          id="collectionBags"
                          src={productImage}
                          alt="Sacs de la marque Brille"
                          className={
                            productStock > '0'
                              ? 'searchContainer__collectionWrapper__container__imageAvailable'
                              : 'searchContainer__collectionWrapper__container__imageNotAvailable'
                          }
                        />
                      </Link>
                      <p className="searchContainer__collectionWrapper__container__text">
                        {productName}
                      </p>
                      <p className="searchContainer__collectionWrapper__container__text">
                        {productPrice} Eur
                      </p>
                      <p className="searchContainer__collectionWrapper__container__text">
                        {productDesc}
                      </p>

                      {Number(productStock) > 0 ? (
                        <p className="searchContainer__collectionWrapper__container__available">
                          Disponible
                        </p>
                      ) : (
                        <p className="searchContainer__collectionWrapper__container__notAvailable">
                          Victime de son succès
                        </p>
                      )}
                    </div>
                  </Animated>
                ),
              )}
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Find;
