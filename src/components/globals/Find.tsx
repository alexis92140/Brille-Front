import React, { useEffect, useState } from 'react';
import axios from 'axios';

// ---- @mui components -----
import Button from '@mui/material/Button';
import SearchBar from 'material-ui-search-bar';

// ---- react-animated-css package  -----
import { Animated } from 'react-animated-css';

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
                ({ productName }) =>
                  productName.toLowerCase().includes(userChoice.toLowerCase()) ||
                  !userChoice,
              )
              .map(({ id, productImage, productName }) => (
                <Animated
                  key={id}
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  isVisible={true}>
                  <div className="searchContainer__collectionWrapper__container">
                    <img
                      id="collectionBags"
                      src={productImage}
                      alt="Sacs de la marque Brille"
                      className="searchContainer__collectionWrapper__container__image"
                    />
                    <p className="searchContainer__collectionWrapper__container__text">
                      {productName}
                    </p>
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
