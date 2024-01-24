// NavBar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const handleSignUpClick = () => {
    window.open('https://form.jotform.com/240235907522351', '_blank');
  };
  const handleAboutClick = () => {
    window.open('https://bookepedia.carrd.co/', '_blank');
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgb(102, 97, 82)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bookepedia
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" onClick={handleAboutClick}>
          About
        </Button>
        <Button color="inherit" onClick={handleSignUpClick}>
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;