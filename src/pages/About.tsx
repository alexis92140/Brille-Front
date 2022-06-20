import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h4> Engagé pour l&apos;environnement</h4>
      <h2> Découvrez Brille</h2>
      <div className="about__container">
        <h4 className="first"> descriptif de la marque</h4>
        <div className="second">
          {' '}
          <img id="tissus" src="../assets/images/tissus.png" alt="tissus" />{' '}
        </div>
        <div className="third">
          {' '}
          <img id="wool" src="./assets/images/laine.png" alt="laine" />
        </div>
        <h4 className="fifth">l&apos;atelier</h4>
        <h4 className="fourth">descriptif des matériaux </h4>
        <div className="sixth">
          {' '}
          <img id="workshop" src="./assets/images/atelier.png" alt="atelier" />
        </div>
        <div className="seventh">
          {' '}
          <img id="nature" src="./assets/images/nature.png" alt="nature" />
        </div>
        <h4 className="eighth">engagé pour notre planète</h4>
      </div>
    </div>
  );
};

export default About;
