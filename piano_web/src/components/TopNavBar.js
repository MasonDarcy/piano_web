import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/HelpOutline'; 
import PricingIcon from '@mui/icons-material/AttachMoney';
import PhoneIcon from '@mui/icons-material/Phone'; 
import useMediaQuery from '@mui/material/useMediaQuery';

const TopNavBar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <AppBar position="static" style={{ backgroundColor: '#212121' }}>
      <Toolbar style={styles.toolbar}>
        {isMobile ? (
          <>
            <IconButton color="inherit" component={Link} to="/" aria-label="Home"><HomeIcon /></IconButton>
            <IconButton color="inherit" component={Link} to="/basics" aria-label="Why Tune?"><HelpIcon /></IconButton>
            <IconButton color="inherit" component={Link} to="/pricing" aria-label="Pricing"><PricingIcon /></IconButton>
            <IconButton color="inherit" component={Link} to="/contact" aria-label="Contact"><PhoneIcon /></IconButton>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/" style={styles.navButton}>Home</Button>
            <Button color="inherit" component={Link} to="/basics" style={styles.navButton} aria-label="Why Tune?">Tips</Button>
            <Button color="inherit" component={Link} to="/pricing" style={styles.navButton} aria-label="Pricing">Pricing</Button>
            <Button color="inherit" component={Link} to="/contact" style={styles.navButton} aria-label="Contact">Contact</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  toolbar: {
    justifyContent: 'space-around',
  },
  navButton: {
    color: '#FFF',
    margin: '0 10px',
  }
};

export default TopNavBar;