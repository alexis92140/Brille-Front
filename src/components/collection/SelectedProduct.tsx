import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import ShoppingCartContext from '../../Context/ShoppingCartContext';
import IProduct from '../../interfaces/IProduct';

import GoToTop from '../globals/GoToTop';

// ----------------------------------------------------------------

const SelectedProduct = () => {
  // >> USE PARAMS
  const { id } = useParams();

  // >> STATES
  const [oneProduct, setOneProduct] = useState<IProduct>();
  const [color, setColor] = useState('firstPage');

  // >> AXIOS

  useEffect(() => {
    const getOneProduct = async () => {
      let url: string = `${import.meta.env.VITE_API_URL}/api/products/${id}`;

      const { data } = await axios.get<IProduct>(url, {
        withCredentials: true,
      });
      setOneProduct(data);
    };
    getOneProduct();
  }, [id]);

  // >> FUNCTIONS
  // To trigger and notify the user that he add an item
  const notify = () => toast('Produit ajouté au panier!');

  // >> VARIABLES
  // Recover the IncreaseCartQuantity function from the context
  const { increaseCartQuantity } = useContext(ShoppingCartContext);

  return (
    <div className="Page">
      {oneProduct && (
        <>
          <div className={color}>
            <img id="selectedbag" src={oneProduct.productImage} alt="product" />
          </div>
          <div className="Page__secondPage">
            <div className="Page__secondPage__description">
              <div>
                <h4 className="Page__secondPage__description__title">
                  {oneProduct.productName}
                </h4>
                <p className="Page__secondPage__description__type">
                  {oneProduct.productDesc}
                </p>
                <p className="Page__secondPage__description__price">
                  {oneProduct.productPrice} €
                </p>
                <div className="Page__secondPage__description__buttonColoredContainer">
                  <div className="Page__secondPage__description__buttonColoredContainer__buttonColored">
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
                </div>
                <div className="Page__secondPage__description__buttonCartContainer">
                  <button
                    onClick={() => increaseCartQuantity(Number(id || '0'))}
                    type="button"
                    className="Page__secondPage__description__buttonCartContainer__buttonCart">
                    AJOUTER
                  </button>
                </div>
                <ToastContainer />
              </div>
            </div>
          </div>
        </>
      )}
      <GoToTop />
    </div>
  );
};

export default SelectedProduct;
