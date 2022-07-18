/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import { pink, purple, red } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
// --------------------------------------------------------------

const PasswordForgotModal = () => {
  // >> STATES

  // ---- for the email----
  const [email, setEmail] = useState<string>('');

  // >> MY FUNCTIONS

  // ---- to update Email change  ------
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // >> MY VARIABLES

  // ------ Pattern for the email input ------
  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi;

  // ------ Toastify package config------
  const notify = () => {
    if (email !== '' && email.match(emailPattern)) {
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />;

      toast.info(`Mail de confirmation envoyé à : ${email}`, {
        position: 'bottom-right',
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // ------------------ RETURN --------------------------------
  return (
    <div className="passwordForgotContainer">
      <p className="passwordForgotContainer__title">Reinitialiser votre mot de passe</p>

      <form>
        {/* ----- NEW PASSWORD INPUT ----- */}
        <div className="passwordForgotContainer__password">
          <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
            <TextField
              id="outlined-basic"
              value={email}
              label="Email"
              variant="outlined"
              type="email"
              onChange={handleEmail}
              autoComplete="current-email"
              required
            />
          </FormControl>
        </div>

        {/* ----- VALIDATE THE PASSWORD ----- */}
        <div>
          {email !== '' && email.match(emailPattern) ? (
            <div className="passwordForgotContainer__button" onClick={notify}>
              <Link to="/seconnecter">
                <Button
                  variant="contained"
                  type="submit"
                  size="small"
                  sx={{
                    color: purple[50],
                    '&.Mui-checked': {
                      color: purple[600],
                    },
                  }}>
                  Réinitialiser
                </Button>
              </Link>
            </div>
          ) : (
            <div className="passwordForgotContainer__button" onClick={notify}>
              <Button
                variant="contained"
                type="submit"
                size="medium"
                sx={{
                  color: purple[50],
                  '&.Mui-checked': {
                    color: purple[600],
                  },
                }}>
                Réinitialiser
              </Button>
            </div>
          )}
        </div>

        <div className="passwordForgotContainer__button">
          <Link to="/seconnecter">
            <Button
              variant="text"
              type="submit"
              size="small"
              sx={{
                color: grey[700],
                '&.Mui-checked': {
                  color: pink[700],
                },
              }}>
              Se Connecter
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default PasswordForgotModal;
