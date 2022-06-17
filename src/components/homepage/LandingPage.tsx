import '../../sass/homepage/_landingpage.scss';

import React from 'react';
import ReactPlayer from 'react-player';

import EssentialsPage from './EssentialsPage';
// Executer NPM install pour recuperer react player //
const LandingPage = () => {
  const videoSrc = '../assets/video/hpvideo.mp4';
  return (
    <div className="landingpage">
      <ReactPlayer
        url={videoSrc}
        width="100%"
        height="auto"
        playing={true}
        loop={true}
        mute
      />
      <EssentialsPage />
    </div>
  );
};

export default LandingPage;
