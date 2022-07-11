// import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Hero from './Hero';
import SignUp from './SignUp';
// import Login from './Login';
// import IImage from '../../interfaces/IImage';

// ----------------------------------------------------------------

const ConnectModal = () => {
  // const [heroBackground, SetHeroBackground] = useState<IImage[]>();

  // useEffect(() => {
  //   const getOneImage = async () => {
  //     // indispensable quand on veut utiliser async/await dans un useEffect
  //     let url: string = 'http://localhost:8000/api/images/41';

  //     const { data } = await axios.get<IImage[]>(url, {
  //       withCredentials: true,
  //     });
  //     SetHeroBackground(data);
  //     console.log(data);
  //   };

  //   getOneImage();
  // }, []);

  return (
    <div className="connectModal">
      <div className="connectModal__Sign">
        <SignUp />
        {/* <Login /> */}
      </div>
      <div className="connectModal__hero">
        <Hero />
      </div>
    </div>
  );
};

export default ConnectModal;
