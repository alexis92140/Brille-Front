import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import axios from 'axios';
import SearchBar from 'material-ui-search-bar';
import React, { useEffect, useState } from 'react';
import { Animated } from 'react-animated-css';
import { Link } from 'react-router-dom';

import IProduct from '../../interfaces/IProduct';
import GoToTop from '../globals/GoToTop';

// ----------------------------------------------
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
      let url: string = `${import.meta.env.VITE_API_URL}/api/products`;

      const { data } = await axios.get<IProduct[]>(url, {
        withCredentials: true,
      });
      setAllProducts(data);
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
              style={{ color: blue[500] }}
              className="searchContainer__inputContainer__input"
              value={userChoice}
              placeholder="Recherche"
              onChange={(newValue) => setUserChoice(newValue)}
            />
          </Animated>
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
              .map(({ id, productImage, productName, productStock }) => (
                <Animated
                  key={id}
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  isVisible={true}>
                  <div className="searchContainer__collectionWrapper__container">
                    <Link to={`/selectedProduct/${id}`}>
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
                    <p className="searchContainer__collectionWrapper__container__text"></p>
                    <p className="searchContainer__collectionWrapper__container__text"></p>

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
              ))}
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Find;
