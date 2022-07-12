import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';

import { storage } from '../../utils/firebase';

// ----------------------------------------------------------------

const UserProfile = () => {
  // >> ---------STATES

  // ---- to store the avatar image
  const [image, setImage] = useState<any>();
  //
  // ---- to store the url of the image
  const [url, setUrl] = useState<string>('');

  // ---- for the firstName ----
  const [firstName, setFirstName] = useState<string>('');

  // ---- for the lastName ----
  const [lastName, setLastName] = useState<string>('');

  // ---- for the email ----
  const [email, setEmail] = useState<string>('');

  // ---- for the password ----
  const [password, setPassword] = useState<string>('');

  // ---- for the phoneNumber ----
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  // ---- for the addressLine1 ----
  const [address1, setAddress1] = useState<string>('');

  // ---- for the addressLine2 ----
  const [address2, setAddress2] = useState<string>('');

  // ---- for the zipCode ----
  const [zipCode, setZipCode] = useState<string>('');

  // ---- for the City----
  const [city, setCity] = useState<string>('');

  // >> ---------FUNCTIONS

  // ---- to handle the image changement
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    let files = e.target.files[0];
    console.log(files);
    files && setImage(files);
  };

  // ---- to handle the image submit
  const handleSubmit = () => {
    const imageRef = ref(storage, 'image');
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef).then((url) => {
          setUrl(url);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // ---- to update firstName change  ------
  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  // ---- to update lastName change  ------
  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  // ---- to update PhoneNumber change  ------
  // const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPhoneNumber(e.target.value);
  // };

  // ---- to update Email change  ------
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // ---- to uptade Password change  ------
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // ---- to uptade Password change  ------
  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmedPassword(e.target.value);
  };

  // ---- to uptade AddressLine1 change  ------
  const handleAddress1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress1(e.target.value);
  };

  // ---- to uptade AddressLine2 change  ------
  const handleAddress2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress2(e.target.value);
  };
  // ---- to uptade zipCode change  ------
  const handleZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value);
  };
  // ---- to uptade AddressLine2 change  ------
  const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  // ---------generates the color based on the name of the person
  // function stringToColor(string: string) {
  //   let hash = 0;
  //   let i : number;

  //   /* eslint-disable no-bitwise */
  //   for (i = 0; i < string.length; i += 1) {
  //     hash = string.charCodeAt(i) + ((hash << 5) - hash);
  //   }

  //   let color = '#';

  //   for (i = 0; i < 3; i += 1) {
  //     const value = (hash >> (i * 8)) & 0xff;
  //     color += `00${value.toString(16)}`.slice(-2);
  //   }

  //   /* eslint-enable no-bitwise */

  //   return color;
  // }
  // function stringAvatar(name: string) {
  //   return {
  //     sx: {
  //       bgcolor: stringToColor(name),
  //     },
  //     children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  //   };
  // }
  // -------------end---------------

  return (
    <div className="userProfile">
      <div className="userProfile__avatarContainer">
        <Avatar src={url} sx={{ width: 125, height: 125 }}>
          <p className="userProfile__avatarContainer__initials">JB</p>
        </Avatar>
        <p className="userProfile__avatarContainer__name">Jessica BRILLE</p>
        {image && (
          <Button
            variant="contained"
            component="label"
            color="secondary"
            size="small"
            onClick={handleSubmit}>
            Changer ma photo
            <input type="file" hidden onChange={handleImageChange} />
          </Button>
        )}

        {!image && (
          <Button
            variant="contained"
            component="label"
            color="secondary"
            size="small"
            onClick={handleSubmit}>
            Choisir ma photo
            <input type="file" hidden onChange={handleImageChange} />
          </Button>
        )}
      </div>
      <div className="userProfile__settings">
        <h4>Paramètres du compte</h4>

        <form>
          <div className="userProfile__settings__container">
            <div className="userProfile__settings__container__leftSide">
              {/* ----- FIRST NAME ----- */}
              <div className="connectModal__">
                <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
                  <TextField
                    id="outlined-basic"
                    value={firstName}
                    onChange={handleFirstName}
                    label="Prénom"
                    type="text"
                    autoComplete="current-text"
                    variant="outlined"
                    size="small"
                    required
                  />
                </FormControl>
              </div>

              {/* ----- LAST NAME ----- */}
              <div>
                <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
                  <TextField
                    id="outlined-basic"
                    value={lastName}
                    onChange={handleLastName}
                    label="Nom"
                    type="text"
                    autoComplete="current-text"
                    variant="outlined"
                    size="small"
                    required
                  />
                </FormControl>

                {/* ----- EMAIL INPUT ----- */}
                <div>
                  <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
                    <TextField
                      id="outlined-basic"
                      value={email}
                      onChange={handleEmail}
                      label="Email"
                      type="email"
                      autoComplete="current-password"
                      variant="outlined"
                      size="small"
                      required
                    />
                  </FormControl>
                </div>
              </div>
            </div>

            <div className="userProfile__settings__container__rightSide">
              {/* ----- PASSWORD INPUT ----- */}
              <div className="">
                <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
                  <TextField
                    id="standard-password-input"
                    value={password}
                    label="Mot de passe"
                    type="password"
                    onChange={handlePassword}
                    autoComplete="current-password"
                    variant="outlined"
                    size="small"
                    required
                  />
                </FormControl>
              </div>
              {/* ----- PASSWORD CONFIRMATION INPUT ----- */}
              <div className="">
                <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
                  <TextField
                    id="standard-password-input"
                    // value={confirmedPassword}
                    label="Confirmation"
                    type="password"
                    onChange={handleConfirmPassword}
                    autoComplete="current-password"
                    variant="outlined"
                    size="small"
                    required
                  />
                </FormControl>
              </div>
              {/* ----- ADDRESSLin1 INPUT ----- */}
              <div className="">
                <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
                  <TextField
                    id="outlined-basic"
                    value={address1}
                    label="Adresse 1"
                    type="text"
                    onChange={handleAddress1}
                    autoComplete="current-password"
                    variant="outlined"
                    size="small"
                    required
                  />
                </FormControl>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
