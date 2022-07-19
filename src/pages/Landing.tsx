import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import GoToTop from '../components/globals/GoToTop';
import Essentials from '../components/homepage/Essentials';
import IParagraph from '../interfaces/IParagraph';

// ----------------------------------------------------------------

const Landing = () => {
  const [quote, setQuote] = useState<IParagraph>();
  const videoSrc = '../assets/video/hpvideo.mp4';

  useEffect(() => {
    const getQuote = async () => {
      // indispensable quand on veut utiliser async/await dans un useEffect
      let url: string = `${import.meta.env.VITE_API_URL}/api/pages/61/paragraphs`;

      const { data } = await axios.get<IParagraph>(url, {
        withCredentials: true,
      });
      setQuote(data[0]);
    };
    getQuote();
  }, []);

  return (
    <div className="landingPage">
      <div className="fade">
        <h5> {quote?.description} </h5>
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
