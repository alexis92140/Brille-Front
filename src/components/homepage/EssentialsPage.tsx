import React from 'react';

const EssentialsPage = () => {
  return (
    <div className="essentialsPage">
      <div>
        <h1> LES ESSENTIELS </h1>
        <h2> LA COLLECTION </h2>
      </div>
      <div className="essentialsPage__container">
        <div className="essentialsPage__firstImage">
          <img id="firstbag" src="../assets/images/sac1.png" alt="sac sur une futa" />
        </div>
        <div className="essentialsPage__secondImage">
          {' '}
          <img
            id="secondbag"
            src="../assets/images/sac2.png"
            alt="sac et mannequin"
          />{' '}
        </div>
        <div className="essentialsPage__thirdImage">
          {' '}
          <img id="thirdbag" src="../assets/images/sac3.png" alt="sac sur table" />{' '}
        </div>
      </div>
    </div>
  );
};

export default EssentialsPage;
