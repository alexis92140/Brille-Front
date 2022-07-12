import React from 'react';

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
