import React from 'react';
import { Link } from 'react-router-dom';

const Essentials = () => {
  return (
    <div className="essentialsPage">
      <div>
        <Link to="/collection">
          <h1> LES ESSENTIELS </h1>
        </Link>
        <Link to="/collection">
          <h2> LA COLLECTION </h2>
        </Link>
      </div>
      <div className="essentialsPage__container">
        <div className="essentialsPage__firstImage">
          <img id="firstbag" src="../assets/images/sac1.png" alt="bag big size" />
        </div>
        <div className="essentialsPage__secondImage">
          {' '}
          <img id="secondbag" src="../assets/images/sac2.png" alt="bag and model" />{' '}
        </div>
        <div className="essentialsPage__thirdImage">
          {' '}
          <img id="thirdbag" src="../assets/images/sac3.png" alt="bag middle size" />{' '}
        </div>
      </div>
    </div>
  );
};

export default Essentials;
