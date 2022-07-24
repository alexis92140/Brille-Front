import 'react-toastify/dist/ReactToastify.css';

import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';
import { toast, ToastContainer, Zoom } from 'react-toastify';

import GoToTop from '../components/globals/GoToTop';
import IImage from '../interfaces/IImage';
import IPage from '../interfaces/IPage';

const notify = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  <ToastContainer
    position="top-center"
    autoClose={5000}
    transition={Zoom}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />;

  toast.success(``, {
    position: 'top-center',
    autoClose: 5000,
    transition: Zoom,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const Contact = () => {
  // >> STATES
  const [allImages, setAllImages] = useState<IImage>();
  const [onePage, setOnePage] = useState<IPage>();

  // >> USE EFFECTS

  // ? Get all my images
  useEffect(() => {
    const getAllImages = async () => {
      let url: string = `${import.meta.env.VITE_API_URL}/api/pages/21/images`;

      const { data } = await axios.get<IImage>(url, {
        withCredentials: true,
      });
      setAllImages(data[0]);
    };

    getAllImages();

    // ? Get a Title
    const getOnePage = async () => {
      // indispensable quand on veut utiliser async/await dans un useEffect
      let url: string = `${import.meta.env.VITE_API_URL}/api/pages/21`;

      const { data } = await axios.get<IPage>(url, {
        withCredentials: true,
      });
      setOnePage(data);
    };

    getOnePage();
  }, []);

  return (
    <>
      {/* --- DESKTOP VERSION --- */}
      <MediaQuery query="(min-width: 1000px)">
        <div className="contact">
          <div className="contact__head">
            <img id="plage" src={allImages?.image} alt="plage bleu" />
          </div>

          <div className="contact__container">
            <div className="contact__container__titleWrapper">
              <h1>Nous contacter</h1>
            </div>
            <form onSubmit={notify} target="_blank" className="contact__container__form">
              <div className="contact__container__form__credentials">
                <TextField
                  id="standard-basic"
                  type="text"
                  name="Nom"
                  label="Nom"
                  variant="standard"
                  required
                  sx={{ m: 1, width: '40ch' }}
                />
                <TextField
                  id="standard-basic"
                  type="text"
                  label="Prénom"
                  name="Prénom"
                  variant="standard"
                  required
                  sx={{ m: 1, width: '40ch' }}
                />
              </div>
              <div className="contact__container__form__mail">
                <TextField
                  id="standard-basic"
                  type="email"
                  label="Email"
                  name="Email"
                  variant="standard"
                  required
                  sx={{ m: 1, width: '40ch' }}
                />
              </div>
              <div className="contact__container__form__textArea">
                <TextField
                  id="outlined-multiline-static"
                  type="text"
                  label="Votre demande"
                  name="votre demande"
                  placeholder="Ecrivez votre texte ici"
                  multiline
                  required
                  rows={4}
                  sx={{ m: 1, width: '100%' }}
                />
              </div>
              <div className="contact__container__form__button">
                <button className="button-57" type="submit">
                  <span className="text">Envoyer</span>
                  <span>Merci !</span>
                </button>
              </div>
            </form>
          </div>
          <GoToTop />
        </div>
      </MediaQuery>

      {/* --- MOBILE VERSION --- */}
      <div>
        <MediaQuery query="(max-width: 1000px)">
          <div className="mainContainer">
            <h1>Nous contacter</h1>
            <div className="mainContainer__formContainer">
              <form onSubmit={notify} target="_blank">
                <TextField
                  id="standard-basic"
                  type="text"
                  name="Nom"
                  label="Nom"
                  required
                  variant="standard"
                  sx={{ m: 1, width: '40ch' }}
                />
                <TextField
                  id="standard-basic"
                  type="text"
                  label="Prénom"
                  name="Prénom"
                  required
                  variant="standard"
                  sx={{ m: 1, width: '40ch' }}
                />
                <TextField
                  id="standard-basic"
                  type="email"
                  label="Email"
                  name="Email"
                  required
                  variant="standard"
                  sx={{ m: 1, width: '40ch' }}
                />
                <TextField
                  id="outlined-multiline-static"
                  type="text"
                  label="Votre demande"
                  name="votre demande"
                  required
                  placeholder="Ecrivez votre texte ici"
                  multiline
                  rows={4}
                  sx={{ m: 1, width: '100%' }}
                />

                <button className="button-57" type="submit">
                  <span className="text">Envoyer</span>
                  <span>Merci !</span>
                </button>
              </form>
            </div>
          </div>
        </MediaQuery>
      </div>
    </>
  );
};

export default Contact;
