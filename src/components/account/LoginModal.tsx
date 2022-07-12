/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { FacebookLoginButton } from 'react-social-login-buttons';

// --------------------------------------------------------------

const LoginModal = () => {
  // >> STATES

  // ---- for the email----
  const [email, setEmail] = useState<string>('');

  // ---- for the password ----
  const [password, setPassword] = useState<string>('');

  // ---- for the checkbox ----
  const [isChecked, setIsChecked] = useState<boolean>(false);

  // ---- set th error message----
  // const [errorMessage, setErrorMessage] = useState<string>('');

  // >> MY FUNCTIONS

  // ---- to handle click on the socials buttons ------
  const displayHello = () => alert('Social Authentication OK !');

  // ---- to handle checkbox click ------
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  // ---- to update Email change  ------
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // ---- to uptade Password change  ------
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // ---- to handle the error message  ------
  // const displayError = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   password !== assword &&
  //     setErrorMessage('Le mot de passe ne correspond pas ... veuillez réessayer.');
  // };

  // >> MY VARIABLES

  // ------ store the social icons styles ------
  const socialIconAlign: string | any = 'center';
  const facebookText: string = 'Se connecter avec Facebook';
  const googleText: string = 'Se connecter avec Google';

  // ------ Pattern for the email input ------
  const emailPattern = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

  // ------------------ RETURN --------------------------------
  return (
    <div className="loginModal">
      <p className="loginModal__title">SE CONNECTER</p>

      <form>
        {/* ----- EMAIL INPUT ----- */}
        <div className="loginModal__email">
          <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
            <TextField
              id="standard-password-input"
              value={email}
              onChange={handleEmail}
              label="Email"
              type="email"
              autoComplete="current-password"
              variant="standard"
              required
            />
          </FormControl>
        </div>

        {/* ----- PASSWORD INPUT ----- */}
        <div className="loginModal__password">
          <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
            <TextField
              id="standard-password-input"
              value={password}
              label="Mot de passe"
              type="password"
              onChange={handlePassword}
              autoComplete="current-password"
              variant="standard"
              required
            />
          </FormControl>
        </div>

        {/* ----- ERROR MESSAGE (IF PASSWORD IS WRONG)----- */}

        {/* ----- CHECKBOX & LOGIN BUTTON ----- */}
        <div className="loginModal__choices">
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked}
                onChange={handleChecked}
                inputProps={{ 'aria-label': 'controlled' }}
                size="small"
                sx={{
                  color: grey[700],
                  '&.Mui-checked': {
                    color: pink[700],
                  },
                }}
              />
            }
            label="Rester connecté"
            role="button"
          />
          <div>
            {email !== '' && email.match(emailPattern) && password !== '' ? (
              <Link to="/moncompte">
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
            ) : (
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
            )}
          </div>
        </div>
      </form>

      {/* ----- FORGOTTEN PASSWORD ? ----- */}
      <div className="loginModal__forgotPassword">
        <Link to="/nouveaumotdepasse">
          <p>Mot de passe oublié ?</p>
        </Link>
      </div>

      {/* ----- SOCIAL MEDIA CONNECTIONS----- */}
      <div className="loginModal__socials">
        <GoogleLoginButton
          onClick={displayHello}
          text={googleText}
          align={socialIconAlign}
        />
        <FacebookLoginButton
          onClick={displayHello}
          text={facebookText}
          align={socialIconAlign}
        />

        {/* ----- LOG IN ----- */}
        <div className="loginModal__logged">
          <p>
            Vous n&apos;avez pas compte ?
            <Link to="/compte">
              <span>S&apos;inscrire</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
