/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import IUser from '../../interfaces/IUser';

// --------------------------------------------------------------

// >> MY VARIABLES

// ------ Pattern for the email input ------
const EMAIL_REGEX: any = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);

// ------ Pattern for the user input ------
const USER_REGEX: any = /^[A-z][A-z0-9-_]{1,23}$/;

// ------ Pattern for the ZIPCODE input ------
// const ZIPCODE_REGEX: any = /[0-9]{5}/g;

// ------ Pattern for the PHONENUMBER input ------
// const PHONE_NUMBER_REGEX: any =
//   /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;

// ------ Pattern for the password input ------
const PWD_REGEX: any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/g;

// --------------------------------------------------------------

const ConnectModal = () => {
  // >> REF HOOKS

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLInputElement>(null);

  // >> STATES

  // ---- for the firstName ----
  const [firstname, setFirstName] = useState<string>('');
  const [isValidedFirstName, setIsValidedFirstName] = useState<boolean>(false);
  const [isFirstNameFocused, setIsFirstNameFocused] = useState<boolean>(false);

  // ---- for the lastName ----
  const [lastname, setLastName] = useState<string>('');
  const [isValidedLastName, setIsValidedLastName] = useState<boolean>(false);
  const [isLastNameFocus, setIsLastNameFocus] = useState<boolean>(false);

  // ---- for the email ----
  const [email, setEmail] = useState<string>('');
  const [isValidedEmail, setIsValidedEmail] = useState<boolean>(false);

  // ---- for the password ----
  const [password, setPassword] = useState('');
  const [isValidedPassword, setIsValidedPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  // ---- for the confirmed password ----
  const [matchPassword, setMatchPassword] = useState('');
  const [isValidedMatch, setIsValidedMatch] = useState(false);
  const [isMatchFocused, setIsMatchFocused] = useState(false);

  // ---- for the checkbox ----
  const [isChecked, setIsChecked] = useState<boolean>(false);

  // ---- for the error message ----
  const [errorMessage, setErrorMessage] = useState<string>('');

  // >> FUNCTIONS

  // ? ---- to handle checkbox click ------
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  // ? ---- to update firstName state  ------
  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  // ? ---- to update lastName state  ------
  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  // ? --- Log errors ----
  const logError = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setIsChecked(false);
  };

  // ? ---- to update Email state  ------
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // ? ------ Toastify package config------
  const notify = () => {
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

    toast.info(`Vous pouvez vous connecter !`, {
      position: 'bottom-right',
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // >> useEFFECTS

  // ---- Set the focus when the component load ----
  useEffect(() => {
    if (null !== firstNameRef.current) {
      firstNameRef.current.focus();
    }
  }, []);

  // ---- for the firstName ----
  useEffect(() => {
    setIsValidedFirstName(USER_REGEX.test(firstname));
  }, [firstname]);

  // ---- for the lastName ----
  useEffect(() => {
    setIsValidedLastName(USER_REGEX.test(lastname));
  }, [lastname]);

  // ---- for the email ----
  useEffect(() => {
    setIsValidedEmail(EMAIL_REGEX.test(email));
  }, [email]);

  // ---- for the confirmed password ----
  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setIsValidedPassword(result);
    const match = password === matchPassword;
    setIsValidedMatch(match);
  }, [password, matchPassword]);

  // ---- Listen the events on the STATES ----
  useEffect(() => {
    setErrorMessage('');
  }, [firstname, lastname, password, email, matchPassword]);

  // >> AXIOS

  const handleSubmit = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault();
      await axios.post<IUser>(
        `${import.meta.env.VITE_API_URL}/api/users`,
        {
          admin: 0,
          firstname,
          lastname,
          email,
          password,
        },
        {
          // for cookies
          withCredentials: true,
        },
      );
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setIsChecked(false);
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />;

      toast.success(`Vous pouvez vous connecter !`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // pour gérer les erreurs de type axios
        if (err.response?.status === 404) {
          setErrorMessage(`Pas de réponse du serveur.`);
        } else if (err.response?.status === 409) {
          setErrorMessage(`Le compte est déjà utilisé`);
        }
      } else {
        // pour gérer les erreurs non axios
        if (err instanceof Error)
          setErrorMessage(`L'inscription n'a pas abouti ... Veuillez recommencer.`);
      }
      if (null !== errorRef.current) {
        errorRef.current.focus();
      }
    }
  };

  // ------------------ RETURN --------------------------------
  return (
    <>
      <MediaQuery query="(min-width: 1000px)">
        <section className="connectModal">
          <p className="connectModal__title">INSCRIPTION</p>

          {/* ----- MAIN ERROR MESSAGE ----- */}
          <p
            ref={errorRef}
            className={errorMessage ? 'connectModal__error' : 'connectModal__errorHidden'}
            aria-live="assertive">
            {errorMessage}
          </p>

          <form onSubmit={handleSubmit}>
            {/* ----- FIRST NAME ----- */}

            <div className="connectModal">
              <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
                {!isValidedFirstName ? (
                  <TextField
                    type="text"
                    id="firstName"
                    ref={firstNameRef}
                    autoComplete="off"
                    onChange={handleFirstName}
                    label="Prénom"
                    variant="outlined"
                    size="small"
                    aria-invalid={isValidedFirstName ? 'false' : 'true'}
                    aria-describedby="userNotification"
                    onFocus={() => setIsFirstNameFocused(true)}
                    onBlur={() => setIsFirstNameFocused(false)}
                    required
                  />
                ) : (
                  <TextField
                    type="text"
                    id="firstName"
                    ref={firstNameRef}
                    autoComplete="off"
                    onChange={handleFirstName}
                    label="Prénom"
                    variant="outlined"
                    size="small"
                    aria-invalid={isValidedFirstName ? 'false' : 'true'}
                    aria-describedby="userNotification"
                    onFocus={() => setIsFirstNameFocused(true)}
                    onBlur={() => setIsFirstNameFocused(false)}
                    color={isValidedFirstName && 'success'}
                    required
                  />
                )}

                {/* Display the input instructions to the user */}
                <p
                  id="userNotification"
                  className={
                    isFirstNameFocused && !isValidedFirstName
                      ? 'connectModal__instructions'
                      : 'connectModal__noInstructions'
                  }>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Doit contenir un minimum de 2 lettres et un maximum de 24 lettres.
                  <br />
                  Doit commencer par une lettre.
                  <br />
                  Lettres, nombres, underscores et caractères spéciaux (ex: &quot;-&quot;)
                  sont autorisés.
                </p>
              </FormControl>
            </div>

            {/* ----- LAST NAME ----- */}
            <div className="connectModal">
              <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
                {!isValidedLastName ? (
                  <TextField
                    type="text"
                    id="lastName"
                    ref={lastNameRef}
                    autoComplete="off"
                    onChange={handleLastName}
                    label="Nom"
                    variant="outlined"
                    size="small"
                    aria-invalid={isValidedLastName ? 'false' : 'true'}
                    aria-describedby="userNotification"
                    onFocus={() => setIsLastNameFocus(true)}
                    onBlur={() => setIsLastNameFocus(false)}
                    required
                  />
                ) : (
                  <TextField
                    type="text"
                    id="firstName"
                    ref={lastNameRef}
                    autoComplete="off"
                    onChange={handleLastName}
                    label="Nom"
                    variant="outlined"
                    size="small"
                    aria-invalid={isValidedLastName ? 'false' : 'true'}
                    aria-describedby="userNotification"
                    onFocus={() => setIsLastNameFocus(true)}
                    onBlur={() => setIsLastNameFocus(false)}
                    color={isValidedLastName && 'success'}
                    required
                  />
                )}

                {/* Display the input instructions to the user */}
                <p
                  id="userNotification"
                  className={
                    isLastNameFocus && !isValidedLastName
                      ? 'connectModal__instructions'
                      : 'connectModal__noInstructions'
                  }>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Doit contenir un minimum de 2 lettres et un maximum de 24 lettres.
                  <br />
                  Doit commencer par une lettre.
                  <br />
                  Lettres, nombres, underscores et caractères spéciaux (ex: &quot;-&quot;)
                  sont autorisés.
                </p>
              </FormControl>
            </div>

            {/* ----- EMAIL INPUT ----- */}
            <div className="connectModal">
              <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
                {!isValidedEmail ? (
                  <TextField
                    type="email"
                    id="email"
                    ref={emailRef}
                    autoComplete="off"
                    onChange={handleEmail}
                    label="Email"
                    variant="outlined"
                    size="small"
                    aria-invalid={isValidedEmail ? 'false' : 'true'}
                    aria-describedby="userNotification"
                    required
                  />
                ) : (
                  <TextField
                    type="email"
                    id="email"
                    ref={emailRef}
                    autoComplete="off"
                    onChange={handleEmail}
                    label="Email"
                    variant="outlined"
                    size="small"
                    aria-invalid={isValidedEmail ? 'false' : 'true'}
                    aria-describedby="userNotification"
                    color={isValidedEmail && 'success'}
                    required
                  />
                )}
              </FormControl>
            </div>

            {/* ----- PASSWORD INPUT ----- */}
            <div className="connectModal__password">
              <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
                {!isValidedPassword ? (
                  <TextField
                    type="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPassword(e.target.value)
                    }
                    label="Mot de passe"
                    variant="outlined"
                    size="small"
                    aria-invalid={isValidedPassword ? 'false' : 'true'}
                    aria-describedby="userNotification"
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
                    required
                  />
                ) : (
                  <TextField
                    type="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPassword(e.target.value)
                    }
                    label="Mot de passe"
                    variant="outlined"
                    size="small"
                    aria-invalid={isValidedPassword ? 'false' : 'true'}
                    aria-describedby="passwordNotification"
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
                    color={isValidedPassword && 'success'}
                    required
                  />
                )}
                {/* Display the input instructions to the user */}
                <p
                  id="passwordNotification"
                  className={
                    isPasswordFocused && !isValidedPassword
                      ? 'connectModal__instructions'
                      : 'connectModal__noInstructions'
                  }>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Doit contenir un minimum de 8 lettres et un maximum de 24 lettres.
                  <br />
                  Doit contenir au moins une majuscule, un nombre et un caractère spécial
                  (&quot;#&quot; , &quot;!&quot;, &quot;%&quot;, &quot;$&quot;...)
                </p>
              </FormControl>
            </div>

            {/* ----- PASSWORD CONFIRMATION INPUT ----- */}
            <div className="connectModal__password">
              <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
                {!isValidedMatch ? (
                  <TextField
                    type="password"
                    id="password"
                    autoComplete="off"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setMatchPassword(e.target.value)
                    }
                    label="Confirmation"
                    variant="outlined"
                    size="small"
                    aria-invalid={isValidedMatch ? 'false' : 'true'}
                    aria-describedby="PasswordConfirmNotification"
                    onFocus={() => setIsMatchFocused(true)}
                    onBlur={() => setIsMatchFocused(false)}
                    required
                  />
                ) : (
                  <TextField
                    type="password"
                    id="password"
                    autoComplete="off"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setMatchPassword(e.target.value)
                    }
                    label="Confirmation"
                    variant="outlined"
                    size="small"
                    aria-invalid={isValidedMatch ? 'false' : 'true'}
                    aria-describedby="PasswordConfirmNotification"
                    onFocus={() => setIsMatchFocused(true)}
                    onBlur={() => setIsMatchFocused(false)}
                    color={isValidedMatch && 'success'}
                    required
                  />
                )}

                {/* Display the input instructions to the user */}
                <p
                  id="PasswordConfirmNotification"
                  className={
                    isMatchFocused && !isValidedMatch
                      ? 'connectModal__instructions'
                      : 'connectModal__noInstructions'
                  }>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Veuillez confirmer votre mot de passe.
                </p>
              </FormControl>
            </div>

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
                {!isValidedFirstName ||
                !isValidedLastName ||
                !isValidedPassword ||
                !isValidedEmail ||
                !isValidedMatch ? (
                  <Button disabled>Sinscrire</Button>
                ) : (
                  // <Link to="/seconnecter">
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
                  // </Link>
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

          <div className="connectModal__logged">
            <p>
              Vous avez déjà un compte ?
              <Link to="/seconnecter">
                <span>Se connecter</span>
              </Link>
            </p>
          </div>
        </section>
      </MediaQuery>

      {/* -- RESPONSIVE PART -- */}
      <MediaQuery query="(max-width: 1000px)">
        <section className="connectModal">
          <p className="connectModal__title">INSCRIPTION</p>

          {/* ----- MAIN ERROR MESSAGE ----- */}
          <p
            ref={errorRef}
            className={errorMessage ? 'connectModal__error' : 'connectModal__errorHidden'}
            aria-live="assertive">
            {errorMessage}
          </p>

          <form onSubmit={handleSubmit}>
            {/* ----- FIRST NAME ----- */}

            <div className="connectModal">
              <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
                {!isValidedFirstName ? (
                  <TextField
                    type="text"
                    id="firstName"
                    ref={firstNameRef}
                    autoComplete="off"
                    onChange={handleFirstName}
                    label="Prénom"
                    variant="outlined"
                    size="small"
                    aria-invalid={isValidedFirstName ? 'false' : 'true'}
                    aria-describedby="userNotification"
                    onFocus={() => setIsFirstNameFocused(true)}
                    onBlur={() => setIsFirstNameFocused(false)}
                    required
                  />
                ) : (
                  <TextField
                    type="text"
                    id="firstName"
                    ref={firstNameRef}
                    autoComplete="off"
                    onChange={handleFirstName}
                    label="Prénom"
                    variant="outlined"
                    size="small"
                    aria-invalid={isValidedFirstName ? 'false' : 'true'}
                    aria-describedby="userNotification"
                    onFocus={() => setIsFirstNameFocused(true)}
                    onBlur={() => setIsFirstNameFocused(false)}
                    color={isValidedFirstName && 'success'}
                    required
                  />
                )}

                {/* Display the input instructions to the user */}
                <p
                  id="userNotification"
                  className={
                    isFirstNameFocused && !isValidedFirstName
                      ? 'connectModal__instructions'
                      : 'connectModal__noInstructions'
                  }>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Doit contenir un minimum de 2 lettres et un maximum de 24 lettres.
                  <br />
                  Doit commencer par une lettre.
                  <br />
                  Lettres, nombres, underscores et caractères spéciaux (ex: &quot;-&quot;)
                  sont autorisés.
                </p>
              </FormControl>
            </div>

            {/* ----- LAST NAME ----- */}
            <div className="connectModal">
              <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
                {!isValidedLastName ? (
                  <TextField
                    type="text"
                    id="lastName"
                    ref={lastNameRef}
                    autoComplete="off"
                    onChange={handleLastName}
                    label="Nom"
                    variant="outlined"
                    size="small"
                    aria-invalid={isValidedLastName ? 'false' : 'true'}
                    aria-describedby="userNotification"
                    onFocus={() => setIsLastNameFocus(true)}
                    onBlur={() => setIsLastNameFocus(false)}
                    required
                  />
                ) : (
                  <TextField
                    type="text"
                    id="firstName"
                    ref={lastNameRef}
                    autoComplete="off"
                    onChange={handleLastName}
                    label="Nom"
                    variant="outlined"
                    size="small"
                    aria-invalid={isValidedLastName ? 'false' : 'true'}
                    aria-describedby="userNotification"
                    onFocus={() => setIsLastNameFocus(true)}
                    onBlur={() => setIsLastNameFocus(false)}
                    color={isValidedLastName && 'success'}
                    required
                  />
                )}

                {/* Display the input instructions to the user */}
                <p
                  id="userNotification"
                  className={
                    isLastNameFocus && !isValidedLastName
                      ? 'connectModal__instructions'
                      : 'connectModal__noInstructions'
                  }>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Doit contenir un minimum de 2 lettres et un maximum de 24 lettres.
                  <br />
                  Doit commencer par une lettre.
                  <br />
                  Lettres, nombres, underscores et caractères spéciaux (ex: &quot;-&quot;)
                  sont autorisés.
                </p>
              </FormControl>
            </div>

            {/* ----- EMAIL INPUT ----- */}
            <div className="connectModal">
              <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
                {!isValidedEmail ? (
                  <TextField
                    type="email"
                    id="email"
                    ref={emailRef}
                    autoComplete="off"
                    onChange={handleEmail}
                    label="Email"
                    variant="outlined"
                    size="small"
                    aria-invalid={isValidedEmail ? 'false' : 'true'}
                    aria-describedby="userNotification"
                    required
                  />
                ) : (
                  <TextField
                    type="email"
                    id="email"
                    ref={emailRef}
                    autoComplete="off"
                    onChange={handleEmail}
                    label="Email"
                    variant="outlined"
                    size="small"
                    aria-invalid={isValidedEmail ? 'false' : 'true'}
                    aria-describedby="userNotification"
                    color={isValidedEmail && 'success'}
                    required
                  />
                )}
              </FormControl>
            </div>

            {/* ----- PASSWORD INPUT ----- */}
            <div className="connectModal__passwordContainer">
              <div className="connectModal__passwordContainer__passwordInput">
                <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
                  {!isValidedPassword ? (
                    <TextField
                      type="password"
                      id="password"
                      autoComplete="off"
                      value={password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                      }
                      label="Mot de passe"
                      variant="outlined"
                      size="small"
                      aria-invalid={isValidedPassword ? 'false' : 'true'}
                      aria-describedby="userNotification"
                      onFocus={() => setIsPasswordFocused(true)}
                      onBlur={() => setIsPasswordFocused(false)}
                      required
                    />
                  ) : (
                    <TextField
                      variant="standard"
                      type="password"
                      id="password"
                      autoComplete="off"
                      value={password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                      }
                      label="Mot de passe"
                      size="small"
                      aria-invalid={isValidedPassword ? 'false' : 'true'}
                      aria-describedby="passwordNotification"
                      onFocus={() => setIsPasswordFocused(true)}
                      onBlur={() => setIsPasswordFocused(false)}
                      color={isValidedPassword && 'success'}
                      required
                    />
                  )}
                  {/* Display the input instructions to the user */}

                  <p
                    id="passwordNotification"
                    className={
                      isPasswordFocused && !isValidedPassword
                        ? 'connectModal__instructions'
                        : 'connectModal__noInstructions'
                    }>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Doit contenir un minimum de 8 lettres et un maximum de 24 lettres.
                    <br />
                    Doit contenir au moins une majuscule, un nombre et un caractère
                    spécial (&quot;#&quot; , &quot;!&quot;, &quot;%&quot;,
                    &quot;$&quot;...)
                  </p>
                </FormControl>
              </div>

              {/* ----- PASSWORD CONFIRMATION INPUT ----- */}
              <div className="connectModal__password">
                <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
                  {!isValidedMatch ? (
                    <TextField
                      type="password"
                      id="password"
                      autoComplete="off"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setMatchPassword(e.target.value)
                      }
                      label="Confirmation"
                      variant="outlined"
                      size="small"
                      aria-invalid={isValidedMatch ? 'false' : 'true'}
                      aria-describedby="PasswordConfirmNotification"
                      onFocus={() => setIsMatchFocused(true)}
                      onBlur={() => setIsMatchFocused(false)}
                      required
                    />
                  ) : (
                    <TextField
                      type="password"
                      id="password"
                      autoComplete="off"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setMatchPassword(e.target.value)
                      }
                      label="Confirmation"
                      variant="outlined"
                      size="small"
                      aria-invalid={isValidedMatch ? 'false' : 'true'}
                      aria-describedby="PasswordConfirmNotification"
                      onFocus={() => setIsMatchFocused(true)}
                      onBlur={() => setIsMatchFocused(false)}
                      color={isValidedMatch && 'success'}
                      required
                    />
                  )}

                  {/* Display the input instructions to the user */}
                  <p
                    id="PasswordConfirmNotification"
                    className={
                      isMatchFocused && !isValidedMatch
                        ? 'connectModal__instructions'
                        : 'connectModal__noInstructions'
                    }>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Les deux mots de passes doivent être identiques.
                  </p>
                </FormControl>
              </div>
            </div>

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
                {!isValidedFirstName ||
                !isValidedLastName ||
                !isValidedPassword ||
                !isValidedEmail ||
                !isValidedMatch ? (
                  <Button disabled>Sinscrire</Button>
                ) : (
                  // <Link to="/seconnecter">
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
                  // </Link>
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

          <div className="connectModal__logged">
            <p>
              Vous avez déjà un compte ?
              <Link to="/seconnecter">
                <span>Se connecter</span>
              </Link>
            </p>
          </div>
        </section>
      </MediaQuery>
    </>
  );
};

export default ConnectModal;
