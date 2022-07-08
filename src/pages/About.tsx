import axios from 'axios';
import React, { useEffect, useState } from 'react';

import GoToTop from '../components/globals/GoToTop';
import IImage from '../interfaces/IImage';
import IPage from '../interfaces/IPage';
import IParagraphs from '../interfaces/IParagraphs';

const About = () => {
  // Ici j'appel mon interface image >>
  const [allImages, setAllImages] = useState<IImage[]>();
  // Ici j'appel mon interface page pour UNE page >>
  const [onePage, setOnePage] = useState<IPage[]>();
  // Ici j'appel mon interface paragraphe pour UN paragraphe >>
  const [oneParagraph, setOneParagraph] = useState<IParagraphs[]>();

  useEffect(() => {
    // je recupère les images:
    const getAllImages = async () => {
      // indispensable quand on veut utiliser async/await dans un useEffect
      let url: string = 'https://brille-handbags.herokuapp.com/api/images';

      const { data } = await axios.get<IImage[]>(url, {
        withCredentials: true,
      });
      setAllImages(data);
      console.log(data);
    };

    getAllImages();

    // je recupère UN titre
    const getOnePage = async () => {
      // indispensable quand on veut utiliser async/await dans un useEffect
      let url: string = 'https://brille-handbags.herokuapp.com/api/pages/:idPage';
      const { data } = await axios.get<IPage[]>(url, {
        withCredentials: true,
      });
      setOnePage(data);
      console.log(data);
    };

    getOnePage();

    // je recupère UN paragraphe
    const getOneParagraph = async () => {
      // indispensable quand on veut utiliser async/await dans un useEffect
      let url: string = 'https://brille-handbags.herokuapp.com/api/paragraph/4';
      const { data } = await axios.get<IParagraphs[]>(url, {
        withCredentials: true,
      });
      setOneParagraph(data);
      console.log(data);
    };

    getOneParagraph();
  }, []);

  return (
    <div className="about">
      {/* ici je suis supposée recupérer le title de page>> */}
      {/* <h4> {onePage.title} ici titre mais ça marche pas grrr </h4> */}
      <h4> Univers brille </h4>
      <h2> Découvrez Brille</h2>
      <div className="about__container">
        {/* ici je map : images pour afficher les images de la bdd */}
        {allImages &&
          allImages.map(({ id, image }, index) => (
            <div key={id}>
              <div className="about__container__test">
                {' '}
                {index % 2 === 0 ? (
                  <>
                    <div className="about__container__test__title">
                      <h4> Descriptif des matériaux</h4>
                    </div>
                    {/* <div className="about__container__paragraph">{text}</div> */}
                    <img id="aboutImg" src={image} alt="Images descriptive du texte" />
                  </>
                ) : (
                  <>
                    <img id="aboutImg" src={image} alt="Images descriptive du texte" />
                    <div className="about__container__test__title">
                      <h4>Descriptif de la marque</h4>
                    </div>
                    {/* <div className="about__container__paragraph">{text}</div> */}
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
