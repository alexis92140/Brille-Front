import Button from '@mui/material/Button';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// ! ----- USER CONTEXT -----
import CurrentUserContext from '../../Context/CurrentUserContext';

// ----------------------------------------------------------------

const LeftSide = () => {
  const { firstname } = useContext(CurrentUserContext);

  return (
    <div className="leftSide">
      <div className="leftSide__wrapper">
        {/* ----- User greetings ----- */}
        {firstname ? (
          <p className="leftSide__wrapper__title">
            Bonjour {''} {firstname} ,
          </p>
        ) : (
          <div className="leftSide__wrapper__button">
            <Link to="/seconnecter">
              <div className="btn btn-one">
                <p>SE CONNECTER</p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSide;
