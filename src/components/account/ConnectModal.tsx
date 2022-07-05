import React, { useState } from 'react';

import SignUp from './SignUp';
// import Login from './Login';

const ConnectModal = () => {
  const [signUp, setSetSignUp] = useState(true);

  return (
    <div className="connectModal">
      <div className="connectModal__container">
        <SignUp />
        {/* <Login /> */}
      </div>
    </div>
  );
};

export default ConnectModal;
