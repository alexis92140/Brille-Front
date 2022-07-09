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
          <ul>
            <li>
              <a target="_blank" href="https://www.google.fr/" rel="noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.google.fr/" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.google.fr/" rel="noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
