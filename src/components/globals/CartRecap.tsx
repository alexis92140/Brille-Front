import React, { useState } from 'react';

// ----- Child Components -----
import LeftSide from '../cart/LeftSide';
import RightSide from '../cart/RightSide';

// ----------------------------------------------------------------

const CartRecap = () => {
  // >> ----- STATES -----
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  // >> ----- FUNCTIONS : handle the inputs events-----
  const handleFirstname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  };
  const handleLastname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="cartContainer">
      {/* ----- LEFT SIDE ----- */}
      <LeftSide
        firstname={firstname}
        setFirstname={setFirstname}
        lastname={lastname}
        setLastname={setLastname}
        email={email}
        setEmail={setEmail}
        handleFirstname={handleFirstname}
        handleLastname={handleLastname}
        handleEmail={handleEmail}
      />

      {/* ----- RIGHT SIDE ----- */}
      <RightSide />
    </div>
  );
};

export default CartRecap;
