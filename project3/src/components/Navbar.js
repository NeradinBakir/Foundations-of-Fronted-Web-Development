// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles'; // Dodao ovaj import

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#EEE8AA',
  },
  navLinks: {
    marginLeft: theme.spacing(2),
    display: 'flex',
  },
  navButton: {
    marginLeft: theme.spacing(3),
    color: '#fff',
  },
  title: {
    flexGrow: 1,
    color: '#fff',
    textDecoration: 'none',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} component={Link} to="/">
          My Portfolio
        </Typography>
        <div className={classes.navLinks}>
          <Button component={Link} to="/" className={classes.navButton}>
            Home
          </Button>
          <Button component={Link} to="/about" className={classes.navButton}>
            About
          </Button>
          <Button component={Link} to="/contact" className={classes.navButton}>
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
