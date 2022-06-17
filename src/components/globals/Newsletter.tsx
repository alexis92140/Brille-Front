import '../../sass/globals/_newsletter.scss';

import React from 'react';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>
        <span>Newsletter</span>
      </h2>
      <form action="?">
        <input type="email" placeholder="entrer votre Email" />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default Newsletter;
