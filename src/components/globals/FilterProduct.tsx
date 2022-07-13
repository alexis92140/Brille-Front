// ---- @mui components -----
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import axios from 'axios';
import SearchBar from 'material-ui-search-bar';
import React, { useEffect, useState } from 'react';
// ---- react-animated-css package  -----
import { Animated } from 'react-animated-css';
import { Link } from 'react-router-dom';

// ---- Imported components -----
import IProduct from '../../interfaces/IProduct';
import GoToTop from './GoToTop';

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
              style={{ color: blue[500] }}
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

        <div className="collection__grid">
          {/* map de la base de données */}
          {allProducts &&
            allProducts
              .filter(
                ({ productName, productDesc }) =>
                  productName.toLowerCase().includes(userChoice.toLowerCase()) ||
                  productDesc.toLowerCase().includes(userChoice.toLowerCase()) ||
                  !userChoice,
              )
              .map(({ id, productImage, productName, productPrice, productDesc }) => (
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
              ))}
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Find;
