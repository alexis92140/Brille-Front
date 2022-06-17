import '../../sass/homepage/_essentialspage.scss';

import React from 'react';

const EssentialsPage = () => {
  return (
    <div className="essentialsPage">
      <div className="essentialsPage__titles">
        <h1> LES ESSENTIELS </h1>
        <h2> LA COLLECTION </h2>
      </div>
      <div className="container">
        <div className="first">
          <img id="firstbag" src="../assets/images/sac1.png" alt="sac sur une futa" />
        </div>
        <div className="second">
          {' '}
          <img
            id="secondbag"
            src="../assets/images/sac2.png"
            alt="sac et mannequin"
          />{' '}
        </div>
        <div className="third">
          {' '}
          <img id="thirdbag" src="../assets/images/sac3.png" alt="sac sur table" />{' '}
        </div>
      </div>
    </div>
  );
};

export default EssentialsPage;
