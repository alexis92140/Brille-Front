import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import IImage from '../../interfaces/IImage';

// ----------------------------------------------------------------

const Essentials = () => {
  const { id } = useParams();
  const [images, setImages] = useState<IImage>();

  useEffect(() => {
    const getImages = async () => {
      // indispensable quand on veut utiliser async/await dans un useEffect
      let url: string = `${import.meta.env.VITE_API_URL}/api/images/${id}`;

      const { data } = await axios.get<IImage>(url, {
        withCredentials: true,
      });
      setImages(data);
      console.log(data);
    };
    getImages();
  }, [id]);
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
