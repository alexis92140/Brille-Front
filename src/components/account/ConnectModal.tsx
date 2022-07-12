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

const ConnectModal = () => {
  // >> STATES

  // ---- for the email ----
  const [email, setEmail] = useState<string>('');

  // ---- for the password ----
  const [password, setPassword] = useState<string>('');

  // ---- for the confirmed password ----
  const [confirmedPassword, setConfirmedPassword] = useState<string>('');

  // ---- for the addressLine1 ----
  const [address1, setAddress1] = useState<string>('');

  // ---- for the addressLine2 ----
  const [address2, setAddress2] = useState<string>('');

  // ---- for the zipCode ----
  const [zipCode, setZipCode] = useState<string>('');

  // ---- for the City----
  const [city, setCity] = useState<string>('');

  // ---- for the checkbox ----
  const [isChecked, setIsChecked] = useState<boolean>(false);

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
  // ---- to uptade Password change  ------
  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmedPassword(e.target.value);
  };

  // ---- to uptade AddressLine1 change  ------
  const handleAddress1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress1(e.target.value);
  };

  // ---- to uptade AddressLine2 change  ------
  const handleAddress2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress2(e.target.value);
  };
  // ---- to uptade zipCode change  ------
  const handleZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value);
  };
  // ---- to uptade AddressLine2 change  ------
  const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  // ---- to check if password === confirmed password  ------
  // const checkPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   return password !== confirmedPassword ? true : false;
  // };

  // >> MY VARIABLES

  // ------ store the social icons styles ------
  const socialIconAlign: string | any = 'center';
  const facebookText: string = 'Se connecter avec Facebook';
  const googleText: string = 'Se connecter avec Google';

  // ------ Pattern for the email input ------
  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi;

  // ------------------ RETURN --------------------------------
  return (
    <div className="connectModal">
      <p className="connectModal__title">INSCRIPTION</p>

      {/* {checkPassword && (
        <p className="connectModal__title__error">le mot de passe ne correspont pas</p>
      )} */}

      <form>
        {/* ----- EMAIL INPUT ----- */}
        <div className="connectModal__email">
          <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
            <TextField
              id="outlined-basic"
              value={email}
              onChange={handleEmail}
              label="Email"
              type="text"
              autoComplete="current-password"
              variant="outlined"
              size="small"
              required
            />
          </FormControl>
        </div>

        {/* ----- PASSWORD INPUT ----- */}
        <div className="connectModal__password">
          <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
            <TextField
              id="standard-password-input"
              value={password}
              label="Mot de passe"
              type="password"
              onChange={handlePassword}
              autoComplete="current-password"
              variant="outlined"
              size="small"
              required
            />
          </FormControl>
        </div>

        {/* ----- PASSWORD CONFIRMATION INPUT ----- */}
        <div className="connectModal__password__confirmation">
          <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
            <TextField
              id="standard-password-input"
              value={confirmedPassword}
              label="Confirmation"
              type="password"
              onChange={handleConfirmPassword}
              autoComplete="current-password"
              variant="outlined"
              size="small"
              required
            />
          </FormControl>
        </div>

        {/* ----- ADDRESSLin1 INPUT ----- */}
        <div className="connectModal__address">
          <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
            <TextField
              id="outlined-basic"
              value={address1}
              label="Adresse 1"
              type="text"
              onChange={handleAddress1}
              autoComplete="current-password"
              variant="outlined"
              size="small"
              required
            />
          </FormControl>
        </div>

        {/* ----- ADDRESSLine2 INPUT ----- */}
        <div className="connectModal__address">
          <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
            <TextField
              id="outlined-basic"
              value={address2}
              label="Adresse 2"
              type="text"
              onChange={handleAddress2}
              autoComplete="current-password"
              variant="outlined"
              size="small"
            />
          </FormControl>
        </div>

        {/* ----- ZIPCODE AND COUNTRY INPUT ----- */}
        <>
          <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
            <div className="connectModal__address__infos">
              <div className="connectModal__address__zipCode">
                <TextField
                  id="outlined-basic"
                  value={zipCode}
                  onChange={handleZipCode}
                  label="Code postal"
                  type="number"
                  variant="outlined"
                  size="small"
                  required
                />
              </div>
              <div className="connectModal__address__city">
                <TextField
                  id="outlined-basic"
                  value={city}
                  onChange={handleCity}
                  label="Ville"
                  type="text"
                  variant="outlined"
                  size="small"
                  required
                />
              </div>
            </div>
          </FormControl>
        </>

        {/* ----- ERROR MESSAGE (IF PASSWORD IS WRONG)----- */}
        {/* {error && <p>{error}</p>} */}

        {/* ----- CHECKBOX & LOGIN BUTTON ----- */}
        <div className="connectModal__choices">
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
            {email !== '' &&
            password === confirmedPassword &&
            email.match(emailPattern) &&
            password !== '' &&
            confirmedPassword !== '' &&
            address1 !== '' &&
            zipCode !== '' &&
            city !== '' ? (
              <Link to="/seconnecter">
                <Button variant="text" type="submit" size="small">
                  S&apos;inscrire
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
                S&apos;inscrire
              </Button>
            )}
          </div>
        </div>
      </form>

      {/* ----- FORGOTTEN PASSWORD ? ----- */}
      <div className="connectModal__forgotPassword">
        <Link to="/nouveaumotdepasse">
          <p>Mot de passe oublié ?</p>
        </Link>
      </div>

      {/* ----- SOCIAL MEDIA CONNECTIONS----- */}
      <div className="connectModal__socials">
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
        <div className="connectModal__logged">
          <p>
            Vous avez déjà un compte ?
            <Link to="/seconnecter">
              <span>Se connecter</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectModal;
