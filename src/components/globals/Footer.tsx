import '../../sass/globals/_footer.scss';

import React from 'react';

import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <div className="container_bas">
      <Newsletter />

      <footer>
        <div className="container_footer">
          {/* <ul className="container_footer_left">
            <li>
              <a href="#">Nous contacter</a>
            </li>
            <li>
              <a href="#">Mentions légales</a>
            </li>
            <li>
              <a href="#">Conditions générales de ventes </a>
            </li>
          </ul>
          <ul className="container_footer_center">
            <li>
              <a href="#">Retours et échanges</a>
            </li>
            <li>
              <a href="#">Informations de livraisons</a>
            </li>
          </ul>
          <ul className="container_footer_right">
            <li>
              <a href="#">Nous suivres</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
