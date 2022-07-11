import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import React from 'react';

import GoToTop from '../components/globals/GoToTop';

// ----------------------------------------------------------------

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__head">
        <img
          id="plage"
          src="../../../assets/images/plage_bleu_marion.png"
          alt="plage bleu"
        />
      </div>
      <div className="contact__container">
        <div className="contact__container__titleWrapper">
          <h1>Nous contacter</h1>
        </div>
        <form className="contact__container__form">
          <div className="contact__container__form__credentials">
            <TextField
              id="standard-basic"
              label="Nom"
              variant="standard"
              sx={{ m: 1, width: '40ch' }}
            />
            <TextField
              id="standard-basic"
              label="Prénom"
              variant="standard"
              sx={{ m: 1, width: '40ch' }}
            />
          </div>
          <div className="contact__container__form__mail">
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              sx={{ m: 1, width: '40ch' }}
            />
          </div>
          <div className="contact__container__form__textArea">
            <TextField
              id="outlined-multiline-static"
              label="Votre demande"
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
            <Button variant="contained" endIcon={<SendIcon />}>
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
