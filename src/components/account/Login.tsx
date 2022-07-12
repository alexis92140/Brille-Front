import React from 'react';

import Hero from './Hero';
import LoginModal from './LoginModal';

// ----------------------------------------------------------------

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginContainer__sign">
        <LoginModal />
      </div>
      <div className="loginContainer__hero">
        <Hero />
      </div>
    </div>
  );
};

export default Login;
