import React from 'react';

import LandingPage from '../components/homepage/LandingPage';

const Homepage = () => {
  return (
    <div className="homePage">
      <LandingPage />
      <h3> Brille </h3>
      <div className="homePage__img">
        <img
          id="logo"
          src="../assets/images/logo_scroll.svg"
          alt="logo for scrolling down"
        />
      </div>
    </div>
  );
};

export default Homepage;
