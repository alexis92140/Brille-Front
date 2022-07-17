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
import { Link } from 'react-router-dom';

import IUser from '../../interfaces/IUser';

// --------------------------------------------------------------

// >> MY VARIABLES

// ------ Pattern for the email input ------
const EMAIL_REGEX: any = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);

// ------ Pattern for the user input ------
const USER_REGEX: any = /^[A-z][A-z0-9-_]{3,23}$/;

// ------ Pattern for the addresses input ------
const ADDRESS_REGEX: any =
  /((^[0-9]*).?((BIS)|(TER)|(QUATER))?)?((\W+)|(^))(([a-z]+.)*)([0-9]{5})?.(([a-z'']+.)*)$/;

// ------ Pattern for the ZIPCODE input ------
const ZIPCODE_REGEX: any = /[0-9]{5}/g;

// ------ Pattern for the password input ------
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

// --------------------------------------------------------------

const ConnectModal = () => {
  // >> REF HOOKS

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const addressLine1Ref = useRef<HTMLInputElement>(null);
  const addressLine2Ref = useRef<HTMLInputElement>(null);
  const zipCodeRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLInputElement>(null);

  // >> STATES<<

  // ---- for the firstName ----
  const [firstName, setFirstName] = useState<string>('');
  const [isValidFirstName, setIsValidFirstName] = useState<boolean>(false);
  const [isFirstNameFocus, setIsFirstNameFocus] = useState<boolean>(false);

  // ---- for the lastName ----
  const [lastName, setLastName] = useState<string>('');
  const [isValidLastName, setIsValidLastName] = useState<boolean>(false);
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

  // ---- for the addressLine1 ----
  const [address1, setAddress1] = useState<string>('');
  const [isValidAddress, setIsValidAddress] = useState<boolean>(false);

  // ---- for the addressLine2 ----
  const [address2, setAddress2] = useState<string>('');
  const [isValidAddress2, setIsValidAddress2] = useState<boolean>(false);

  // ---- for the zipCode ----
  const [zipCode, setZipCode] = useState<string>('');
  const [isValidedZipCode, setIsValidedZipCode] = useState<boolean>(false);

  // ---- for the City----
  const [city, setCity] = useState<string>('');
  const [isValidedCity, setIsValidedCity] = useState<boolean>(false);

  // ---- for the checkbox ----
  const [isChecked, setIsChecked] = useState<boolean>(false);

  // ---- for the error message ----
  const [errorMessage, setErrorMessage] = useState<string>('');

  // >> MY FUNCTIONS

  // ---- to handle checkbox click ------
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  // ---- to update firstName change  ------
  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  // ---- to update lastName change  ------
  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  // ---- to update Email change  ------
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
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

  // >> USE EFFECTS

  // ---- Set the focus when the component load ----
  useEffect(() => {
    if (null !== firstNameRef.current) {
      firstNameRef.current.focus();
    }
  }, []);

  // ---- for the firstName ----
  useEffect(() => {
    setIsValidFirstName(USER_REGEX.test(firstName));
  }, [firstName]);

  // ---- for the lastName ----
  useEffect(() => {
    setIsValidLastName(USER_REGEX.test(lastName));
  }, [lastName]);

  // ---- for the email ----
  useEffect(() => {
    setIsValidedEmail(EMAIL_REGEX.test(email));
  }, [email]);

  // ---- for the confirmed password ----
  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setIsValidedPassword(result);
    const match = password === matchPassword;
    setIsValidedMatch(match);
  }, [password, matchPassword]);

  // ---- for the address1 ----
  useEffect(() => {
    setIsValidAddress(ADDRESS_REGEX.test(address1));
  }, [address1]);

  // ---- for the address2 ----
  useEffect(() => {
    setIsValidAddress2(ADDRESS_REGEX.test(address2));
  }, [address2]);

  // ---- for the ZipCode ----
  useEffect(() => {
    setIsValidedZipCode(ZIPCODE_REGEX.test(zipCode));
  }, [zipCode]);

  // ---- for the City ----
  useEffect(() => {
    setIsValidedCity(ADDRESS_REGEX.test(city));
  }, [city]);

  useEffect(() => {
    setErrorMessage('');
  }, [firstName, lastName, password, email, matchPassword, address1, zipCode, city]);

  // const validatePhoneNumber = (phone: string) => {
  //   const pattern = /^\(?(\d{2})\)?[- ]?(\d{2})[- ]?(\d{2})[- ]?(\d{2})[- ]?(\d{2})$/;
  //   return pattern.test(phone);
  // };

  // >> AXIOS

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await axios.post<IUser>(
        `${import.meta.env.VITE_DB_URL}api/users`,
        JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      );
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // pour gérer les erreurs de type axios
        if (err.response?.status === 401) {
          setErrorMessage(`Veuillez vérifier l'email ou le mot de passe`);
        }
      } else {
        // pour gérer les erreurs non axios
        if (err instanceof Error) setErrorMessage(errorMessage);
      }
    }
  };

  // ------------------ RETURN --------------------------------
  return (
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
            {!isValidFirstName ? (
              <TextField
                type="text"
                id="firstName"
                ref={firstNameRef}
                autoComplete="off"
                onChange={handleFirstName}
                label="Prénom"
                variant="outlined"
                size="small"
                aria-invalid={isValidFirstName ? 'false' : 'true'}
                aria-describedby="userNotification"
                onFocus={() => setIsFirstNameFocus(true)}
                onBlur={() => setIsFirstNameFocus(false)}
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
                aria-invalid={isValidFirstName ? 'false' : 'true'}
                aria-describedby="userNotification"
                onFocus={() => setIsFirstNameFocus(true)}
                onBlur={() => setIsFirstNameFocus(false)}
                color={isValidFirstName && 'success'}
                required
              />
            )}

            {/* Display the input instructions to the user */}
            <p
              id="userNotification"
              className={
                isFirstNameFocus && !isValidFirstName
                  ? 'connectModal__instructions'
                  : 'connectModal__noInstructions'
              }>
              <FontAwesomeIcon icon={faInfoCircle} />
              Doit contenir un minimum de 2 lettres et un maximum de 24 lettres. <br />
              Doit commencer par une lettre. <br />
              Lettres, nombres, underscores et caractère spéciaux (ex: &quot;-&quot;) sont
              autorisés.
            </p>
          </FormControl>
        </div>

        {/* ----- LAST NAME ----- */}
        <div className="connectModal">
          <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
            {!isValidLastName ? (
              <TextField
                type="text"
                id="lastName"
                ref={lastNameRef}
                autoComplete="off"
                onChange={handleLastName}
                label="Nom"
                variant="outlined"
                size="small"
                aria-invalid={isValidLastName ? 'false' : 'true'}
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
                aria-invalid={isValidLastName ? 'false' : 'true'}
                aria-describedby="userNotification"
                onFocus={() => setIsLastNameFocus(true)}
                onBlur={() => setIsLastNameFocus(false)}
                color={isValidLastName && 'success'}
                required
              />
            )}

            {/* Display the input instructions to the user */}
            <p
              id="userNotification"
              className={
                isLastNameFocus && !isValidLastName
                  ? 'connectModal__instructions'
                  : 'connectModal__noInstructions'
              }>
              <FontAwesomeIcon icon={faInfoCircle} />
              Doit contenir un minimum de 2 lettres et un maximum de 24 lettres. <br />
              Doit commencer par une lettre. <br />
              Lettres, nombres, underscores et caractère spéciaux (ex: &quot;-&quot;) sont
              autorisés.
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
              Doit contenir un minimum de 8 lettres et un maximum de 24 lettres. <br />
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

        {/* ----- ADDRESSLINE 1 INPUT ----- */}
        <div className="connectModal__address">
          <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
            {!isValidAddress ? (
              <TextField
                type="text"
                id="addresseLine1"
                ref={addressLine1Ref}
                autoComplete="off"
                onChange={handleAddress1}
                label="Adresse 1"
                variant="outlined"
                size="small"
              />
            ) : (
              <TextField
                type="text"
                id="addressLine1"
                ref={addressLine1Ref}
                autoComplete="off"
                onChange={handleAddress1}
                label="Adresse 1"
                variant="outlined"
                size="small"
                color={isValidAddress && 'success'}
              />
            )}
          </FormControl>
        </div>

        {/* ----- ADDRESSLINE 2 INPUT ----- */}
        <div className="connectModal__address">
          <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
            {!isValidAddress2 ? (
              <TextField
                type="text"
                id="addresseLine2"
                ref={addressLine2Ref}
                autoComplete="off"
                onChange={handleAddress2}
                label="Adresse 2"
                variant="outlined"
                size="small"
              />
            ) : (
              <TextField
                type="text"
                id="addressLine2"
                ref={addressLine2Ref}
                autoComplete="off"
                onChange={handleAddress2}
                label="Adresse 2"
                variant="outlined"
                size="small"
                color={isValidAddress2 && 'success'}
              />
            )}
          </FormControl>
        </div>

        {/* ----- ZIPCODE AND COUNTRY INPUT ----- */}
        <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
          <div className="connectModal__address__infos">
            {!isValidedZipCode ? (
              <div className="connectModal__address__zipCode">
                <TextField
                  type="number"
                  id="zipCode"
                  ref={zipCodeRef}
                  autoComplete="off"
                  onChange={handleZipCode}
                  label="Code Postal"
                  variant="outlined"
                  size="small"
                />
              </div>
            ) : (
              <div className="connectModal__address__zipCode">
                <TextField
                  type="number"
                  id="zipCode"
                  ref={zipCodeRef}
                  autoComplete="off"
                  onChange={handleZipCode}
                  label="Code Postal"
                  variant="outlined"
                  size="small"
                  color={isValidedZipCode && 'success'}
                />
              </div>
            )}
            {!isValidedCity ? (
              <div className="connectModal__address__city">
                <TextField
                  type="text"
                  id="outlined-basic"
                  ref={cityRef}
                  onChange={handleCity}
                  label="Ville"
                  variant="outlined"
                  size="small"
                  autoComplete="off"
                />
              </div>
            ) : (
              <div className="connectModal__address__city">
                <TextField
                  type="text"
                  id="outlined-basic"
                  ref={cityRef}
                  onChange={handleCity}
                  label="Ville"
                  variant="outlined"
                  size="small"
                  autoComplete="off"
                  color={isValidedCity && 'success'}
                />
              </div>
            )}
          </div>
        </FormControl>

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
            {!isValidFirstName ||
            !isValidLastName ||
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
  );
};

export default ConnectModal;
