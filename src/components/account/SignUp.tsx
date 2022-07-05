import React, { useState } from 'react';

import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';

const SignUp = () => {
  // ---- STATES ----
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
  const handleChange = (prop: string) => (e: { target: { value: any } }) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  // ---- Functions to handle the password display
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <div className="signUpContainer">
      <p className="signUpContainer__title">CONNEXION</p>
      <p className="signUpContainer__subtitle">
        Veuillez indiquer votre email et mot de passe :
      </p>

      <div className="signUpContainer__email">
        <FormControl sx={{ m: 1, width: '40ch' }} variant="standard">
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

      <div className="signUpContainer__password">
        <FormControl sx={{ m: 1, width: '40ch' }} variant="standard">
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
        {values.password !== '' && (
          <p className="signUpContainer__forgotPassword">Mot de passe oublié ?</p>
        )}
      </div>
    </div>
  );
};

export default SignUp;
