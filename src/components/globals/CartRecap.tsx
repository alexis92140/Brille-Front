import React from 'react';

// ----- Child Components -----
import LeftSide from '../cart/LeftSide';
import RightSide from '../cart/RightSide';

// ----------------------------------------------------------------

const CartRecap = () => {
  return (
    <div className="cartContainer">
      {/* ----- LEFT SIDE ----- */}
      <LeftSide />

      {/* ----- RIGHT SIDE ----- */}
      <RightSide />
    </div>
  );
};

export default CartRecap;
