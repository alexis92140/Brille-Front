import React from 'react';

import aboutInfo from '../../data/aboutInfo';
import GoToTop from '../components/globals/GoToTop';

const About = () => {
  return (
    <div className="about">
      <h4> Engagé pour l&apos;environnement</h4>
      <h2> Découvrez Brille</h2>
      <div className="about__container">
        {aboutInfo &&
          aboutInfo.map(({ id, image, title, text }, index) => (
            <div className="" key={id}>
              <div className="about__container__test">
                {' '}
                {index % 2 === 0 ? (
                  <>
                    <div className="about__container__test__title">
                      {' '}
                      <h4> {title}</h4>
                    </div>
                    <div className="about__container__paragraph">{text}</div>
                    <img id="aboutImg" src={image} alt="Images descriptive du texte" />
                  </>
                ) : (
                  <>
                    <img id="aboutImg" src={image} alt="Images descriptive du texte" />
                    <div className="about__container__test__title">
                      <h4>{title}</h4>
                    </div>
                    <div className="about__container__paragraph">{text}</div>
                  </>
                )}
              </div>
            </div>
          ))}
      </div>
      <GoToTop />
    </div>
  );
};

export default About;
