import React from 'react';

import Hero from './Hero';
import PasswordForgotModal from './PasswordForgotModal';

// ----------------------------------------------------------------

const PasswordForgot = () => {
  return (
    <div className="passwordForgot">
      <div className="passwordForgot__sign">
        <PasswordForgotModal />
      </div>
      <div className="passwordForgot__hero">
        <Hero />
      </div>
    </div>
  );
};

export default PasswordForgot;
