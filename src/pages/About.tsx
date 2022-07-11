// import axios from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// import aboutInfo from '../../data/aboutInfo';
import GoToTop from '../components/globals/GoToTop';
import IImage from '../interfaces/IImage';
import IPage from '../interfaces/IPage';
import IParagraph from '../interfaces/IParagraph';

const About = () => {
  // Ici j'appel mon interface image >>
  const [images, setImages] = useState<IImage[]>([]);
  // Ici j'appel mon interface page >>
  const [page, setPage] = useState<IPage>();
  // Ici j'appel mon interface paragraphe>>
  const [paragraphs, setParagraphs] = useState<IParagraph[]>();

  useEffect(() => {
    // je recupère la page:
    const getPage = async () => {
      // indispensable quand on veut utiliser async/await dans un useEffect
      let url: string = `${import.meta.env.VITE_API_URL}/api/pages/11`;

      const { data } = await axios.get<IPage>(url, {
        withCredentials: true,
      });
      setPage(data);
    };

    getPage();
    const getImage = async () => {
      // indispensable quand on veut utiliser async/await dans un useEffect
      let url: string = `${import.meta.env.VITE_API_URL}/api/pages/11/images`;

      const { data } = await axios.get<IImage[]>(url, {
        withCredentials: true,
      });
      setImages(data);
    };

    getImage();

    const getParagraph = async () => {
      // indispensable quand on veut utiliser async/await dans un useEffect
      let url: string = `${import.meta.env.VITE_API_URL}/api/pages/11/paragraphs`;

      const { data } = await axios.get<IParagraph[]>(url, {
        withCredentials: true,
      });
      setParagraphs(data);
    };

    getParagraph();
  }, []);

  console.log(images);

  return (
    <div className="about">
      {/* ici je suis supposée recupérer le title de page>> */}
      <h1> {page?.name} </h1>
      <div className="about__container">
        {paragraphs &&
          paragraphs.map(({ id, title, description, idImage }, index) => (
            <div key={id}>
              <div className="about__container__idx">
                {' '}
                {index % 2 === 0 ? (
                  <>
                    <div className="about__container__block">
                      <h4 className="about__container__idx__title">{title}</h4>
                      <p className="about__container__idx__paragraph">{description}</p>
                    </div>
                    <img
                      id="aboutImg"
                      src={images.filter((image) => image.id === idImage)[0].image}
                      alt="Images descriptive du texte"
                    />
                  </>
                ) : (
                  <>
                    <img
                      id="aboutImg"
                      src={images.filter((image) => image.id === idImage)[0].image}
                      alt="Images descriptive du texte"
                    />
                    <div className="about__container__block">
                      <h4 className="about__container__idx__title">{title}</h4>
                      <p className="about__container__idx__paragraph">{description}</p>
                    </div>
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
