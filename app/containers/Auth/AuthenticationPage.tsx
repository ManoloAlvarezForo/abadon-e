/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Typography, TextField, Button, Grid } from '@material-ui/core';
import { APP_NAME_FULL } from '../../constants/application';
// Components.
// import Login from '../../components/Authentication/Login';

const AuthenticationPage = () => {
  const [email] = useState('');
  const [password] = useState('');
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <div>
        <div>Logo</div>
        <Typography component="h2" variant="h2" gutterBottom>
          {APP_NAME_FULL}
        </Typography>
      </div>
      <div style={{ display: 'flex', maxWidth: '420px' }}>
        <form noValidate autoComplete="off">
          <TextField
            style={{ margin: '10px 0', width: '100%' }}
            value={email}
            label="Email"
            variant="outlined"
          />
          <TextField
            style={{
              margin: '10px 0',
              width: '100%',
              borderRadius: '5px'
            }}
            value={password}
            label="Password"
            type="password"
            variant="outlined"
          />
          <Button variant="contained" color="primary" disableElevation>
            Ingresar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthenticationPage;
