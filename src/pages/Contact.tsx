import React from 'react';

import GoToTop from '../components/globals/GoToTop';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__entete">
        <img
          id="plage"
          src="../../../assets/images/plage_bleu_marion.png"
          alt="plage bleu"
        />
      </div>
      <div className="contact__form">
        <h1> Nous contacter </h1>
        <form>
          <input type="text" name="firstName" placeholder="Entrer votre nom..."></input>
          <input type="text" name="lastName" placeholder="Entrer votre Prénom..."></input>
          <input
            type="email"
            name="email"
            placeholder="Entrer votre adresse Email"></input>
          <textarea name="message" placeholder="Entrer votre message..."></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
      <GoToTop />
    </div>
  );
};

export default Contact;
