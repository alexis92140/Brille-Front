import React from 'react';
import { Link } from 'react-router-dom';

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
              <Link to="/contact">Nous contacter</Link>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.brillehandbags.com/mentions-l%C3%A9gales"
                rel="noreferrer">
                Mentions légales
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.brillehandbags.com/conditions-d-utilisation"
                rel="noreferrer">
                Conditions générales de ventes
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
              <a target="_blank" href="https://www.laposte.fr/" rel="noreferrer">
                Informations de livraisons
              </a>
            </li>
          </ul>
          <ul className="reseaux">
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/brille_handbags/"
                rel="noreferrer">
                <img
                  className="logoInstagram"
                  alt="instagram"
                  src="https://firebasestorage.googleapis.com/v0/b/brille-handbags.appspot.com/o/instagram.svg?alt=media&token=6a56d1da-e730-4fa7-b70a-cacbd3435d35"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://fr-fr.facebook.com/" rel="noreferrer">
                <img
                  className="logoFacebook"
                  alt="Facebook"
                  src="https://firebasestorage.googleapis.com/v0/b/brille-handbags.appspot.com/o/facebook.svg?alt=media&token=9ccbdc13-980a-490e-b263-717f6e2d1157"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
