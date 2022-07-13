import React from 'react';

import Newsletter from './Newsletter';

// ----------------------------------------------------------------

const Footer = () => {
  return (
    <div>
      <Newsletter />
      <footer>
        <div className="container__footer">
          <ul>
            <li>
              <a target="_blank" href="https://www.google.fr/" rel="noreferrer">
                Nous contacter
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.google.fr/" rel="noreferrer">
                Mentions légales
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.google.fr/" rel="noreferrer">
                Conditions générales de ventes{' '}
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a target="_blank" href="https://www.google.fr/" rel="noreferrer">
                Retours et échanges
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.google.fr/" rel="noreferrer">
                Informations de livraisons
              </a>
            </li>
          </ul>
          <ul className="reseaux">
            <li>
              <a
                className="twitter"
                target="_blank"
                href="https://www.google.fr/"
                rel="noreferrer">
                Twitter
              </a>
              <img
                className="logoTwitter"
                alt="twitter"
                src="../../../public/assets/images/twitter.svg"
              />
            </li>
            <li>
              <a
                className="instagram"
                target="_blank"
                href="https://www.google.fr/"
                rel="noreferrer">
                Instagram
              </a>
              <img
                className="logoInstagram"
                alt="instagram"
                src="../../../public/assets/images/instagram.svg"
              />
            </li>
            <li>
              <a
                className="facebook"
                target="_blank"
                href="https://www.google.fr/"
                rel="noreferrer">
                Facebook
              </a>
              <img
                className="logoFacebook"
                alt="Facebook"
                src="../../../public/assets/images/facebook.svg"
              />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
