import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import INewsletter from '../../interfaces/INewsletter';

const Newsletter = () => {
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>(
    `Votre email n'as pas été pris en compte !`,
  );
  const notify = () => toast('Vous etes bien enregistré à notre newsletter');

  const postNewsletter = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await axios.post<INewsletter>(
        'https://brille-handbags.herokuapp.com/api/newsletters',
        { email },
      );
      setEmail('');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // pour gérer les erreurs de type axios
        if (err.response?.status === 401) {
          setErrorMessage("Email n'a pas été crée");
        }
      } else {
        // pour gérer les erreurs non axios
        if (err instanceof Error) setErrorMessage(errorMessage);
      }
    }
  };

  return (
    <div className="newsletter">
      <h2>
        <span>Newsletter</span>
      </h2>
      <form onSubmit={postNewsletter}>
        <input
          type="email"
          placeholder="entrez votre Email"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
          value={email}
        />
        <button onClick={notify} type="submit">
          Valider
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Newsletter;
