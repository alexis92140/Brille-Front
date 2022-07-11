// ----- MUI Components -----
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// ! ----- Props typing -----
interface IProps {
  firstname: string;
  setFirstname: (active: string) => void;
  lastname: string;
  setLastname: (active: string) => void;
  email: string;
  setEmail: (active: string) => void;
  handleFirstname: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLastname: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// ----------------------------------------------------------------

const LeftSide: FC<IProps> = ({
  firstname,
  lastname,
  email,
  handleFirstname,
  handleLastname,
  handleEmail,
}): JSX.Element => {
  return (
    <div className="leftSide">
      <div className="leftSide__wrapper">
        {/* ----- Title ----- */}
        <p className="leftSide__wrapper__title">Informations Personnelles</p>

        {/* ----- Form ----- */}
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '35ch' },
          }}
          noValidate
          autoComplete="off">
          <TextField
            id="standard-basic"
            label="Prénom"
            variant="standard"
            value={firstname}
            onChange={handleFirstname}
          />
          <TextField
            id="standard-basic"
            label="Nom"
            variant="standard"
            value={lastname}
            onChange={handleLastname}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            value={email}
            onChange={handleEmail}
          />
        </Box>
        <div className="leftSide__wrapper__textContainer">
          <p className="leftSide__wrapper__textContainer__left">
            Continuer en tant qu&apos;invité
          </p>
          <Link to="/compte">
            <p className="leftSide__wrapper__textContainer__right">
              <span> Me connecter</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
