import 'react-toastify/dist/ReactToastify.css';

import { dialogContentTextClasses } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import de toastify
import { Id, toast, ToastContainer } from 'react-toastify';

import addItem from '../../Context/ShoppingCartContext';
import ShoppingCartContext from '../../Context/ShoppingCartContext';
import IProduct from '../../interfaces/IProduct';
import GoToTop from '../globals/GoToTop';

// ----------------------------------------------------------------

const SelectedProduct = () => {
  const { id } = useParams();
  const [oneProduct, setOneProduct] = useState<IProduct>();

  useEffect(() => {
    const getOneProduct = async () => {
      // indispensable quand on veut utiliser async/await dans un useEffect
      let url: string = `${import.meta.env.VITE_API_URL}/api/products/${id}`;

      const { data } = await axios.get<IProduct>(url, {
        withCredentials: true,
      });
      setOneProduct(data);
      console.log(data);
    };
    getOneProduct();
  }, [id]);

  const [color, setColor] = useState('firstPage');
  //ajouter la notif avec le message souhaité
  const notify = () => toast('Produit ajouté au panier!');

  const { addItem, cartItems } = useContext(ShoppingCartContext);

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
                <GoToTop />
                <div className="Page__secondPage__description__buttonCartContainer">
                  <button
                    onClick={() => addItem(Number(id || '0'))}
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
    </div>
  );
};

export default SelectedProduct;
