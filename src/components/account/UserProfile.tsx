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
      </div>
    </div>
  );
};

export default UserProfile;
