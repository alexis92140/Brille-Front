import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import GoToTop from '../components/globals/GoToTop';
import IImage from '../interfaces/IImage';
import IPage from '../interfaces/IPage';

const Contact = () => {
  // Ici j'appel mon interface image >>
  const [allImages, setAllImages] = useState<IImage>();
  // Ici j'appel mon interface page pour UNE page >>
  const [onePage, setOnePage] = useState<IPage>();

  useEffect(() => {
    //   // je recupère les images:
    const getAllImages = async () => {
      //     // indispensable quand on veut utiliser async/await dans un useEffect
      let url: string = `${import.meta.env.VITE_API_URL}/api/pages/21/images/41`;

      const { data } = await axios.get<IImage>(url, {
        withCredentials: true,
      });
      setAllImages(data);
      console.log(data);
    };

    getAllImages();

    //   // je recupère UN titre
    const getOnePage = async () => {
      //     // indispensable quand on veut utiliser async/await dans un useEffect
      let url: string = `${import.meta.env.VITE_API_URL}/api/pages/21`;

      const { data } = await axios.get<IPage>(url, {
        withCredentials: true,
      });
      setOnePage(data);
      console.log(data);
    };

    getOnePage();
  }, []);

  return (
    <div className="contact">
      <div className="contact__head">
        <img
          id="plage"
          // src={allImages ?.image}
          src="../../public/assets/images/plage_bleu_marion.png"
          alt="plage bleu"
        />
      </div>

      <div className="contact__container">
        <div className="contact__container__titleWrapper">
          <h1>Nous contacter</h1>
        </div>
        <form  
              action="https://getform.io/f/e3635432-5c41-4623-a26f-1e7063e12bc9"
              method="POST"
              target="_blank"
            
              className="contact__container__form">
          
          <div className="contact__container__form__credentials">
            <TextField
              id="standard-basic"
              type="text"
              name="Nom"
              label="Nom"
              variant="standard"
              sx={{ m: 1, width: '40ch' }}
            />
            <TextField
              id="standard-basic"
              type="text"
              label="Prénom"
              name="Prénom"
              variant="standard"
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
              rows={4}
              sx={{ m: 1, width: '100%' }}
            />
          </div>
          <div className="contact__container__form__button">
            <FormControlLabel
              control={<Checkbox />}
              label="Je ne suis pas un robot"
              sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Envoyer
            </Button>
          </div>
        </form>
      </div>
      <GoToTop />
    </div>
  );
};

export default Contact;
