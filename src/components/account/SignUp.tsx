/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import React, { useState } from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { InstagramLoginButton } from 'react-social-login-buttons';

// --------------------------------------------------------------------------

const SignUp = () => {
  // >> STATES

  // ---- for the password ----
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
  // ---- for the password ----
  const handleChange = (prop: string) => (e: { target: { value: any } }) => {
    setValues({ ...values, [prop]: e.target.value });
  };
  // ---- for the checkbox ----
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  // ---- for the login button ----
  const [isClick, setIsClick] = React.useState<boolean>(false);

  // >> MY FUNCTIONS

  // ---- to handle the password display -----
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  // ---- to handle the checkbox ------
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  // ---- to handle the forgotten password ------
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setIsClick(!isClick);
  };

  // ---- to handle click on socials buttons ------
  const displayHello = () => alert('Social Authentication OK !');

  // >> MY VARIABLES

  // ------ store the social icons styles ------
  const socialIconAlign: string | any = 'center';
  const facebookText: string = 'Se connecter avec Facebook';
  const googleText: string = 'Se connecter avec Google';
  const instagramText: string = 'Se connecter avec Instagram';

  // ------------------ RETURN --------------------------------
  return (
    <div className="signUpContainer">
      <p className="signUpContainer__title">INSCRIPTION</p>
      <p className="signUpContainer__subtitle">
        Veuillez indiquer votre email et mot de passe :
      </p>

      {/* ----- EMAIL ----- */}
      <div className="signUpContainer__email">
        <FormControl sx={{ m: 1, width: '45ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
          <Input
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="email icon">{<EmailIcon />}</IconButton>
              </InputAdornment>
            }
            required
          />
        </FormControl>
      </div>

      {/* ----- PASSWORD ----- */}
      <div className="signUpContainer__password">
        <FormControl sx={{ m: 1, width: '45ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Mot de passe</InputLabel>

          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}>
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            required
          />
        </FormControl>
      </div>

      <div className="signUpContainer__choices">
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={handleCheck}
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
        <div onClick={handleClick}>
          <Button
            variant="text"
            size="small"
            sx={{
              color: grey[700],
              '&.Mui-checked': {
                color: pink[700],
              },
            }}>
            S&apos;inscrire
          </Button>
        </div>
      </div>

      {/* ----- FORGOTTEN PASSWORD ? ----- */}
      <div className="signUpContainer__forgotPassword">
        <Button
          variant="text"
          sx={{
            color: grey[700],
          }}>
          Mot de passe oublié ?
        </Button>
      </div>

      <div className="signUpContainer__socials">
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
        <InstagramLoginButton
          onClick={displayHello}
          text={instagramText}
          align={socialIconAlign}
        />
      </div>
    </div>
  );
};

export default SignUp;
