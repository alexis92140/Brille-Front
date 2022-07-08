
/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */

import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';


import React, { useState } from 'react';
// import { GoogleLoginButton } from 'react-social-login-buttons';
import { createButton } from 'react-social-login-buttons';

// ---- Config for the SignIn google button------
const config = {
  text: 'Log in with Facebook',
  icon: 'facebook',
  iconFormat: (name) => `fa fa-${name}`,
  style: { background: '#3b5998' },
  activeStyle: { background: '#293e69' },
};


const SignUp = () => {
  // ------ STATES ------
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
  const handleChange = (prop: string) => (e: { target: { value: any } }) => {
    setValues({ ...values, [prop]: e.target.value });
  };
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const [isClick, setIsClick] = React.useState<boolean>(false);

  // ---- Functions to handle the password display -----
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  // ---- Functions to handle the checkbox ------
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  // ---- Functions to handle the forgotten password ------
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setIsClick(!isClick);
  };

  // const MyFacebookLoginButton = createButton(config);

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
            />
          }
          label="Rester connecté"
          role="button"
        />
        <div onClick={handleClick}>
          <Button variant="text" size="small">
            S&apos;inscrire
          </Button>
        </div>
      </div>
      <div className="signUpContainer__separator">
        <div className="signUpContainer__separator__line"></div>
        <p>Ou</p>
        <div className="signUpContainer__separator__line"> </div>
      </div>
      {/* <MyFacebookLoginButton onClick={() => alert('Hello')} /> */}
    </div>
  );
};

export default SignUp;
