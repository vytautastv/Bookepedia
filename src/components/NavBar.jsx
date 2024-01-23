import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgb(102, 97, 82)'}} >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bookepedia
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/books/">
          About
        </Button>
        <Button color="inherit" component={Link} to="/books/">
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
