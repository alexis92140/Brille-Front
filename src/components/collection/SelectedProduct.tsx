import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bounce, Flip, Slide, toast, ToastContainer, Zoom } from 'react-toastify';

import ShoppingCartContext from '../../Context/ShoppingCartContext';
import IProduct from '../../interfaces/IProduct';
import GoToTop from '../globals/GoToTop';

// -----------------------------------------------------------

const SelectedProduct = () => {
  // >> USE PARAMS
  const { id } = useParams();

  // >> STATES
  const [oneProduct, setOneProduct] = useState<IProduct>();
  const [color, setColor] = useState('firstPage');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  // >> FUNCTIONS

  const notify = () => {
    <ToastContainer
      position="top-center"
      autoClose={5000}
      transition={Slide}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />;

    toast.success(`Article ajouté au panier !!`, {
      position: 'top-center',
      autoClose: 5000,
      transition: Slide,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // >> AXIOS

  useEffect(() => {
    const getOneProduct = async () => {
      let url: string = `${import.meta.env.VITE_API_URL}/api/products/${id}`;

      const { data } = await axios.get<IProduct>(url, {
        withCredentials: true,
      });
      setOneProduct(data);
      setSelectedItem(data.id);
      // console.log(data);
    };
    getOneProduct();
  }, [id]);

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
                  <div onClick={notify}>
                    {parseFloat(oneProduct.productStock) >= 1 ? (
                      <button
                        onClick={() => increaseCartQuantity(Number(id || '0'))}
                        type="button"
                        className="Page__secondPage__description__buttonCartContainer__buttonCart">
                        AJOUTER
                      </button>
                    ) : (
                      <button
                        disabled
                        onClick={() => increaseCartQuantity(Number(id || '0'))}
                        type="button"
                        className="Page__secondPage__description__buttonCartContainer__buttonCart">
                        Victime de son succès
                      </button>
                    )}
                  </div>
                </div>
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
