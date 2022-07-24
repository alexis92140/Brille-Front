/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import MediaQuery from 'react-responsive';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { FacebookLoginButton } from 'react-social-login-buttons';

import CurrentUserContext from '../../Context/CurrentUser';
import IUser from '../../interfaces/IUser';

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
  const [errorMessage, setErrorMessage] = useState<string>();

  // ---- Hook----
  const navigate: NavigateFunction = useNavigate();

  // >> MY FUNCTIONS

  // ? ---- Social Buttons state handling -----
  const displayHello = () => alert('Social Authentication OK !');

  // ? ---- Email state handling -----
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  // ? ---- Email state handling -----
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // ? ---- Password state handling -----
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // ? --- Handling the home redirection ---
  const redirectToTheCart = () => {
    navigate('/panier');
  };

  // ? --- UserContext setters ---
  const { setId, setAdmin, setFirstname } = useContext(CurrentUserContext);

  // >> MY VARIABLES

  // ------ store the social icons styles ------
  const socialIconAlign: string | any = 'center';
  const facebookText: string = 'Se connecter avec Facebook';
  const googleText: string = 'Se connecter avec Google';

  // ------ Pattern for the email input ------
  const emailPattern = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

  // >> AXIOS

  const userLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const { data } = await axios.post<IUser>(
        `${import.meta.env.VITE_API_URL}/api/login`,
        { email, password },
        {
          // for cookies
          withCredentials: true,
        },
      );
      setErrorMessage('');
      setId(data.id);
      setFirstname(data.firstname);
      setAdmin(data.admin === 1);
      redirectToTheCart();
    } catch (err) {
      // ! err est renvoyé potentiellement par axios ou par le code, il peut avoir différents types
      if (axios.isAxiosError(err)) {
        // pour gérer les erreurs de type axios
        if (err.response?.status === 401) {
          setErrorMessage('Email ou mot de passe incorrect');
        }
      } else {
        // pour gérer les erreurs non axios
        if (err instanceof Error) setErrorMessage(err.message);
      }
    }
  };

  // -------------------------------------------
  return (
    <>
      {/* --- ** DESKTOP VERSION ** ----*/}
      <MediaQuery query="(min-width: 1000px)">
        <div className="loginModal">
          <p className="loginModal__title">SE CONNECTER</p>

          <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => userLogin(e)}>
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
                    disabled
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
            {/* ----- ERROR MESSAGE (IF PASSWORD IS WRONG)----- */}
            <div className="loginModal__error">
              {errorMessage && <p>{errorMessage}</p>}
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
      </MediaQuery>

      {/* ------ ** MOBILE VERSION ** ------ */}
      <MediaQuery query="(max-width: 1000px)">
        <div className="loginModal">
          <p className="loginModal__title">SE CONNECTER</p>

          <form>
            {/* ----- EMAIL INPUT ----- */}
            <div className="loginModal__email">
              <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
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
              <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
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
                    disabled
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
            {/* ----- ERROR MESSAGE (IF PASSWORD IS WRONG)----- */}
            <div className="loginModal__error">
              {errorMessage && <p>{errorMessage}</p>}
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
      </MediaQuery>
    </>
  );
};

export default LoginModal;
