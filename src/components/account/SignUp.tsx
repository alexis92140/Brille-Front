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

import ConnectModal from './ConnectModal';
import Hero from './Hero';

// ----------------------------------------------------------------

const SignUp = () => {
  return (
    <div className="signUpContainer">
      <div className="signUpContainer__sign">
        <ConnectModal />
      </div>
      <div className="signUpContainer__hero">
        <Hero />
      </div>
    </div>
  );
};

export default SignUp;
