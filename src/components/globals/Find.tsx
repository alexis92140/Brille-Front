// ----- MUI components -----
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';

const Find = () => {
  return (
    <div className="searchContainer">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        className="searchContainer__content">
        <TextField id="standard-basic" label="Rechercher" variant="standard" />
      </Box>
    </div>
  );
};

export default Find;
