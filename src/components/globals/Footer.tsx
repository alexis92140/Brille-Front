import React from 'react';

import Newsletter from './Newsletter';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';

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
