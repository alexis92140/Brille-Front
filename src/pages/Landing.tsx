import React from 'react';
import ReactPlayer from 'react-player';

import GoToTop from '../components/globals/GoToTop';
import Essentials from '../components/homepage/Essentials';

// ----------------------------------------------------------------

const Landing = () => {
  const videoSrc = '../assets/video/hpvideo.mp4';
  return (
    <div className="landingPage">
      <div className="fade">
        <h3> Brille </h3>
      </div>
      <img
        id="logo"
        src="../assets/images/logo_scroll.svg"
        alt="logo for scrolling down"
      />
      <ReactPlayer
        url={videoSrc}
        width="screen"
        height="screen"
        playing={true}
        loop={true}
        muted={true}
      />
      <Essentials />
      <GoToTop />
    </div>
  );
};

export default Landing;
