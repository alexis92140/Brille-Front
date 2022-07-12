import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import IImage from '../../interfaces/IImage';
import IPage from '../../interfaces/IPage';

// ----------------------------------------------------------------

const Essentials = () => {
  const [images, setImages] = useState<IImage[]>();
  const [title, setTitle] = useState<IPage>();

  useEffect(() => {
    const getImages = async () => {
      // indispensable quand on veut utiliser async/await dans un useEffect
      let url: string = `${import.meta.env.VITE_API_URL}/api/pages/61/images`;

      const { data } = await axios.get<IImage[]>(url, {
        withCredentials: true,
      });
      setImages(data);
      console.log(data);
    };
    getImages();

    const getTitle = async () => {
      // indispensable quand on veut utiliser async/await dans un useEffect
      let url: string = `${import.meta.env.VITE_API_URL}/api/pages/61`;

      const { data } = await axios.get<IPage>(url, {
        withCredentials: true,
      });
      setTitle(data);
      console.log(data);
    };
    getTitle();
  }, []);
  return (
    <div className="essentialsPage">
      <div>
        <Link to="/collection">
          <h1> {title?.name} </h1>
        </Link>
        <Link to="/collection">
          <h2> LA COLLECTION </h2>
        </Link>
      </div>
      <div className="essentialsPage__container">
        {images &&
          images.map(({ id, image }, index) => (
            <div key={index}>
              <div key={id} className="essentialsPage__Images">
                <img id="bags" src={image} alt="bag and model" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Essentials;
